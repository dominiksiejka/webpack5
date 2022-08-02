import { add, subtract, multiply } from "./utils/math"

const addResult = add(12, 5)
const subtractResult = add(3, 5)
const multiplyResult = add(120, 5)

console.log(addResult, subtractResult, multiplyResult)

const obj = {
  name: "sample name",
  age: 22,
}

const userDetails = {
  ...obj,
  favouriveColor: "red",
}
console.log(userDetails)
