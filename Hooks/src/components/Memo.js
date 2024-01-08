//memoization is an optimation technique that can be used to reduce the time consuming calculation by saving previous inputs to cache and returning he results from it

let sum = 0;
const calc = (n) => {
  for (let i of n) {
    sum += i;
  }
  return sum;
};
// const memoize=(fun)={
//   let cache={};
//   return function (...args)  {
//     let n=args[0];
//     if (n in cache) {
//       console.log("cache");
//       return cache[n]
//     }else{

//       console.log("calculate")
//       let result=fun(n);

//     }
//     const efficient=

//   }
// }

console.time();
console.log(calc(5));
console.timeEnd();
