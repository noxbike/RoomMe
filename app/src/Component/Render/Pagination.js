import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changePage } from '../../feature/autocomplete/dataSlice'
import { numberTotalOfPage } from '../../feature/autocomplete/paginationFunction'

function Pagination() {
    const dispatch = useDispatch();
    const activePage = useSelector(state => state.data.page)
    const data = useSelector(state => state.data.value)
    const totalPage = numberTotalOfPage(data, activePage)

    const render = () => {
        let tab = Array.from({length: totalPage}, (x, i) => i + 1)
        return (
            tab.map((numberPage, index) => 
                <span 
                    key={ index } 
                    className={ `maximum ${ activePage === numberPage && 'activepage' }` } 
                    onClick={ () => dispatch(changePage(numberPage)) }
                >
                    { numberPage }
                </span>
            )
        )
    }
    return (
        <div id='pagination'>
            <p>{ render() }</p>
        </div>
    )
}

export default Pagination