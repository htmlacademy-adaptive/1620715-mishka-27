const modalContainer = document.querySelector(".modal-container");

const openModal = () => {
  modalContainer.classList.add("modal-container--open");
  document.addEventListener("keydown", onDocumentKeydown);
  modalContainer.addEventListener("click", onModalClick);
}

const closeModal = () => {
  modalContainer.classList.remove("modal-container--open");
  document.removeEventListener("keydown", onDocumentKeydown);
  modalContainer.removeEventListener("click", onModalClick);
}

document.addEventListener('click', (evt) => {
  if (evt.target.closest('.modal__button')) {
    openModal();
  }
});

const onDocumentKeydown = (evt) => {
  if(evt.key === 'Escape') {
    closeModal();
  }
};

const onModalClick = (evt) => {
  if(!evt.target.closest('modal-window')) {
    closeModal();
  }
};
