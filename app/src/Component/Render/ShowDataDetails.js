import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getOneData } from '../../feature/autocomplete/dataSlice'
import { useDispatch, useSelector } from 'react-redux'


export default function ShowDataDetails() {
    const dispatch = useDispatch();
    const getIdInUrl= useParams().id;
    const animeInfo = useSelector(state => state.data.one)

    useEffect(() => {
        dispatch(getOneData(getIdInUrl))
    },[dispatch, getIdInUrl])

    return (
        <div id='AffichageanimeInfo'> 
            { animeInfo && 
                <div>
                    <div className='containerView'>
                        <div className='jacketView'>
                            <img src={ animeInfo.image } alt={ animeInfo.title }/>
                        </div>
                        <div className='infoView'>
                            <h3>{ animeInfo.title }</h3>
                            { animeInfo.episodes && <p>{ animeInfo.episodes } episode{  animeInfo.episodes > 1 && 's'}</p> }
                            <p>{ animeInfo.genres.join(' - ')}</p>
                        </div>
                    </div>
                    <div className='synopsisView'>
                        <p>{ animeInfo.synopsis }</p>
                    </div>
                </div>
            }
        </div>
    )
}