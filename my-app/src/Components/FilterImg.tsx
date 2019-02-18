import * as React from 'react';

const FilterImg: React.SFC<any> = (props) => {
    
    return (
        <div>
            <button onClick={props.updateGrayscale}>Add grayscale</button>
            <button>Add invert</button>
        </div>

    );
}


export default FilterImg;