// localStorage.setItem('account', JSON.stringify([]))

let dataUser = JSON.parse(localStorage.getItem('account')) // đọc dữ liệu tài khoản dưới localStorage 

function checkEmail(email, password, type) {
    console.log("🤔🤔🤔 ~ file: index.js:155 ~ checkEmail ~ email, password, type:", email, password, type)
    let exists = false;

    for (let i = 0; i < dataUser.length; i++) {
        if (email === dataUser[i].email) {
            if (type === 'login') {
                // Nếu loại là 'login', kiểm tra cả password
                if (password === dataUser[i].password) {
                    exists = true;
                }
            } else {
                console.log("🤔🤔🤔 ~ file: index.js:161 ~ checkEmail ~ type:", type)
                // Nếu loại không phải 'login', chỉ cần kiểm tra email
                exists = true;
            }

            // Dừng vòng lặp vì đã tìm thấy email khớp
            return exists
        }
    }

    return exists;
}



function handleRegister() {
    event?.preventDefault() // ngăn load trang web
    let valueEmail = document.getElementById('username').value;
    let valuePassword = document.getElementById('password').value;
    let valueConfPassword = document.getElementById('confirmpassword').value;
    if (valueEmail !== '' && valuePassword !== '') {
        if (checkEmail(valueEmail)) {
            Swal.fire('Email already exists')
        } else {
            if (valuePassword === valueConfPassword) {
                dataUser.push({ id: dataUser.length + 1, email: valueEmail, password: valuePassword })
                localStorage.setItem('account', JSON.stringify(dataUser))
                // alert('Register success') 
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Register success",
                    showConfirmButton: false,
                    timer: 1500
                  });
                setTimeout(() => {
                    window.location.href = "login.html"// ngược lại thông báo email hợp lệ
                },2000)
            } else {
                Swal.fire('Confirm Password fail') // ngược lại thông báo email hợp lệ
            }
        }
    } else {
        Swal.fire('Please enter your email and password')
    }
}


function handleLogin() {
    event?.preventDefault()
    let valueEmail = document.getElementById('username').value;
    let valuePassword = document.getElementById('password').value;
    if (valueEmail !== '' && valuePassword !== '') {
        if (checkEmail(valueEmail, valuePassword.toString(), 'login')) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Login success",
                showConfirmButton: false,
                timer: 1500
              });
            setTimeout(() => {
                window.location.href = 'index.html'
            },2000)
        } else {
            Swal.fire('Account not found')
        }
    } else {
        Swal.fire('Please enter email and password')
    }
}