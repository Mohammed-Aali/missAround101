
function init() {
        const addButton = document.getElementById("addButton");
        addButton.addEventListener("click", handleButtonClick)
        loadPlayList()
}


function handleButtonClick() {
        const songTextInput = document.getElementById("songTextInput");
        const li = document.createElement("li");
        const ul = document.getElementById("playList")
        songName = songTextInput.value;
        if (songName === "") {
        return alert("Please enter a value first");
        }
        li.innerHTML = songName;
        ul.appendChild(li);
        save(songName);
}

