// log_sign.js
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

// Transition logic
signUpButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});

// Check query string
window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const action = params.get('action');

  if (action === 'signup') {
    container.classList.add("right-panel-active");
  } else {
    container.classList.remove("right-panel-active"); // default to login
  }
});
