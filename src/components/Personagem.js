import React from 'react';

const Personagem = ({item}) => {
    return(
        <div className="personagem--item">
            <div>
                <img src={item.thumbnail.path + "/standard_fantastic.jpg"} alt={item.name} />
                <div className="personagem--barra"></div>
            </div>

            <div>
                <h2>{item.name}</h2>
                {/*<ul>
                    <li>Name: {item.name}</li>
                    <li>Description: {item.description}</li>
                </ul>*/}
            </div>
        </div>
    );
}

export default Personagem; 