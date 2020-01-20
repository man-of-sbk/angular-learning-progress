# `1. GETTING STARTED`

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

## 9. A basic project setup using bootstrap for styling

we can add global css files to an Angular project created by Angular Cli by heading toward `angular.json` file & find `"styles"` property staying inside `"build"` object. Finally, add css file path to the property. Take a note that we have to define a full path to  `node_modules` folder if we want to add css files from it.

# `32. BONUS TYPESCRIPT INTRODUCTION`

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
str =  '4' // *** ok
```

below is how we set default value to a variable.

```ts
let str: string  =  'aaa';
```

the type of the first value we assign to a variable in typescript will be the type of the variable.

```ts
let str3 = 'aaa'; // *** str3 has type of string as 'aaa' is a string
str3 = 2; // *** error

let obj3 = {}; // *** obj3 has type of {}
obj3.name = 3 // *** error as type {} doesn't have name property
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
tube = [20,  "age"]; // *** error
```

## 3. classes

`private` methods/properties can not be accessed from outside.

```ts
class Car2 {
	private speed: number = 3;
	
	private numberOfWheels(): number {
		return  4;
	}
}

let car2 = new Car2();
car2.speed; // *** error
car2.numberOfWheels(); // *** error
```

`static` methods/properties can only be accessed by the class containing them, the class' instances can not.

```ts
class Car2 {
	static speed: number = 3;
	
	static numberOfWheels(): number {
		return 4;
	}
}

let car2 = new Car2();
car2.speed; // *** error
car2.numberOfWheels(); // *** error
```

## 4. interfaces
is used to create an object type.

an interface is like a constract, anything implements a constract (interface) must meet requirements the constract (interface) requires.

```ts
interface User {
	username: string;
	password: string;
	confirmPassword?: string; // *** optional property
}

let  user:  User;

user  = {
	username: 'max',
	password: 'supersecret',
	a: 'aaa' // *** error as a is not a property of User interface
};

user  = { // *** ok
	username: 'max',
	password: 'supersecret'
};
```

## 5. Generics
```ts
function getArray<T>(items : T[]) : T[] {
    return new Array<T>().concat(items);
}
```
Generics (`<T>`) is used to preserving the type information user pass to the `getArray` function, this type information can be levaraged in any place inside the function.

Take a note that `T` only refers to a type, it could not be used as a value.

# `2. THE BASICS`

## 1. module introduction

nothings.

## 2. how an angular app gets loaded and started

nothings.

## 3. components are important!

nothings.

## 4. create a new component

to create a component, we use the `component decorator`.

`decorators` are the one telling Angular runtime to treat a class as a special part of an Angular app such as a `component` or a `service` (read later), .... not a regular class.

the `component decorator` receive an object with 2 main properties:

 1. **selector**: specify the name of the component (when we render it).
 
 3. **templateUrl**: specify the path to the template (`html`) file of the component

```ts
import { Component } from '@angular/core';

@Component({
	selector: 'app-server',
	templateUrl: './server.component.html'
})

export  class  ServerComponent {

}
```

## 5. Understanding the Role of AppModule and Component Declaration

**appModule** is a special component which is used to bundle components, packages, .... of our app.

in order to create an **appModule** component, we need to use `NgModule decorator`, a decorator tells Angular runtime that a class is an **appModule** used to bundle diffirent parts of a project.

below are the `app.module.ts` file which is the default **appModule** of an application created by Angular cli.

```ts
@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule { }
```

1. **declarations**: is used to register components

2. **bootstrap**: is used to tell Angular which component to start with when it starts an application (the component appear in `index.html` file).

3. **imports**: is used to import diffirent packages.

4. **providers**: later

## 6. Using Custom Components

nothings

## 7. Creating Components with the CLI & Nesting Components

cli generating Angular components

```
$ ng generate component component-name

or

