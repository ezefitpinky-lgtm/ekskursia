const burger = document.getElementById('burgerMenu');
const nav = document.getElementById('navLinks');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

const form = document.getElementById('bookingForm');
const msgDiv = document.getElementById('formMessage');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('userName').value.trim();
    const phone = document.getElementById('userPhone').value.trim();
    
    if (!name || !phone) {
        msgDiv.innerHTML = '<span style="color:#c67b2e;">❌ Пожалуйста, укажите имя и телефон</span>';
        return;
    }
    
    msgDiv.innerHTML = '<span style="color:#2c5a3a;">⏳ Отправка...</span>';
    
    setTimeout(() => {
        msgDiv.innerHTML = '<span style="color:#2c5a3a;">✅ Заявка отправлена! Менеджер свяжется с вами.</span>';
        form.reset();
        
        setTimeout(() => {
            msgDiv.innerHTML = '';
        }, 5000);
    }, 600);
});
