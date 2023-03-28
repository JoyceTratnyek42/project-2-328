const albums = [
  {
    "date_photographed": "September 17, 2014",
    "time_photographed": "4:34 PM",
    "status": "Unknown Status",
    "field_notes": "I was in 5th grade, coming home from school one afternoon on a fresh September day. I was a latch-key kid, and was walking towards the garage when I was startled by a flash of movement on the stairs to my right. I turned and locked eyes with this beautiful, fluffy cat for a few moments before he spooked and darted off into the bushes. I saw him a few times after that, like when I was in 6th grade waiting at my bus stop in the morning. He came up to me and rubbed against my legs, sweetly letting me pet him for several moments. I named him Barley, after the kind old barn cat of similar coloring and good-natured temperament, from the Warrior Cats books I read as a kid.",
    "back": "page-2.html",
    "forward": "page-4.html",
    "cover_image_url": "title-pic-10copy.png"
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
         March 2014 ✧
    </a>
    <a href="${album.forward}" class="forward1">
     ✧  September 2014
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





