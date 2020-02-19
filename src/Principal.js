import React from 'react';
import Pelicula from './Pelicula';
import Descripcion from './Descripcion';

function Principal(){
    return(
        <div>
            <Pelicula titulo="Matrix" leandro="Leandro Acosta" />
            <Descripcion />
        </div>
    );
}

export default Principal;
