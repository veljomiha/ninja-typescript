import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";
const form = document.querySelector(".new-item-form");
//inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amout = document.querySelector("#amount");
//list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amout.valueAsNumber];
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
// Generics
// const addUID = <T extends {name:string}>(obj: T) => {
//     let uid = Math.floor(Math.random() * 100);
//     return{...obj,uid}
// }
// let docOne = addUID({name:"yoshi", age:40});
// console.log(docOne.age)
// generics with interface
// interface Resource<T>{
//     uid:number;
//     resourceName:string;
//     data:T;
// }
// const docTwo: Resource<object> = {
//     uid:1,
//     resourceName:'person',
//     data:{name: "shaun"}
// }
// console.log(docTwo)
//ENUMS
// enum ResourceType { BOOK, AUTHOR, DIRECTOR }
// interface Resource<T> {
//     uid: number;
//     resourceName: ResourceType;
//     data: T;
// }
// const docThree: Resource<object> = {
//     uid: 1,
//     resourceName: ResourceType.BOOK,
//     data: { title: "name of the wind" }
// }
// console.log(docThree)
