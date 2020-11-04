// All book objects are going to be stored in myLibrary
let myLibrary = [];

// Book constructor
function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;  
}

// Book prototype Function to toggle wheter its been read or not
Book.prototype.toggleRead = function() {
    if(this.read == true) {
        this.read = false;
    } else {
        this.read = true;
    }
}

// Add Selectors
let addButton = document.querySelector("#addButton");
let authorInput = document.querySelector("#authorInput");
let titleInput = document.querySelector("#titleInput");
let pagesInput = document.querySelector("#pagesInput");

let addedContainer = document.querySelector(".addedContainer")



addButton.addEventListener("click", function(e) {
    // addedBook is a div/ box for each book
    let addedBook = document.createElement("div");  

    let authorDisplay = document.createElement("div");
    let titleDisplay = document.createElement("div");
    let pagesDisplay = document.createElement("div");
    let deleteButton = document.createElement("button");
    let readButton = document.createElement("button");
    let readDisplay = document.createElement("div");

    // User has to input an author AND a Title
    if(authorInput.value == ""|| titleInput.value == "") {
        alert("You have to input Author and Title!");
        return
    }

    // Fills in the Display 
    authorDisplay.textContent = "Author: " + authorInput.value;
    titleDisplay.textContent = "Title: " + titleInput.value;
    pagesDisplay.textContent = "Pages: " + pagesInput.value;
    deleteButton.textContent = "Delete";
    readButton.textContent = "Read";
    readDisplay.textContent = "Read: No"

    // Temp for Title
    let tempTitleAuthor = titleInput.value + authorInput.value;

    // NewBook gets contructed
    let NewBook = new Book(authorInput.value, titleInput.value, pagesInput.value, false)
    // Adds the new Book to the Library
    myLibrary.push(NewBook)

    // Changes Read Status and toggles the "toggleRead" class
    readButton.addEventListener("click", function(e) {
        if(readDisplay.textContent == "Read: No") {
            readDisplay.textContent = "Read: Yes";
            NewBook.toggleRead();
            addedBook.classList.toggle("toggleRead")
        } else {
            readDisplay.textContent = "Read: No"
            NewBook.toggleRead();
            addedBook.classList.toggle("toggleRead")
        }
    })

    // The addedBook gets appended to the Container and gets the class "addedBook"
    addedContainer.appendChild(addedBook)
    addedBook.classList.add("addedBook")
    // Delete and Read buttons get their class
    deleteButton.classList.add("deleteButton");
    readButton.classList.add("readButton")


    addedBook.appendChild(authorDisplay)
    addedBook.appendChild(titleDisplay)
    addedBook.appendChild(pagesDisplay)
    addedBook.appendChild(readDisplay)
    addedBook.appendChild(deleteButton)
    addedBook.appendChild(readButton)


    // Add class to the book informations
    authorDisplay.classList.add("informations")
    titleDisplay.classList.add("informations")
    pagesDisplay.classList.add("informations")
    readDisplay.classList.add("informations")

    // Wipe out the inputs
    authorInput.value = "";
    titleInput.value = "";
    pagesInput.value = "";

    // Delete Button Function
    deleteButton.addEventListener("click", function(e) {
        
        addedBook.classList.add("DeleteAnimation")

        addedBook.addEventListener("transitionend", function(e) {
            addedBook.classList.toggle("toggle")
            addedContainer.removeChild(addedBook)
            let index = myLibrary.indexOf(NewBook);
            myLibrary.splice(index, 1)
        })
            
        
    })

})

