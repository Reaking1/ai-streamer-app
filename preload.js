const { contextBridge } = require("electron");

console.log("✅ PRELOAD LOADED");

contextBridge.exposeInMainWorld("audioAPI", {
  play: (relativePath) => {
    const audio = new Audio(relativePath);
    audio.volume = 1.0;

    audio.play().catch((err) => {
      console.error("❌ Audio play failed", err);
    });
  },
});
