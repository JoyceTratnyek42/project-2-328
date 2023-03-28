const albums = [
  {
    "date_photographed": "November 23, 2018",
    "time_photographed": "3:23 PM",
    "status": "Status Unknown, likely Outdoor Housecat",
    "field_notes": "My sister and I ran into this young gentleman we named Leo  frolicking around our backyard. He was curious and let me pet him.",
    "back": "page-24.html",
    "forward": "page-26.html",
    "cover_image_url": "60.png"
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
         October 2018 ✧
    </a>
    <a href="${album.forward}" class="forward1">
     ✧  November 2018
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





