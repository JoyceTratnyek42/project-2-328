const albums = [
  {
    "date_photographed": "May 7, 2017",
    "time_photographed": "11:38 AM",
    "status": "Unknown Status, likely Outdoor Housecat",
    "field_notes": "Chai posing like the model she is in my backyard while I watched from inside.",
    "back": "page-14.html",
    "forward": "page-16.html",
    "cover_image_url": "chai1.png"
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
     ✧  July 2017
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





