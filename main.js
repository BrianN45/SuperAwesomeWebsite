// Changes the image of the dog
async function changeImage() {
    const response = await fetch("https://shibe.online/api/shibes?count=1");
    const image = await response.json();
    console.log(image[0]);
    document.getElementById("dog").src = image[0];
}

async function galaxyMode() {
    if (document.getElementById("galaxy").innerText === "Galaxy Mode") {
        document.getElementById("galaxy").innerText = "Normal Mode"
        document.getElementById("idBody").style.backgroundImage= "url('https://th.bing.com/th/id/R.c2501d8117269d8ce2c7874563383281?rik=%2fG3t0faBx8x%2fOw&pid=ImgRaw&r=0.gif')";
        document.getElementById("galaxy").style.backgroundColor = '#063882';
    }
    else {
        document.getElementById("galaxy").innerText = "Galaxy Mode"
        document.getElementById("idBody").style.backgroundImage = ""
        document.getElementById("galaxy").style.backgroundColor = '#e7cba7';
    }

}

const galaxyQuotes = ["You're out of this world!",
    "You're a Blast!",
    "You rock my world!",
    "You are Space-cial!"];

const normalQuotes = ["You're totally PAW-some!",
    "Stay PAW-sitive",
    "You are re-bark-able!",
    "You're a diamond in the ruff!"];


async function changeQuote() {
    let labelElement = document.getElementById("quote");
    if (document.getElementById("galaxy").innerText === "Normal Mode") {
        labelElement.innerHTML = galaxyQuotes[Math.floor(Math.random() * galaxyQuotes.length)];
    }
    else {
        labelElement.innerHTML = normalQuotes[Math.floor(Math.random() * galaxyQuotes.length)];
    }

}

//end of code