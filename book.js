// GET ALL BOOKS

const bookArr = ["./images/book1.jpeg", "./images/book2.jpeg"]
let params = new URLSearchParams(document.location.search);
 let id = params.get("bookId");