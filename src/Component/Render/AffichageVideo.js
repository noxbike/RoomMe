import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getOneVideo } from '../../feature/autocomplete/dataSlice'


function AffichageVideo() {
    const video = useSelector(state => state.data.one)
    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOneVideo(params.id))
    },[dispatch, params])

  return (
    <div id='AffichageVideo'> 
        { video && 
        <div>
            <div className='containerView'>
                <div className='jacketView'>
                    <img src={video.image} alt={video.title}/>
                </div>
                <div className='infoView'>
                    <h3>{video.title}</h3>
                    {video.episodes && <p>{video.episodes} episode{video.episodes > 1 && 's'}</p>}
                    <p>{video.genres.map(genre => <span>{genre} </span>)}</p>
                </div>
            </div>
            <div className='synopsisView'>
                <p>{video.synopsis}</p>
            </div>
        </div>}
    </div>
  )
}

export default AffichageVideo