import React from "react"

export default function Place(props){
    return(
        <div className="cols">
            <img src={props.imageUrl}/>

            <div className="col-right">
                <div className="wrapper">
                    <img src="https://www.graphicsprings.com/filestorage/stencils/21307b9cf1e41fb9de16dc2629072527.png?width=500&height=500"/>
                    <h3>{props.title}</h3>
                    <a href={props.googleMapsUrl}>view on google maps</a>
                </div>

                <h2>{props.location}</h2>

                <div className="wrapper">
                    <p>{props.startDate}</p>
                    <p>{props.endDate}</p>
                </div>
                
                <p>{props.description}</p>
            </div>
    
        </div>
    )
}