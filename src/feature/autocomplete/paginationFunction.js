const pagination = (data, num) =>{
    let firstVideo = num * 30 - 30
    return data.slice(firstVideo, firstVideo + 30);
}

export default pagination;