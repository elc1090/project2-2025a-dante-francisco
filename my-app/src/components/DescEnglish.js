export function getInfo(infoList) {
    return infoList.filter(element => {
        return element.language == 2;
    })[0].name;
}

export function getImg(imgList) {
    if(imgList[0]){
        return imgList[0].image;
    }
}
