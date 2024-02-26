import React from "react";
import "./JSXexample.css";

//const el = <h1>{10 + 20}</h1>
//const name = "Site";
//const el = <h1>React JS Application {name}</h1>;
// function show(name) {
//     return name;
// }
// const el = <h1>React JS Application {show("Site")}</h1>;
let title = {
    maintitle: "main-title",
    name: "Site",
    description: "is a Javascript Library.",
};
//const maintitle = "main-title";
const el = <h1 className={title.maintitle}>React JS Application <i>{title.name + " " + title.description}</i> <br></br> {"It is created by facebook."}</h1>
//export default el;

const Customer = (props) => {
    return <h1>{props.children}</h1>
}
export default Customer;