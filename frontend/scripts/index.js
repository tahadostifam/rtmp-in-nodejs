if (flvjs.isSupported()) {
    var videoElement = document.getElementById('live_elm');
    var flvPlayer = flvjs.createPlayer({
        type: 'flv',
        url: 'ws://localhost:8000/live/hello.flv'
    });
    console.log(flvPlayer);
    flvPlayer.attachMediaElement(videoElement);
    flvPlayer.load();
    flvPlayer.play();
} else {
    console.log("flv support error");
}