const object = { fruit: "apple", color: "green" };

let { fruit, color } = { ...object };

console.log(`fruit: ${fruit}, color: ${color}`);

color = "red";

console.log(`object.color: ${object.color}, color: ${color}`);

const originalArray = [1, 2, 3];
const clonedArray = [...originalArray];

clonedArray[0] = "one";
clonedArray[1] = "two";
clonedArray[2] = "three";

console.log(`originalArray: ${originalArray}, clonedArray: ${clonedArray}`);
