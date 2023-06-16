var videos = ["vUL-RX_aoOg",
"og8bbxl0iW8",
"O6Ir_sMsTtc",
"gYkci0rH8Ac",
"YmZv8Pfwum4",
"_NXaovxB-Bk",
"IVmL3diwJuw",
"ZFuWYnuu9I8",
"DsNtwGJXTTs",
"wDYrRVUPWRo",
"VUJbDTIYlM4",
"E5T2eHM8tcI",
"pZZst4BOpVI",
"ItdXaWUVF48",
"-cJBN_JaVVo",
"VNhBrQYIuyo",
"rtd55SvrOQ0",
"O8xVFhgEv6Q",
"yfSyjwY6zSQ",
"Sq-X4Ga1oyc",
"Kf-x20Yq0_A",
"StGk_2DA5ig",
"1zcIUk66HX4",
"3MlJEXOZTfo",
"DHUnz4dyb54"
];

if (videos.length === 0) {
    videos = JSON.parse(localStorage.getItem("LiveCamVideos"));
} else {
    localStorage.setItem("LiveCamVideos", JSON.stringify(videos));
}

var players = new Array();
var ytPlayers = new Array();

// load IFrame Player API code asynchronously
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
tag.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var bodyWrapper = document.createElement("div");
bodyWrapper.className = "wrapper";

var i;
for (i = 0; i < videos.length; i++) {
    players[i] = "player" + i;
    var bodyContainer = document.createElement("div");
    bodyContainer.className = "container";
    var bodyPlayer = document.createElement("div", "player" + i);
    bodyPlayer.id = "player" + i;
    bodyWrapper.appendChild(bodyContainer);
    bodyContainer.appendChild(bodyPlayer);
    document.body.appendChild(bodyWrapper);
}

// create <iframe> after API loads
var player = new Array(); // saving the references, or could do this -- var player = YT.get('id-of-youtube-iframe');
function onYouTubeIframeAPIReady() {
    var i;
    for (i = 0; i < videos.length; i++) {
        player[i] = new YT.Player("player" + i, {
            videoId: videos[i],
            events: {
                onReady: onPlayerReady,
                onStateChange: onPlayerStateChange,
            },
        });
    }
}

// called when API is ready
function onPlayerReady(event) {
    event.target.playVideo();
    event.target.mute();
}

function onPlayerStateChange(event) {}

window.setInterval(reload, 3600000);

function reload() {
    location.reload();
}
