// index.js -> bundle.js
var QRCode = require('qrcode')
const data = require('./dataJson/data')

async function saveQRCode(dataInput, num, floor) {
    for (const [key, value] of Object.entries(dataInput)) {
        let path = "";
        let dataStr = "";
        if (num === 1) {
            path = `./QR_CODE/Royal_01/Floor0${floor}/${key}-${floor}.png`
            dataStr = `${value.name}-${floor}-Royal_01`
        }
        else if (num === 2) {
            path = `./QR_CODE/Royal_02/Floor0${floor}/${key}-${floor}.png`
            dataStr = `${value.name}-${floor}-Royal_02`
        }
        else if (num === 3) {
            path = `./QR_CODE/Dolphin_01/Floor0${floor}/${key}-${floor}.png`
            dataStr = `${value.name}-${floor}-Dolphin_01`
        }
        else if (num === 4) {
            path = `./QR_CODE/Dolphin_02/Floor0${floor}/${key}-${floor}.png`
            dataStr = `${value.name}-${floor}-Dolphin_02`
        }
        await QRCode.toFile(
            path,
            [{ data: dataStr, mode: 'byte' }]
        )
    }
}

async function main() {
    for (let i = 1; i <= 2; i++) {
        // await saveQRCode(data.dataRoyal01, 1, i);
        // await saveQRCode(data.dataRoyal02, 2, i);
        // await saveQRCode(data.dataDolphin01, 3, i);
        await saveQRCode(data.dataDolphin02, 4, i);
    }
}
main();