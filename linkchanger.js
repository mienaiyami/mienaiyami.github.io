const fs = require("fs");
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

link_to_replace = `<script type="text/javascript" src="../../jquery-3.5.1.min.js"></script>`;
new_link = `<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>`;
fLocation = __dirname + "/practice/canvas/";
filterFile = ["app.js", "index.html"];
fileList = fs.readdirSync(fLocation);
filterFile.forEach((i) => {
    fileList = fileList.filter((e) => e != i);
});
console.log(fileList);
function changeLink() {
    fileList.forEach((e) => {
        fs.readFile(fLocation + e + "/index.html", "utf-8", (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            let content = data.replace(link_to_replace, new_link);
            fs.writeFileSync(fLocation + e + "/index.html", content);
            console.log("done");
        });
    });
}

readline.question("are you sure?(n/y)", (res) => {
    if (res === "y") {
        changeLink();
    }
});
