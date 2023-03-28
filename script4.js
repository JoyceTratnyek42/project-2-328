const albums = [
  {
    "date_photographed": "October 29, 2014",
    "time_photographed": "3:20 PM",
    "status": "Unknown Status",
    "field_notes": "Wintertime was a name given my my sister to one of the most skittish, yet omnipresent, cats of Grace Lane. He was always sniffing around our home, but ran as soon as I tried to approach him, or even watch him through a window, as is the case with this photo, taken on my old childhood camera. It shows a reflection of the oven in the kitchen, as well as some trinkets on the windowsill, including a clay tablet of my sister’s handprint from when she was a baby. Wintertime was perched on our picnic table, watching me, despite the rain that coated the outdoors that day.",
    "back": "page-3.html",
    "forward": "page-5.html",
    "cover_image_url": "94.png"
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
         September 2014 ✧
    </a>
    <a href="${album.forward}" class="forward1">
     ✧  April 2015
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





