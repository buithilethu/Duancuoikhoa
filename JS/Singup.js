document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#Singupform');
    const successMessage = document.querySelector('#success-message');

    if (!form) {
        console.error('Không tìm thấy phần tử biểu mẫu.');
        return;
    }

    if (!successMessage) {
        console.error('Không tìm thấy yếu tố thông báo thành công.');
        return;
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Ngăn gửi biểu mẫu

        const name = document.querySelector('#Signname').value.trim();
        const emailOrPhone = document.querySelector('#Signemailorphone').value.trim();
        const password = document.querySelector('#Signpassword').value.trim();
        const confirmPassword = document.querySelector('#SignConfirmpassword').value.trim();

        if (!name || !emailOrPhone || !password || !confirmPassword) {
            alert('Vui lòng điền vào tất cả các thông tin.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Mật khẩu và xác nhận mật khẩu phải giống nhau.');
            return;
        }

        const emailOrPhonePattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^\d+$/;
        if (!emailOrPhonePattern.test(emailOrPhone) && !phonePattern.test(emailOrPhone)) {
            alert('Vui lòng nhập địa chỉ email hoặc số điện thoại hợp lệ.');
            return;
        }

        if (password.length < 8) {
            alert('Mật khẩu cần phải có ít nhất 8 kí tự.');
            return;
        }

        // Lưu thông tin người dùng vào localStorage
        const userData = {
            name: name,
            emailOrPhone: emailOrPhone,
            password: password
        };

        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(userData);
        localStorage.setItem('users', JSON.stringify(users));

        successMessage.textContent = 'Đăng ký thành công!';
        successMessage.style.display = 'block';

        setTimeout(function() {
            window.location.href = 'https://buithilethu.github.io/Duancuoikhoa/';
        }, 2000);
    });
});