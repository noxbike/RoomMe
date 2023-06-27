// get 30 data for one page
// depending on the page you are viewing
export const pagination = (data, activePage) =>{
    let firstDataOfTheSlice = activePage * 30 - 30;
    let result = data?.slice(firstDataOfTheSlice, firstDataOfTheSlice + 30);
    return result || [];
}

//counting how many page it's need for pagination to work
export const getNumberTotalOfPage = (data) => {
    let count = 1;
    while (pagination(data, count).length) {
      count++;
    }
    count--;
    return  Array.from({length: count}, (x, i) => i + 1);
 }