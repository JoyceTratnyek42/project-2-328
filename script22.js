const albums = [
  {
    "date_photographed": "Feburary 19, 2018",
    "time_photographed": "12:27 PM",
    "status": "Indoor Housecat",
    "field_notes": "I took this photo of me and my dear Flurry hanging out together while I played guitar together on a calm feburary morning. This photo was one of my favorites from the months shortly before his passing from kidney failure at 18 years of age.",
    "back": "page-21.html",
    "forward": "page-23.html",
    "cover_image_url": "44.png"
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
         Janurary 2018 ✧
    </a>
    <a href="${album.forward}" class="forward1">
     ✧  April 2018
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





