function save(item) {
    let playListArray = getStoreArray("playList")
    playListArray.push(item)
    localStorage.setItem("playList", JSON.stringify("playListArray"))
}

function loadPlayList() {
    let playListArray = getSavedSongs();
    let ul = document.getElementById("playList");
    if (playListArray != null) {
        for (let i = 0; i < playListArray.length; i++) {
            let li = document.createElement("li");
            li.innerHTML = playListArray[i];
            ul.appendChild(li);
        }
    }
}

function getSavedSongs() {
    return getStoreArray("playList")
}

function getStoreArray(key) {
    let playListArray = localStorage.getItem(key);
    if (playListArray == null || playListArray == "") {
        playListArray = new Array();
    } else {
        playListArray = JSON.parse(playListArray);
    }
    return playListArray;
}