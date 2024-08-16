for (let i = []; i.length < 3; i.push(1)) {
  setTimeout(
    (function (copy) {
      return function () {
        console.log(copy);
      };
    })([...i]),
    i.length * 1000
  );
}

const tree = [
  {
    v: 5,
    c: [
      {
        v: 3,
        c: [
          {
            v: 22,
          },
        ],
      },
    ],
  },
];

const recursiveTree = (tree) => {
  let sum = 0;
  tree.forEach((node) => {
    sum += node.v;
    if (node.c) {
      sum += recursiveTree(node.c);
    }
  });
  return sum;
};

console.log(recursiveTree(tree));

const fibo = (n) => {
  if (n <= 1) {
    return n;
  }
  return fibo(n - 1) + fibo(n - 2);
};

console.log(fibo(12));

const foboC = (n) => {
  if (n <= 1) {
    return n;
  }

  let prev = 0;
  let next = 1;

  for (let i = 0; i < n; i++) {
    let temp = next;
    next += prev;
    prev = temp;
  }
  return prev;
};

console.log(foboC(12));

const dates = [
  "2021-05-03T12:00:00.0Z",
  "2012-05-03T11:00:00.0Z",
  "2010-01-03T18:00:00.0Z",
  "2015-05-03T19:00:00.0Z",
  "2017-07-21T22:00:00.0Z",
  "2017-05-03T12:00:00.0Z",
  "2017-07-03T08:30:00.0Z",
  "2017-07-10T23:00:00.0Z",
  "2010-01-03T14:20:00.0Z",
];

const result = {};

function humanDates(dates) {
  dates.forEach((el) => {
    const date = new Date(el);
    const key = `${date.getFullYear()} - ${date.getMonth()}`;
    const value = date.toDateString();

    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(value);
  });
  return result;
}

console.log(humanDates(dates));