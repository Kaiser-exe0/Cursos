const videos = [
    { name: 'Video 1', link: 'https://play.gumlet.io/embed/661698592937374872013bea' },
    { name: 'Video 2', link: 'https://play.gumlet.io/embed/661698592937374872013be8' },
    { name: 'Video 3', link: 'https://play.gumlet.io/embed/66169855356314ecdddde06c' },
    { name: 'Video 4', link: 'https://play.gumlet.io/embed/66169855356314ecdddde072' }
];

const listElement = document.getElementById('dynamicList');

videos.forEach(video => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = video.name;
    a.href = '#';
    a.onclick = function(event) {
        event.preventDefault(); 
        changeVideo(video.link);
    };
    li.appendChild(a);
    listElement.appendChild(li);
});

function changeVideo(videoLink) {
    const videoFrame = document.getElementById('videoFrame');
    videoFrame.src = videoLink;
}