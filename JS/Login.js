
    // Lấy tham chiếu đến biểu mẫu đăng nhập
    const loginForm = document.querySelector('.FormLogin form');
  
    // Xử lý sự kiện gửi của biểu mẫu
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Ngăn gửi biểu mẫu mặc định
  
      // Lấy giá trị từ các trường nhập liệu
      const emailOrPhone = document.querySelector('.FormLogin form input[placeholder="Email or Phone Number"]').value.trim();
      const password = document.querySelector('.FormLogin form input[placeholder="Password"]').value.trim();
  
      // Kiểm tra nếu các trường chưa được điền đầy đủ
      if (!emailOrPhone || !password) {
        alert('Vui lòng điền vào tất cả các thông tin');
        return; // Ngừng thực hiện nếu có lỗi
      }
  
      // Kiểm tra định dạng email hoặc số điện thoại (thực hiện kiểm tra cơ bản)
      if (!isValidEmail(emailOrPhone) && !isValidPhone(emailOrPhone)) {
        alert('Vui lòng nhập địa chỉ email hoặc số điện thoại hợp lệ.');
        return;
      }
  
      // Hàm kiểm tra định dạng email
      function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
      }
  
      // Hàm kiểm tra định dạng số điện thoại
      function isValidPhone(phone) {
        const re = /^[0-9]+$/;
        return re.test(phone);
      }
  
    //   // Gửi dữ liệu đăng nhập đến máy chủ
    //   fetch('/login', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ emailOrPhone, password })
    //   })
    //   .then(response => response.json())
    //   .then(data => {
    //     if (data.success) {
    //       alert('Login successful!');
    //       // Chuyển hướng đến trang chính hoặc thực hiện hành động khác sau khi đăng nhập thành công
    //       window.location.href = '/Duancuoikhoa/HTML/E-CommerceHomePage.html'; // Ví dụ: chuyển hướng đến trang bảng điều khiển
    //     } else {
    //       alert('Login failed: ' + 'src="Duancuoikhoa/HTML/404Error.html');
    //     }
    //   })
    //   .catch(error => {
    //     console.error('Error during login:', error);
    //     alert('An error occurred. Please try again later.');
    //   });
     });