import { createSlice } from "@reduxjs/toolkit";
import { data } from '../../Component/data/listVideo.json'
const initialState={
    value: data,
    one: null,
    page: 1
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers:{
        changePage: (state, action) => {
            // state of navigation between pages
            state.page = action.payload ? action.payload : 1;
        },
        getDataBySearch: (state, action) => {
            if(action.payload !== ""){
                const regex = new RegExp(`^${action.payload.toLowerCase()}`, 'i');//save userInput on regex
    
                const loopInGenreArray = (genreArray) => {
                    for(let item in genreArray){//Browse inside the anime genres
                        if(regex.test(genreArray[item].toLowerCase())){//input user match with anime genre
                            return true;
                        }
                    }
                    return false; // false by default
                }
                let foundTitles = data.filter(anime => regex.test(anime.title)) //find by titles
                let foundGenres = data.filter(anime => loopInGenreArray(anime.genres)) //find by genres
                state.value = [...foundGenres, ...foundTitles]//concat all data found and set in state
            }
            else {
                //state should be full of data
                //when user delete his inputfield
                state.value = data 
            }
        },
        getOneData: (state, action) =>{
            // Get the dataAnime by _id
            state.one = data.filter(value => action.payload === value._id)[0] 
        }
    }
})

export const { getDataBySearch, getOneData, changePage } = dataSlice.actions

export default dataSlice.reducer