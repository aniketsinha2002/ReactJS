/* <div id="parent">
        <div id="child">
            <h1>I am h1 tag</h1>
            <h1> I am h2 tag </h2>
        </div>
        <div id="child2">
            <h1>I am next h1 tag</h1>
            <h1> I am next h2 tag </h2>
        </div>
    </div> */

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "ok" }, "I am h1 tag"),
    React.createElement("h2", { id: "ok" }, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "ok" }, "I am next h1 tag"),
    React.createElement("h2", { id: "ok" }, "I am next h2 tag"),
  ]),
]);
console.log(heading); //object

const newdiv = ReactDOM.createRoot(document.getElementById("root"));

newdiv.render(heading);
