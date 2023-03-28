const albums = [
  {
    "date_photographed": "June 18, 2014",
    "time_photographed": "2:01 PM",
    "status": "Outdoor Housecat",
    "field_notes": "It was the first week of summer break, and my sister and I were playing in the backyard, when suddenly, a small black cat we had never seen before darted up the trunk of one of the huge cedar trees, chittering after a bird. He jumped between them, and we watched transfixed, his collar jingling all the way. He jumped down from the trees just when my sister and I were beginning to worry, and darted across the mossy woods through the holes in the fence, to the neighbor’s yard, where he confronted a white and chestnut cat who I was unfortunately unable to photograph and never saw again. My sister named him Colla after the jingling of his collar. What we didn’t know is that this cat, and his jingling blue collar, would become an integral part of my childhood lore.",
    "back": "page-1.html",
    "forward": "page-3.html",
    "cover_image_url": "title-pic-3.png"
  } 
]

const albumsList = document.getElementById('albums-list')

function renderAlbum(album) {
  // Create .album element
  const albumElement = document.createElement('div')

  albumElement.classList.add('album')

  console.log(albumElement)
  console.log(album.cover_image_url)

  // Create the inner HTML content
  const albumHTML = `
    <img src="${album.cover_image_url}">
    <ul>
 <li>✧  ${album.date_photographed} </li>
       <li>✧  ${album.time_photographed} </li>
      <li> ✧  ${album.status}</li>
      <li> ✧  ${album.field_notes}</li>
      
    </ul>



    <a href="${album.back}" class="back1">
         March 2014 ✧
    </a>
    <a href="${album.forward}" class="forward1">
     ✧  September 2014
    </a>
  `


  // Set the inner HTML content of the albumElement
  albumElement.innerHTML = albumHTML

  // Add to the list #albums-list
  albumsList.appendChild(albumElement)
}

// Start App!
albums.forEach(function(album) {
  // if (album.year_released < 2000) {
    renderAlbum(album)
  // }
})





