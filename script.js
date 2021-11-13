const c = console.log;
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

canvas.width = 200;
canvas.height = 200;

const image1 = new Image();
image1.src = 'data:image/png;base64,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';



image1.addEventListener('load', () => {


    let particlesArray = [];
    const numberOfParticles = 2000;

    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);

    let mappedImage = [];
    for (let y = 0; y < canvas.height; y++) {
        let row = [];
        for (let x = 0; x < canvas.width; x++) {
            const red = pixels.data[(y * 4 * pixels.width) + (x * 4)];
            const green = pixels.data[(y * 4 * pixels.width) + (x * 4 + 1)];
            const blue = pixels.data[(y * 4 * pixels.width) + (x * 4 + 2)];
            const brightness = calculateRelativeBrightness(red, green, blue);
            const cell = [
                cellBrghtness = brightness,
            ];
            row.push(cell);
        }
        mappedImage.push(row)
    }

    c(mappedImage)

    function calculateRelativeBrightness(red, green, blue) {
        return Math.sqrt(
            (red * red) * 0.299 +
            (green * green) * 0.587 +
            (blue * blue) * 0.114
        ) / 100;
    }

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = 0;
            this.speed = 0;
            this.velocity = Math.random() * 1;
            this.size = Math.random() * 1 + 1;
            this.position1 = Math.floor(this.x);
            this.position2 = Math.floor(this.y);
        }
        update() {
            this.y += this.velocity;
            if (this.y >= canvas.height) {
                this.y = 0;
                this.x = Math.random() * canvas.width;
            }
        }
        draw() {
            ctx.beginPath();
            ctx.fillStyle = "white";
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();

        }
    }

    function init() {
        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle)
        }
    }
    init();

    function animate() {
        ctx.drawImage(image1, 0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 0.05;
        ctx.fillStyle = 'rgb(0,0,0)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();

        }
        requestAnimationFrame(animate)
    }
    animate();
})



// const scannedImage = ctx.getImageData(0, 0, canvas.width, canvas.height);
// c(scannedImage);
// const scannedData = scannedImage.data;
// for (let i = 0; i < scannedData.length; i += 4) {
//     const total = scannedData[i] + scannedData[i + 2] + scannedData[i + 2];
//     const averageColorValue = total / 3;
//     scannedData[i] = averageColorValue;
//     scannedData[i + 1] = averageColorValue;
//     scannedData[i + 2] = averageColorValue;
// }
// scannedImage.data = scannedData;
// ctx.putImageData(scannedImage, 0, 0);