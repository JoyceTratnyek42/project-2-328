const albums = [
  {
    "date_photographed": "March 3, 2014",
    "time_photographed": "4:12 PM",
    "status": "Unknown Status",
    "field_notes": "Photographed on my small childhood camera, before I ever had a phone, was this photo of a mysterious, longhaired silver cat watching the neighborhood from my front step on a rainy march day. I never got to interact with her closely or learn more about her, although I would see her many more times before I left Oregon. I named her Willow in honor of her flowing, misty pelt.",
    "back": "page-28.html",
    "forward": "page-2.html",
    "cover_image_url": "willow1blue.png"
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
         Home ✧
    </a>
    <a href="${album.forward}" class="forward1">
     ✧  June 2014
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





