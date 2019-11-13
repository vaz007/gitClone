## React interview questions

1. What is state and props in reactjs?
Answer : 
Props is short for “properties” and 
state are both plain JavaScript objects.While both hold information that influences the output of render, they are different in one important way: props get passed to the component similar to function parameters whereas state is managed within the component (similar to variables declared within a function). You can have props in functions but to use states in a function you would need to have react hooks. To use react states best practice is to use class based component. States can handle real time data inputs and to change the state of an application you need to use setState function. One can use props to call these state values in other children level component where we design the main HTML skeleton.

2. What is high order component? How do you use it?
Answer
A higher-order component in React is a pattern used to share common functionality between components without repeating code. A higher-order component is actually not a component though, it is a function. A HOC function takes a component as an argument and returns a component. It transforms a component into another component and adds additional data or functionality. In short:
const NewComponent = (BaseComponent) => {
  // ... create new component from old one and update
  return UpdatedComponent
}

3. What is context? What are the benefits of it?
Answer: 
Context usually provides a way to share data between components without having to explicitley pass a prop through every level of tree. We can also use Redux for better state managment system.

4. How to assign and change the value of state in a component?
Answer
to assign a value of state first we need to initialise the state and we can do this above the render method. Just by initialising the state object.(state = {} ). To change the value of state object we can use setState() method and pass the appopriate object for which we need to change the state for. For exameple :
state = {
    title : ''
}
onChange = (e) => {
    this.setState({ title : e.target.value})
  }

To be more specific we need to use onChange() method since we are changing the state in real time in react.



5. Could you explain the life-cycle of a react component?
Answer A component goes through four stages of its lifecycle.
1) Initialise: we set the states and props.

 2) Mounting: In this we use componentwillMount and componentDidMount()  functions 

3) Updating : setState() 

4) Unmount: componentWillUnmount(). The function runs when we unmount the functions.



6. What is fragment in react?
Answer
A fragment hepls us return multiple react elements. It helps us to add multiple children withouth adding extra nodes to our DOM element.

7. What is ref in react?
Answer 
It helps us to reference a DOM element or a component from within a parent component. It helps us to manage focus or in animations as well as while integrating coplex UI.

8. What is container component? What is presentational component?
Answer
A container component helps us to fetch the data and then render sub-cpmponent. 
A presentational component helps us to render frontend. Its only use is to make sure how things look and feel.

9. How to pass a function to a component?
Answer 
We need to export the function. And then import it in Components file 
Further while importing we need to make sure that our component starts with a Capital letter. For example
import ComponentName from './ComponentsFolder/Component.js'

10. What is portal?
Answer
A portal helps us to render an element outside its parent element.

11. How to share state between parent component and child component? How to share state between sibling components?
Answer
We need to use props to share data between parent and child of them and handle events. 
For example
import React  from 'react';
import faker from 'faker';

function Child(props){
    return(
        <div>
            <h1>{props.head}</h1>
            <img alt="avatar" src={faker.image.avatar()} />
        </div>
    )
}
export default Child;

import React  from 'react';
import Child from './Child'

function Parent(){
    return(
    <div>
        <Child head = "This is head property"></Child>
        
    </div>    
    )
    
}
export default Parent;


