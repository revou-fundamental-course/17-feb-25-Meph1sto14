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

    // Tampilkan pesan SweetAlert2 untuk semua pilihan (opsional)
    Swal.fire({
        icon: 'success',
        title: 'Form Submitted!',
        text: 'Your information has been successfully submitted.',
        confirmButtonText: 'OK'
    });
});

const wrapper = document.querySelector('.wrapper');
const images = document.querySelectorAll('.slide-image');
let counter = 0;
let imageWidth = images[0].clientWidth;

function slide() {
    counter++;
    if (counter >= images.length) {
        counter = 0;
        wrapper.style.transition = 'none'; // Hilangkan transisi saat kembali ke awal
        wrapper.style.transform = `translateX(0px)`;
        setTimeout(() => {
            wrapper.style.transition = 'transform 0.6s ease-in-out'; // Kembalikan transisi
        }, 10);
    } else {
        wrapper.style.transform = `translateX(-${imageWidth * counter}px)`;
    }
}

setInterval(slide, 3000); // Ganti gambar setiap 3 detik