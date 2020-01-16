
  

# 1. Getting started

  

# Your first app

## 1. Create a new project
nothing.

## 2. Template syntax
Angular template syntax extends html & js, just like Jsx in ReactJS.

### Directives.
used to inject Js syntax to an Angular component

```html
<div *ngFor="let product of products"></div>
```

>  ***ngFor** is a "structural directive". Structural directives which can remove, add & manipulate the elements they are attached to. Any directive with an asterisk, `*`, is a structural directive.

### Interpolation {{ ... }}
Used to print values of a component to a DOM expression.

```html
<div *ngFor="let product of products">
	<h3>
		{{ product.name }}
	</h3>
</div>
```

### Property binding [ ... ]
Let us pass a value to a property of an Angular component, marked as an `input` property.

If we pass an object, array or a value calculated by some operators, we will need to put the property's name inside a  pair of `[]` in order to tell Angular that the value we pass to the property is not a string, calculate it.

```html
<a [title]="product.name + 'details'"> // *** "product.name + 'details'" is not a string, calculate it
	{{ product.name }}
</a>
```

If we don't put a property's name to a pair of `[]`, Angular will treat the value we pass to the property as a string.

```html
<a title="product.name + 'details'"> // *** "product.name + 'details'" is treated as a string
	{{ product.name }}
</a>
```

### Event binding ( ... )
`EventEmitter` object is an `observable` (read below). event binding helps us subscribe a function to an `EventEmitter`. Thus, when an `EventEmitter` emit sth, the subscribed function will be informed & executed.

```html
<button (click)="share()">
	Share
</button>
```

## 3. Components
Like ones in ReactJS. A component in Angular consists of 3 things:

1. **component class**: contains methods and properties of a component.

2. **HTML template**: determine the markup part of a component.

3. **component styles**: define css of a component.

## 4. Input
### component class:
`@Component` **decorator** indicates a class is a component providing metadata about a component including: selector, templates, styles, ....

```ts
import { Component } from '@angular/core';

@Component({
	selector:  'app-product-alerts',
	templateUrl:  './product-alerts.component.html',
	styleUrls:  ['./product-alerts.component.css']
})
```

1. **selector**: the name of a component like one in ReactJS when it's rendered as an HTML ele.

2. **templateUrl**: indicates the path to the template of a component.

3. **styleUrls**: indicates the path to the styles of a component.

### normal properties:
normal properties are ones that are not marked as **input** or **output** properties. These properties can only be used **internally** & be printed as well as be used using **interpolation** & **directive**.

### input properties:
input properties are ones that can receive value from outside of the component holding them. Input properties can be defined using `@Input` **decorator**.

The **decorator** receive one argument which is used as an alternative `alias` for a property's name. This `alias` will be used **externally** instead of the property's name. However, the property's name is still being used **internally**.

```ts
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
	selector: 'app-test',
	templateUrl: './test.component.html',
	styleUrls: ['./test.component.css']
})
export class Test() implements OnInit {
	@Input() property1; // *** this property can be assigned to a value outside this component
	
	constructor() {}
	
	ngOnInit() {}
}
```

## 5. output
output properties are the ones that we could expose them to the outside of the component holding them. We could mark a property as an output one by using `output decorator` (`@output`).

`output decorator` will make an `event` available for `event binding ( ... )`. Once an `event` is exposed to the outside of the component holding it, we could trigger it when the component is rendered. 

# 2. Routing

## 1. Registering a route
check the doc

## 2. Using route information
check the doc

# 3. Managing data

## 1. Services
In Angular, a `service` is an instance of a class that can be made available to any part of your application using Angular's `dependency injection system`.

Services are the place where you share data between parts of your application. For instance, in an online store, a cart service is where you store your cart data and methods.

## 2. Dependency injection system
check the doc

# 4. Form
check the doc

# Fundamentals

## Tour of heroes app

### 1. Pipes
A way to `style` a value when it is printed to HTML template.

```html
<!-- 'uppercase' pipe will transform the value of hero.name to an uppercase one -->
</p>{{hero.name | uppercase}}</p>
```

check the doc for more detail.

### 2. Two-way binding

```html
<div>
	<label>name:
		<input [(ngModel)]="hero.name"  placeholder="name" />
	</label>
</div>
```

`[(ngModel)]` is a 2-way binding syntax, the `[]` will set the `ngModel`, the value of the input to equal to the `hero.name`. the `()` trigger when `ngModel` event, similar to `onChange` event of input is emitted, when the `ngModel` is emitted, Angular will change the value of `hero.name` according to the input's value.

`ngModel` is a method of `FormsModule` module.

take a note that we can not switch the position of `[]` & `()` since `([ ... ])` is a wrong syntax, the `event binding` can not bind an array.

### 3. Observable
Is like a data source which follows the observable pattern. the observable has 2 parts: an `observable` & `observers`. In between, we has a `stream`. during this `stream`, we can have multiple events emitted by the `observable`.

`observers` are functions subscribed to a `observable`. They will be informed when there is a new data is emitted.

The `stream` has 3 stages:

 1. `data`: when the `observable` emits data.
 2. `error`: when there are errors.
 3. `complete`: when the stream completed, close.

