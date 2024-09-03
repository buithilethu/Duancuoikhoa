// Hàm kiểm tra trạng thái đăng nhập (thay đổi theo cách bạn lưu trữ trạng thái đăng nhập)
function isLoggedIn() {
    // Ví dụ: giả định trạng thái đăng nhập lưu trữ trong localStorage
    return localStorage.getItem('loggedIn') === 'true';
}

// Hàm để ẩn hoặc hiện phần tử user-icon
function updateUserIconVisibility() {
    const userIcon = document.querySelector('.user-icon');
    if (isLoggedIn()) {
        userIcon.classList.remove('hidden');
    } else {
        userIcon.classList.add('hidden');
    }
}

// Gọi hàm để cập nhật trạng thái khi trang tải
document.addEventListener('DOMContentLoaded', updateUserIconVisibility);