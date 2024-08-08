
  const form = document.querySelector('form');

  // Xử lý sự kiện gửi của biểu mẫu
  form.addEventListener('submit', function(event) {
    // Lấy giá trị từ các trường nhập liệu
    const name = document.querySelector('input[placeholder="Name"]').value.trim();
    const emailOrPhone = document.querySelector('input[placeholder="Email or Phone Number"]').value.trim();
    const password = document.querySelector('input[placeholder="Password"]').value.trim();

    // Kiểm tra nếu các trường chưa được điền đầy đủ
    if (!name || !emailOrPhone || !password) {
      alert('Vui lòng điền vào tất cả các thông tin.');
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

    // Kiểm tra độ dài mật khẩu (ví dụ, ít nhất 6 ký tự)
    if (password.length < 8) {
      alert('Mật khẩu cần phải có tối đa 8 kí tự.');
      event.preventDefault(); // Ngăn gửi biểu mẫu
      return;
    }

    // Nếu tất cả các kiểm tra đều hợp lệ, có thể gửi biểu mẫu hoặc thực hiện các hành động khác
    console.log('Creating account with', name, emailOrPhone, password);
  });
// const signupForm = document.querySelector('.FormSignUp form'); // đảm bảo rằng mã chỉ áp dụng cho biểu mẫu đăng ký trong phần tử này.

// signupForm.addEventListener('submit', (event) => {
//   event.preventDefault(); //ngăn chặn hành vi gửi biểu mẫu mặc định của trình duyệt
//     //Lấy giá trị từ các trường nhập liệu trong biểu mẫu và loại bỏ khoảng trắng thừa ở đầu và cuối bằng trim().
//   const name = document.querySelector('.FormSignUp form input[placeholder="Name"]').value.trim();
//   const emailOrPhone = document.querySelector('.FormSignUp form input[placeholder="Email or Phone Number"]').value.trim();
//   const password = document.querySelector('.FormSignUp form input[placeholder="Password"]').value.trim();

//   // Kiểm tra nếu bất kỳ trường nào còn trống. Nếu có, hiển thị thông báo lỗi và dừng thực hiện các bước tiếp theo
//   if (!name || !emailOrPhone || !password) {
//     alert('Please fill in all fields.');
//     return;
//   }

//   // Kiểm tra tính hợp lệ của email hoặc số điện thoại bằng cách sử dụng các hàm kiểm tra riêng biệt.
//   if (!isValidEmail(emailOrPhone) && !isValidPhone(emailOrPhone)) {
//     alert('Please enter a valid email or phone number.');
//     return;
//   }

//   // kiểm tra email
//   function isValidEmail(email) {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(($$[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$$)|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
//   }

//   // Kiểm tra Số điện thoại
//   function isValidPhone(phone) {
//     const re = /^[0-9]+$/;
//     return re.test(phone);
//   }

//   // Gửi dữ liệu đăng ký đến máy chủ
//   fetch('/signup', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ name, emailOrPhone, password })
//   })
//   .then(response => response.json())
//   .then(data => {
//     if (data.success) {
//       alert('Signup successful!');
//       // Redirect to a different page or perform other actions based on success
//     } else {
//       alert('Signup failed: ' + data.error);
//     }
//   })
//   .catch(error => {
//     console.error('Error during signup:', error);
//     alert('An error occurred. Please try again later.');
//   });
// });