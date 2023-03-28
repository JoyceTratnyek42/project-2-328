const albums = [
  {
    "date_photographed": "October 15, 2017",
    "time_photographed": "5:56 PM",
    "status": "Unknown Status, likely Outdoor Housecat",
    "field_notes": "This cat, who I named Matilda, is one of the most mysterious ones of Grace Lane. I think she belonged to our next door neighboor, a woman who my father hated for her refusal to keep her property neat, and her ownership of over 5 cats. This is the only photo I have of Matilda, which shows her sitting on our stairway railing. Since I took the photo inside, it shows the living room lamp reflected in the window. I tried to go outside to pet Matilda, but she quickly scampered away.",
    "back": "page-17.html",
    "forward": "page-19.html",
    "cover_image_url": "61.png"
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





