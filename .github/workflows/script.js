// script.js

// Toggle password visibility
const passwordInput = document.querySelector('input[type="password"]');
const toggleBtn = document.createElement('span');
toggleBtn.textContent = '👁️';
toggleBtn.style.cursor = 'pointer';
toggleBtn.style.position = 'absolute';
toggleBtn.style.right = '10px';
toggleBtn.style.top = '50%';
toggleBtn.style.transform = 'translateY(-50%)';
passwordInput.parentElement.appendChild(toggleBtn);

toggleBtn.addEventListener('click', () => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
});

// Optional: show alert when any input is focused
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
  input.addEventListener('focus', () => {
    input.style.backgroundColor = '#f9f9ff';
  });
  input.addEventListener('blur', () => {
    input.style.backgroundColor = 'white';
  });
});
