import React from "react";
import "./Error.scss";

function Error() {
    return <div className="pageError">
                <p className="textError">404</p>
                <h2 className="h2-error">Oups! La page que vous demandez n'existe pas.</h2>
                <a href="../">Retourner sur la page d'accueil</a>.
            </div>
}

export default Error; 
