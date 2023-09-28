import React from "react";
import ReactDOM from "react-dom/client";




// <div id="parent">
// <div id="child">
//     <h1>h1 tag here</h1>
{/* <h2>h2 tag here</h2>  */}
// </div>
// </div>


//wrong answered

// const parent=ReactDOM.createRoot(document.getElementById("parent"));
// const child=ReactDOM.createRoot(document.getElementById("child"));

// parent.render(child);
// const header=React.createElement("h1",{},Hi);
// child.render(header);

// right answer

const parent = React.createElement("div",{id: "parent"},
React.createElement("div",{id: "child"},
[React.createElement("h1",{},"h1 tag here"),React.createElement("h2",{},"h2 tag here")]
));

console.log(parent);


const heading = React.createElement("h1",
{id: "heading" , xyz: "abc"},
"Hello World from React!");

console.log(heading); //returns an object not specifically h1 tag

const root = ReactDOM.createRoot(document.getElementById("root"));
const root1 = ReactDOM.createRoot(document.getElementById("root1"));

root.render(parent);
root1.render(heading);