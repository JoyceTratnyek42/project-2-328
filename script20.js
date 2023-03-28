const albums = [
  {
    "date_photographed": "December 13, 2017",
    "time_photographed": "4:33 PM",
    "status": "Wandering Housecat, semi-feral",
    "field_notes": "This photo is from one of the weeks when I would cat-sit for Colla’s latest 'owners,' a young family who had recently immigrated from Germany and lived up the road. They had two young boys who referred to the cat as Tony. Each day, my sister and I would make the 30-second walk to their home, once at 7 am, and then again in the early evening, where we would fill up his bowl off food and stand outside on the porch, rattling it loudly. If we were lucky, Colla would appear eventually, out of some vegetation, scarf down his food, and even let us pet him and hang out with him inside the house, before slinking off again.",
    "back": "page-19.html",
    "forward": "page-21.html",
    "cover_image_url": "12.png"
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
         December 2017 ✧
    </a>
    <a href="${album.forward}" class="forward1">
     ✧  Janurary 2018
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





