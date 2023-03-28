const albums = [
  {
    "date_photographed": "July 25, 2017",
    "time_photographed": "5:11 PM",
    "status": "Foster Kitten",
    "field_notes": "Stellaluna was a young and gregarious kitten being fostered by one of my neighbors, so I visited her to hang out for a bit. She was playful, affectionate, and beautiful, and truthfully I wished I could have adopted her right there and then. However, I'm sure she got adopted quickly and went on to live a great life.",
    "back": "page-15.html",
    "forward": "page-17.html",
    "cover_image_url": "74.png"
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
         May 2017 ✧
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





