import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllVideo } from '../../feature/autocomplete/dataSlice'
import Pagination from './Pagination';

function ListeVideo() {
  const items = useSelector((state) => state.data.value)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllVideo())
  },[dispatch])
  
  return (
    <div className='listVideo'>
      <div className='showVideo'>
        {items && items.map((video) =>
          <Link to={`/${video._id}`} key={video._id}>
            <img src={video.image} alt={video.title}/>
          </Link>)
        }
        {items < 1 && <div className='showVideo'><h3>Anime not found!</h3></div>}
      </div>
     <Pagination/>
    </div>
  )
}

export default ListeVideo