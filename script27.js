const albums = [
  {
    "date_photographed": "November 23, 2018",
    "time_photographed": "4:08 PM",
    "status": "unknown Statuses",
    "field_notes": "Since my sister and I had seen two completely new young cats in our yard within only a few minutes of each other, we wondered if they would encouter each other. Sure enough, a few minutes after my last entries, Lemon-Bug darted out from a bush where he had been hiding and came face to face with Leo, who was standing under the bench. We waited apprehensively, not sure how they would react to each other. But after a few moments of sniffing and playful swipes of their claws, they seemed just like old friends.",
    "back": "page-26.html",
    "forward": "page-28.html",
    "cover_image_url": "47.png"
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
         November 2018 ✧
    </a>
    <a href="${album.forward}" class="forward1">
     ✧  November 2018
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





