

let title=document.querySelector("#title")
let author=document.querySelector("#author")
let isbn=document.querySelector("#isbn")
let input=document.getElementsByTagName("input")
document.querySelector("#submit").addEventListener("click",(event)=>{
    event.preventDefault();

   let tbody=document.querySelector("#book-list");

    if(title.value=="" && author.value=="" && isbn.value==""){
        alert("Please Enter the book details")
    }
    else if(title.value==""){
        alert("enter the title name")
    }
   else if(author.value==""){
    alert("enter the author name")
   }
   else if(isbn.value==""){
    alert("enter the isbn details")
   }
   else{
    let row=document.createElement("tr");
    row.className="newRow"
tbody.appendChild(row)
    
let bookTitleColumn=document.createElement("td")
row.appendChild(bookTitleColumn);
bookTitleColumn.innerText=title.value
  title.value = "";

let bookAuthorColumn=document.createElement("td")
row.appendChild(bookAuthorColumn);
bookAuthorColumn.innerText=author.value
author.value = "";

let bookIsbnColumn=document.createElement("td")
row.appendChild(bookIsbnColumn);
bookIsbnColumn.innerText=isbn.value;
	   isbn.value = "";



let delBtn=document.createElement("button")

row.appendChild(delBtn);
delBtn.className="delete";
delBtn.innerText="X";


delBtn.addEventListener("click",(event)=>{
    if(delBtn.className=="delete"){
event.target.parentElement.remove()
    }
})

   }
});

























