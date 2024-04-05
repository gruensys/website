function resizeWallpaper() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    document.body.style.backgroundSize = screenWidth + 'px ' + screenHeight + 'px';
}

window.onload = resizeWallpaper;
window.onresize = resizeWallpaper;

function openApp(appName) {
    const windowElement = document.getElementById(appName + 'App');
    windowElement.classList.add('active');

    
    const centerX = (window.innerWidth - windowElement.offsetWidth) / 2;
    const centerY = (window.innerHeight - windowElement.offsetHeight) / 2;
    windowElement.style.left = centerX + 'px';
    windowElement.style.top = centerY + 'px';

    $(windowElement).draggable();
}

function closeApp(appName) {
    const windowElement = document.getElementById(appName + 'App');
    windowElement.classList.remove('active');
    
    
    const iframe = windowElement.querySelector('iframe');
    if (iframe) {
        iframe.parentNode.removeChild(iframe);
    }
}

function minimizeApp(appName) {
    var app = document.getElementById(appName + 'App');
    app.style.display = "none";
}

function maximizeApp(appName) {
    const app = document.getElementById(appName + 'App');
    if (!app.classList.contains('maximized')) {
        app.style.width = "100vw"; // Set width to full viewport width
        app.style.height = "100vh"; // Set height to full viewport height
        app.style.top = "0"; // Align to top
        app.style.left = "0"; // Align to left
        app.classList.add('maximized');
    } else {
        app.style.width = ""; // Reset width
        app.style.height = ""; // Reset height
        app.style.top = ""; // Reset top position
        app.style.left = ""; // Reset left position
        app.classList.remove('maximized');
    }
}