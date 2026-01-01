function updateTime() {
    const date = new Date();
    const time = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    document.getElementById('time').innerHTML = 
        `${time}`;
};

setInterval(updateTime, 1000);
updateTime();