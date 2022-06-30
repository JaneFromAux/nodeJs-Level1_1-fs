const fs = require('fs')

fs.writeFileSync("blog1.txt", "Hello World")

const readBlog = fs.readFileSync("blog1.txt")
//console.log(readBlog.toString());

fs.writeFileSync("blog1.txt", "Pfiati, Welt!");

fs.writeFileSync("blog2.txt", "etwas")

fs.mkdir("./assets", () => { })

function isAssets() {
    if ('./assets') {
        return fs.rmdir("./assets", () => { })
    }
}
isAssets();

fs.writeFileSync("delete.txt", "delete me!")

function isDelete() {
    if ('./delete.txt') {
        return fs.unlink("./delete.txt", () => { })
    }
}
isDelete();

fs.writeFileSync("Hello.txt", "hellohello");

fs.rename("./Hello.txt", "./Bye.txt", () => { })

