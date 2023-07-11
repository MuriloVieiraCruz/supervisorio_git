import React, { useState } from "react";
import "../style/Nivel.css";


export default function Nivel ({nivel}) {

    const qdtNiv = nivel
    const  qdtNiv2 = nivel

    
    
 
  return (

    <div className="nivel">

        <div className="qtdNivel" style={{ height: qdtNiv2 }}>
            <h1> {qdtNiv} Ml </h1>
        </div>
     
    </div>
  );
}
