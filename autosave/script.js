const myTextarea = document.getElementById("myUniqueTextarea");

function saveToLocalStorage() {
    localStorage.setItem("myUniqueSavedText", myTextarea.value);
}

if (localStorage.getItem("myUniqueSavedText")) {
    myTextarea.value = localStorage.getItem("myUniqueSavedText");
}

myTextarea.addEventListener("input", saveToLocalStorage);
