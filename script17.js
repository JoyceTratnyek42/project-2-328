const albums = [
  {
    "date_photographed": "October 3, 2017",
    "time_photographed": "12:09 PM",
    "status": "Wandering Housecat, semi-feral",
    "field_notes": "Colla drinking from our bird-feeding fountain.",
    "back": "page-16.html",
    "forward": "page-18.html",
    "cover_image_url": "33.png"
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
         July 2017 ✧
    </a>
    <a href="${album.forward}" class="forward1">
     ✧  October 2017
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





