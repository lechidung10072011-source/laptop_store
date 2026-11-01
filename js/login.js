
document.addEventListener("DOMContentLoaded", function () {
    const formLogin = document.getElementById("form-login");

    if (formLogin) {
        formLogin.addEventListener("submit", function (event) {
            event.preventDefault();
            
            const emailLogin = document.getElementById("login-email")?.value; 
            const passwordLogin = document.getElementById("login-password").value;

            if (passwordLogin.length < 6) {
                alert("Mật khẩu phải có ít nhất 6 ký tự!");
                return false;
            }

            const savedAccount = JSON.parse(localStorage.getItem("userAccount"));

            if (!savedAccount) {
                alert("Tài khoản không tồn tại! Vui lòng đăng ký trước.");
                return false;
            }

            if (passwordLogin === savedAccount.userpassword) {
                const loginSession = {
                    username: savedAccount.username,
                    email: savedAccount.useremail
                };
                localStorage.setItem("currentUser", JSON.stringify(loginSession));
                
                alert("Đăng nhập thành công!");
                window.location.href = "index.html";
                return true;
            } else {
                alert("Sai mật khẩu hoặc thông tin đăng nhập!");
                return false;
            }
        });
    }
});

