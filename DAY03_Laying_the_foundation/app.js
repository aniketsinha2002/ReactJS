import React from "react";
import ReactDOM from "react-dom/client";

// React Element => Object => HTML Element (When we render this stuff)

const heading = React.createElement("h1", { id: "heading" }, "Learning Namaste React from Akshay Saini Sir");


// JSX is not HTML in Java Script. Its HTML-like syntax but not HTML exactly. JSX is JSX

//NORMAL REACT ELEMENT
const jsxHeading = (
    <h1 className="heading" tabIndex="5"> Learning Namaste React from Akshay Saini Sir, Using JSX here!! </h1>
);

//Above is not a valid pure Java Script (JS). Browser don't understand this. JS Engine don't understands this code.
 
// any piece of JS code is such that JS engine unederstands it! It understands ECMA Script (ES6) !! That is what my browser understands

//Then how its gettin' printed on the browser - the heading ??? => PARCEL is doing this => THE BEAST

//JSX (transpiled before it reaches the JS Engine) transpiled-meaning its getting converted to the code that browser can understands => to Browser // DONE BY Babel(a JS Compiler) - (a dependency of PARCEL) // JSX to React code


//React Component => button,header,card,footer,inputbox,search bar, list of cards => TWO WAYS OF CREATING REACT COMPONENT => Class based component (Old way of writing code), Functional way of component (New way of writing code)

// React Functional component => A functional component is just a normal JS function which returns some JSX (Start with CAPITAL letter react way) or bunch of React Element


//way of writing arrow functions 
const fn = () => true; // industry way
const fn2 = () => { return true };

//REACT COMPONENT => FUNCTIONAL
const HeadingComponent = () => {
    return <h1 className="heading"> Heading Component - first </h1>
};

//REACT ELEMENT - OBJECT IS PRESENT INSIDE IT
const elem = (
    <span>React Element</span>
);

//REACT ELEMENT inside REACT ELEMENT
const Title = (
        <h1 id="fc"> This is written using {elem} - TITLE</h1>
); // industry way


//CROSS SIDE SCRIPTED ATTACKS 
//const data = api.getData();
//JSX takes care of these type of injection attacks -> sanytizing the data when we put inside {} and then passing, prevents cross side scripting attacks


const NewData = 100 + 200;

//COMPONENT COMPOSITION
const HeadingComponent1 = () => (
    <div>
        {Title}
        <HeadingComponent></HeadingComponent> 
        <HeadingComponent /> 
        {HeadingComponent()}
        <h1>{ NewData}</h1>
        <h1> This is written using functional component - HEADING</h1>
    </div>
); // industry way
//REACT ELEMENT INSIDE FUNCTIONAL COMPONENT
//FUNCTIONAL COMPONENT INSIDE FUNCTIONAL COMPONENT



//Sometimes we write return and sometimes we don't ..same thing




const root = ReactDOM.createRoot(document.getElementById("root")); 

//RENDERING A REACT ELEMENT IN THIS WAY
root.render(jsxHeading); 

//RENDERING A FUNCTIONAL COMPONENT IN THIS WAY
root.render(<HeadingComponent1></HeadingComponent1>);

//RENDERING A REACT ELEMENT IN THIS WAY
//root.render(Title);

