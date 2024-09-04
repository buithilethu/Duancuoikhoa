document.addEventListener('DOMContentLoaded', function() {
    const editProfileForm = document.querySelector('#editProfileForm');
    const currentUserEmailOrPhone = localStorage.getItem('currentUser'); // email or phone của người dùng hiện tại

    if (!currentUserEmailOrPhone) {
        alert('Bạn cần đăng nhập để chỉnh sửa thông tin.');
        window.location.href = '/login'; // Chuyển hướng đến trang đăng nhập nếu chưa đăng nhập
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];
    let currentUser = users.find(user => user.emailOrPhone === currentUserEmailOrPhone);

    if (!currentUser) {
        alert('Không tìm thấy thông tin người dùng.');
        return;
    }

    // Hiển thị thông tin người dùng hiện tại trong form
    document.querySelector('#Firstname').value = currentUser.name.split(' ')[0];
    document.querySelector('#Lastname').value = currentUser.name.split(' ')[1] || '';
    document.querySelector('#Email').value = currentUser.emailOrPhone;
    document.querySelector('#Address').value = currentUser.address || '';

    editProfileForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const firstName = document.querySelector('#Firstname').value.trim();
        const lastName = document.querySelector('#Lastname').value.trim();
        const email = document.querySelector('#Email').value.trim();
        const address = document.querySelector('#Address').value.trim();
        const currentPassword = document.querySelector('#CurrentPassword').value.trim();
        const newPassword = document.querySelector('#NewPassword').value.trim();
        const confirmNewPassword = document.querySelector('#ConfirmNewPassword').value.trim();

        if (!firstName || !lastName || !email) {
            alert('Vui lòng điền vào tất cả các thông tin.');
            return;
        }

        // Kiểm tra mật khẩu hiện tại
        if (currentPassword && currentUser.password !== currentPassword) {
            alert('Mật khẩu hiện tại không chính xác.');
            return;
        }

        // Kiểm tra mật khẩu mới và xác nhận mật khẩu
        if (newPassword && newPassword !== confirmNewPassword) {
            alert('Mật khẩu mới và xác nhận mật khẩu phải giống nhau.');
            return;
        }

        // Cập nhật thông tin người dùng
        currentUser.name = `${firstName} ${lastName}`;
        currentUser.emailOrPhone = email;
        currentUser.address = address;
        if (newPassword) {
            currentUser.password = newPassword;
        }

        // Cập nhật dữ liệu trong localStorage
        const updatedUsers = users.map(user => user.emailOrPhone === currentUserEmailOrPhone ? currentUser : user);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        localStorage.setItem('currentUser', email); // Cập nhật thông tin người dùng hiện tại

        alert('Thông tin của bạn đã được cập nhật thành công!');
    });

    // Xử lý nút hủy
    document.querySelector('#cancelButton').addEventListener('click', function() {
        window.location.href = '/profile'; // Chuyển hướng về trang hồ sơ người dùng
    });
});
