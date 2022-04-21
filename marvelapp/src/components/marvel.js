import React, { useState, useEffect } from "react";

function Marvel(){

    const [joke, setJoke] = useState([]);

    useEffect(()=>{
        if(!navigator.onLine){
            if(localStorage.getItem("joke") === null) {
                console.log("Sin conexión y sin cache")
            } else {
                console.log("Sin conexión y con cache")
                setJoke(localStorage.getItem("joke"));
            }
        } else {
            console.log("Con conexión")
            const URL = "https://gateway.marvel.com:443/v1/public/characters?ts=173534988375&apikey=108b2e2548eb4b8d7e638116256aa10f&hash=f110989889cec9ccf39d344380e8130b";
            fetch(URL).then(res=>res.json()).then(res=>{
                console.log(res.data.results[0].thumbnail.path)
                localStorage.setItem("joke", res.data.results);
                setJoke(res.data.results);
            })
        }
    }, []);

    return(
        <div>
        {joke.map(hero => (
            <div>
                <img src={hero.thumbnail.path} alt={hero.name}></img>
                <p>{hero.name}</p>
            </div>
        ))}
        </div>
    )
}

export default Marvel;