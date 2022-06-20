import { createSlice } from "@reduxjs/toolkit";
import { data, meta } from '../../Component/data/listVideo.json'
import pagination from './paginationFunction';
var suggestions = [];
const initialState={
    value: null,
    one: null,
    page: 1,
    totalPage: meta.totalPage
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers:{
        page:(state, action) =>{
            state.page = action.payload
            state.value = pagination(data, action.payload)
        },
        getAllVideo:(state) =>{
            state.value = pagination(data, state.page)
        },
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
            
            state.value = action.payload.length ? movieTrie : pagination(data, state.page);
        },
        getOneVideo: (state, action) =>{
            for(let value in data){
                if(action.payload ===data[value]._id){
                   state.one = data[value]
                }
            }
        }
    }
})

export const { input, getOneVideo, getAllVideo, page } = dataSlice.actions

export default dataSlice.reducer