All the stages are in asynchronous.

**Fact**: `EventEmitter` is also return an `observable`. We can subscribe functions to an `EventEmitter` then, whenever the `EventEmitter` emits sth (by `emit` method), subscribed functions will get inform of it

#### Observable's methods
1. `interval`:
Returns an observable which emits a counted value after a certain amount of time.

```ts
interval(100).subscribe((count)  =>  {
	console.log(count)
})
```

2. `Subscription`:
Returns a `Subscription` interface. which has a variety of useful methods such as: `unsubscribe` (don't listen to a `observable` anymore).

```ts
export class ObservableDemo1Component implements OnInit  {
	private countingSubscription:  Subscription;

	constructor() { }

	ngOnInit() {
		this.countingSubscription = interval(1000).subscribe(count =>  {
			console.log(count);
		});
	}

	ngOnDestroy() {
		this.countingSubscription.unsubscribe();
	}
}
```

3. `Observable`:
Used to create a new observable.

```ts
export class CustomObservableComponent implements OnInit  {
	constructor() { }

	ngOnInit() {
		const customObservable = Observable.create(informer => {
			let count =  0;

			setInterval(()  =>  {
				informer.next(count);  // *** inform to subscribed function that a new value is arrived
				
				count++;
				
				if(count ===  3)  {
					informer.complete();  // *** inform to subscribed function that the obserable is complete
				}

				if(count >  4)  {
					informer.error(new  Error('count is greater than 3'));  // *** inform to subscribed function that the obserable has error
				}
			}, 1000);
		});

		customObservable.subscribe(
			count =>  {
				console.log(count)
			}, error =>  {
				console.log(error)
			},  ()  =>  {
				console.log('completed')
			}
		);
		
	}
}
```

#### pipe & Operators
`pipe` is a method of an `observable` which helps us plug `operators` to the `observable`.

`operators` are methods of `rxjs/operators` helping us handle data emitted by an `observable` before we retrieve it.

```ts
export class ObservableMapOperatorComponent implements OnInit {
	constructor() { }

	ngOnInit() {
		let customObservable = Observable.create(informer => {
			let count = 0;
			
			setInterval(() => {
				informer.next(count); // *** inform to subscribed function that a new value is arrived

				count++;
				
				if(count === 3) {
					informer.complete(); // *** inform to subscribed function that the obserable is complete
				}
				
				if(count > 4) {
					informer.error(new Error('count is greater than 3')); // *** inform to subscribed function that the obserable has error
				}

			}, 1000);
		});

		customObservable = customObservable.pipe(
			filter((data: number) => {
				return data > 1;
			}),
			map((data: number): string => {
				return 'Round ' + data;
			})
		)

		customObservable.subscribe(count => {
			console.log(count)
		}, error => {
			console.log(error)
		}, () => {
			console.log('completed')
		});
	}
}
```

#### Subject
Is a special kind of `informer` as it allows us to call `next` method outside of an `observable`, instead of calling inside with a callback function. Therefore, the `observable` become more active since we could emit values to subscribed function anywhere in our project.

```ts
let count = 0;
const subject = new Subject<number>();

setInterval(() => {
	count++;
	
	if(count ===  3)  {
		subject.complete();
	}

	if(count >  4)  {
		subject.error(new  Error('count is greater than 4'));
	}

	subject.next(count);
},  1000);

subject.subscribe((countResult:  number)  =>  {
	console.log(countResult);
}, err =>  {
	console.log(err)
},  ()  =>  {
	console.log('complete')
})
```

### 4. Public services
if services are instantiated in public (without `private` alias), we can access it in the template.

### 5. Type assertion (typescript)
Any variable in typescript has a specific type, event if we do not explicitly define one for them. Therefore, if we assign the variable to a value having diffirent type to the variable, typescript will throw errors.

```ts
let  employee = 5; // *** this var is implicitly considered to be the one with type of 'number' automatically
employee = ""; // *** Type '""' is not assignable to type 'number'
```

When TypeScript determines that the assignment is invalid, then we have an option to override the type using a type assertion. If we use a type assertion, the assignment is always valid, so we need to be sure that we are right. Otherwise, our program may not work correctly.

```ts
let  employee = {}; // *** employee is considered to have the type of {}
employee.name = "John"; // *** Compiler Error: Property 'name' does not exist on type '{}'
employee.code = 123; // *** Compiler Error: Property 'code' does not exist on type '{}'
```

```ts
// *** use type assertion so as to prevent typescript from throwing errors
interface  Employee {
	name:  string;
	code:  number;
}

// let employee  = {} as Employee; // *** type assertion ver1
let employee  = <Employee>{}; // *** type assertion ver2
employee.name  =  "John";
employee.code  =  123;
```

### 6. Generics
```ts
function getArray<T>(items : T[]) : T[] {
    return new Array<T>().concat(items);
}
```
Generics (`<T>`) is used to preserving the type information user pass to a function, this type information can be levaraged in any place inside the function.

Take a note that `T` only refers to a type, it could not be used as a value.

### 7. `or` in type assignment
```ts
var a: string | number;

a = "";
```



