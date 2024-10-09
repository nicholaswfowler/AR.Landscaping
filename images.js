const images = ['landscaping1.jpg', 'landscaping2.jpg', 'landscaping3.jpg', 'landscaping4.jpg', 'landscaping5.jpg', 'landscaping6.jpg'];
const itemList = document.querySelector('#item-list');
for(let i = 0; i < images.length; i++){
  const image = document.createElement('img');
  image.src = `./images/${images[i]}`;
  image.className = 'landscaping-image';
  if(itemList.childElementCount !== images.length){
    itemList.appendChild(image);
  }
}
const next = document.querySelector('#next-btn')
const list = document.querySelector('#item-list')
const prev = document.querySelector('#prev-btn')
const itemWidth = 300
const padding = 10

prev.addEventListener('click',()=>{
list.scrollLeft -= (itemWidth + padding)
})
next.addEventListener('click',()=>{
list.scrollLeft += (itemWidth + padding)}) 
