document.addEventListener('DOMContentLoaded', function() {
    function isLoggedIn() {
        return localStorage.getItem('loggedIn') === 'true';
    }

    function updateUserIconVisibility() {
        const userIcon = document.querySelector('.user-icon');
        console.log('userIcon:', userIcon); // Xem nếu phần tử tồn tại
        if (userIcon) {
            if (isLoggedIn()) {
                userIcon.classList.remove('hidden');
            } else {
                userIcon.classList.add('hidden');
            }
        } else {
            console.error('Không tìm thấy phần tử với lớp .user-icon.');
        }
    }

    updateUserIconVisibility();
});
