import React from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { page } from '../../feature/autocomplete/dataSlice'

function Pagination() {
    const dispatch = useDispatch();
    const activePage = useSelector(state => state.data.page)
    const totalPage= useSelector(state => state.data.totalPage)

    const render = () => {
        let tab=[];
        for(let i = 1; i <= totalPage; i++){
            tab.push(i)
        }
        return (
            tab.map(num => <span className={`maximum ${activePage === num && 'activepage'}`} onClick={() => dispatch(page(num))}>{num}</span> )
        )
    }
    return (
        <div id='pagination'>
            <p>{render()}</p>
        </div>
    )
}

export default Pagination