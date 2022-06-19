import { createSlice } from "@reduxjs/toolkit";
import { data } from '../../Component/data/listVideo.json'
var suggestions = [];
const initialState={
    value: data,
    one: null,
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers:{
        input: (state, action) => {
            let title = [];
            for(let item in data){
                title.push(data[item].title);
            }
            if(action.payload){
            const regex = new RegExp(`^${action.payload}`, 'i');
            suggestions = title.sort().filter(v => regex.test(v));
            }
            let movieTrie = [];
            suggestions.map(title =>
               data.map(video => video.title === title &&
                   movieTrie.push(video)
                )
            )
            
            state.value = action.payload.length ? movieTrie :data
        },
        getOneVideo: (state, action) =>{
            for(let value in data){
                if(action.payload ===data[value]._id){
                   state.one =data[value]
                }
            }
        }
    }
})

export const { input, getOneVideo } = dataSlice.actions

export default dataSlice.reducer