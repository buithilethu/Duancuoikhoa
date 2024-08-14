// Lấy biểu mẫu và phần tử thông báo
const form = document.querySelector('#registration-form');
const successMessage = document.querySelector('#success-message');

// Xử lý sự kiện gửi của biểu mẫu
form.addEventListener('submit', function(event) {
    // Lấy giá trị từ các trường nhập liệu
    const name = document.querySelector('#name').value.trim();
    const emailOrPhone = document.querySelector('#emailorphone').value.trim();
    const password = document.querySelector('#password').value.trim();
    const confirmPassword = document.querySelector('#Confirmpassword').value.trim();

    // Kiểm tra nếu các trường chưa được điền đầy đủ
    if (!name || !emailOrPhone || !password || !confirmPassword) {
        alert('Vui lòng điền vào tất cả các thông tin.');
        event.preventDefault(); // Ngăn gửi biểu mẫu
        return; // Kết thúc hàm để không thực hiện các kiểm tra khác
    }

    // Kiểm tra nếu mật khẩu và xác nhận mật khẩu không giống nhau
    if (password !== confirmPassword) {
        alert('Mật khẩu và xác nhận mật khẩu phải giống nhau.');
        event.preventDefault(); // Ngăn gửi biểu mẫu
        return; // Kết thúc hàm để không thực hiện các kiểm tra khác
    }

    // Kiểm tra định dạng email hoặc số điện thoại (thực hiện kiểm tra cơ bản)
    const emailOrPhonePattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Định dạng email cơ bản
    const phonePattern = /^\d+$/; // Định dạng số điện thoại cơ bản (chỉ chứa chữ số)
    if (!emailOrPhonePattern.test(emailOrPhone) && !phonePattern.test(emailOrPhone)) {
        alert('Vui lòng nhập địa chỉ email hoặc số điện thoại hợp lệ.');
        event.preventDefault(); // Ngăn gửi biểu mẫu
        return;
    }

    // Kiểm tra độ dài mật khẩu (ít nhất 8 ký tự)
    if (password.length < 8) {
        alert('Mật khẩu cần phải có ít nhất 8 kí tự.');
        event.preventDefault(); // Ngăn gửi biểu mẫu
        return;
    }

    // Nếu tất cả các kiểm tra đều hợp lệ
    successMessage.textContent = 'Đăng ký thành công!'; // Cập nhật thông báo
    successMessage.style.display = 'block'; // Hiển thị thông báo

    // Ngăn gửi biểu mẫu (nếu không gửi đến máy chủ, bỏ qua dòng này nếu gửi biểu mẫu thực sự)
    event.preventDefault();
});