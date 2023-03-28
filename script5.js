const albums = [
  {
    "date_photographed": "April 23, 2015",
    "time_photographed": "6:50 PM",
    "status": "Unknown Status",
    "field_notes": "Willow looking ghostly beautiful while watching me from the patio, one rainy April day.",
    "back": "page-4.html",
    "forward": "page-6.html",
    "cover_image_url": "78.png"
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
         October 2014 ✧
    </a>
    <a href="${album.forward}" class="forward1">
     ✧  April 2015
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