$ ng g c component-name
```

## 8. Working with Component Templates

nothings

## 9. Working with Component Styles

nothings

## 10. Fully Understanding the Component Selector

There are 3 types of selector we can define for a component:

1. **select-name**: template selector, which treat a component as a component.

```html
<select-name></select-name>
```

2. **[select-name]**: attribute selector, which treat a component as an attribute of DOM eles.

```html
<p select-name></p>
```

3. **.select-name**: class selector, which treat a component as a class.

```html
<p class="select-name"></p>
```

## 11. [OPTIONAL] Assignment Solution

nothings

## 12. What is Databinding

nothings

## 13. string interpolation {{ .... }}

used to print values of a component to a it's template.

```html
<h3>{{ title }}</h3>
```

## 14. Property Binding [ ... ]

let us pass a value to a property of an Angular component marked as an  `input property`.

take a note that attributes of DOM ele are also considered to be `input property` in Angular.

```html
<a [title]="name + ' details'">
	{{ name + ' details' }}
</a>
```

If we don't put the name of the property inside a pair of `[]`, Angular will treat the value we pass to the property as a string.

```html
<a title="name + 'details'"> // *** "product.name + 'details'" is treated as a string
	{{ name + ' details' }}
</a>
```

## 15. Property Binding vs String Interpolation

nothings

## 16. Event Binding ( ... )
 
 `EventEmitter` object is an `observable` (read later). `event binding` helps us subscribe a function to an `event` which is actually an instance of the `EventEmitter`. Thus, when an `event` emits, the `subscribed function` (the function we assign to an `event` using `event binding`) will be executed.

```html
<button (click)="share()">
	Share
</button>
```

## 17. Passing and Using Data with Event Binding

we can get the first argument of an event's callback by using `$event` alias. This alias will return everything an event's callback receives (not only the default argument of it).

*component's template:*
```html
<button 
	(click)="onCreateServer($event)"
>
Add Server
</button>
```

*component's class:*
```ts
onUpdateServerName(
	event: Event // *** log the 'event' to see the Object that it inherited from
) {
	this.serverName = (event.target as HTMLInputElement).value;
}
```

the `event.target` `above` is an Instance of `HTMLInputElement` & `event` is instance of `Event`. In addition, `HTMLInputElement` &  `Event` are global variable which could be access everywhere in our application. Therefore, we could utilize `HTMLInputElement` & `Event` as 2 value types.

## 18. two-way databinding

```html
<div>
	<label>name:
		<input [(ngModel)]="name"  placeholder="name" />
	</label>
</div>
```

`ngModel`  is a directive (read later) helping us do the 2-way binding technique, the  `[]`  will set the value of the  `ngModel` refering to the value of the input to `name` . the  `()`  trigger the  `ngModel`  event, which emits when users type in the input & set the value of `name` to the value of the input.

to be able to use `ngModel`, we have to import `FormsModule` from `@angular/forms` in the `app.module.ts` file.

take a note that we can not switch the position of  `[]`  &  `()`  since  `([ ... ])`  is a wrong syntax, the  `event binding`  can not bind an array.

## 19. Combining all Forms of Databinding

nothings

## 20. [OPTIONAL] Assignment Solution

nothings

## 21. Understanding Directives

a `directive` is used to change, control the behavior, appearance of the DOM.

## 22. Using ngIf to Output Data Conditionally

**structure directive** are ones created using `*` keyword.

## 23. Enhancing ngIf with an Else Condition

**local reference** (read later) is like a variable refering to a DOM ele in a template. **local reference** is declared using `#` keyword.

```html
<input type="text" #firstNameInput>
<button (click)="show(lastNameInput)">Show</button>

<!-- *** "show" function of button component -->
show(lastName: HTMLInputElement){
    console.log(lastName.value);
}
```

**ng-template** is a special component which is used like a variable containing components.

```html
<!-- if - else in template -->
<p *ngIf="serverCreated; else noServer">
  server was created, it's name is {{ serverName }}
</p>

<!-- noServer is a variable containing the 'p' component -->
<ng-template #noServer>
  <p>no server was created</p>
</ng-template>
```

## 24. Styling Elements Dynamically with ngStyle

**attribute directive** are ones used just like an attribute of an component.

**property binding for directive**: `property binding` can be utilized so as to set value of a property of a `directive` by just put the target `directive` into a pair of `[]`. Then, we will assign the `directive` to an `object` whose properties presents the ones of the `directive`.

