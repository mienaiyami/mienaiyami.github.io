time = new Date();
const fixedTime = new Date(time.getTime() + 100000000);
console.log(fixedTime.getDate() - time.getDate());
console.log(time, fixedTime);
const dayDisp = $(".clock .days-cont .day-cont div");
const hourDisp = $(".clock .hours-cont .hour-cont div");
const minuteDisp = $(".clock .minutes-cont .minute-cont div");
const secondDisp = $(".clock .seconds-cont .second-cont div");

putTime(time, fixedTime);

setInterval(() => {
    time = new Date();
    putTime(time, fixedTime);
}, 1000);

function putTime(time, fixedTime) {
    timeDiff = new Date(fixedTime.getTime() - time.getTime());
    let days, hours, minutes, seconds;
    days =
        timeDiff.getDate() >= 10
            ? timeDiff.getDate()
            : "0" + timeDiff.getDate();
    dayDisp.html(days);
    hourDisp.html(timeDiff.getHours());
    hours =
        timeDiff.getHours() >= 10
            ? timeDiff.getHours()
            : "0" + timeDiff.getHours();
    hourDisp.html(hours);
    minutes =
        timeDiff.getMinutes() >= 10
            ? timeDiff.getMinutes()
            : "0" + timeDiff.getMinutes();
    minuteDisp.html(minutes);
    seconds =
        timeDiff.getSeconds() >= 10
            ? timeDiff.getSeconds()
            : "0" + timeDiff.getSeconds();
    secondDisp.html(seconds);
}

//particles;

const canvas = document.querySelector(".particles");
const context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

class Particles {
    constructor(x, y, radius, dx, dy, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
        this.color = color;
    }
    draw() {
        context.save();
        this.path = new Path2D();
        this.path.arc(this.x, this.y, this.radius, Math.PI * 2, 0);
        context.fillStyle = this.color;
        context.fill(this.path);
        context.restore();
    }
    update(i) {
        this.y += this.dy;
        if (this.y <= 0) {
            particles.splice(i, 1);
            pushParticles();
            console.log("lol");
        }
    }
}
let particles = [];
const maxParticles = 50;
for (let i = 0; i < maxParticles; i++) {
    pushParticles();
}
function pushParticles() {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let dx = 0;
    let dy = Math.random() * 0.3;
    let radius = Math.random() * 2 + 1;
    particles.push(
        new Particles(x, y, radius, dx, -dy, "rgba(255,255,255,0.5)")
    );
}
animate();
document.frameNumber = 0;
function animate() {
    document.frameNumber++;
    context.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((e, i) => {
        e.draw();
        e.update(i);
    });
    requestAnimationFrame(animate);
}
