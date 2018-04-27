//Handle backend logic for an electron app

const { app, BrowserWindow } = require('electron')

let win;

function createWindow(){
	//Create browser window
	win=new BrowserWindow({
		width: 600,
		height: 600,
		backgroundColor: "#ffffff",
		icon:`file://${__dirname}/dist/assets/img/logo.png`
	})

	win.loadURL(`file://${__dirname}/dist/index.html`)

	//For Chrome Devtools
	// win.webContents.openDevTools()

	//Event when window is closed
	win.on('closed',function(){
		win=null;
	})
}

//Create window on electron initialization
app.on('ready',createWindow)

//Quit when all windows are closed
app.on('window-all-closed',function(){
	//Close process specifically on macOS
	if (process.platform != 'darwin'){
		app.quit()
	}
})

app.on('activate',function(){
	if (win===null){
		createWindow()
	}
})