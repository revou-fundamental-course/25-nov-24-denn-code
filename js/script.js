function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value); // Ambil nilai berat badan dari input dan ubah ke angka desimal
    const height = parseFloat(document.getElementById('height').value) / 100; // Ambil nilai tinggi badan, ubah ke angka desimal, lalu konversi ke meter

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) { // Validasi: pastikan berat dan tinggi adalah angka valid dan lebih besar dari 0
        alert('Mohon masukkan data yang valid.'); // Tampilkan peringatan jika input tidak valid
        return; // Hentikan eksekusi fungsi jika input tidak valid
    }

    const bmi = weight / (height * height); // Hitung BMI menggunakan rumus: berat / (tinggi * tinggi)
    const category = bmi < 18.5 ? 'Berat badan kurang' : // Tentukan kategori berdasarkan nilai BMI
                    (bmi >= 18.5 && bmi < 24.9) ? 'Berat badan normal' :
                    (bmi >= 25 && bmi < 29.9) ? 'Kelebihan berat badan' :
                    'Obesitas';

    document.getElementById('bmi-value').textContent = bmi.toFixed(2); // Tampilkan nilai BMI yang dihitung dengan 2 desimal
    document.getElementById('bmi-category').textContent = category; // Tampilkan kategori BMI
    document.getElementById('bmi-description').textContent = `BMI Anda: ${bmi.toFixed(2)} (${category})`; // Tampilkan deskripsi lengkap BMI
}

function resetBMI() {
    document.getElementById("bmi-value").innerText = "-"; // Reset nilai BMI menjadi tanda "-"
    document.getElementById("bmi-category").innerText = "-"; // Reset kategori BMI menjadi tanda "-"
    document.getElementById("bmi-description").innerText = "Masukkan data Anda untuk menghitung BMI."; // Reset deskripsi menjadi teks awal
}
