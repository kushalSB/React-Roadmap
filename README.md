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
- [Create React App](#creating-react-app)

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

## Creating React App

[Top](#quick-access)

To start your React app first we need to get Node.js, after which we can run the command in the terminal

```
npx create-react-app my-app
cd my-app
npm start
```
