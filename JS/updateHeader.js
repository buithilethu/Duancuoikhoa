// Khi người dùng đăng nhập thành công
localStorage.setItem('isLoggedIn', 'true');
 // Kiểm tra trạng thái đăng nhập khi trang được tải
 document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const userIcon = document.querySelector('.user-icon');

    if (isLoggedIn) {
        userIcon.classList.add('hidden');
    } else {
        userIcon.classList.remove('hidden');
    }
});