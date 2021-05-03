import {chromium}from "playwright"
(async ()=>{
    const browser =await chromium.launch({
        headless:false,
        // executablePath: "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    });
    const page =await browser.newPage();

})()