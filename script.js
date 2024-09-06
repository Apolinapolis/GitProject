const fibo = (n) => {
  if (n < 2) {
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

console.log(fibo(6));

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

/** {
   * 2021-5: ["Mon May 03 2021"],
   * 2017-7: ["Sat Jul 22 2017" , "Tue Jul 11 2017" ,"Mon Jul 03 2017"]
  }*/

function humanView(dates) {
  const result = {};

  dates.forEach((el) => {
    const date = new Date(el);
    const key = `${date.getFullYear()} - ${date.getMonth() + 1}`;
    const value = date.toDateString();
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(value);
  });
  return result;
}

console.log(humanView(dates));

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

const recur = (tree) => {
  let sum = 0;
  tree.forEach((node) => {
    sum += node.v;
    if (node.c) {
      sum += recur(node.c);
    } else {
      return node.v;
    }
  });
  return sum;
};

console.log(recur(tree));

const recurTree = (tree) => {
  let sum = 0;
  tree.forEach((node) => {
    sum += node.v;
    if (node.c) {
      sum += recurTree(node.c);
    } else {
      return node.v;
    }
  });
  return sum;
};

function nodeTree(el) {
  let sum = 0;
  el.forEach((node) => {
    sum += node.v;
    if (node.c) {
      sum += nodeTree(node.c);
    } else return node.v;
  });
  return sum;
}

function factorial(n) {
  let result = 1;
  while (n != 1) {
    result *= n;
    n--;
  }
  return result;
}

function fuck(n) {
  let result = 1;
  while (n != 1) {
    result *= n;
    n - 1;
  }
  return result;
}

const factorial = (x) => {
  let result = 1;
  while (x != 1) {
    result *= x;
    x - 1;
  }
  return result;
};

function deepClone(obj) {
  // копирование рекурсией с хабра
  const cloneObj = {};
  for (const i in obj) {
    if (obj[i] instanceof Object) {
      cloneObj[i] = deepClone(obj[i]);
    }
    cloneObj[i] = obj[i];
  }
  return cloneObj;
}

const myClone = (ob) => {
  const clone = {};
  for (const i in ob) {
    if (typeof ob[i] === "object") {
      clone[i] = myClone(ob[i]);
    } else clone[i] = ob[i];
  }
  return clone
};
