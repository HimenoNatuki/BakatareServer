function kusa() {
    document.location.href = "templete/index.html";
}
const bgm1 = document.querySelector("#bgm1");       // <audio>
const btn1 = document.querySelector("#btn-play1");   // <button>

btn1.addEventListener("click", () => {
    // pausedがtrue=>停止, false=>再生中
    if (!bgm1.paused) {
        btn1.innerHTML = '<span class="material-symbols-outlined">入店</span>';  // 「再生ボタン」に切り替え
        bgm1.pause();
    }
    else {
        btn1.innerHTML = '<span class="material-symbols-outlined">一時停止</span>';  // 「一時停止ボタン」に切り替え
        bgm1.play();
    }
});