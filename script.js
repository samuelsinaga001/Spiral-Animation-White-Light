const canvas = document.getElementById('spiralCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let angle = 0;
let radius = 0;

function animateSpiral() {
    angle += 0.1; // Kecepatan rotasi
    radius += 0.5; // Jarak spiral

    const x = radius * Math.cos(angle) + canvas.width / 2;
    const y = radius * Math.sin(angle) + canvas.height / 2;

    // Menggambar garis putih
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, canvas.height / 2); // Titik awal
    ctx.lineTo(x, y); // Titik akhir
    ctx.stroke();

    requestAnimationFrame(animateSpiral);
}

animateSpiral();