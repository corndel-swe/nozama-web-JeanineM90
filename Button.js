//button:hover { background-color: blue; }

const darkBtn = document.getElementById('dark-theme-btn')

darkBtn.addEventListener('click', () => {
document.body.classList.add('dark')
document.body.classList.remove('light')
})