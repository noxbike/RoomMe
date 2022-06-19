import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import { Link } from 'react-router-dom';

function ListeVideo() {
  const items = useSelector((state) => state.data.value)

  return (
    <div className='listVideo'>
      {console.log(items)}
      <div className='showVideo'>
        {items && items.map((video) =>
          <Link to={`/${video._id}`} key={video._id}>
            <img src={video.image} alt={video.title}/>
          </Link>)
        }
        {items < 1 && <div className='showVideo'><h3>Anime not found!</h3></div>}
      </div>
    </div>
  )
}

export default ListeVideo