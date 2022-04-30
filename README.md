# React-Roadmap

Learning React essentials

## Learning Resources

- [Udemy](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)
- [React vs vanilla JS](https://www.framer.com/blog/posts/react-vs-vanilla-js/)
- [Components Basics](<https://medium.com/the-andela-way/understanding-react-components-37f841c1f3bb#:~:text=Components%20are%20the%20building%20blocks,(User%20Interface)%20should%20appear.>)

## Quick Access

- [Why use React instead of normal JavaScript](#why-use-react-instead-of-normal-javascript)
- [React Components](#react-components)
- [Props](#props)
- [State](#state)
- [React Basics and Working with Components](#react-basics-and-working-with-components)
- [React State and Working with Events](#react-state-and-working-with-events)

## Why use React instead of normal JavaScript

- React can change UI based on state
- Vanilla JS stores value in DOM

```
<input type="text" id="inputBox" />
```

```
const data=document.getElementById("inputBox").value;
```

- React stores value in variables

```
<input type="text" id="inputBox" value={data} />
```

```
const[data,setData] = useState("");
```

- In vanilla JS code that alters a UI can be written anywhere without limitation either internally or within several files.
- In React, the app in split into components and complete code (both display and updating mechanism) of each component is written at the same place.

```
function ItemList(userName){
    function addItem(){//Update Mechanism

        //code to add item
    }
    return(//Display code
        <div>
            <h1>ItemList</h1>
            <ul>
                <li>Item1</li>
                <li>Item2</li>
            </ul>
        </div>
    )
}
```

- In vanilla JS to update an item after an event we need few things:

  - An Event Listiener
  - Traversal to the DOM to find the new values
  - Traversal to the DOM again to update the new values.

    ```
    <input type="text" id="item-input" placeholder="Enter item name" /><button id="add-buttom">Add</button>

    <! Display Area>
    <ul id="item-list">
    </ul>
    ```

    ```
    const addButton = document.getElementById(add-button);
    addButton.addEventListener("click",function(){
         //Selecting item
         const item=document.getGetElemetById("item-input");

        //Display code
        const list=document.getElementById("item-list");
        const listItem= document.createElement("li");
        const listText = document.createTextNode(item.value);

        listItem.appendChild(listText);
        list.appendChild(listItem);
    });
    ```

- In React, to update an item after event
  - No event listiener is required a simple onclick attribute or similar attribute will suffice.
  - A variable that stores list of possible values which is mapped and displayed.
  - If the list is updated React will automatically detect it and display accordingly.
    ```
    <input type="text" value={itemInput} />
    <button onclick={addItem}>AddItem </button>
    ```
    ```
    //Creating list of items
    const [items,setItems]= useState("item1", "item2", "item3");
    ```
    ```
    //Displaying items
    <ul>
        {items.map(item => (
            <li>{item}</li>
        ))}
    </ul>
    ```
    ```
    //updating items
    function addItem(){
        setItems(...items, itemInput);
    }
    ```

## React Components

[Top](#quick-access)

React Components are the building blocks of a react app.<br>
They are simply a JS class or function which can<br>

- Accept props(property) as input [optionally]
- Return a React Element that describes how UI should appear.

### How components are created and handled

- React Script allows us to write Components.
- ReactDOM Script allows us to place our components as well as work with them in the context of DOM.
- Babel Script allows us to transpile ES6 to ES5 if there is limited browser support.

### Displaying Components

```
ReactDOM.render(<ComponentName />, documentGetElementById('root'));
```

The above code can be understood as:

- We are using ReactDOM's render method to render the ComponentName element into the DOM in a container with the id of root.
- We can change the container to be inside any other element as its child.

### Functional Components

```
const functionalComponent () => <h1> Hi! </h1>;
```

The above code creats a simple Functional Component. It has the following properties:

- It is stateless i.e they do not hold or manage states.
- It is presentational i.e all they do is output UI elements.

### Class Component

```
class classComponent extends React.components{
    render(){
        return <h1>Hi! </h1>;
    }
}
```

The above code creats a class Component. Class components have additional features such as:

- Ability to contain logic i.e methods that handle events
- local state

Class componets have following properties:

- Stateful i.e they can hold and/or manage local state.
- Container i.e they can contain other components (mostly functional components).

Class Component though powerful have larger amount of markup thus using them unnecessarily will negatively affect performance, redability and testability.

### When to use class vs function Components

Use Class Componets if

- need to manage local state
- need to add logic for event handling
- need to add lifecycle methods to your components

if not Use Functional Components.

### Composing Component

```
// image component
const Image= () => <img src="something">;

// Bio component
const Bio= () => <p>
           Lorem ipsum....
</p>;

// Username Component
const UserName = props => <h3>{props.name}</h3>

//userProfile component
const UserProfile = () =>
<div>
    <Image />
    <Bio />
    <UserName name={'Kushal'}>
</div>;

ReactDOM.render(<UserProfile />, document.getElementById('root'));
```

## Props

[Top](#quick-access)

- Props is short for properties and are used to pass data between React Components. Reacts's Data flow between props is unidirectional (from parent to child only).

- Props are used to make React's components easily and dynamically customizable.

- Props are read-only i.e a component that recieves a prop must never modify the prop it was passed, this ensures the component always returns the same result for the same input.

- Changing the prop object will re-render the component

```
const functionalComponent = props => <h1> Hello {props.name}!</h1>;
ReactDOM.render(
    <functionalComponent name={'kushal'} />, document.getElementById('root')
);
```

Let us understand the code above:

- We have a functionalComponent function which has the argument props
- props is an object by nature and we can use it as such.
- The code simply prints Hello props.name where name is dynamically inputted.
- The ReactDOM.render function is used to display UI
- In this function, we pass the component and destination as argument.
- In component argument we can pass all inputs as attributes to the component

### Props in a class component

```
class classComponent extends React.Component{
    render (){
        return <h1> Hello {this.props.name}</h1>;
    }
    ReactDOM.render(<classComponent name={'kushal'} />,document.getElementById('root') );
};
```

In the above code

- We dont pass props as an argument but rather use this to access prop
- in the render() function the part inside the return is what is displayed in the UI when the component is used.
- The ReactDOM.render as usual is the actual function that displays the component.

### Default Props

- Another way of passing props to our component
- We set the default values and we dont need to explicitly pass the prop as an argument.
- Passsing a attribute will overwrite the default component.

```
const functionalComponent = props => <h1>Hi {props.name}</h1>;

functionalComponent.defaultProps={
    name:"User"
};

ReactDOM.render(<functionalComponent />, document.getElementById('root'));
```

## State

[Top](#quick-access)

### What is a state?

State is an object which is built-in to React Components. This is where we store property values that belog to the component. If the state object changes, the component is re-rendered.

A component manages its own state internally, but it is only used to set the initial state of its children component, each children then manages its state by itself.

Since state increases complexity and reduces predictability it is preferable to not use a state if possible.

An interactive app does need states to function properly.

State can only be used in a class Component.

State is similar to props but unlike props it is private to the component.

State in React is immutable i.e state should never be altered directly but changes to the state must be made to a copy of current version of state.

### Adding State to a class

```
//Creating a class Component
class classComponent extends React.Component{
    render(){
        return <h1>Hi!</h1>;
    }
};
```

```
//Adding state to class Component
class classComponent extends Reacts.Component{
    constructor(props){
        super(props);

        this.state = {
            name: 'Kushal SB'
        }
    }

    render {
        return {
            <h1> Hi {this.state.name}! </h1>;
        }
    }
};
```

Understanding the code above:

- We first created a class Component.
- Now to use states we need to first initialize it and this is done through the class constructor.
- Notice the class constructor has argument props and it is then passed to super(). It is a must to add super() while using a constructor. Though passing props is optional.

```
constructor(){
    super();//This also works but is not recommended by React.
    ....
}
```

- Lastly we used this.state ={ name:'Kushal'}; to initialize the name attribute of state object for this component.

- Finally the component render code is written in render() where this.state is used.

- We can add as many properties to the state object as we like

```
this.state = {
    name:'kushal',
    age: 22,
    faculty: 'Science and Technology',
    programme: 'Bachelors'
};
```

### Changing the state

We use this.setState() method to change the state

setState() schedules an update to component's state object. When the state changes, the components responds by re-rendering.

```
//Example code of using setState

class classComponent extends React.Component{
    constructor(props){
        super(props);

        //state initialization
        this.state = {
            prop1: 1,
            prop2: 'blue',
            prop3: 'bag'
        }

        //setState Function
        changeColor ()=>{
            this.setState({prop2:'red'});
        }

        //render function
        render(){
            return (<div>
            <ul>
                <li>{this.state.prop1}</li>
                <li>{this.state.prop2}</li>
                <li>{this.state.prop3}</li>
            </ul>
            <button onClick={this.changeColor}>Change Color</button>
            </div>);
        }
    }

};

```

Calls to setState are asynchronous i.e this.state won't reflect new values immediately after calling setState. This is done so that if both Parent and Child call setState during a click event, Child isn't re-rendered twice.

## React Basics and Working With Components

[Top](#quick-access)

To start your React app first we need to get Node.js, after which we can run the command in the terminal

```
npx create-react-app my-app
cd my-app
npm start
```

This is it now we can work on our Project.

### React Export and Import

If we want to use a Component from file A in file B then, in file A we need to export that function and in file B we need to import that function.

```
//in fileA.js
export default ComponentName;
```

```
//in fileB.js
import ComponentName from './fileA';
```

### JSX

JSX is full form for JavaScript XML.

It allows us to write HTML code in React. Where React changes our JSX to vanilla JS.

All JSX must only have one root element for one return statement.

```
return (<div></div><div></div>); //Error
return (<div><div></div><div></div></div>);//NoError
```

### CSS in JSX

Use className instead of class

```
 <div className="theclassName"></div>
```

To import a css file use

```
import './filename.css';
```

Example of a static Component using css

```
import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>July 11 1999</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
      </div>
      <div className="expense-item__price"> 249.67$</div>
    </div>
  );
}
export default ExpenseItem;

```

### JSX under the hood

Consider the folowing JSX

```
return(
  <div>
  <h2>Lets ger started!</h2>
  <Expenses items={expenses} />
  </div>
);
```

The React now transforms this JSX by doing:

```
return React.createElement(
'div',
{},
React.createElement('h2',{},'Lets get Started!'),
React.createElement(Expenses,{items:expenses})
);
```

### Passing Data Via Props

We can make components reusable by using props.

```
//App.js
// import React, {Component} from 'react';
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Inusrance",
      amount: 294.6,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e2",
      title: "Grocery",
      amount: 30,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e3",
      title: "Rent",
      amount: 60,
      date: new Date(2021, 2, 14),
    },
    {
      id: "e4",
      title: "Utensils",
      amount: 40,
      date: new Date(2021, 2, 16),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;

```

```
//ExpenseItem.js
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price"> {props.amount}$</div>
    </div>
  );
}
export default ExpenseItem;

```

### Adding normal JS logic to Components

Here we add Logic for Date which is from Vanilla JS

```
//ExpenseItem.js
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price"> {props.amount}$</div>
    </div>
  );
}
export default ExpenseItem;

```

### Splitting Components into multiple Components

Change the above ExpenseItem to this

```
import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";
function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price"> {props.amount}$</div>
    </div>
  );
}
export default ExpenseItem;
```

Now Create a new file ExpenseDate.js and ExpenseDate.css

```
//ExpenseDate.js
import "./ExpenseDate.css";
function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}
export default ExpenseDate;
```

Here We split the ExpenseItem Component into ExpenseDate Component.

- Notice We passed props that first initiated from App.js and funneled it to ExpenseDate.js

### Concept of Composition

The approach of buiding a UI from smaller building blocks is called composition.

- We can have very specific components like ExpenseItem or ExpenseDate where every thing is very specific using. All these components are configured thorough props.

- We can also have components where don't configure everything using props but instead we are able to pass content between the opening and closing tags of that component.

- We can also create components that are shell components, they are used to avoid code duplication. Considering a style duplication we can create a shell component to reduce duplication.

```
//Card.js
import "./Card.css";

function Card(props) {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;

```

Lets understand the code above:

- the Component of Card is created which has a variable classes.
- classes takes the defualt class "card" and whatever class is passed from the parent.
- It just returns a wrapped div whose inner html is the children of its parent.
- In this way we created our own wrapper component or we can say our won tags with customized css.

```
//ExpenseItem.js
import "./ExpenseItem.css";
import Card from "./Card";

import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price"> {props.amount}$</div>
    </Card>
  );
}
export default ExpenseItem;

```

In the code above we just replaced the previous div with our custom Component Card.

Similarly we reused this card in our Expenses.js file

```
 import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
  );
}

export default Expenses;

```

Thus we can reduce code duplication using Composition,

Note:

- Custom component by default only use the css that is defined in the component.
- To use other css we need to pass it as className and add that using props.className in our component className.
- We also need to pass {props.children} if we want to create a wrapper otherwise the children inside` <Card> </CARD>` wont get transferred

### Arrow Function (Vanilla JS)

Functions can be written as arrow function

```
const App=()=>{}
```

## React State and Working with Events

[Top](#quick-access)

Upto now we have created components that are displayed as UI but, they are static i.e they don't intereact with user in any way as well as the content doesn't change.

### Adding Event Listeiner

```
return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price"> {props.amount}$</div>

      <button onClick={() => console.log("Clicked!")}>Click me!</button>
    </Card>
  );
```

or

```
const ExpenseItem = (props) => {
  const clickHandler = () => console.log("Clicked!");
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price"> {props.amount}$</div>

      <button onClick={clickHandler}>Click me!</button>
    </Card>
  );
};
```

### How component functions are Executed

Consider the code below:

```
const ExpenseItem = (props) => {
  let title = props.title;
  const clickHandler = () => (title = "new Title");
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price"> {props.amount}$</div>

      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};
```

- We might at first glance conclude that When the button is clicked, the clickHandler function is called, title is changed to "new title" and the component is changed to have new title.
- But our above statement is only half-true, the title does change to "new Title" but the Component doesn't change its original title and renders the original value.

- This is becuase our Component is also a function, the only special thing about this function is it returns JSX, so in our code above we didn't call the Component function again and this it didn't update the UI.
- Now, how did the UI get rendered in the first place, i.e because when we use the Component in our Expenses.js

```
<ExpenseItem />
```

- This is same as calling the function, thus the UI was rendered the first time.
- Notice, Using \<ExpenseItem someProp="something" /> is same as running React.createElement(ExpenseItem,{ someProp="something"},);

### Using useState() to dynamically change title

- useState() is a function in React i.e it needs to be first imported

```
import React, {useState} from 'react';
```

- useState() function takes in an argument which is the default state value, which means it will take an initial value. In our case the intital value is props.title

```
useState(props.title);
```

- As an output useState() returns an array, the first element returns a special variable, and the second element returns a function which we can use to change the value of the variable.
- We can use array destructuring to store both the first and second element into variables or constants. we use constants in useState()

```
const [title,setTitle]= useState(props.title);
```

- Here title is the current state value and setTitle is a function for updating that value.

- We can now use title in JSX like a normal varibale
- To change value just use

```
setTitle('New Value');
```

- now title will hold new value and The component where the useState for setTitle was defined will be re-executed again by React.

