const input = document.getElementById('passwordInput');
const showPasswordBtn = document.getElementById('showPasswordBtn');

showPasswordBtn.addEventListener('click', () => {
    input.type = input.type === 'password' ? 'text' : 'password';
});