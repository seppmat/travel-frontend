// Dropdown Search

let wrapperNumber = document.getElementById("wrapper2"),
selectBtn = wrapperNumber.querySelector(".select-btn"),
searchInp = wrapperNumber.querySelector(".dropdown-search-number"),
options = wrapperNumber.querySelector(".options");

let number = [
    
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",

];

function addNumber(selectedNumber) {
    options.innerHTML = "";
    number.forEach(number => {
        let isSelected = number == selectedNumber ? "selected" : "";
        let li = `<li onclick="updateName(this)" class="${isSelected}">${number}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}
addNumber();

function updateName(selectedLi) {
    searchInp.value = "";
    addNumber(selectedLi.innerText);
    wrapperNumber.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = searchInp.value.toLowerCase();
    arr = number.filter(data => {
        return data.toLowerCase().startsWith(searchWord);
    }).map(data => {
        let isSelected = data == selectBtn.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
    }).join("");
    options.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! Country not found</p>`;
});

selectBtn.addEventListener("click", () => wrapperNumber.classList.toggle("active"));