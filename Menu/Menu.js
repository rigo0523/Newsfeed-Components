/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
const menuButton = document.querySelector('.header');


function menuCreator(array) {
  //Main menu div
  const menu = document.createElement('div');
  menu.classList.add('menu');
  menu.style.background = "skyblue"
 

 
  // menu ul
  const ulMenu = document.createElement('ul');
  menu.classList.add('ulMenu');
  console.log(ulMenu)
  ulMenu.style.background = "gray";
  ulMenu.style.margin = "0"
  
 // forEachLoop
 menuItems.forEach(item => {
   const listItems = document.createElement('li');
   listItems.textContent = item;
   ulMenu.appendChild(listItems)
   ulMenu.style.border = "10px solid green"
   ulMenu.style.margin = "10px"
 }); //end of forEACH loop

 menu.appendChild(ulMenu)

 

 const menuBtn = document.querySelector('.menu-button');


 menuBtn.addEventListener('click', (event) => {
   menu.classList.toggle('menu--open');
 })
   

 return menu;

}


menuButton.appendChild(menuCreator(menuItems))