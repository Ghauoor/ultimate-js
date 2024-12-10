const something = (outside) => {
  const val = Math.random();

  const inside = () => {
    console.log("Value is -->", val);
    console.log("Outside is -->", outside);
  };

  return inside;
};

const first = something("First");
const second = something("Second");
first();
second();
