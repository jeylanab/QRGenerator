import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
import { error } from "console";

inquirer
    .prompt([
       { message: "type the URL"},
       { name : "URL"},

    ]).then((answers) => {
        const url = answers.URL;

        let urqr = qr.image(url)
        urqr.pipe(fs.createWriteStream("myimage.png"))

    }).catch((error) => {
        if (error) {
            
        }
        else {
            
        }
    })
