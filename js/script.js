// Ini JavaScript Exsternal

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form default

    // Ambil nilai dari input fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const interest = document.getElementById('interest').value;

    // Validasi jika pilihan pelanggan belum dipilih
    if (!interest) {
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Please select a travel destination!',
            confirmButtonText: 'OK'
        });
        return;
    }

    // Tampilkan pesan SweetAlert2 dengan data input
    Swal.fire({
        icon: 'success',
        title: 'Form Submitted!',
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Destination:</strong> ${interest}</p>`,
        confirmButtonText: 'OK'
    });
});