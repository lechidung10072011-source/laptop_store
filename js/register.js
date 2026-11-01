
document.addEventListener("DOMContentLoaded", function () {
    const formRegister = document.getElementById("form-register");

    if (formRegister) {
        formRegister.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("reg-name").value;
            const email = document.getElementById("reg-email").value;
            const password = document.getElementById("reg-password").value;
            const confirmPassword = document.getElementById("reg-confirm").value;

            if (password.length < 6 || password.length > 8) {
                alert("Mật khẩu phải từ 6 đến 8 ký tự!");
                return false;
            }

            if (!/[a-z]/.test(password)) {
                alert("Mật khẩu phải chứa ít nhất 1 chữ cái thường [a-z]!");
                return false;
            }

            if (!/[A-Z]/.test(password)) {
                alert("Mật khẩu phải chứa ít nhất 1 chữ cái hoa [A-Z]!");
                return false;
            }

            if (!/[0-9]/.test(password)) {
                alert("Mật khẩu phải chứa ít nhất 1 chữ số [0-9]!");
                return false;
            }

            if (password !== confirmPassword) {
                alert("Sai mật khẩu! Mật khẩu xác nhận không trùng khớp.");
                return false;
            }

            const userData = {
                username: name,
                useremail: email,
                userpassword: password
            };

            localStorage.setItem("userAccount", JSON.stringify(userData));
            localStorage.setItem("currentUser", JSON.stringify({ username: name, email: email }));

            alert("Đăng ký tài khoản thành công!");
            window.location.href = "index.html";
            return true;
        });
    }
});
