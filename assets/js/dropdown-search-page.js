// Dropdown Search

let wrapperPage = document.querySelector("#wrapper3"),
selectBtn = wrapperPage.querySelector(".select-btn"),
searchInp = wrapperPage.querySelector(".dropdown-search-page"),
options = wrapperPage.querySelector(".options");

let page = [
    
    "Halaman 1",
    "Halaman 2",
    "Halaman 3",
    "Halaman 4",
    "Halaman 5",

];

function addPage(selectedPage) {
    options.innerHTML = "";
    page.forEach(page => {
        let isSelected = page == selectedPage ? "selected" : "";
        let li = `<li onclick="updateName(this)" class="${isSelected}">${page}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}
addPage();

function updateName(selectedLi) {
    searchInp.value = "";
    addPage(selectedLi.innerText);
    wrapperPage.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = searchInp.value.toLowerCase();
    arr = page.filter(data => {
        return data.toLowerCase().startsWith(searchWord);
    }).map(data => {
        let isSelected = data == selectBtn.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
    }).join("");
    options.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! Country not found</p>`;
});

selectBtn.addEventListener("click", () => wrapperPage.classList.toggle("active"));