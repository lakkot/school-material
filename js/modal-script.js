

(function() {
  var $showModalButton = document.querySelector('#show-modal');
var $modal = document.querySelector('#modal-container');

function showModal(title, content) {
  //clear old content from modal
  $modal.innerHTML = '';
  //create a div to encompass modal elements
  var modal = document.createElement('div')
  modal.classList.add('modal');
  //add 'close modal' button
  var closeModalButton = document.createElement('button');
  closeModalButton.classList.add('close-modal');
  closeModalButton.innerText = 'close modal';
  //close modal when the "close" button is clicked. ('click', closeModal) also works
  closeModalButton.addEventListener('click', function() {
  closeModal();
})
  //add modal header
  var $title = document.createElement('h1');
  $title.innerText = title;
  //add modal content
  var $content = document.createElement('p');
  $content.innerText = content;
  //append modal elements
  modal.appendChild(closeModalButton);
  modal.appendChild($title);
  modal.appendChild($content);
  $modal.appendChild(modal);

  //add 'is-visible' class to #modal-container to make it visible
  $modal.classList.add('is-visible');
}

var $closeModalButton = document.querySelector('.close-modal');

$showModalButton.addEventListener('click', function() {
  showModal('I\'ve got', 'blisters on me fingers!');
 })


function closeModal() {
  $modal.classList.remove('is-visible');
}



window.addEventListener('keydown', (e) => {
  if(e.key === 'Escape' && $modal.classList.contains('is-visible')) {
    closeModal();
  }
})

$modal.addEventListener('click', function(e) {
  var target = e.target;
  if (target === $modal) {
    closeModal();
  }
})


}());
