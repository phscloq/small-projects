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

        let title = document.getElementById("title").value;
        let author = document.getElementById('author').value;
        let pages = document.getElementById('pages').value;
        let read = document.getElementById('read').value;
        let book = new Book(title, author, pages, read);
        myLibrary.push(book);
            if(myLibrary.length >=14){
                alert("You have reached the maximum number of books");
                let button = document.getElementById('submitbut');
                button.disabled = true;
            }
        bookTitle.textContent = myLibrary[myLibrary.length - 1].title;
        bookAuthor.textContent = myLibrary[myLibrary.length - 1].author;
        bookPages.textContent = myLibrary[myLibrary.length - 1].pages;
        bookStatus.textContent = myLibrary[myLibrary.length - 1].read;

        bookContent.appendChild(bookTitle);
        bookContent.appendChild(bookAuthor);
        bookContent.appendChild(bookPages);
        bookContent.appendChild(bookStatus);
        bookCard.appendChild(bookContent);
            
        let content = document.getElementsByClassName('content');
        content[0].appendChild(bookCard);
        }
         
        


 

/* function addBookToLibrary(){
    console.log("Clicked submit");
                let title = document.getElementById("title").value;
                let author = document.getElementById('author').value;
                let pages = document.getElementById('pages').value;
                let read = document.getElementById('read').value;
                let book = new Book(title, author, pages, read);
                myLibrary.push(book);
              
                return myLibrary[myLibrary.length - 1];
            } */
           
            function formDisplay(){
                let form = document.getElementsByClassName('form');
                form[0].style.display = "block";
                form[0].style.height = "531px";
                console.log("Clicked")
            }


