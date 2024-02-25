// Changes the image of the dog
async function changeImage() {
    const response = await fetch("https://shibe.online/api/shibes?count=1");
    const image = await response.json();
    console.log(image[0]);
    document.getElementById("dog").src = image[0];
}