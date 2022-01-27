import React from 'react';

const Personagem = ({item}) => {
    return(
        <div>
            <div>
                <img src={item.thumbnail.path + "/portrait_xlarge.jpg"} alt="" />
            </div>

            <div>
                <h1>{item.name}</h1>
                <ul>
                    <li>Name: {item.name}</li>
                    <li>Description: {item.description}</li>
                </ul>
            </div>
        </div>
    );
}

export default Personagem; 