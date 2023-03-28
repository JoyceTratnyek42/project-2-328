const albums = [
  {
    "date_photographed": "April 28, 2015",
    "time_photographed": "4:31 PM",
    "status": "Unknown Status",
    "field_notes": "Wintertime lurking in the bushes of my yard, near a mole trap, likely watching for birds.",
    "back": "page-5.html",
    "forward": "page-7.html",
    "cover_image_url": "81.png"
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
         April 2015 ✧
    </a>
    <a href="${album.forward}" class="forward1">
     ✧  July 2015
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





