const albums = [
  {
    "date_photographed": "August 14, 2018",
    "time_photographed": "8:54 PM",
    "status": "Resturaunt Cat",
    "field_notes": "Dandelion was a small and sweet cat who I met while eating at a small Mexican restaurant near my house. She came up to me while we were sitting on outdoor picnic tables on the restaurant’s small patio, waiting for our dinner to arrive. Always desperate for the affection of a cat, I abandoned my meal and she happily sprawled out in the middle of the pathway so I could pet her, until my parents dragged me back to the table to eat my enchiladas before they went cold. Shortly after that, the restaurant suffered a major fire and now sits abandoned, blackened and crumbling with a gaping hole in its roof. Every time I drive past it, I feel a pang of sadness and wonder about Dandelion, the restaurant’s sweet cat. I hope she is still alive somewhere, safe, and happy.",
    "back": "page-23.html",
    "forward": "page-25.html",
    "cover_image_url": "41.png"
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
         April 2018 ✧
    </a>
    <a href="${album.forward}" class="forward1">
     ✧  October 2018
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





