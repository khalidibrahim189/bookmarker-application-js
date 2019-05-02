document.getElementById('myForm').addEventListener('submit', saveBookmark);

//Save Bookmark
function saveBookmark(e) {
    //Get form values
    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;

    if(!siteName || siteUrl ){
        alert('Please fill in the form');
        return false;
    }



    var bookmark = {
        name: siteName,
        url: siteUrl
    }

    // Local Storage Text
    // localStorage.setItem('test', 'Hello world');
    // console.log(LocalStroage.getItem('test'));
    // localStorage.removeItem('test');
    // console.log(LocalStroage.getItem('item'));
    
    // test if bookmarks is null
    if(localStorage.getItem('bookmarks') === null){
        // init array
        var bookmarks = [];
        //Add to array
        bookmarks.push(bookmark);
        // set to LocalStorage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } else {
        // Get bookmarks from LocalStroage
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        // Add bookmark to array
        bookmarks.push(bookmark);
        //Re-set back to LocalStroage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }

    //Re-fetch Bookmarks
    fetchBookmarks();

        //Prevent form form submmitting
        e.preventDefault();
} 


    // Delete bookmarks
    function deleteBookmark(url){
    //Get bookmarks from LocalStorage 
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    // Loop throught bookmarks
        for(var i = 0; i < bookmark.length; i++ ){
            if(bookmarks[i].url == url){
                //Remove from array
                bookmarks.splice(i, 1); 
            }
        }
             //Re-set back to LocalStroage
             localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }

    //Fetch Bookmarks
        function fetchBookmarks(){
        // Get bookmarks from LocalStroage
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        
        //Get output id
        var bookmarksResult = document.getElementById('bookmarksResult');

        //Build output
        bookmarksResult.innerHTML = '';
        
        for( var i = 0; i < bookmarks.length; i++ ){
            var name = bookmarks[i].name;
            var url = bookmarks[i].url;

            bookmarksResult.innerHTML += '<div class="well">'+
                                         '<h3>'+name+
                                         '<a class="btn btn-default" target="_blank" href="'+url+'">Visit</a> ' +
                                         '<a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" target="_blank" href="#">Delete</a> ' +
                                         '</h3>'+
                                         '</div>';
        }   
        
    }