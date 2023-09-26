

//making the global variables
const sections = document.querySelectorAll("section");

 // genrating the navbar 
 function createListItem(){

    for (section of sections){

//creating the scetions dynamically 
        let listItem = document.createElement("li");
        let secName = section.getAttribute("data-nav");
        let secLink = section.id;

        listItem.innerHTML = '<a href=\"#'+ secLink + '\" data-nav=\"' +  secLink + '\" class=\"menu__link\"> '+ secName +'</a>';
        const menu = document.getElementById("navbar__list");

        menu.append(listItem);

    }
 }

// which section is being viewed while scrolling through the page
 
 

 const links = document.querySelectorAll("section");
 
for (const link of links) {
  link.addEventListener("click", clickHandler);
}
function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);   
    return isVisible;
}
 
function clickHandler(e) {
    let secLink = section.id;
  e.preventDefault();
  const href = section.getAttribute("secLink");
  const offsetTop = document.querySelector($secLink).offsetTop;
 
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}

 createListItem();