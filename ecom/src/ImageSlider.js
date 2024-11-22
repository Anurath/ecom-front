let handleButtonClick=(event)=>{
    let img=document.getElementsByTagName("img")
    let url=img.getAttribute('src');
    console.log(url);
}

export default handleButtonClick;