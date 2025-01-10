import jsPDF from "jspdf";
//const fs = require('fs');
import fs from "fs";
import moment from "moment";

const doc = new jsPDF();

const dir = '../target';
const timestamp = moment().format('YYYYMMDD_HHmmss')

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

const print = (text: string, filename: string) => {
    doc.text(text, 10, 10);
    doc.save(`${dir}/${filename}_${timestamp}.pdf`);
}

export { print };
