const imgUrl = ["https://picsum.photos/100/200", "https://picsum.photos/200/300", "https://picsum.photos/300/400"];

function changeImg() {
  const $body = document.querySelector('body');
  
  const randomNum = Math.floor(Math.random() * imgUrl.length);
  const $bgImg = document.createElement('img');
  $bgImg.src = imgUrl[randomNum];

  $body.appendChild($bgImg);
}

changeImg();
