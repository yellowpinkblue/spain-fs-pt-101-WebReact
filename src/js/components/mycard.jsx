import React from "react";


export const MyCard = (props) => {
    return (
        <div className="card myCard">
            <img src={props.imgUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <hr/>
                <a href="a" className="btn btn-primary">{props.btn}</a>
            </div>
        </div>
    );
};

