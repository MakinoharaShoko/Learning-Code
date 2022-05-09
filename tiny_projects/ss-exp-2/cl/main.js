const {app, BrowserWindow, Menu} = require('electron');

/**
 * 关闭默认菜单栏
 */
Menu.setApplicationMenu(null);

/**
 * 在应用启动后打开窗口
 */
app.whenReady().then(() => {
    createWindow()
    // 适配 Mac OS
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

/**
 * 打开窗口
 */
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })

    win.loadFile('./public/index.html').then(r => console.log(r));
}

/**
 * 在关闭所有窗口时退出应用
 */
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
