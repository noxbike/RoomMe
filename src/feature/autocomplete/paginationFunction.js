const pagination = (data, num) =>{
    let page = [];
    let lastVideo = num * 30 -1
    for(let i=lastVideo - 29; i <=  lastVideo; i++){
        if(data[i]){
            page.push(data[i])
        }
    }

    return page;
}

export default pagination;