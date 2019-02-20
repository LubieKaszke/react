import * as React from 'react';

const Rotate: React.SFC<any> = (props) => {
        
        return (
            <div>
                <label htmlFor="rotate"> Angle</label>
                <input id="rotate" type="number" onChange={props.updateRotation} /> 
            </div>

        );
    }


export default Rotate;