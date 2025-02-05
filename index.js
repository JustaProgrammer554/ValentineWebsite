function showHearts() {
    for (let i = 0; i < 20; i++) {
        let heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.className = "heart";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = Math.random() * 100 + "vh";
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 2000);
    }

    document.getElementById("yesBtn").addEventListener("click", () => {
        clickCount++; 
        console.log("KHK");
    });
};

function moveButton() {
    let noBtn = document.getElementById("noBtn");
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 50);
    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
};

function changeContent() {
    let mainText = document.getElementById("mainText");
    let yesBtn = document.getElementById("yesBtn");

};

let clickCount = 0;
let secondText = document.createElement("p");
let textContainer = document.getElementById("text-container");

document.getElementById("yesBtn").addEventListener("click", () => {
    clickCount++;
    document.getElementById("yesBtn").style.visibility = "hidden";
    document.getElementById("noBtn").style.visibility = "hidden";
    if (clickCount <= 1) {
        mainText.innerHTML = "Be Ready At:";
        secondText.className = "second-text";
        secondText.innerHTML = "On February 14th, Friday at 11:30 AM, Outside your house.";
        textContainer.appendChild(secondText);
    }
});