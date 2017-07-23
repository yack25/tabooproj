
//document.write('<link rel="stylesheet" type="text/css" href="style.css">');

var stylesheet = document.createElement('link');

stylesheet.rel = 'stylesheet';
stylesheet.type = 'text/css';
stylesheet.href = 'style.css';

document.getElementsByTagName('head')[0].appendChild(stylesheet);


var widgetCreateScript = document.createElement('script');
widgetCreateScript.type = 'text/javascript';
widgetCreateScript.src = 'widgetCreate.js';
widgetCreateScript.id = 'widgetCreateScript';
document.getElementsByTagName('head')[0].appendChild(widgetCreateScript);



var JavaScriptCode = document.createElement("script");
JavaScriptCode.setAttribute('type', 'text/javascript');
JavaScriptCode.setAttribute("src", 'data.js');

document.getElementById('taboolaWidget').appendChild(JavaScriptCode);





