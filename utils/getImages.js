export default function fetchAllImages() {
    const imagePaths = require.context("../public/assets/our_work_images", true)
    const imagesArray = [];

    imagePaths.keys().forEach(image => {
        const imgPath = imagePaths(image);
        imagesArray.push(imgPath);
    });
    return imagesArray
}


