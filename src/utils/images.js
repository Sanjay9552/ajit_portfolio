// Import Low-Resolution Images
/* eslint-disable */
const lowResImages = [];
const highResImages = [];

for (let i = 1; i <= 76; i++) {
  const index = i.toString().padStart(2, "0");
  lowResImages.push(require(`../Assets/LowResWebp/LowRes_${index}.webp`));
  highResImages.push(require(`../Assets/HighRes/HighRes_${index}.jpg`));
}

const list = lowResImages.map((lowImg, index) => {
  // console.log("low res ", lowImg)
  return {
    name: `Bird ${index + 1}`,
    imgLowRes: lowImg,
    imgHighRes: highResImages[index],
    desc: "Bird is good",
  };
});

import BGImage from "../Assets/img/BGImage.jpg";
import backgroundImg from "../Assets/img/backgroundImg.jpeg";
import instagram from "../Assets/img/instagram.png";
import linkedIn from "../Assets/img/linkedin.png";

export default { list, BGImage, backgroundImg, instagram, linkedIn };
