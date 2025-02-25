// Ini JavaScript Exsternal

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari pengiriman default
    
    // Ambil nilai dari input fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const interest = document.getElementById('interest').value;
    
    // Lakukan sesuatu dengan data (misalnya, kirim ke server atau tampilkan pesan)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Interest:', interest);
    
    // Anda bisa menambahkan validasi form di sini
});