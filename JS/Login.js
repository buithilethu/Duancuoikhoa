document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#Loginform');
    const successMessage = document.querySelector('#success-message');
  
    if (!form) {
        console.error('Form element not found.');
        return;
    }
  
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Ngăn gửi biểu mẫu
  
        // Lấy giá trị từ các trường nhập liệu
        const emailOrPhoneInput = document.querySelector('#loginEmailOrPhone');
        const passwordInput = document.querySelector('#loginPassword');
  
        // Kiểm tra nếu các trường nhập liệu có tồn tại
        if (!emailOrPhoneInput || !passwordInput) {
            console.error('Input fields not found.');
            return;
        }
  
        const emailOrPhone = emailOrPhoneInput.value.trim();
        const password = passwordInput.value.trim();
  
        if (!emailOrPhone || !password) {
            alert('Vui lòng điền vào tất cả các thông tin.');
            return;
        }
  
        // Lấy dữ liệu người dùng từ localStorage
        let users = JSON.parse(localStorage.getItem('users')) || [];
  
        // Kiểm tra thông tin đăng nhập
        const user = users.find(user => (user.emailOrPhone === emailOrPhone) && (user.password === password));
  
        if (user) {
            // Đăng nhập thành công
            successMessage.textContent = 'Đăng nhập thành công!';
            successMessage.style.display = 'block'; // Hiển thị thông báo
            setTimeout(function() {
                window.location.href = 'https://buithilethu.github.io/Duancuoikhoa/'; // Hoặc trang bạn muốn điều hướng sau khi đăng nhập thành công
            }, 2000); // Đợi 2 giây trước khi chuyển hướng
        } else {
            // Đăng nhập thất bại
            successMessage.textContent = 'Thông tin đăng nhập không chính xác. Vui lòng kiểm tra lại.';
            successMessage.style.display = 'block'; // Hiển thị thông báo lỗi
        }
    });
  });
  console.log(localStorage);