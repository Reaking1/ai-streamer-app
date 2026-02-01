const statusEl = document.getElementById("status");
const testBtn = document.getElementById("test");

testBtn.addEventListener("click", async () => {
  try {
    statusEl.textContent = "Playing audio…";

    // THIS is the correct call
    await window.audioAPI.play("./audio/test.mp3");

    statusEl.textContent = "Done";
  } catch (err) {
    statusEl.textContent = "Playback failed";
    console.error(err);
  }
});
