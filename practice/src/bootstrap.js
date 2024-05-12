const mount = (el) => {
  el.innerHTML = "Practice";
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-practice");
  if (el) {
    mount(el);
  }
}

export { mount };
