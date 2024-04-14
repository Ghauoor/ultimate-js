var trendRate = -0;
console.log(trendRate > 0);
console.log(trendRate < 0);

console.log(Math.sign(trendRate));

function formatedTrends(trendRate) {
  var direction = trendRate < 0 || Object.is(trendRate, -0) ? "🔽" : "🔼";
  return `Trend is going ${direction} with ${Math.abs(trendRate)} value`;
}
console.log(formatedTrends(-0));
