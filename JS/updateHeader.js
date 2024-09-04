
document.addEventListener('DOMContentLoaded', function() {
    // Kiểm tra trạng thái đăng nhập của người dùng
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (isLoggedIn) {
        // Nếu người dùng đã đăng nhập, hiển thị biểu tượng người dùng
        document.querySelector('.user-icon').style.display = 'block';
    } else {
        // Nếu chưa đăng nhập, giữ nguyên trạng thái ẩn
        document.querySelector('.user-icon').style.display = 'none';
    }
});