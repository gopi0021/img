const imageSources = ['bc.jpg','bc1.jpg','blc3.jpg','blc4.jpg','blc5.jpg','blc6.jpg','blc2.jpg','blc7.jpg','blc7.jpg','bl12.jpg','bl13.jpg','bl15.jpg','bl16.jpg'];
function changeBackgroundImage() {
const randomIndex = Math.floor(Math.random() * imageSources.length);
document.body.style.backgroundImage = `url(${imageSources[randomIndex]})`;
}
// Change the background image every 1 seconds (1000 milliseconds)
setInterval(changeBackgroundImage, 1000);