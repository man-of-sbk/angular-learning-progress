# 1. getting started

## 1. course introduction
nothing.

## 2. what is angular
a js framework, allowing us create SPAs.

## 3. angular vs angular 2 vs angular 8
**1**. **AngularJs** is `angular 1`, working ulterly diffirently from **Angular**.
**2**. **Angular**, `angular 2`, rewritten completely from **AngularJs** with new concepts and working flow. Thus, there is no relationship between **AngularJs** & **Angular**.
**3**. **Angular 3** is skipped by an internal reason.
**4**. `...`
**5**. **Angular 8**.

Angular team is going to update a new version of **Angular** every 6 months.

## 4. project setup & first app
### angular cli
a recommended & the best way to initialize an angular app. Check it [here](https://cli.angular.io/)

## 5. editing the first app
**Angular** allows us to mix static HTML eles with dynamic things we want to add to the HTML eles.

**data binding**: how an Angular component display the value of it's property to it's static HTML eles.

## 6. the course structure
Nothing.

## 7. how to get the most out of this course
Nothing.

## 8. what is typescript
Offers more features than vanilla Js such as: type checking, classes, interfaces, .... However, since it can not run directly in the browsers, it need compiling before to vanilla Js.
[continue after `2. bonus typescript introduction`]

# 2. bonus typescript introduction

## 1. introduction
Install typescript: `npm install typescript -g` in order to compile typescript files.

run `$ tsc ts-file-name` so as to compile a typescript file to vanilla js file.

Take a **note** that the compliation will finish it's job even though there are errors, thown by typescript.

## 2. using types
we can define a specific `type` for a variable which will throw errors if the variable is assigned to a value whose type is diffirent from the defined type.

### normal types

```ts
let str: string;

str = 4 // *** error
str = '4' // *** ok
```

a variable without being assigned to any specific type will have type of `any`, meaning that it could hold any data type.

```ts
let str; // *** this is equal to: let str: any;

str = 4 // *** ok
str = '4' // *** ok
```

below is how we set default value to a variable
```ts
let str: string = 'aaa';
```

other types:
```ts
let bool: boolean;
let num: number;
let arrOfStr: Array<string>; // *** an array of strings
let nuLL: null;

// *** void indicates that a function will not return any thing
function  voidFunc():  void {
	return  'aaa'; // *** error
};
```

### tube type

`tube` is a type that help us define an Array with a fixed number of values whose value must match it's type

```ts
let tube: [string, number];

tube = ["age", 20]; // *** ok
tube = [20, "age"]; // *** error
```

## 3. classes
```ts
class Car {
	engineName: string;
	gears: number;
	private speed: number;

	constructor(speed:  number) {
		this.speed  =  speed  ||  0;
	}

	accelerate():  void {
		this.speed++;
	}

	throttle():  void {
		this.speed--;
	}

	getSpeed():  void {
		console.log(this.speed);
	}

	static  numberOfWheels():  number {
		return  4;
	}
}

let  car  =  new  Car(5);
car.accelerate();
car.getSpeed();

console.log(Car.numberOfWheels());
```

## 4. interfaces
an interface is like a constract, anything implements a constract (interface) will need to have everything the constract (interface) requires.

```ts
interface
```
[continue here]