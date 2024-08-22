document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const cancelButton = document.querySelector('#cancelbutton');
    
    if (!form) {
        console.error('Không tìm thấy phần tử biểu mẫu.');
        return;
    }

    // Tải dữ liệu người dùng 
    function loadUserData() {
        const user = JSON.parse(localStorage.getItem('currentUser'));

        if (user) {
            document.querySelector('#Firstname').value = user.firstName || '';
            document.querySelector('#Lastname').value = user.lastName || '';
            document.querySelector('#Email').value = user.email || '';
            document.querySelector('#Address').value = user.address || '';
        } else {
            console.error('Không tìm thấy dữ liệu người dùng nào trong localStorage.');
        }
    }

    loadUserData();

    // Lưu dữ liệu người dùng cập nhật
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Ngăn chặn việc gửi biểu mẫu mặc định

        const firstName = document.querySelector('#Firstname').value.trim();
        const lastName = document.querySelector('#Lastname').value.trim();
        const email = document.querySelector('#Email').value.trim();
        const address = document.querySelector('#Address').value.trim();
        const currentPassword = document.querySelector('#CurrentPassword').value.trim();
        const newPassword = document.querySelector('#NewPassword').value.trim();
        const confirmNewPassword = document.querySelector('#ConfirmNewPassword').value.trim();

        if (newPassword && newPassword !== confirmNewPassword) {
            alert('Mật khẩu mới và mật khẩu xác nhận không khớp.');
            return;
        }

        let user = JSON.parse(localStorage.getItem('currentUser'));

        if (!user) {
            alert('Không tìm thấy dữ liệu người dùng.');
            return;
        }
        // Xác thực mật khẩu
        if (newPassword && currentPassword !== user.password) {
            alert('Mật khẩu hiện tại không chính xác.');
            return;
        }
        // Cập nhật dữ liệu người dùng
        user = {
            ...user,
            firstName,
            lastName,
            email,
            address,
            password: newPassword || user.password // Cập nhật mật khẩu nếu mật khẩu mới được cung cấp
        };

        localStorage.setItem('currentUser', JSON.stringify(user));
        alert('Profile updated successfully!');
    });

    // Sự kiện khi nhấn vào nút cancel
    cancelButton.addEventListener('click', function() {
        if (confirm('Bạn có chắc chắn muốn hủy không? Các thay đổi chưa được lưu sẽ bị mất.')) {
            window.location.href = 'https://buithilethu.github.io/Duancuoikhoa/HTML/MyAccount.html'; 
        }
    });
});