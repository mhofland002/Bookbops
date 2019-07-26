var request = new XMLHttpRequest()
var searchTerm;
var url;
var data;
//request.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=flowers&orderBy=newest&key=AIzaSyDHRfFtscjNpXYKbQFNtuEl76rlG8lfinI', true);

function getPlaylist(cardNumber){
  var book = data['items'][cardNumber];
  var spotifyPlaylist;
  var string;

  if(book && 'categories' in book.volumeInfo){
    var genre = book.volumeInfo.categories[0];
    var str = "Recommended Spotify playlist!"
if (genre.includes("Juvenile") || genre.includes("Children") ){

  spotifyPlaylist = `<iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DWVs8I62NcHks" width="470" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> <div> </div>`;
  string = str.link("https://open.spotify.com/playlist/37i9dQZF1DWVs8I62NcHks")
}else if (genre.includes("History")){
  spotifyPlaylist = `<iframe src="https://open.spotify.com/embed/playlist/3l8cJSGMaYQ56Rr2EaT6NX" width="470" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> <div> </div>`;
  string = str.link("https://open.spotify.com/playlist/3l8cJSGMaYQ56Rr2EaT6NX")
}else if (genre.includes("Fiction")){
  spotifyPlaylist = `<iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX6ziVCJnEm59" width="470" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> <div> </div>`;
  string = str.link("https://open.spotify.com/playlist/37i9dQZF1DX6ziVCJnEm59")
}else if (genre.includes("Art")||genre.includes("Drama")){
  spotifyPlaylist = `<iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX4ALYsOGumV8" width="470" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> <div> </div>`;
  string = str.link("https://open.spotify.com/playlist/37i9dQZF1DX4ALYsOGumV8")
}else if (genre.includes("Cooking") ||genre.includes("Baking")|| genre.includes("Bread")){
  spotifyPlaylist =`<iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX9XIFQuFvzM4" width="470" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> <div> </div>`;
  string = str.link("https://open.spotify.com/playlist/37i9dQZF1DX9XIFQuFvzM4")
}else if (genre.includes("Nature") || genre.includes("Travel") || genre.includes("Gardening")){
  spotifyPlaylist = `<iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DWSkMjlBZAZ07" width="470" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> <div> </div>`;
  string = str.link("https://open.spotify.com/playlist/37i9dQZF1DWSkMjlBZAZ07")
}else if (genre.includes("Poetry") || genre.includes("Help") ||genre.includes("Philosophy") || genre.includes("Psychology") || genre.includes("Spirit") || genre.includes("Stories")){
  spotifyPlaylist = `<iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DWSiZVO2J6WeI" width="470" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> <div> </div>`;
  string = str.link("https://open.spotify.com/playlist/37i9dQZF1DWSiZVO2J6WeI")
}else if (genre.includes("Health") || genre.includes("Sports")){
  spotifyPlaylist = `<iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DWUVpAXiEPK8P" width="470" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> <div> </div>`;
  string = str.link("https://open.spotify.com/playlist/37i9dQZF1DWUVpAXiEPK8P")
}else if (genre.includes("Young")){
  spotifyPlaylist = `<iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DWWmw1gu1JNtk" width="470" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> <div> </div>`;
  string = str.link("https://open.spotify.com/playlist/37i9dQZF1DWWmw1gu1JNtk")
}else if (genre.includes("Love") || genre.includes("Romance")){
  spotifyPlaylist = `<iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DXd0DyosUBZQ7" width="470" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> <div> </div>`;
  string = str.link("https://open.spotify.com/playlist/37i9dQZF1DXd0DyosUBZQ7")
}else if (genre.includes("Greek")|| genre.includes("Athens")){
  spotifyPlaylist = `<iframe src="https://open.spotify.com/embed/album/1wbY6VUchNsZLaDi22eD3J" width="470" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> <div> </div>`;
  string = str.link("https://open.spotify.com/playlist/517cuuyXTLZoNvMod73QBi")
}else if (genre.includes("Photography") || genre.includes("Crafts") || genre.includes("Design") || genre.includes("Architecture")){
  spotifyPlaylist = `<iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DWSXBu5naYCM9" width="470" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> <div> </div>`;
  string = str.link("https://open.spotify.com/playlist/37i9dQZF1DWSXBu5naYCM9")
}else{
  spotifyPlaylist = `<iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX8ymr6UES7vc" width="470" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> <div> </div>`;
  string = str.link("https://open.spotify.com/playlist/37i9dQZF1DX8ymr6UES7vc")
}

  } else {
    var str = "There were no genres for this book! Here's a Spotify playlist link anyway!";
    spotifyPlaylist = `<iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DXaa8UmWJHYTU" width="470" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> <div> </div>`;
    string = str.link("https://open.spotify.com/playlist/37i9dQZF1DXaa8UmWJHYTU")
  }
//   x = document.getElementById("spotifyArea");
//   x.innerHTML = string;

  return [spotifyPlaylist, string];
}






