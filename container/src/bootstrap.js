import { mount as productsMount } from "products/ProductsIndex";
import { mount as cartMount } from "cart/CartShow";
import { mount as practiceMount } from "practice/PracticeIndex";

console.log("Container!");

productsMount(document.querySelector("#my-products"));
cartMount(document.querySelector("#my-cart"));
practiceMount(document.querySelector("#my-practice"));
