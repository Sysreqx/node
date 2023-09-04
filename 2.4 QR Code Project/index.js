/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import fs from "fs";
import inquirer from "inquirer";
import qr from "qr-image";

const questions = [
    {
        type: 'input',
        name: 'url',
        message: 'Enter your url: '
    },
];

let urlVar = "esefseffef.com";
inquirer
inquirer.prompt(questions)
    .then(answers => {
        // console.log(answers);
        urlVar = answers.url;

        var qr_svg = qr.image(urlVar, { type: 'svg' });
        qr_svg.pipe(fs.createWriteStream('i_love_qr.svg'));

        var svg_string = qr.imageSync(urlVar, { type: 'svg' });
    });



