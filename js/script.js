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
let direction = 1;

function slide() {
    counter += direction;

    if (counter >= images.length - 1) {
        direction = -1;
        counter = images.length - 2; // Mundur ke gambar kedua terakhir
    } else if (counter < 1) { // Mulai maju dari gambar kedua
        direction = 1;
        counter = 1;
    }

    wrapper.style.transform = `translateX(-${imageWidth * counter}px)`;
}

setInterval(slide, 3000);