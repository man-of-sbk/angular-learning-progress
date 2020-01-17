var str;
str = 4; // *** ok
str = '4'; // *** ok
str = []; // *** ok
var str2 = 'aaa';
str2 = '4'; // *** ok
// str2 = 4; // *** error
var anArray; // This is a generic type => May only hold 'strings' in this case
anArray = ['1', '2'];
var tube;
tube = ["age", 20]; // *** ok
// tube = [20, "age"]; // *** error
function unusable() {
    // return 'aaa' // *** error
}
;
// let employee = {} as Employee; // *** type assertion ver1
var employee = {}; // *** type assertion ver2
employee.name = "John"; //Compiler Error: Property 'name' does not exist on type '{}'
employee.code = 123; //Compiler Error: Property 'code' does not exist on type '{}'
var a; // *** string or number is ok
a = 1;
a = '1';
var str3 = 'aaa';
str3 = '2';
var obj3 = {};
obj3.name = 3;
