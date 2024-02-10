let bookNameInput = document.getElementById("bookName")
let saveBookBtn = document.querySelector(".save-btn");
let bookList = document.getElementById("bookList")
let validationError = document.querySelector(".validation-error");

function nihatDecellikEdir() {
    console.log("men ora bura baxiram .... fikri daqgiqqqq")
}


saveBookBtn.addEventListener("click", function(){
    console.log("userin inputa yazdigi yazi altdakidir:")

    validationError.style.display = "block";

    if(bookNameInput.value.trim() == "") {
        validationError.style.color = "red";
        validationError.innerText = "Xana boş ola bilməz"
        return;
    }else {
        validationError.innerText = "kitab ugurla elave edildi!"
        validationError.style.color = "green"
    }

    bookList.innerHTML += `
        <li>
            <strong>Kitabın adı</strong> <span>${bookNameInput.value}</span> <br>
        </li>
    `
})