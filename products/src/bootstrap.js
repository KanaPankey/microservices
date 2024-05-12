import faker from "faker";

const mount = (el) => {
  let products = ``;

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

// running in isolation...this comes from the webpack configs
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");

  // assuming our container doesnt have an element with id dev-products
  if (el) {
    // likely running in isolation
    mount(el);
  }
}

// running in Container
export { mount };
