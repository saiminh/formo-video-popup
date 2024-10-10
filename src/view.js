const fvidpopups = document.querySelectorAll('.formo-video-popup');
const closebtns = document.querySelectorAll('.formo-video-popup__close');

fvidpopups.forEach((fvidpopup) => {
  const video = fvidpopup.querySelector('.formo-video-popup__video video');

  // add a listener to video when it is played, add a class to the popup
  video.addEventListener('play', () => {
    fvidpopup.classList.add('is-playing');
  });
  video.addEventListener('pause', () => {
    fvidpopup.classList.remove('is-playing');
  });

  // add a click listener to fvidpopup and if the target is outside of video, close the popup
  fvidpopup.addEventListener('click', (event) => {
    if (event.target === fvidpopup) {
      fvidpopup.remove();
    }
  });
  closebtns.forEach((closebtn) => {
    closebtn.addEventListener('click', () => {
      fvidpopup.remove();
    });
  });
})