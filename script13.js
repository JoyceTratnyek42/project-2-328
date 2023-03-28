const albums = [
  {
    "date_photographed": "August 8, 2016",
    "time_photographed": "5:49 PM",
    "status": "Unknown Status",
    "field_notes": "Wintertime stands suspended in my backyard, sillouhetted by the golden hour of a late summer day.",
    "back": "page-12.html",
    "forward": "page-14.html",
    "cover_image_url": "87.png"
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
         June 2016 ✧
    </a>
    <a href="${album.forward}" class="forward1">
     ✧  May 2017
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





