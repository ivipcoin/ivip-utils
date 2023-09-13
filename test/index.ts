import { JSONStringify, mimeTypeFromBuffer } from "../src";

const obj = {
	name: "John",
	age: 30,
	city: "New York",
};

const jsonString = JSONStringify(obj);

console.log(jsonString);
