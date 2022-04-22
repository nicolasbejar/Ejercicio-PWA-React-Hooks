import React, { useState, useEffect } from "react";

function Marvel(){

    const [joke, setJoke] = useState([]);

    useEffect(()=>{
        if(!navigator.onLine){
            if(localStorage.getItem("indicator") == null) {
                console.log("Sin conexión y sin cache")
                console.log(localStorage.getItem("heros"))
                
            } else {
                console.log("Sin conexión y con cache")
                console.log(JSON.parse(localStorage.getItem("heros")))
                setJoke(JSON.parse(localStorage.getItem("heros")));
            }
        } else {
            console.log("Con conexión")
            const URL = "https://gateway.marvel.com:443/v1/public/characters?ts=173534988375&apikey=108b2e2548eb4b8d7e638116256aa10f&hash=f110989889cec9ccf39d344380e8130b";
            fetch(URL).then(res=>res.json()).then(res=>{
                console.log(res.data.results)
                setJoke(res.data.results);
                localStorage.setItem("indicator", "Cargar");
                localStorage.setItem("heros", JSON.stringify(res.data.results));
            })
        }
    }, []);
    
    if(!navigator.onLine && localStorage.getItem("indicator") == null ){
        return(
            <div>
                <p>Loading....</p>
            </div>
        )
    }
    else{
        return(
            joke.map(hero => (
                <div className="col-lg-3 ">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{hero.name}</h5>
                            <p className="card-text">{hero.description}</p>
                        </div>
                    </div>
                </div>
            ))
        )
    }
}




export default Marvel;