import React from "react";
import { useParams } from "react-router";
import { useCharacter } from "../hooks/useCharacter";
import './Character.css'

export default function Character() {
    
    const {id} = useParams()

    const {data,loading,error} = useCharacter(id)


    if(error) return <div>Something Went Wrong</div>
    if(loading) return <div>Spinner...</div>

    return <div className="Character">
        <img src={data.character.image} width={750} height={750}/>
        <div className="Character-content">
            <h1>{data.character.name}</h1>
            <p>{data.character.gender}</p>
            <div className="Character-episode">
                {data.character.episode.map(episode => {
                    return <div>
                        {episode.name} - <b>{episode.episode}</b>
                        </div>
                })}
            </div>

        </div>
    </div>
}