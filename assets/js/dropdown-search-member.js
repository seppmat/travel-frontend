// Dropdown Search

let wrapperMember = document.querySelector("#wrapper1"),
selectBtn = wrapperMember.querySelector(".select-btn"),
searchInp = wrapperMember.querySelector(".dropdown-search-member"),
options = wrapperMember.querySelector(".options");

let member = [
    
    "1001 - SUB AGENT 1",
    "1002 - SUB AGENT 2",
    "1003 - SUB AGENT 3",
    "1004 - SUB AGENT 4",
    "1005 - SUB AGENT 5",
    "1006 - SUB AGENT 6",
    "1007 - SUB AGENT 7",
    "1008 - SUB AGENT 8",
    "1009 - SUB AGENT 9",
    "1010 - SUB AGENT 10",

];

function addMember(selectedMember) {
    options.innerHTML = "";
    member.forEach(member => {
        let isSelected = member == selectedMember ? "selected" : "";
        let li = `<li onclick="updateName(this)" class="${isSelected}">${member}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}
addMember();

function updateName(selectedLi) {
    searchInp.value = "";
    addMember(selectedLi.innerText);
    wrapperMember.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = searchInp.value.toLowerCase();
    arr = member.filter(data => {
        return data.toLowerCase().startsWith(searchWord);
    }).map(data => {
        let isSelected = data == selectBtn.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
    }).join("");
    options.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! Country not found</p>`;
});

selectBtn.addEventListener("click", () => wrapperMember.classList.toggle("active"));