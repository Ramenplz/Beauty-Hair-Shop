document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const authMessage = document.getElementById('auth-message');
    
    // ตรวจสอบสถานะล็อกอินและอัพเดท UI
    updateLoginStatus();
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            
            // ไม่ตรวจสอบรหัสผ่าน ใส่ข้อมูลอะไรก็ล็อกอินได้
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userEmail', email);
            
            authMessage.textContent = 'ล็อกอินสำเร็จ!';
            authMessage.style.color = 'green';
            authMessage.style.backgroundColor = '#e8f5e9';
            
            // อัพเดท UI
            updateLoginStatus();
            
            // ลิงก์ไปหน้าอื่นหลังจากล็อกอินสำเร็จ
            setTimeout(() => {
                const redirectUrl = localStorage.getItem('redirectAfterLogin') || 'index.html';
                window.location.href = redirectUrl;
            }, 1000);
        });
    }
    
    // ฟังก์ชันสำหรับการล็อกเอาท์
    document.addEventListener('click', function(e) {
        if (e.target.id === 'logout-btn') {
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('userEmail');
            updateLoginStatus();
            window.location.href = 'index.html';
        }
    });
});

// อัพเดทสถานะล็อกอินใน UI
function updateLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const userEmail = localStorage.getItem('userEmail');
    const loginButtons = document.querySelectorAll('#login-btn');
    
    loginButtons.forEach(button => {
        if (isLoggedIn) {
            button.innerHTML = `<i class="fas fa-user"></i> ${userEmail}`;
            button.id = 'logout-btn';
            button.href = '#';
        } else {
            button.textContent = 'เข้าสู่ระบบ';
            button.id = 'login-btn';
            button.href = 'login.html';
        }
    });
}