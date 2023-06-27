import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changePage } from '../../feature/autocomplete/dataSlice'
import { getNumberTotalOfPage } from '../../feature/autocomplete/paginationFunction'

function Pagination() {
    const dispatch = useDispatch();
    const activePage = useSelector(state => state.data.page)
    const data = useSelector(state => state.data.value)
    const totalPage = getNumberTotalOfPage(data, activePage)

    const Render = () => {
        return (
            totalPage.map(page => 
                <span 
                    key={ page } 
                    className={ `maximum ${ activePage === page && 'activepage' }` } 
                    onClick={ () => dispatch(changePage(page)) }
                >
                    { page }
                </span>
            )
        )
    }
    return (
        <div id='pagination'>
            <p><Render/></p>
        </div>
    )
}

export default Pagination