export {};

type IO<T> = SyncOp<T> | AsyncOp<T> | Chain<T>;

// Interpreter for fiber
class Fiber<T> {
  private hasExited = false;
  private currentOp: IO<any>;
  private opCount = 0;
  private onDone!: (a: T) => void;
  private continuationStack: Array<any> = [];

  constructor(startingOp: IO<T>) {
    this.currentOp = startingOp;
  }

  public run(): Promise<T> {
    const { promise, resolve } = Promise.withResolvers<T>();
    this.onDone = resolve;
    this.run_();
    return promise;
  }
  private run_(): void {
    while (!this.shouldYield() && !this.hasExited) {
      switch (this.currentOp._tag) {
        case "SyncOp": {
          const sycnOp = this.currentOp;
          const result = sycnOp.op();
          this.advance(result);
          break;
        }
        case "AsyncOp": {
          const asyncOp = this.currentOp;
          asyncOp.op().then((result) => {
            this.advance(result);
            this.run_();
          });
          return; // exit the loop to wait for the promise to resolve
        }
        case "Chain": {
          const chainOp = this.currentOp;
          this.currentOp = chainOp.io;
          this.continuationStack.push(chainOp);
          break;
        }
      }
    }

    // schedule to pickback later
    if (!this.hasExited) {
      setImmediate(() => this.run_());
    }
  }

  private shouldYield(): boolean {
    if (this.opCount > 10) {
      this.opCount = 0;
      return true;
    } else {
      this.opCount++;
      return false;
    }
  }

  private advance(value: any): void {
    const continuation = this.continuationStack.pop();
    if (continuation instanceof Chain) {
      this.currentOp = continuation.f(value); // Proceed with the next operation in the chain
    } else if (continuation) {
      throw new Error(`Unexpected continuation type: ${typeof continuation}`);
    } else {
      if (!this.hasExited) {
        this.hasExited = true;
        this.onDone(value); // Resolve the final value
      }
    }
  }

  // private advance(value: any): void {
  //   const continuation = this.continuationStack.pop();
  //   if (continuation) {
  //     if (continuation instanceof Chain) {
  //       this.currentOp = continuation.f(value); // pull the function out of the chain and apply it to the value
  //     }
  //   } else {
  //     if (!this.hasExited) {
  //       this.hasExited = true;
  //       this.onDone(value);
  //     }
  //   }
  //   if (!this.hasExited) {
  //     this.hasExited = true;
  //     this.onDone(value);
  //   }
  // }
}

class SyncOp<T> {
  readonly _tag = "SyncOp";
  constructor(public readonly op: () => T) {}
}

function sync<T>(op: () => T): IO<T> {
  return new SyncOp(op);
}

class AsyncOp<T> {
  readonly _tag = "AsyncOp";
  constructor(public readonly op: () => Promise<T>) {}
}

function async<T>(op: () => Promise<T>): IO<T> {
  return new AsyncOp(op);
}

class Chain<T> {
  readonly _tag = "Chain";
  constructor(
    public readonly io: IO<unknown>,
    public readonly f: (a: unknown) => IO<unknown> // types are unknown because we don't know what the type of the previous IO is and it can be more than one type
  ) {}
}
function chain<A, B>(io: IO<A>, f: (a: A) => IO<B>): IO<B> {
  return new Chain(io, f as any);
}

const realProgram = chain(
  async(() => fetch(`https://jsonplaceholder.typicode.com/todos/1`)), // Fetch data
  (res) =>
    chain(
      async(() => res.json()),
      (json) =>
        sync(() => {
          console.log(json);
          return json;
        })
    )
);

const fiber = new Fiber(realProgram);
fiber.run();
