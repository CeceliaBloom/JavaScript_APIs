
const searchBtnElement= document.getElementById("submitSearch");

const searchInput = document.getElementById("searchWord");

const imageElement = document.querySelector("#imageContainer > img");

const feedback = document.getElementById("p");

const baseUrl="https://api.giphy.com/v1/gifs/translate";

const key="niObP31iC56GTaKoSZnM8BbO0ULXGs80";



searchBtnElement.addEventListener("click",()=>{
   fetch(`${baseUrl}?api_key=${key}&s=${searchInput.value}`)
   
   .then((response) => response.json())
    .then((res) => {
      imageElement.src = res.data.images.original.url;
      searchInput.value = "";  
   })
   .catch((err)=>{
        feedback.textContent = err.message;
   })
});








