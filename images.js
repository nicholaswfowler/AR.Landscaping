// TO ADD IMAGES
// 1) At the end of Line 15 add the name of the new image file with surrounding quotes ('') and a comma
// 2) You should add something that looks similiar to (, 'examplefilename.jpg') between the arrows (--> <--) in the example below
// ex) const images = ['landscaping1.jpg', 'landscaping2.jpg', 'landscaping3.jpg', 'landscaping4.jpg', 'landscaping5.jpg', 'landscaping6.jpg'-->, 'examplefilename.jpg'<--];
// 3. Click "Commit changes" in the top right area
// 4. Click "Commit changes" in the pop-up that will show up

// TO REMOVE IMAGES
// 1) Highlight and delete from 1 comma to the next
// 2) You should delete between the arrows (--> <--) in the example below
// ex) const images = ['landscaping1.jpg', 'landscaping2.jpg', 'landscaping3.jpg', 'landscaping4.jpg', 'landscaping5.jpg' -->, 'landscaping6.jpg'<--];
// 3. Click "Commit changes" in the top right area
// 4. Click "Commit changes" in the pop-up that will show up

const images = ['landscaping1.jpg', 'landscaping2.jpg', 'landscaping3.jpg', 'landscaping4.jpg', 'landscaping5.jpg', 'landscaping6.jpg'];

// DO NOT EDIT ANYTHING BELOW THIS LINE

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
