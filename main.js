import { app, BrowserWindow, Menu, Tray } from "electron";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let win;
let tray;

function createWindow() {
  win = new BrowserWindow({
    width: 420,
    height: 520,
    show: true,
    resizable: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  win.loadFile(path.join(__dirname, "render/index.html"));

  win.on("close", (e) => {
    e.preventDefault();
    win.hide();
  });
}

app.whenReady().then(() => {
  createWindow();

  tray = new Tray(path.join(__dirname, "render/pet-food.png"));
  const menu = Menu.buildFromTemplate([
    {
      label: "Open Control Panel",
      click: () => win.show(),
    },
    { type: "separator" },
    {
      label: "Quit",
      click: () => app.quit(),
    },
  ]);

  tray.setToolTip("Al Stream Voice Control");
  tray.setContextMenu(menu);
});

app.on("window-all-closed", () => {});
