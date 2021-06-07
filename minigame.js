var list = [
    { name: "hop", url: "./minigame/hop/index.html" },
    { name: "arrow", url: "./minigame/arrow/index.html" },
    { name: "jump", url: "./minigame/jump/jump.html" },

    { name: "ninja", url: "./minigame/ninja/ninja.html" },
    { name: "twist3d", url: "./minigame/twist3d/twist3d.html" },
    { name: "dontfall", url: "./minigame/dontfall/dontfall.html" },
    { name: "marble", url: "./minigame/marble/index.html" },
]

var p = document.createElement('p');
p.align = "center";
document.body.appendChild(p);
for (var info of list) {
    var alink = document.createElement('a');
    alink.href = info.url;
    alink.target = "_blank";
    p.appendChild(alink);
    var img = document.createElement("img");
    img.src = `minigame/${info.name}.png`;
    img.alt = info.name;
    img.width = 250;
    alink.appendChild(img);
}