function keyPress(event){
  if(event.keyCode == 13){
    search();
  }
};
function displayCard(cardNumber){
  var book = data['items'][cardNumber];
  if(book){
    var bookTitle = book.volumeInfo.title;
    var description = book.volumeInfo.description || "No description available"
    var imageLink =book.volumeInfo.imageLinks? book.volumeInfo.imageLinks.thumbnail : "placeholder.png";

    var playlistLink = getPlaylist(cardNumber)[0] + getPlaylist(cardNumber)[1];


    return (`
      <div class="column">
        <div class="container">
          <img src="${imageLink}" class="image"/>
            <div class="overlay" >
              <p class="text">${bookTitle}</p>
              <button class = "modalBtn" data-toggle="modal" data-target="#myModal${cardNumber}"><strong>Playlist & More Info</strong></button>
              <!-- modal-->
              <div class="modal" id="myModal${cardNumber}" role="dialog">
   <div class="modal-dialog">

     <!-- Modal content-->
     <div class="modal-content">
       <div class="modal-header">
         
         <h4 class="modal-title">${bookTitle}</h4>
       </div>
       <div class="modal-body">
          <p> <strong>Author(s):</strong> ${book.volumeInfo.authors}</p>
         <p><strong> Description:</strong> ${description} </p>
         <div id="spotifyArea"> ${playlistLink} </div>
       </div>
       <div class="modal-footer">
         <button id = "modalClose" type="button" class="btn btn-default" data-dismiss="modal"><strong>Close</strong></button>
       </div>
     </div>

   </div>
 </div>
              <!--modal-->
            </div>

          </div>
    </div>
    `);

  } else {
    return "";
  }
}

var counter = 0;
function search(searchTerm){
  //console.log(counter);
  //counter++;
  searchTerm = searchTerm || document.getElementById("search").value
  url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&orderBy=relevance&maxResults=40`
  request.open('GET',url , true)
  request.onload = function(){
    data = JSON.parse(this.response)

  //if you got a valid response back
      if (request.status >= 200 && request.status < 400) {
        var string = '';
        var counter = 0;
        var rowNumber = 0;

        insideContainer = document.getElementById("entire");
        var rowString = '';
        var numItems = data['items'].length;
        var numRows = (Math.floor(numItems/7) );
        for(var rowNumber = 0; rowNumber <= numRows; rowNumber++){
          rowString += '<div class="row">';
          for(var cardInRow = 0; cardInRow <= 3; cardInRow++){
            var cardNumber=( rowNumber * 4) + cardInRow;
            rowString += '<span class="card">'+ displayCard(cardNumber)+'</span>';
          }
          rowString += '</div>';
        }
        insideContainer.innerHTML = rowString;
      }
      else {
        console.log('error');
      }
    }

    request.send();
 
}



//API key = AIzaSyDHRfFtscjNpXYKbQFNtuEl76rlG8lfinI
// <button type="button" class="close" data-dismiss="modal" data-whatever = "getPlaylist(${cardNumber})">&times;</button>
