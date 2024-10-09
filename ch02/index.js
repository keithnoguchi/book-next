const primitiveType = 1;
try {
	primitiveType = 2;
} catch (err) {
	console.log(err);
}
const nonPrimitiveDataType = [];
nonPrimitiveDataType.push(1);
console.log(nonPrimitiveDataType);
