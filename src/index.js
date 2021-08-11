console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
document.addEventListener("DOMContentLoaded", function() {
    fetchImgs();
    // fetchBreeds()
  })

  function fetchImgs(){
    fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
      data.message.forEach(img => addImg(img))
    });

  }

function addImg(img){
  const container = document.getElementById('dog-image-container');
  const newImg = document.createElement('img');
  newImg.src = img;
  container.appendChild(newImg);
}
 