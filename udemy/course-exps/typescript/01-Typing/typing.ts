let str;
str = 4; // *** ok
str = '4'; // *** ok
str = []; // *** ok

let str2: string = 'aaa';
str2 = '4'; // *** ok
// str2 = 4; // *** error


let anArray: Array<string>; // This is a generic type => May only hold 'strings' in this case
anArray = ['1', '2'];


let tube: [string, number];
tube = ["age", 20]; // *** ok
// tube = [20, "age"]; // *** error

function unusable(): void {
  // return 'aaa' // *** error
};

// *** type assertion
interface Employee {
  name: string;
  code: number;
}

// let employee = {} as Employee; // *** type assertion ver1
let employee = <Employee>{}; // *** type assertion ver2
employee.name = "John"; //Compiler Error: Property 'name' does not exist on type '{}'
employee.code = 123; //Compiler Error: Property 'code' does not exist on type '{}'

var a: string | number; // *** string or number is ok
a = 1;
a = '1';
