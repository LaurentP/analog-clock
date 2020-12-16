function displayTime() {
    let date = new Date();
    let deg;

    // Analog
    deg = 30 * (12 + (date.getHours() % 12 || 12));
    document.querySelector('.hour').style = 'transform: rotate(' + deg + 'deg)';

    deg = 6 * (60 + date.getMinutes());
    document.querySelector('.minute').style = 'transform: rotate(' + deg + 'deg)';

    deg = 6 * (60 + date.getSeconds());
    document.querySelector('.second').style = 'transform: rotate(' + deg + 'deg)';

    // Numeric
    document.querySelector('.numeric').innerHTML = date.toLocaleTimeString();
}

displayTime();

setInterval(() => {
    displayTime();
}, 1000);