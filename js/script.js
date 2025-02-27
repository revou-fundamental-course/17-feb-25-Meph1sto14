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
let counter = 0;

function slide() {
    if (counter === 0) {
        wrapper.classList.add('slide-animation');
    } else if (counter === 1) {
        wrapper.classList.remove('slide-animation');
        wrapper.classList.add('slide-animation-2');
    } else {
        wrapper.classList.remove('slide-animation-2');
        wrapper.style.transform = 'translateX(0)';
        counter = -1;
    }
    counter++;
}

setInterval(slide, 4000); // Ganti gambar setiap 4 detik