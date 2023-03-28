const albums = [
  {
    "date_photographed": "April 26, 2018",
    "time_photographed": "4:54 PM",
    "status": "Wandering Housecat, semi-feral",
    "field_notes": "With his status as a semi-feral local legend cemented and his collar gone for good, Colla could go where he pleased and people would open up their doors to him, knowing he would disappear again wherever he pleased. Fully grown and king of the Grace Lane social scene, his confidence had grown even more since the hyperactive, yet anxious kitten I had first met all those years ago. One warm April day, after school, I was practicing my guitar on the patio, and Colla had laid down to relax nearby while I played. It felt like a scene from a movie or novel, and I greatly miss pleasures as simple and idyllic as being able to play music outside and entrance a friendly cat to hang out with me.",
    "back": "page-22.html",
    "forward": "page-24.html",
    "cover_image_url": "9.png"
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
         Feburary 2018 ✧
    </a>
    <a href="${album.forward}" class="forward1">
     ✧  August 2018
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





