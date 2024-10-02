function changeVideo(videoUrl) {
  const videoFrame = document.getElementById('videoFrame');
  videoFrame.src = videoUrl;
}

function getParameterByName(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

const course = getParameterByName('course');
if (course === 'lideranca') {
  changeVideo('https://www.youtube.com/embed/VIDEO_ID_1'); // Substitua pelo ID do vídeo de liderança
} else if (course === 'mobile') {
  changeVideo('https://www.youtube.com/embed/VIDEO_ID_2'); // Substitua pelo ID do vídeo de mobile
} else if (course === 'website') {
  changeVideo('https://www.youtube.com/embed/VIDEO_ID_3'); // Substitua pelo ID do vídeo de website
} else if (course === 'desktop') {
  changeVideo('https://www.youtube.com/embed/VIDEO_ID_4'); // Substitua pelo ID do vídeo de desktop
}
