// get 30 data for one page
// depending on the page you are viewing
export const pagination = (data, activePage) =>{
    let firstDataOfTheSlice = activePage * 30 - 30;
    let result = data?.slice(firstDataOfTheSlice, firstDataOfTheSlice + 30);
    return result || [];
}

//counting how many page it's need for pagination to work
export const numberTotalOfPage = (data) => {
     let count = 1;
     while(true){
         if(pagination(data, count).length){
             count++;
         }
         else{
             count--;
             return count
         }
     }
 }