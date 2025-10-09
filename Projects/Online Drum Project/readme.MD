# The drum Project
it is a very simple project in which users can either click the buttons on the website or some keys from the keyboard to interact and play different drum sounds and make music

## Theory and tech stack explained :

### 1. Adding event Listeners to a button in JS



### 2. Adding Audio to the HTML Elements
The HTMLAudioElement interface provides access to the properties of <audio> elements, as well as methods to manipulate them.

This element is based on, and inherits properties and methods from, the HTMLMediaElement interface.The HTMLAudioElement interface provides access to the properties of <audio> elements, as well as methods to manipulate them.

This element is based on, and inherits properties and methods from, the HTMLMediaElement interface.

### 3. Javascript OOPS Concepts:

#### Introduction to JavaScript Objects
Up to this point, the discussion has focused on objects and using their properties or methods. Now, let us truly dig in and understand exactly what JavaScript objects are, and how they can be used to dominate the web.

---

#### The Hotel Analogy: Organizing Data
Imagine inheriting a hotel and being in charge of running it. Upon arrival, you notice many bags in the lobby and guests checking in and leaving their luggage. What is needed in this situation? A bellboy.

Let us employ our first bellboy, Timmy. Besides his name, there are several other details to know about him. For example, his age, whether he has a work permit, and the languages he speaks. All of this data can be captured by creating variables.

##### JavaScript Code Sample
```javascript
var bellBoy1Name = "Timmy";
```

If we want the bellboy to greet a guest, we could write a line of code like this:

```javascript
alert("Hello, my name is " + bellBoy1Name);
```

This would create a pop-up saying "Hello, my name is Timmy." This syntax should be familiar. However, as the hotel becomes busier and more bellboys are needed, creating separate variables for each property of each bellboy becomes inefficient.

---

#### Using Objects for Structured Data
In real life, this information might be better represented by a table or spreadsheet, with rows for each property and columns for each bellboy. In JavaScript, a similar structure can be achieved by creating an object.

```javascript
var bellBoy1 = {
  name: "Timmy",
  age: 19,
  hasWorkPermit: true,
  languages: ["English", "French"]
};
```

Now, to greet a guest using the object's property, the code would look like this:

```javascript
alert("Hello, my name is " + bellBoy1.name);
```

This approach makes the data more structured and reduces the likelihood of errors when assigning names and ages to new bellboys. By doing this, a JavaScript object has been created.

---

#### Creating Objects with Different Properties
If a housekeeper object is needed, the properties defined will likely be different, such as years of experience, previous hotels worked at, or cleaning tasks performed. Different objects require different properties relevant to their roles.

---

#### Challenge: Create a Housekeeper Object
Try creating a new object called houseKeeper1 with properties you think are relevant for a housekeeper.

```javascript
var houseKeeper1 = {
  yearsOfExperience: 12,
  name: "Jane",
  cleaningRepertoire: ["bathroom", "lobby", "bedrooms"]
};
```

Properties inside objects are like variables associated with another variable. Any value can be assigned: a number, a string, an array, or any other type. Naming conventions for JavaScript variables, such as camel casing and not starting with numbers, also apply to property names.

To access the properties, use dot notation. For example:

```javascript
console.log(houseKeeper1.name);
```

This will output "Jane", the value associated with the name property inside the houseKeeper1 object.

---

#### Constructor Functions: Object Factories
As the hotel grows and more bellboys are needed, creating each object manually becomes tedious, especially when all bellboys share the same properties. The solution is to create a factory that produces bellboys. In JavaScript, this is done using a constructor function.

```javascript
function BellBoy(name, age, hasWorkPermit, languages) {
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.languages = languages;
}
```

Constructor functions are named with a capital letter. The inputs to the function correspond to the properties needed. Inside the function, `this.property` is set equal to the input value.

To create a new bellboy object using the constructor function:

```javascript
var bellBoy1 = new BellBoy("Timmy", 19, true, ["English", "French"]);
```

This method is much shorter than specifying each property every time. The `new` keyword and the capitalized function name are essential for creating objects from constructor functions.

---

#### Challenge: Constructor Function for Housekeepers
Now, create a constructor function for housekeepers and use it to create a houseKeeper1 object.

```javascript
function HouseKeeper(yearsOfExperience, name, cleaningRepertoire) {
  this.yearsOfExperience = yearsOfExperience;
  this.name = name;
  this.cleaningRepertoire = cleaningRepertoire;
}
```

To create a new housekeeper object using the constructor function:

```javascript
var houseKeeper1 = new HouseKeeper(9, "Tom", ["lobby", "bedrooms"]);
```

Now, logging the name property of the new housekeeper object will output "Tom":

```javascript
console.log(houseKeeper1.name);
```

With the constructor function, creating new objects with the same properties becomes efficient and consistent. The object factory can generate new objects as needed by simply providing new values for the properties.

---

#### ✅ Key Takeaways
- JavaScript objects allow for structured data storage using properties and values.
- Dot notation is used to access object properties efficiently.
- Constructor functions act as factories to create multiple objects with the same structure.
- Using constructor functions and the `new` keyword streamlines object creation and reduces repetitive code.