```html
<p [ngStyle]="{'background-color': getColor()}">server component {{ getServerStatus() }}</p>

<p [ngStyle]="{backgroundColor: getColor()}">server component {{ getServerStatus() }}</p>
```

## 25. Applying CSS Classes Dynamically with ngClass

`ngClass` is used to change class of a component dynamically.

```html
<p
    [ngClass]="{online: serverStatus === 'online'}"
>
  server component
</p>
```

## 26. Outputting Lists with ngFor

`*ngFor`

```html
<!-- if we have 5 server => 5 app-server will be printed -->
<app-server *ngFor="let server of servers">
</app-server>
```

## 27. [OPTIONAL] Assignment Solution

nothings

## 28. Getting the Index when using ngFor

```html
<app-server
    *ngFor="let server of servers; let i = index"
></app-server>
```

# `3. COURSE PROJECT - THE BASIC`

## 1. Project Introduction

nothing

## 2. planning the app

nothing

## 3. Setting up the Application

nothing

## 4. Creating the Components

create a component without test file

```
$ ng g c recipes --spec false
```

create a component inside a folder

```
$ ng g c recipes/recipe-list --spec false
```

## 5. Using the Components

nothing

## 6. Adding a Navigation Bar

nothings

## 7. Creating a Recipe Model

nothing

## 8. Adding Content to the Recipes Components

create an object type using class:

```ts
export class Recipe {
    name: string;
    description: string;
    imagePath: string;

    constructor(
        name: string,
        desc: string,
        imagePath: string
    ) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
}
```

find free-copyrighted images on gg:
1. go to gg & search sth.

2. choose `tools`, under the left hand side of the search bar.

3. choose `Usage rights`.

4. choose `labeled for reuse with modification`.

every attr of a DOM ele in Angular template are `input property`.

**Property binding [ ... ]** notice:
If we pass an object, array or a value calculated by some operators, we will need to put the property inside a pair of `[]` in order to tell Angular that the value we pass to the property is not a string, calculate it.

```html
<!-- "product.name + 'details'" is not a string, calculate it -->
<a [title]="product.name + 'details'">
	{{ product.name }}
</a>
```

If we don't put a property's name to a pair of [], Angular will treat the value we pass to the property as a string.

```html
<!-- "product.name + 'details'" is treated as a string -->
<a title="product.name + 'details'">
	{{ product.name }}
</a>
```

## 9. Displaying Recipe Details

nothing

## 10. Working on the ShoppingListComponent

nothing

## 11. Creating an Ingredient Model

to create a class's property, just simply add an argument + it's type + it's `access modifiers` (this is mandatory) to a class's `constructor` function, the argument will be instantiated as a property of the class `automatically` & it will be assigned to the value the argument receives.

```ts
export class Ingredient {
  constructor(
    // *** create a public property named 'name', whose value is the first argument of this class.
      public name: string,
      public amount: number
  ) {}
}
```

## 12. Creating and Outputting the Shopping List

nothing

## 13. Adding a Shopping List Edit Section

nothing

## 14. Wrap Up & Next Steps

nothing

# `4. DEBUGGING`

## 1. Understanding Angular Error Messages

nothing

## 2. Debugging Code in the Browser Using Sourcemaps

nothing

## 3. Using Augury to Dive into Angular Apps

`augury` is tool helping us debug Angular app.

# `5. Components & Databinding Deep Dive`

## 1. Module Introduction

nothing

## 2. Splitting Apps into Components

nothing

## 3. Property & Event Binding Overview

nothing

## 4. Binding to Custom Properties

nothing

## 5. Assigning an Alias to Custom Properties

create an alias for an `input property`.

```ts
@Input('inputContent') content: string;

// *** utilize property's alias
// *** <app-test [inputContent]="aaa"></app-test>
```

## 6. Binding to Custom Events

nothing

## 7. Assigning an Alias to Custom Events

nothing

## 8. Custom Property and Event Binding Summary

nothing

## 9. Understanding View Encapsulation
[continue here]