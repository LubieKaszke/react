import * as React from 'react';

const Rotate: React.SFC<any> = (props) => {
        
        return (
            <div>
                <input type="number" onChange={props.updateRotation} /> 
            </div>

        );
    }


export default Rotate;