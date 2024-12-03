const numbers = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;

function isAscending(arr) {
  return arr.every((val, i, a) => {
    if (i === a.length - 1) {
      // Last element, no comparison needed
      return true;
    }
    return (
      a[i + 1] <= val &&
      Math.abs(val - a[i + 1]) <= 3 &&
      Math.abs(val - a[i + 1]) > 0
    );
  });
}

function isDescending(arr) {
  return arr.every((val, i, a) => {
    if (i === a.length - 1) {
      // Last element, no comparison needed
      return true;
    }
    return (
      a[i + 1] >= val &&
      Math.abs(val - a[i + 1]) <= 3 &&
      Math.abs(val - a[i + 1]) > 0
    );
  });
}

function moreThanOneFailed(arr) {
  return arr.every((val, i, a) => {
    if (i === a.length - 1 || i === 0) {
      return true;
    }
    return (
      ((a[i + 1] <= val || a[i + 1] >= val) &&
        Math.abs(val - a[i + 1]) <= 3 &&
        Math.abs(val - a[i + 1]) > 0) ||
      (Math.abs(a[i - 1] - a[i + 1]) <= 3 && Math.abs(a[i - 1] - a[i + 1]) > 0)
    );
  });
}

function main() {
  const split = numbers
    .split("\n")
    .map((c) => c.split(" ").flatMap((d) => parseInt(d)));
  console.log("Split: ", split);
  const countUpOrDown = split.map((c) => isAscending(c) || isDescending(c));
  console.log("CountUpOrDown: ", countUpOrDown);
  const sum = countUpOrDown.reduce((k, a) => k + (a != false), 0);
  console.log("Sum: ", sum);
  const badLevel = split.map((c) => moreThanOneFailed(c));
  console.log("Bad Level: ", badLevel);
  const sumBadLevel = badLevel.reduce((k, a) => k + (a != false), 0);
  console.log("SumBadLevel: ", sumBadLevel);
}

main();
