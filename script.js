// Этот код выполнится, когда вся страница будет загружена
document.addEventListener('DOMContentLoaded', function() {
    // Обработка формы регистрации
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Предотвращаем перезагрузку страницы

            const name = document.getElementById('name').value;
            const emailOrPhone = document.getElementById('emailOrPhone').value;
            const password = document.getElementById('password').value;

            if (name && emailOrPhone && password) {
                alert('Регистрация успешна!\nИмя: ' + name + '\nКонтакт: ' + emailOrPhone);
                // Здесь ты можешь отправить данные на сервер
            } else {
                alert('Пожалуйста, заполните все поля');
            }
        });
    }

    // Обработка формы входа
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Предотвращаем перезагрузку страницы

            const emailOrPhone = document.getElementById('loginEmailOrPhone').value;
            const password = document.getElementById('loginPassword').value;

            if (emailOrPhone && password) {
                alert('Вход выполнен!\nКонтакт: ' + emailOrPhone);
                // Здесь ты можешь отправить данные на сервер для проверки
            } else {
                alert('Пожалуйста, заполните все поля');
            }
        });
    }
});

// Функции для переходов на страницы регистрации и входа
function redirectToCreateAccount() {
    window.location.href = "create_account.html"; // Перенаправление на страницу регистрации
}

function redirectToSignIn() {
    window.location.href = "sign_in.html"; // Перенаправление на страницу входа
}