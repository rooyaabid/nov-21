
function renderBooks() {
const booksWrapper = document.querySelector( '.books');

booksWrappe.innerHTML =
  `<div class="books"> 
<div class="book">
<figure class="book__img--wrapper">
<img  class="book__img"   src="./assets/Deep Work.jpg" alt="">
</figure>
<div class="book__title"> Deep Work 
</div>
<div class="book__ratings">
  <i class="fas fa-star"> </i>
  <i class="fas fa-star"> </i>
  <i class="fas fa-star"> </i>
  <i class="fas fa-star"> </i>
  <i class="fas fa-star-half-alt"> </i>
</div>
<div class="book__price">
    <span class="book__price--normal"> $59.95</span> $14.95
</div>
</div>`

}

setTimout (() => { 
renderBooks();
}); 
 

 //FAKE DATA 

function getBooks() {
    return [  
        {
            id: 1,
            title: "Crack the Coding Interview",
            url: "assets/crack the coding interview.png",
            originalPrice: 49.95,
            salePrice: 14.95,
            rating: 4.5,
          },
          {
            id: 2,
            title: "Atomic Habits",
            url: "assets/atomic habits.jpg",
            originalPrice: 39,
            salePrice: null,
            rating: 5,
          },
}