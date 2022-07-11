class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
};


const Library = (() => {
  const lib = [];

  const addBook = (newBook) => {
    let isDup = false;
    lib.forEach(book => {
      if ((book.title === newBook.title) && (book.author === newBook.author)){
        isDup = true;
      };
    });
    (!isDup) ? lib.push(newBook) : alert(`Book '${newBook.title}' is in library!`);
  };

  const displayBooks = () => {
    const display = document.querySelector('.books');
    display.innerHTML = '';
    for (item of lib) {
      let newDiv = document.createElement('div');
      newDiv.classList.add(`book${lib.indexOf(item)}`);
      newDiv.innerHTML = `<p>${item.author}</p>
                          <p>${item.title}</p>
                          <p>${item.pages}</p>
                          <p>${item.isRead}</p>
                          <button class="remove">remove</button>`;
      display.appendChild(newDiv);
    };
    const rm_btns = document.querySelectorAll('.remove');
    rm_btns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        let idx = e.currentTarget.parentNode.classList.value;
        idx = idx.substring(4);
        lib.splice(idx, 1);
        displayBooks();
      })
    })

  };

  return{addBook, displayBooks};
})();

const sub_btn = document.getElementById('submit_btn');
sub_btn.addEventListener('click', (e) => {
  e.preventDefault();
  const title = form.title.value;
  const author = form.author.value;
  const pages = form.pages.value;
  const isRead = form.isRead.value;
  const book = new Book (title, author, pages, isRead);
  Library.addBook(book);
  Library.displayBooks();
  modal.style.display = "none";
  form.reset();
});


//Modal below
const modal = document.querySelector(".modal");
const btn = document.querySelector(".add_book");
const span = document.querySelector(".close_modal");
const form = document.getElementById('modal_form');

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
  form.reset();
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    form.reset();
  }
}
