import { contextBridge } from "electron";

contextBridge.exposeInMainWorld("audioAPI", {
  play: (file) => {
    const audio = new Audio(file);
    audio.play();
  },
});
