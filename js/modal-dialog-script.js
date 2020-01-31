

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


  var dialogPromiseReject;

  function closeModal() {
    $modal.classList.remove('is-visible');
    if(dialogPromiseReject) {
      dialogPromiseReject();
      dialogPromiseReject = null;
    }
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

  //creating a dialog
  function showDialog(title, text) {
    showModal(title, text);

  //creating confirm an cancel buttons
  var modal = $modal.querySelector('.modal');
  var confirmButton = document.createElement('button');
  confirmButton.classList.add('confirm');
  confirmButton.innerText = 'confirm';
  var rejectButton = document.createElement('button');
  rejectButton.classList.add('reject');
  rejectButton.innerText = 'reject';
  modal.appendChild(confirmButton);
  modal.appendChild(rejectButton);

  //focus on the confirm button on opening the dialog so that user can simply press addEventListener
  confirmButton.focus();

  return new Promise((resolve, reject) => {
    rejectButton.addEventListener('click', closeModal);
    confirmButton.addEventListener('click', () => {
      //reset the dialogPromiseReject variable, otherwise will keep returning not confirmed
      dialogPromiseReject = null;
      closeModal();
      resolve();
    });
    //set up dialogPromiseReject for hide modal function so that it rejects when closing dialog in any other way than confirm
    dialogPromiseReject = reject;
  });
}

document.querySelector('#show-dialog').addEventListener('click', () => {
    showDialog('confirmation', 'do you confirm this?').then(
      //addind a 'then' function to produce alerts based on Promise
      () => {alert('confirmed!');
    }, () => {alert('not confirmed');
  });
});

}());
