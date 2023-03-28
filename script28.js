const albums = [
  {
    "date_photographed": "March 28, 2019",
    "time_photographed": "4:03 PM",
    "status": "Wandering Housecat, semi-feral",
    "field_notes": "This was one of the last times I saw the infamous creature my sister and I named “Colla” before he disappeared for good. He was playfully and curiously sniffing around my driveway and climbing on the house’s gutters. He even let me stroke him without nipping my fingers, as he had often done before. He was very picky about the humans who he tolerated touching him, and I had never been on his a-list.",
    "back": "page-27.html",
    "forward": "index.html",
    "cover_image_url": "28.png"
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
         November 2018 ✧
    </a>
    <a href="${album.forward}" class="forward1">
     ✧  Back to Home
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



