const myLibrary = [];
class Book {
    constructor(title, author, pages, read){
            this.title = title;
            this.author = author;
            this.pages = pages;
            this.read = read;
        }
      
        }

        function displayBooks(){

            //CREATE HTMLs OF BOOK CARD 
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
        //MYLIBRARY START

            //GETTING INFO FROM FORM INPUTS, FOR !!DATABESE MYLIBRARY!!
                let title = document.getElementById("title").value;
                let author = document.getElementById('author').value;
                let pages = document.getElementById('pages').value;
                let read = document.getElementById('read').checked;
            //IF FORM FILLED
                if(title.length>0 && author.length>0 && pages.length>0){
                    let book = new Book(title, author, pages, read);
                myLibrary.push(book);
                console.log(myLibrary);
     
                //CHECK DATABESE LIMIT REACHED & IF SO DISABLE ADDING BOOKS
                    if(myLibrary.length ==14){
                    
                        let button = document.getElementById('submitbut');
                        button.disabled = true;
                        let warning = document.getElementsByClassName('warning');
                        warning[0].style.display = "block";
                    
                    }    //MYLIBRARY END
        


                //BOOKCARDS TEXT CONTENT PULLING FROM myLibrary
                    bookTitle.textContent = myLibrary[myLibrary.length - 1].title;
                    bookAuthor.textContent = myLibrary[myLibrary.length - 1].author;
                    bookPages.textContent = myLibrary[myLibrary.length - 1].pages;
                   
                //READ STATUS STYLE
                    if(document.getElementById('read').checked){
                        bookStatus.textContent = "READ";
                        bookStatus.style.color = "black";
                    }else{
                        bookStatus.textContent = "HAVEN'T READ YET";
                        bookStatus.style.color = "red";
                    }
        
                //MYLIBRARY -->BOOK CARDS-->DOM
                    bookCard.id = myLibrary.length-1;
                    bookContent.appendChild(bookTitle);
                    bookContent.appendChild(bookAuthor);
                    bookContent.appendChild(bookPages);
                    bookContent.appendChild(bookStatus);
                    bookContent.appendChild(deleteButton);
                    bookCard.appendChild(bookContent);
                    let content = document.getElementsByClassName('content');
                    content[0].appendChild(bookCard);
            }
            //IF FORM IS NOT FILLED ADEQUETLY    
                else if(title.length==0 || author.length==0 || pages.length==0){
                    alert("Please fill all the required information about the book");
                }
        }        
       

        function deleteBook(){
            
            let bookCard = this.parentNode.parentNode;
            let content = document.getElementsByClassName('content');
            let i= myLibrary.indexOf(bookCard);
            content[0].removeChild(bookCard);
            myLibrary.splice(i, 1);
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


