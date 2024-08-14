document.addEventListener('DOMContentLoaded', function() {
    const userIcon = document.querySelector('#user-icon');

    // Kiểm tra nếu có người dùng đang đăng nhập
    if (localStorage.getItem('loggedIn') === 'true') {
        if (userIcon) {
            userIcon.style.display = 'block'; // Hiển thị biểu tượng người dùng
        }
    } else {
        if (userIcon) {
            userIcon.style.display = 'none'; // Ẩn biểu tượng người dùng
        }
    }
});