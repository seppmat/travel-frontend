// Navbar

$(function() {
    $('#sidebarCollapse').on('click', function() {
      $('#sidebar').toggleClass('activeMiniSideNav');
    });
  });


// Dropdown

  $(document).ready(function(){
    $(".sub-menu>a").click(function(){
        if(!$(this).next('.sub-menu-content').is(':visible'))
       {   
         $('.sub-menu .sub-menu-content').slideUp();
         $(this).next('.sub-menu-content').slideDown();
       }else{
          $(this).next('.sub-menu-content').slideUp();
       }
   });
});

// Mini Dropdown

$(document).ready(function(){
  $(".sub-menu-sub>a").click(function(){
      if(!$(this).next('.sub-menu-sub-content').is(':visible'))
     {   
       $('.sub-menu-sub .sub-menu-sub-content').slideUp();
       $(this).next('.sub-menu-sub-content').slideDown();
     }else{
        $(this).next('.sub-menu-sub-content').slideUp();
     }
 });
})

// Date Picker

jQuery(document).ready(function () {
  jQuery('#datepicker, #datepicker2').datepicker({
      format: 'dd-mm-yyyy',
      startDate: '+1d'
  });
});

// Dropdown Search

const wrapper = document.querySelector(".wrapper"),
selectBtn = wrapper.querySelector(".select-btn"),
searchInp = wrapper.querySelector(".dropdown-search"),
options = wrapper.querySelector(".options");

let countries = ["1", "2", "3", "4", "5"];

function addCountry(selectedCountry) {
    options.innerHTML = "";
    countries.forEach(country => {
        let isSelected = country == selectedCountry ? "selected" : "";
        let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}
addCountry();

function updateName(selectedLi) {
    searchInp.value = "";
    addCountry(selectedLi.innerText);
    wrapper.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = searchInp.value.toLowerCase();
    arr = countries.filter(data => {
        return data.toLowerCase().startsWith(searchWord);
    }).map(data => {
        let isSelected = data == selectBtn.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
    }).join("");
    options.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! Country not found</p>`;
});

selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));