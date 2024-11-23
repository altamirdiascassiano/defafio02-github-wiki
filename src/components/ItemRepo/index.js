import React from "react";
import { ItemContainer } from "./styles";

function ItemRepo(){
    return(
        <ItemContainer>
            <h3>
                Pablo
            </h3>
            <p>
                dio/pablo
            </p>
            <a href="#">Ver epositório</a><br/>
            <a href="#" className="remover">Remover</a>
            <hr/>
        </ItemContainer>
    )
}

export default ItemRepo;