/* Created by Tivotal */

let wrapper = document.querySelector(".wrapper");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  wrapper.classList.toggle("active");
});
