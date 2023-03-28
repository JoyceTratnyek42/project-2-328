const albums = [
  {
    "date_photographed": "April 18, 2016",
    "time_photographed": "6:02 PM",
    "status": "Outdoor Housecat",
    "field_notes": "Citrine is the name my sister to gave to this young tomcat, although I'm not sure why. ",
    "back": "page-8.html",
    "forward": "page-10.html",
    "cover_image_url": "7.png"
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
         Feburary 2016 ✧
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





