var hotelSearch=document.querySelector(".hotels-button"),searchForm=document.querySelector(".hotels-search-form"),fromDate=searchForm.querySelector(".from-date"),howManyAdults=searchForm.querySelector(".adults"),howManyChildren=searchForm.querySelector(".children"),isStorageSupport=!0,storage="";try{storage=localStorage.getItem("adults")}catch(err){isStorageSupport=!1}window.onload=function(){searchForm.classList.contains("form-appear")&&searchForm.classList.remove("form-appear")},hotelSearch.addEventListener("click",function(a){a.preventDefault(),searchForm.classList.toggle("form-appear")}),window.addEventListener("keydown",function(a){27===a.keyCode&&searchForm.classList.contains("form-appear")&&(a.preventDefault(),searchForm.classList.remove("form-appear"))}),searchForm.addEventListener("submit",function(a){fromDate&&howManyAdults.value||a.preventDefault()});