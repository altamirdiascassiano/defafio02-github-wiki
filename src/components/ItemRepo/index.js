import React from "react";
import { ItemContainer } from "./styles";

function ItemRepo({repo, handleRemoveRepo}){
    const handleRemove= () => {
        handleRemoveRepo(repo.id);
    }

    return(
        <ItemContainer onClick={handleRemove}>
            <h3>
                {repo.name}
            </h3>
            <p>
                {repo.full_name}
            </p>
            <a href={repo.html_url} rel="noreferrer" target="_blank">Ver epositório</a><br/>
            <a href="#" repo_id={repo.id} rel="noreferrer" className="remover">Remover</a>
            <hr/>
        </ItemContainer>
    )
}

export default ItemRepo;