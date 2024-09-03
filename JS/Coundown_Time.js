// Ngày giờ mục tiêu cho đếm ngược
const targetDate = new Date("Sep 6, 2024 00:00:00").getTime();

// Hàm cập nhật đồng hồ đếm ngược mỗi giây
const countdown = setInterval(function() {
    // Lấy thời gian hiện tại
    const now = new Date().getTime();

    // Tính toán thời gian còn lại
    const distance = targetDate - now;

    // Tính toán ngày, giờ, phút, giây còn lại
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Hiển thị kết quả trên các phần tử với ID tương ứng
    document.getElementById("days").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');

    // Khi đếm ngược kết thúc
    if (distance < 0) {
        clearInterval(countdown);
        document.querySelector(".time_event").innerHTML = "<h1>Event Started</h1>";
    }
}, 1000);