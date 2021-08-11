console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
document.addEventListener("DOMContentLoaded", function() {
    fetchImgs();
    fetchBreeds()
  })

  function fetchImgs(){
    fetch(imgURL)
    .then(response => response.json())
    .then(data => console.log(data))

  }


 