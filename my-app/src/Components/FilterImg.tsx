import * as React from 'react';

const FilterImg: React.SFC<any> = (props) => {
    
    return (
        <div>
            <label htmlFor="start"> {props.label}</label>
              <input 
                type="range" 
                id="start" 
                min={props.min} 
                max={props.max} 
                onChange={props.action}
                />
        </div>

    );
}


export default FilterImg;