const albums = [
  {
    "date_photographed": "Feburary 12, 2016",
    "time_photographed": "3:45 PM",
    "status": "Outdoor Housecat",
    "field_notes": "I saw this cat, Pearl, wandering around quite often, as in this picture of her walking down the steps in our front yard. However, she unfortunately never let me get close to her or read the tag on her silver collar.",
    "back": "page-7.html",
    "forward": "page-9.html",
    "cover_image_url": "67.png"
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
         July 2015 ✧
    </a>
    <a href="${album.forward}" class="forward1">
     ✧  April 2016
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





