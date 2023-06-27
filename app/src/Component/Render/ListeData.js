import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { pagination } from '../../feature/autocomplete/paginationFunction';
import { useSelector } from 'react-redux';
import Pagination from './Pagination';

export default function ListeData() {
	const [sliceData, setSliceData] = useState([])
  	const data = useSelector(state => state.data.value)
	const activePage = useSelector(state => state.data.page)
	
	useEffect(() => {
		setSliceData(pagination(data, activePage));
	},[data,activePage])
	return (
		<div className='listVideo'>
			<div className='showVideo'>
					{ sliceData && sliceData.map((anime, index) =>
						<Link to={ `/${ anime._id }` } key={ index }>
							<img src={ anime.image } alt={ anime.title }/>
						</Link>)
					}
					{ sliceData < 1 && 
						<div className='showVideo'>
							<h3>Anime not found!</h3>
						</div>
					}
			</div>
			<Pagination/>
		</div>
	)
}