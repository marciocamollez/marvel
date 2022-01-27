import React, { useState } from 'react';

const Busca = ({search}) => {

    const [text, setText] = useState('');
    
    const onSearch = (q) => {
        setText(q);
        search(q);
    }
    return(
        <section>
            <form>
                <input type="text" placeholder="Busca de Personagem" autoFocus onChange={(e) => onSearch(e.target.value)} value={text} />
            </form>
        </section>
    );
}

export default Busca; 