const fs = require("fs");
let textToIndex = `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>canvas files</title>
    </head>
    <body>
        <div>`;
const canvasFiles = fs.readdirSync("./");
for (let i = 0; i < canvasFiles.length; i++) {
    textToIndex += `
    <a href="https://bzfohi9xdxb4ahltdqxx0g-on.drv.tw/TechBlazed/practice/js/canvas/${canvasFiles[i]}">canvas/${canvasFiles[i]}</a><br><br>
    `;
}

textToIndex += `
</div>
</body>
</html>
`;
fs.writeFileSync("./index.html", textToIndex);
console.log("lol");
