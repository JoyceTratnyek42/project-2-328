const albums = [
  {
    "date_photographed": "May 2, 2017",
    "time_photographed": "5:53 PM",
    "status": "Indoor Housecat",
    "field_notes": "Flurry's favorite spot was the landing of our stairs, as it was illuminated by the sun during most hours of the day. Every day, when I came home from wherever I had been, I would see his silky white shape at the top of the stairs, waiting for me. Sometimes, I still think I see him sitting there on those stairs out of the corner of my eye, although of course I know he is not. And still, bits of his white fur remain embedded in the carpet, which always make me smile.",
    "back": "page-13.html",
    "forward": "page-15.html",
    "cover_image_url": "title-pic-2copy.png"
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
         August 2016 ✧
    </a>
    <a href="${album.forward}" class="forward1">
     ✧  May 2017
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





