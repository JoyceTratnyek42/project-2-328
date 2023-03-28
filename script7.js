const albums = [
  {
    "date_photographed": "July 3, 2015",
    "time_photographed": "2:02 PM",
    "status": "Outdoor Housecat",
    "field_notes": "Rocky was one cat who I only saw once or twice. He liked to hide in our front yard, his silver fur blending into the silver fountain, and lie in wait for birds.",
    "back": "page-6.html",
    "forward": "page-8.html",
    "cover_image_url": "72.png"
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
     ✧  Feburary 2016
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





