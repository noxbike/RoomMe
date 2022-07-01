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
        getAllVideo:(state, action) =>{
            state.page = action.payload ? action.payload : 1;
            state.value = pagination(data, state.page)
        },
        input: (state, action) => {
            const test = (reg, obj) => {
                let result = reg.test(obj.title)
                if (!result) {
                    let genres = obj.genres;
                    for(let value in genres){
                        if(reg.test(genres[value])){
                            return true;
                        }
                    }
                    return false;
                }
                return result
            }

            if(action.payload){
            const regex = new RegExp(`^${action.payload}`, 'i');
            suggestions = data.sort((a,b) => a.title < b.title ? -1 : 1).filter(v => test(regex, v));
            }

            state.value = action.payload ? suggestions : pagination(data, state.page);
        },
        getOneVideo: (state, action) =>{
            for(let value in data){
                if(action.payload === data[value]._id){ 
                    state.one = data[value]
                }
            }
        }
    }
})

export const { input, getOneVideo, getAllVideo } = dataSlice.actions

export default dataSlice.reducer