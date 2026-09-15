import QRCode from "qrcode";
import fs from "node:fs";

const url = "https://resume.alysars.com/";

const svg = await QRCode.toString(url, {
  type: "svg",

  errorCorrectionLevel: "H",

  margin: 4,

  width: 1200,

  color: {
    dark: "#071E15",
    light: "#FFFFFF",
  },
});

fs.mkdirSync("./public/qr", {
  recursive: true,
});

fs.writeFileSync(
  "./public/qr/resume-qr.svg",
  svg
);

console.log(
  "Resume QR generated successfully."
);