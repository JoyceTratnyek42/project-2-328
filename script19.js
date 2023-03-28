const albums = [
  {
    "date_photographed": "December 12, 2017",
    "time_photographed": "11:30 AM",
    "status": "Unknown Status, likely Outdoor Housecat",
    "field_notes": "While I was cat-sitting for Colla's latest 'owners', waiting for the rattle of his food bowl to entice him to show up, the lovely Chai showed up and kept me entertained instead. She was a wriggly mess of joy, constantly rolling over and requesting more cuddling and attention. Colla didn't come home that day, but I didn't mind, and had a great time playing with Chai on the street and patio.",
    "back": "page-18.html",
    "forward": "page-20.html",
    "cover_image_url": "5.png"
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
         October 2017 ✧
    </a>
    <a href="${album.forward}" class="forward1">
     ✧  December 2017
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





