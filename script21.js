const albums = [
  {
    "date_photographed": "Janurary 21, 2018",
    "time_photographed": "2:01 PM",
    "status": "Unknown",
    "field_notes": "I can't tell anything about this cat, due to the bright wintery shadows in this photo, and the fact that is was walking away from me through the thick snow.",
    "back": "page-20.html",
    "forward": "page-22.html",
    "cover_image_url": "75.png"
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
         December 2017 ✧
    </a>
    <a href="${album.forward}" class="forward1">
     ✧  Feburary 2018
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





