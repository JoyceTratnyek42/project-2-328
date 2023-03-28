const albums = [
  {
    "date_photographed": "June 3, 2016",
    "time_photographed": "1:05 PM",
    "status": "Outdoor Housecat",
    "field_notes": "One day, Colla was wandering in my garden when he started rubbing his collar against one of the small plastic trellises my father had installed. The collar broke, and my sister and I put it in his owner's mailbox, a small house on the other side of the ditch from our house. Accroding to his name tag, these owners had reffered to him as Max. But after that, Colla became a free man. His owners were never able to re-collar him as he abandoned them and became semi-feral. He was truly fearless, walking inside any open car or house and accpeting love and food from all who offered it, but always wandering back out into the wild soon after. One time my sister and I were sleeping in tents in our backyard when I was awkened at 3 am to him standing on top of the tent, staring down at me with his yellow eyes glowing in the dark. Another time, I saw him chase a dog.",
    "back": "page-11.html",
    "forward": "page-13.html",
    "cover_image_url": "32.png"
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
         May 2016 ✧
    </a>
    <a href="${album.forward}" class="forward1">
     ✧  August 2016
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





