const myLibrary = [];
function Book(title, author, pages, read) {
            this.title = title;
            this.author = author;
            this.pages = pages;
            this.read = read;
      
        }

        function displayBooks(){
        let bookCard = document.createElement('div');
        bookCard.className = "book-card";
        bookCard.id = "";
        let bookContent = document.createElement('div');
        bookContent.className = "book-card__content";
        let bookTitle = document.createElement('h2');
        bookTitle.className= "book-card__title";
        let bookAuthor = document.createElement('p');
        bookAuthor.className= "book-card__author";
        let bookPages = document.createElement('p');
        bookPages.className= "book-card__pages";
        let bookStatus = document.createElement('p');
        bookStatus.className= "book-card__read";
     
        let deleteButton = document.createElement('button');
        deleteButton.className="book-card__button";
        deleteButton.onclick = deleteBook;
        deleteButton.innerHTML="Del";
        let title = document.getElementById("title").value;
        let author = document.getElementById('author').value;
        let pages = document.getElementById('pages').value;
        let read = document.getElementById('read').value;
    //change the color of the book card depending on the read status
        if(document.getElementById('read').checked){
            read = "Read";
            bookStatus.style.color = "black";
        }else{
            read = "Not Read";
            bookStatus.style.color = "red";
        }
        
        

        if(title.length>0 && author.length>0 && pages.length>0){
            let book = new Book(title, author, pages, read);
        myLibrary.push(book);
        console.log(myLibrary);
        if(myLibrary.length ==14){
        
            let button = document.getElementById('submitbut');
            button.disabled = true;
            let warning = document.getElementsByClassName('warning');
            warning[0].style.display = "block";
          
        }    
        bookTitle.textContent = myLibrary[myLibrary.length - 1].title;
        bookAuthor.textContent = myLibrary[myLibrary.length - 1].author;
        bookPages.textContent = myLibrary[myLibrary.length - 1].pages;
        bookStatus.textContent = myLibrary[myLibrary.length - 1].read;
  

        bookCard.id = myLibrary.length-1;
        bookContent.appendChild(bookTitle);
        bookContent.appendChild(bookAuthor);
        bookContent.appendChild(bookPages);
        bookContent.appendChild(bookStatus);
        bookContent.appendChild(deleteButton);

        bookCard.appendChild(bookContent);
            
        let content = document.getElementsByClassName('content');
        content[0].appendChild(bookCard);
        }else if(title.length==0 || author.length==0 || pages.length==0){
            alert("Please fill all the required information about the book");
        }



        
        }
       
        function deleteBook(){
            let bookId = this.parentNode.parentNode.id;
            let bookCard = this.parentNode.parentNode;
            let content = document.getElementsByClassName('content');
            content[0].removeChild(bookCard);
            myLibrary.splice(bookId, 1);
            console.log(myLibrary);
            if(myLibrary.length<14){
                let button = document.getElementById('submitbut');
                button.disabled = false;
            } 
        }
        



           
            function formDisplay(){
                let form = document.getElementsByClassName('form');
                let buttonDiv = document.getElementsByClassName('button-div');
                buttonDiv[0].style.display = "none";
                form[0].style.display = "block";
                form[0].style.height = "531px";
                console.log("Clicked")
            }


