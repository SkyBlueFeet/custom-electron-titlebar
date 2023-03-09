// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const { Titlebar, Color } = require('custom-electron-titlebar');
const path = require('path');

let titlebar;

window.addEventListener('DOMContentLoaded', () => {
  titlebar = new Titlebar({
    backgroundColor: Color.fromHex("#262626"),
    //itemBackgroundColor: Color.fromHex("#ffffff"),
    svgColor: Color.WHITE,
    itemBackgroundColor:Color.fromHex("#ccc"),
    icon: path.join(__dirname, '/assets/images', '/icon.svg'),
    //menuPosition: 'bottom',
    //menu: null // = do not automatically use Menu.applicationMenu
    menuTransparent: 80,
    menuHoverColor:Color.fromHex("#ccc").transparent(.45)
  })

  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})
