// CICIJASTIP MANAGEMENT
// File JavaScript untuk fungsi dashboard

console.log("Cicijastip Management berhasil dijalankan!");

// DATA SEMENTARA
let totalPenjualan = 0;
let totalKeuntungan = 0;
let totalCustomer = 0;
let totalTrip = 0;


// FUNGSI FORMAT RUPIAH

function formatRupiah(angka) {

  return "Rp " + angka.toLocaleString("id-ID");

}


// TAMPILKAN DATA DASHBOARD

function updateDashboard() {

  document.getElementById("totalPenjualan").innerText =
    formatRupiah(totalPenjualan);

  document.getElementById("totalKeuntungan").innerText =
    formatRupiah(totalKeuntungan);

  document.getElementById("totalCustomer").innerText =
    totalCustomer;

  document.getElementById("totalTrip").innerText =
    totalTrip;

}


// JALANKAN DASHBOARD

updateDashboard();