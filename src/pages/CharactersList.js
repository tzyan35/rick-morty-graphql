import React, {useState} from "react";
import { useCharacters } from "../hooks/useCharacters";
import { Link } from "react-router-dom";

export default function CharactersList(){

    const {error,loading,data} = useCharacters();

    if (loading) return <div>spinner</div>
    if (error) return <h1>Error Found</h1>
    if (data) {
        console.log(data)
    }

    return (
        <>
        <div className="characterList">
            {data.characters.results.map(character => {
                return (
                <Link to={`/${character.id}`}>
                    <img src={character.image}/>
                    <h2>{character.name}</h2>
                    </Link>
           ) })}
        </div>
        </>
    )
}

