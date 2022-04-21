import React, { useState, useEffect } from "react";

function Marvel(){

    const [joke, setJoke] = useState({});

    useEffect(()=>{

            const URL = "https://api.chucknorris.io/jokes/random";
            fetch(URL).then(res=>res.json()).then(res=>{
                console.log(res.value);
                setJoke(res.value);
            })
        
    }, []);

    return(
        <h1>{joke}</h1>
    )
}

export default Marvel;