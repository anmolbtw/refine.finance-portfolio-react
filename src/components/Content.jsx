import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Content(){
    return(
        <div>
        
        {/* Middle Section  */}
        <div className="topline" />
        <p className="or">OR</p>
        <div className="bottomline" />
        {/* Middle Text  */}
        <p className="p1">Curated Portfolios</p>
        <p className="p2">Create your Portfolio</p>
        <p className="p3">Expertly-created Portfolios</p>
        <p className="p4">Create your Portfolio</p>
        <p className="p5">
            Choose from ready well diversified portfolios across industries or investing
            styles.
        </p>
        <p className="p6">
            Select the stocks you like to make diversified portfolios.
        </p>
        {/* Bottom Buttons */}
        <button className="btn1">Explore Portfolios</button>
        <button className="btn2">Create Portfolio</button>
    </div>
    );
}

export default Content;