# React-Roadmap

Learning React essentials

## Learning Resources

- [Udemy](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)
- [React vs vanilla JS](https://www.framer.com/blog/posts/react-vs-vanilla-js/)
- [Components Basics](<https://medium.com/the-andela-way/understanding-react-components-37f841c1f3bb#:~:text=Components%20are%20the%20building%20blocks,(User%20Interface)%20should%20appear.>)

## Quick Access

- [Why use React instead of normal JavaScript](#why-use-react-instead-of-normal-javascript)
- [React Components](#react-components)

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

## Props

- Props is short for properties and are used to pass data between React Components. Reacts's Data flow between props is unidirectional (from parent to child only).

- Props are used to make React's components easily and dynamically customizable.

- Props are read-only i.e a component that recieves a prop must never modify the prop it was passed, this ensures the component always returns the same result for the same input.

