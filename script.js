function login() {

    // Ambil username
    const username = document.getElementById("username").value;

    // Ambil password
    const password = document.getElementById("password").value;


    // Username dan password sementara
    const adminUsername = "admin";
    const adminPassword = "123456";


    // Cek login
    if (username === adminUsername && password === adminPassword) {

        alert("Login Berhasil! Selamat datang di Cicijastip Management 👋");

    } else {

        alert("Username atau Password salah!");

    }

}