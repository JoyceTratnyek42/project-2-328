const albums = [
  {
    "date_photographed": "May 9, 2016",
    "time_photographed": "4:52 PM",
    "status": "Outdoor Housecat",
    "field_notes": "I am not sure what happened to Pearl's collar from the previous picture, maybe it broke. This is the best picture I took of her, through my kitchen window.",
    "back": "page-9.html",
    "forward": "page-11.html",
    "cover_image_url": "69.png"
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
         April 2016 ✧
    </a>
    <a href="${album.forward}" class="forward1">
     ✧  May 2016
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





