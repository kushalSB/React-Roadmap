# React-Roadmap

Learning React essentials

# Learning Resources

- [Udemy](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)
- [React vs vanilla JS](https://www.framer.com/blog/posts/react-vs-vanilla-js/)
- [Components Basics](<https://medium.com/the-andela-way/understanding-react-components-37f841c1f3bb#:~:text=Components%20are%20the%20building%20blocks,(User%20Interface)%20should%20appear.>)

# Quick Access

1. [Why use React instead of normal JavaScript](#why-use-react-instead-of-normal-javascript)
2. [React Components](#react-components)
3. [Props](#props)
4. [State](#state)
5. [React Basics and Working with Components](#react-basics-and-working-with-components)
6. [React State and Working with Events](#react-state-and-working-with-events)
7. [Rendering Lists and Rendering Conditional Content](#rendrering-lists-and-rendering-conditional-content)
8. [Styling React Components](#styling-react-components)

# Why use React instead of normal JavaScript

- React can change UI based on state
- Vanilla JS stores value in DOM

```jsx
<input type="text" id="inputBox" />
```

```jsx
const data = document.getElementById("inputBox").value;
```

- React stores value in variables

```jsx
<input type="text" id="inputBox" value={data} />
```

```jsx
const [data, setData] = useState("");
```

- In vanilla JS code that alters a UI can be written anywhere without limitation either internally or within several files.
- In React, the app in split into components and complete code (both display and updating mechanism) of each component is written at the same place.

```jsx
function ItemList(userName) {
  function addItem() {
    //Update Mechanism
    //code to add item
  }
  return (
    //Display code
    <div>
      <h1>ItemList</h1>
      <ul>
        <li>Item1</li>
        <li>Item2</li>
      </ul>
    </div>
  );
}
```

- In vanilla JS to update an item after an event we need few things:

  - An Event Listiener
  - Traversal to the DOM to find the new values
  - Traversal to the DOM again to update the new values.

    ```jsx
    <input type="text" id="item-input" placeholder="Enter item name" /><button id="add-buttom">Add</button>

    <! Display Area>
    <ul id="item-list">
    </ul>
    ```

    ```jsx
    const addButton = document.getElementById(add - button);
    addButton.addEventListener("click", function () {
      //Selecting item
      const item = document.getGetElemetById("item-input");

      //Display code
      const list = document.getElementById("item-list");
      const listItem = document.createElement("li");
      const listText = document.createTextNode(item.value);

      listItem.appendChild(listText);
      list.appendChild(listItem);
    });
    ```

- In React, to update an item after event
  - No event listiener is required a simple onclick attribute or similar attribute will suffice.
  - A variable that stores list of possible values which is mapped and displayed.
  - If the list is updated React will automatically detect it and display accordingly.
    ```jsx
    <input type="text" value={itemInput} />
    <button onclick={addItem}>AddItem </button>
    ```
    ```jsx
    //Creating list of items
    const [items, setItems] = useState("item1", "item2", "item3");
    ```
    ```jsx
    //Displaying items
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
    ```
    ```jsx
    //updating items
    function addItem() {
      setItems(...items, itemInput);
    }
    ```

# React Components

[Top](#quick-access)

React Components are the building blocks of a react app.<br>
They are simply a JS class or function which can<br>

- Accept props(property) as input [optionally]
- Return a React Element that describes how UI should appear.

## How components are created and handled

- React Script allows us to write Components.
- ReactDOM Script allows us to place our components as well as work with them in the context of DOM.
- Babel Script allows us to transpile ES6 to ES5 if there is limited browser support.

## Displaying Components

```jsx
ReactDOM.render(<ComponentName />, documentGetElementById("root"));
```

The above code can be understood as:

- We are using ReactDOM's render method to render the ComponentName element into the DOM in a container with the id of root.
- We can change the container to be inside any other element as its child.

## Functional Components

```jsx
const functionalComponent () => <h1> Hi! </h1>;
```

The above code creats a simple Functional Component. It has the following properties:

- It is stateless i.e they do not hold or manage states.
- It is presentational i.e all they do is output UI elements.

## Class Component

```jsx
class classComponent extends React.components {
  render() {
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

## When to use class vs function Components

Use Class Componets if

- need to manage local state
- need to add logic for event handling
- need to add lifecycle methods to your components

if not Use Functional Components.

## Composing Component

```jsx
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

# Props

[Top](#quick-access)

- Props is short for properties and are used to pass data between React Components. Reacts's Data flow between props is unidirectional (from parent to child only).

- Props are used to make React's components easily and dynamically customizable.

- Props are read-only i.e a component that recieves a prop must never modify the prop it was passed, this ensures the component always returns the same result for the same input.

- Changing the prop object will re-render the component

```jsx
const functionalComponent = (props) => <h1> Hello {props.name}!</h1>;
ReactDOM.render(
  <functionalComponent name={"kushal"} />,
  document.getElementById("root")
);
```

Let us understand the code above:

- We have a functionalComponent function which has the argument props
- props is an object by nature and we can use it as such.
- The code simply prints Hello props.name where name is dynamically inputted.
- The ReactDOM.render function is used to display UI
- In this function, we pass the component and destination as argument.
- In component argument we can pass all inputs as attributes to the component

## Props in a class component

```jsx
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

## Default Props

- Another way of passing props to our component
- We set the default values and we dont need to explicitly pass the prop as an argument.
- Passsing a attribute will overwrite the default component.

```jsx
const functionalComponent = (props) => <h1>Hi {props.name}</h1>;

functionalComponent.defaultProps = {
  name: "User",
};

ReactDOM.render(<functionalComponent />, document.getElementById("root"));
```

# State

[Top](#quick-access)

## What is a state?

State is an object which is built-in to React Components. This is where we store property values that belog to the component. If the state object changes, the component is re-rendered.

A component manages its own state internally, but it is only used to set the initial state of its children component, each children then manages its state by itself.

Since state increases complexity and reduces predictability it is preferable to not use a state if possible.

An interactive app does need states to function properly.

State is similar to props but unlike props it is private to the component.

State in React is immutable i.e state should never be altered directly but changes to the state must be made to a copy of current version of state.

## Adding State to a class

```
//Creating a class Component
class classComponent extends React.Component{
    render(){
        return <h1>Hi!</h1>;
    }
};
```

```jsx
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

```jsx
constructor(){
    super();//This also works but is not recommended by React.
    ....
}
```

- Lastly we used this.state ={ name:'Kushal'}; to initialize the name attribute of state object for this component.

- Finally the component render code is written in render() where this.state is used.

- We can add as many properties to the state object as we like

```jsx
this.state = {
  name: "kushal",
  age: 22,
  faculty: "Science and Technology",
  programme: "Bachelors",
};
```

## Changing the state

We use this.setState() method to change the state

setState() schedules an update to component's state object. When the state changes, the components responds by re-rendering.

```jsx
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


};

```

Calls to setState are asynchronous i.e this.state won't reflect new values immediately after calling setState. This is done so that if both Parent and Child call setState during a click event, Child isn't re-rendered twice.

# React Basics and Working With Components

[Top](#quick-access)

To start your React app first we need to get Node.js, after which we can run the command in the terminal

```bash
npx create-react-app my-app
cd my-app
npm start
```

This is it now we can work on our Project.

## React Export and Import

If we want to use a Component from file A in file B then, in file A we need to export that function and in file B we need to import that function.

```jsx
//in fileA.js
export default ComponentName;
```

```jsx
//in fileB.js
import ComponentName from "./fileA";
```

## JSX

JSX is full form for JavaScript XML.

It allows us to write HTML code in React. Where React changes our JSX to vanilla JS.

All JSX must only have one root element for one return statement.

```jsx
return (<div></div><div></div>); //Error
return (<div><div></div><div></div></div>);//NoError
```

## CSS in JSX

Use className instead of class

```jsx
<div className="theclassName"></div>
```

To import a css file use

```jsx
import "./filename.css";
```

Example of a static Component using css

```jsx
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

## JSX under the hood

Consider the folowing JSX

```jsx
return (
  <div>
    <h2>Lets ger started!</h2>
    <Expenses items={expenses} />
  </div>
);
```

The React now transforms this JSX by doing:

```jsx
return React.createElement(
  "div",
  {},
  React.createElement("h2", {}, "Lets get Started!"),
  React.createElement(Expenses, { items: expenses })
);
```

## Passing Data Via Props

We can make components reusable by using props.

```jsx
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

```jsx
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

## Adding normal JS logic to Components

Here we add Logic for Date which is from Vanilla JS

```jsx
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

## Splitting Components into multiple Components

Change the above ExpenseItem to this

```jsx
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

```jsx
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

## Concept of Composition

The approach of buiding a UI from smaller building blocks is called composition.

- We can have very specific components like ExpenseItem or ExpenseDate where every thing is very specific using. All these components are configured thorough props.

- We can also have components where don't configure everything using props but instead we are able to pass content between the opening and closing tags of that component.

- We can also create components that are shell components, they are used to avoid code duplication. Considering a style duplication we can create a shell component to reduce duplication.

```jsx
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

```jsx
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

```jsx
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

## Arrow Function (Vanilla JS)

Functions can be written as arrow function

```jsx
const App = () => {};
```

# React State and Working with Events

[Top](#quick-access)

Upto now we have created components that are displayed as UI but, they are static i.e they don't intereact with user in any way as well as the content doesn't change.

## Adding Event Listeiner

```jsx
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

```jsx
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

## How component functions are Executed

Consider the code below:

```jsx
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

## Using useState() to dynamically change title

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

- When the Component is re-executed the code below is re-run thus react knows of title, but react also keeps track of the state and if its first time it will take props.title as argument but if it is not first time executing, react will just give title the latest state as current state.

```jsx
const [title, setTitle] = useState(props.title);
```

## Adding Form inputs

Simply add form in jsx and create a component
-Here We created two components NewExpenses.js and ExpenseFrom.js

```jsx
import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";

const NewExpenses = () => {
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
};

export default NewExpenses;
```

```jsx
import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
```

Also change App.js to include the latest changes.

```jsx
return (
  <div>
    <NewExpenses />
    <Expenses items={expenses} />
  </div>
);
```

## Listening to User Input

- We can add native event listiner

```jsx
<input type="text" onChange={titleChangeHandler} />
```

- We also add a function inside the component

```jsx
const titleChangeHandler = (event) => {
  console.log(event);
};
```

- This function will automatically get an event object as argument, which will be useful for us.

- The event object has one a target field. target points to the DOM element for which the event occured, in our case the input element.

- And this input element in turn has a long list of properties that we can set including the value property.

- We can use the value property to get the current value for the input

```jsx
const titleChangeHandler = (event) => {
  console.log(event.target.value);
};
```

## Working with Multiple States

- We want to make sure that we store the value somewhere so that when the form is submitted, we can use that value.

- We want to combine all the values into an object when the form overall is submitted.

- One way of storing the value and making sure it survives even if the component function is re-executed is to use state.

```jsx
import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
```

## Using one State

- We can use a single state to store data from all there fields by passing an object as argument to the state

```jsx
const [userInput, setUserInput] = useState({
  enteredTitle: "",
  enteredAmount: "",
  enteredDate: "",
});
```

- Here, the state name is now userInput and it has three properties.

- To change the current calue of state we just call the setUserInput

```jsx
setUserInput({
  ...userInput,
  enteredTitle: event.target.value,
});
```

- Here we must use the spread operator to first copy the previous state and then change the state of desired field.
- If we didnt use the spread operator, the other properties of this object will be overwritten and cant be used.

## Updating State that depends upon previous State

- The code on the previous example:

```jsx
setUserInput({
  ...userInput,
  enteredTitle: event.target.value,
});
```

- Our current state depends upon the previous state, but this is a bad practise, we should rather use prevState.

```jsx
setUserInput((prevState) => {
  return { ...prevState, enteredTitle: event.target.value };
});
```

- This done so becuase, reacts schedules an state update, thus using this latest code, our code will always use the latest previous state.

## Handling Form Submission

- If a button with type submit part of a form , the overall form will emit an event to which we can listien

```jsx
<form onSubmit={submitHandler}>
```

- By default the behavious of Webpage when a form is submitted the browser sends a request to the server and the page reloads
- We want to stop this default behaviour and handle this form submission manually.

```jsx
const submitHandler = (event) => {
  event.preventDefault();

  const expenseData = {
    title: enteredTitle,
    amount: enteredAmount,
    date: new Date(enteredDate),
  };
  console.log(expenseData);
};
```

## Clearing the input Fields using two way binding

- Two way binding is used such that some value in the DOM is consistent with the current state

- Let us change the input field such that the value is reflected of the state.

```jsx
<input type="text" value={enteredTitle} onChange={titleChangeHandler} />
```

- Now to clear the input fields when the form is submitted

```jsx
const submitHandler = (event) => {
  event.preventDefault();

  const expenseData = {
    title: enteredTitle,
    amount: enteredAmount,
    date: new Date(enteredDate),
  };
  console.log(expenseData);
  setEnteredTitle("");
  setEnteredDate("");
  setEnteredAmount("");
};
```

## Child-to-Parent Component

- In the above component ExpenseForm.js we have collected data, but we dont need those collected data in ExpenseForm.js, we rather need to pass this data into NewExpenses.js and into App.js such that we can create an Expenses component using props from the collected data.

- Notice we used onchange prop on a input component which is inside the ExpenseForm component, this pattern can be repeated in ourn own components as well.

- We can create our own event props and pass functions as values and that will allow us to pass a function from a parent component to a child component and call that function from the child component.
- As we have called a function defined in the parent component in the child component , we can pass data as arguments to that functions, in this way we can transfer data from child component to a parent component.

- The code below is a function defined in NewExpenses.js

```jsx
import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";

const NewExpenses = () => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpenses;
```

- Now we need to use this function in ExpenseForm.js and pass the collected data as arguments to this function.

```jsx
const ExpesneForm = (props) => {};
```

```jsx
const submitHandler = (event) => {
  event.preventDefault();

  const expenseData = {
    title: enteredTitle,
    amount: enteredAmount,
    date: new Date(enteredDate),
  };
  props.onSaveExpenseData(expenseData);
  setEnteredTitle("");
  setEnteredDate("");
  setEnteredAmount("");
};
```

- Now to get to the App.js We repeat this process

```jsx
//App.js
const addExpenseHandler = (expense) => {
  console.log("In App.js");
  console.log(expense);
};
console.log(addExpenseHandler);

return (
  <div>
    <NewExpenses onAddExpense={addExpenseHandler} />
    <Expenses items={expenses} />
  </div>
);
```

- Also call the prop onAddExpense in NewExpenses.js

```jsx
//NewExpenses.js
const saveExpenseDataHandler =  (enteredExpenseData) => { // This function is called in ExpenseForm.js with arguments enteredExpenseData
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData); //Calling function defined in App.js with expenseData as argument
```

- Thus the user inputted data has now succefully reached App.js from which we can now transfet those data into any components we so desire.

## Lifting State Up

<table border=1>
<tr>
<th colspan=3> <center> /< App /> </center> </th>
</tr>
<tr><th> /< Expenses /> </th> <th>-----***-----</th> <th> /< NewExpenses /></th></tr>
<tr><td>State Used Here </td><td></td><td>State Generated Here</td></tr>
</table>

- We generate our data in NewExpenses component
- We need to use that data to create an Expense component
- There is no direct connection between Expense component and NewExpenses component
- We can only communicate from parent to child or child to parent
- In such a case we need to utlize the closest parent component which has either direct or indirect access to both the components, in our case its the App.js component.

- Lifting State up is passing data generated in NewExpenses.js to App.js, we did this in the previous section. eg. addExpenseHandler in App.js

- We will now then transfer data in Expenes component.

## Controlled vs Uncontrolled Component

- In a controlled component, form data is handled by a React component.

- Uncontrolled components, where form data is handled by the DOM itself.

# Rendrering Lists and Rendering Conditional Content

[Top](#quick-access)

## Using map()

- Every Array of vanilla JS has a special method called map()

- What map does is it creates a new array based on another array and transforms every element in the original array.
- Example:

```jsx
const array1 = [1, 2, 3, 4, 5];

const map1 = array1.map((x) => x * 2);
console.log(map1);
//Expected outcome: Array [2,4,6,8,10]
```

- So map takes in as argument a function which will change each element accordingly.

## Array of JSX

- If an array of JSX elements is part of JSX code i.e

```jsx
return <div>{[<Card />, <Card />]}</div>;
```

- React will simply render the elements side by side.

## Rendering lists as data

- Now we can use both the concept of map and the the way a array of jsx is rendered, we can dynamically render lists.

```jsx
//Expenses.jsx
return (
  <div>
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  </div>
);
```

- here items is an array that is passed as prop from the parent, now we can use map() on items.
- map() takes in a function as argument, thus we have created a anonymous arrow function where expense is each element of items array.
- The function creates ExpenseItem component with values from the prop items array.

## Using Stateful Lists

- Notice in the [previous section](#lifting-state-up) we were able to transfer data from ExpenseForm Component to App component, now we want to use that data to Create more ExpenseItem component.

- Our Data for ExpenseItem component is stored in expenses array at App.js which is transferred as items as a prop to Expense.js to create ExpenseItem.

- But simply adding the new data Recieved from Expenseform to the expenses Array won't work as React won't re-render values changed in a variable or array.

- For this we need to create a state array such that react will rerender if expenses is changed.

```jsx
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";
import React, { useState } from "react";

const App = () => {
  const DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      console.log([expense, ...prevState]);
      return [expense, ...prevState];
    });
  };
  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
```

## Understanding Keys

- In the above code, when a new ExpenseItem is added, a new div is created but now every item is visited and updated according to order, i.e every item is overwritten
- This creates performance issue
- Also if one of the item inside had a stateful component , then a bug would occur
- React as it is today, it simply will not not where a new item should be added, it simply counts the items and adds accordingly and overwrites everything to match UI.
- To Help React identify individual item, we use the prop key,
- as our every item has a unique id, we can pass id as key to the element.

Thus our code becomes

```jsx
return (
  <div>
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  </div>
);
```

## Filtering Content

- The above code can be filtered according to year using the code below

```jsx
import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    // console.log(selectedYear);
    setFilteredYear(selectedYear);
  };
  const filteredExpenese = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {filteredExpenese.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};
export default Expenses;
```

## Outputting Conditional Content

- rendering different output under different condition.

- The code below display No items if the year has no items

```jsx
import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    // console.log(selectedYear);
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {filteredExpenses.length === 0 ? (
          <p> No items here</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )}
      </Card>
    </div>
  );
};
export default Expenses;
```

- We have used a conditional statement above

- We can also use the js trick of && operator where if the expression to the left of && is true the expression the right is executed.

```jsx
import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    // console.log(selectedYear);
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        {filteredExpenses.length === 0 && <p> No items here</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
      </Card>
    </div>
  );
};
export default Expenses;
```

- Or we can also store JSX content in a varaiable.

```jsx
import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    // console.log(selectedYear);
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expenseContent = <p> No items here</p>;
  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expenseContent}
      </Card>
    </div>
  );
};
export default Expenses;
```

## Adding Conditional return statement

- if for a certain condition the entire jsx of a component can change we use conditional return.
- Here we have created a component that displays filtered expenses and as that component can entirely be empty or have elements we can use condtional return

```jsx
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  //   let expenseContent = <p> No items here</p>;
  if (props.expenses.length === 0) {
    return <h2 className="expense-list__fallback"> Found No Expenses.</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
```

```jsx
import React, { useState } from "react";
import Card from "../UI/Card";
// import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    // console.log(selectedYear);
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};
export default Expenses;
```

## Adding dynamic style

- We can use the style property to add dynamic style
- style in react expects an object as its value
- thus we require two curly braces, one for denoting it is jsx and another for object.

```jsx
style ={ {} }
```

- to add specific css property just use it as a property of an object.

```jsx
style = { { height:'100%'}}
```

# Styling React Components

[Top](#quick-access)
