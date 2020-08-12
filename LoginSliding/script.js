const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container2 = document.getElementById('container');


// Script for first login
sign_up_btn.addEventListener('click', () => {
  container.classList.add("sign-up-mode");
})

sign_in_btn.addEventListener('click', () => {
  container.classList.remove("sign-up-mode");
})


// Script for second login
signUpButton.addEventListener('click', () => {
  container2.classList.add('right-panel-active')
})

signInButton.addEventListener('click', () => {
  container2.classList.remove('right-panel-active')
})