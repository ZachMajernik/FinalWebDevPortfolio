const slideshow = document.getElementById("slideshow");
const numImgs = 10;
let imgNum = 0;
changeImage();
setInterval(changeImage, 2500);

function changeImage(){
    slideshow.innerHTML = `<img src="images/${imgNum}.png">`
    imgNum++;
    if (imgNum == numImgs){
        imgNum = 0;
    }
}

const dailyQuote = document.getElementById("daily-quote")

// Fetch through a proxy because the API blocks null origin
// got thhe "encode" part from chatGPT
fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://zenquotes.io/api/today'))
  .then(response => response.json())
  .then(data => {
    const parsed = JSON.parse(data.contents); // Parse the inner JSON
    console.log(parsed);
    dailyQuote.innerHTML = `<h3>${parsed[0].q}</h3><p>- ${parsed[0].a}</p>`
  });