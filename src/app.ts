import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { ListTemplate } from "./classes/ListTemplate.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement;

//inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amout = document.querySelector("#amount") as HTMLInputElement;

//list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
    e.preventDefault();

    let values:[string,string,number];
    values = [tofrom.value, details.value, amout.valueAsNumber]

    let doc: HasFormatter;
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    } else {
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
