import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { pagination } from '../../feature/autocomplete/paginationFunction';
import { useSelector } from 'react-redux';
import Pagination from './Pagination';

export default function ListeData() {
	const [sliceOfData, setSliceOfData] = useState([])
  	const data = useSelector(state => state.data.value)
	const activePage = useSelector(state => state.data.page)
	
	useEffect(() => {
		setSliceOfData(pagination(data, activePage));
	},[data,activePage])
	return (
		<div className='listVideo'>
			<div className='showVideo'>
					{ sliceOfData.length > 0 && sliceOfData.map((anime, index) =>
						<Link to={ `/${ anime._id }` } key={ index }>
							<img src={ anime.image } alt={ anime.title }/>
						</Link>)
					}
					{ sliceOfData.length < 1 && 
						<div className='showVideo'>
							<h3>Anime not found!</h3>
						</div>
					}
			</div>
			<Pagination/>
		</div>
	)
}