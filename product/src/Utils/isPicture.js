  export function isPicture(pictureUrl){
    let regex = /\.(jpg|jpeg|png|gif)$/i;
if(regex.test(pictureUrl)){
    return true
}else{
    return false
}

 }