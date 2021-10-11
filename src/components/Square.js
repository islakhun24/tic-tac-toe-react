import React from "react";
import "../App.scss";
import cancel from '../images/cancel.png';
import dot from '../images/dot.png'
function Square({ val, chooseSquare }) {
  return (
    <div className="square" onClick={chooseSquare}>
      {
          val.toLowerCase() === 'o' ? (
              <img src={dot} width={40} height={40} alt=""/>
          ): (
            val.toLowerCase() === 'x' ?(
                <img src={cancel} width={40} height={40} alt=""/>
            ): ''
          )
      }
    </div>
  );
}

export default Square;