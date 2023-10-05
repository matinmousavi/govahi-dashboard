let sign_in_btn = document.querySelector("#sign-in-btn");
let sign_up_btn = document.querySelector("#sign-up-btn");
let container = document.querySelector(".container");
console.log(container);

sign_in_btn.addEventListener("click", (e) => {
    e.preventDefault()
  container.classList.add("sign-up-mode");
  console.log("ssss");
});

sign_up_btn.addEventListener("click", () => {
    // console.log("ssss");
  container.classList.remove("sign-up-mode");
});
