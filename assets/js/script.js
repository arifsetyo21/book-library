let btnAddBook = document.querySelector('input[type="submit"]')
let myLibrary = []

function Book() {
   // Constructor
}

Book.prototype.readToggle = function() {
   this.read = !this.read
}

function addBookToLibrary(title, author, pages, read) {
   this.title = title
   this.author = author
   this.pages = pages
   this.read = read
}

addBookToLibrary.prototype = Object.create(Book.prototype)

let book1 = new addBookToLibrary('harry potter', 'jk rowling', '300', true)

book1.readToggle();

btnAddBook.addEventListener('click', function (e) {
   
})

const render = function (template, selector) {
   let node = document.querySelector(selector);
   if (!node) return;
   node.innerHTML += template
}

let tableTemplate = `<tr>
                  <td>Arif</td>
                  <td>Jackson</td>
                  <td>94</td>
                  <td><button class="btn btn-unread">Unread</button></td>
                  <td></td>
               </tr>`
// let template = '<h1>Hello World!</h1>';
// let btnAddBook = '<button id="btnAdd">Add Book</button>'

render(tableTemplate, '#table-container')
// render(btnAddBook, '#app')

const modalTriggers = document.querySelectorAll('.popup-trigger')
const modalCloseTrigger = document.querySelector('.popup-modal__close')
const bodyBlackout = document.querySelector('.body-blackout')

modalTriggers.forEach(trigger => {
   trigger.addEventListener('click', () => {
   const { popupTrigger } = trigger.dataset
   const popupModal = document.querySelector(`[data-popup-modal="${popupTrigger}"]`)

   popupModal.classList.add('is--visible')
   bodyBlackout.classList.add('is-blacked-out')
   
   popupModal.querySelector('.popup-modal__close').addEventListener('click', () => {
      popupModal.classList.remove('is--visible')
      bodyBlackout.classList.remove('is-blacked-out')
   })

   bodyBlackout.addEventListener('click', () => {
      // TODO: Turn into a function to close modal
      popupModal.classList.remove('is--visible')
      bodyBlackout.classList.remove('is-blacked-out')
      })
   })
})