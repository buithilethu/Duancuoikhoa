
  // const form = document.querySelector('form');

  // // Xử lý sự kiện gửi của biểu mẫu
  // form.addEventListener('submit', function(event) {
  //   // Lấy giá trị từ các trường nhập liệu
  //   const name = document.querySelector('input[placeholder="Name"]').value.trim();
  //   const emailOrPhone = document.querySelector('input[placeholder="Email or Phone Number"]').value.trim();
  //   const password = document.querySelector('input[placeholder="Password"]').value.trim();

  //   // Kiểm tra nếu các trường chưa được điền đầy đủ
  //   if (!name || !emailOrPhone || !password) {
  //     alert('Vui lòng điền vào tất cả các thông tin.');
  //     event.preventDefault(); // Ngăn gửi biểu mẫu
  //     return; // Kết thúc hàm để không thực hiện các kiểm tra khác
  //   }

  //   // Kiểm tra định dạng email hoặc số điện thoại (thực hiện kiểm tra cơ bản)
  //   const emailOrPhonePattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Định dạng email cơ bản
  //   const phonePattern = /^\d+$/; // Định dạng số điện thoại cơ bản (chỉ chứa chữ số)
  //   if (!emailOrPhonePattern.test(emailOrPhone) && !phonePattern.test(emailOrPhone)) {
  //     alert('Vui lòng nhập địa chỉ email hoặc số điện thoại hợp lệ.');
  //     event.preventDefault(); // Ngăn gửi biểu mẫu
  //     return;
  //   }

  //   // Kiểm tra độ dài mật khẩu (ví dụ, ít nhất 6 ký tự)
  //   if (password.length < 8) {
  //     alert('Mật khẩu cần phải có tối đa 8 kí tự.');
  //     event.preventDefault(); // Ngăn gửi biểu mẫu
  //     return;
  //   }

  //   // Nếu tất cả các kiểm tra đều hợp lệ, có thể gửi biểu mẫu hoặc thực hiện các hành động khác
  //   console.log('Creating account with', name, emailOrPhone, password);
  // });
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
  
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
  
      // Kiểm tra độ dài mật khẩu (ví dụ, ít nhất 8 ký tự)
      if (password.length < 8) {
        alert('Mật khẩu cần phải có ít nhất 8 kí tự.');
        event.preventDefault(); // Ngăn gửi biểu mẫu
        return;
      }
  
      // Lấy mảng người dùng từ localStorage hoặc khởi tạo mảng mới nếu không có
      const users = JSON.parse(localStorage.getItem('users')) || [];
  
      // Kiểm tra xem email hoặc số điện thoại đã tồn tại chưa
      const userExists = users.find(user => user.emailOrPhone === emailOrPhone);
  
      if (userExists) {
        alert('Email hoặc số điện thoại đã được đăng ký.');
        event.preventDefault(); // Ngăn gửi biểu mẫu
        return;
      }
  
      // Thêm người dùng mới vào mảng và lưu vào localStorage
      users.push({ name, emailOrPhone, password });
      localStorage.setItem('users', JSON.stringify(users));
  
      // Chuyển hướng về trang index.html sau khi tạo tài khoản thành công
      window.location.href = 'index.html';
    });
  });