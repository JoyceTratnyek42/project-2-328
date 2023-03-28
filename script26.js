const albums = [
  {
    "date_photographed": "November 23, 2018",
    "time_photographed": "3:40 PM",
    "status": "unknown Status",
    "field_notes": "Lemon-Bug was a shy young kitten when I first met him, appearing from the woods behind the shed one wet November day. His missing eye made him stand out among the other cats of Grace Lane. He exuded a nervous energy that reminded me of the character Ravenpaw from Warrior Cats, who was also black with yellow eyes. I felt the need to protect, to nurture, this young cat, and with some patience, he even sniffed my outstretched hand, although he didn’t allow me to pet him. I named him Lemon bug because I thought it fit his vibes. Later, once I had moved to New York, my sister would tell me that she saw a neighbor loading a scared and sick-looking Lemon-Bug into a carrier, and then a car. Writing this makes me wonder, and worry about him. I do hope he was alright.",
    "back": "page-25.html",
    "forward": "page-27.html",
    "cover_image_url": "51.png"
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





