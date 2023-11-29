function toggleMenu(element) {
    let allMenus = document.querySelectorAll('.menu-container'); // selects all elements with mentioned class https://www.w3schools.com/jsref/met_document_queryselectorall.asp
    allMenus.forEach(menu => { // calls a function for each element in array. In here, menu https://www.w3schools.com/jsref/jsref_foreach.asp
        if (menu !== element) {
            menu.classList.remove("active"); // returns classes as an array https://www.w3schools.com/jsref/prop_element_classlist.asp
        }
    });
    element.classList.toggle("active");
};

document.addEventListener('click', function(event) { // adds a click event https://www.w3schools.com/jsref/met_document_addeventlistener.asp
    let trigger = event.target.closest('.popup-trigger'); // https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
    let popups = document.querySelectorAll('.popup');

    popups.forEach(function(popup) {
        popup.style.display = 'none';
    });

    if (trigger) {
        let popupId = trigger.getAttribute('data-popup-id'); // get value of class as element https://www.w3schools.com/jsref/met_element_getattribute.asp
        let popup = document.getElementById(popupId); // gets the element with mentioned id https://www.w3schools.com/jsref/met_document_getelementbyid.asp

        if (popup) {
            popup.style.display = 'block'; // display style https://www.w3schools.com/jsref/prop_style_display.asp
        }
    }
});

let openModalBtn = document.getElementById('opendialogue');
let modal = document.getElementById('dialogue');

openModalBtn.onclick = function() {
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}






