import * as React from 'react';
const Image: React.SFC<any> = (props) => {
        
        return (
            <div>
                <img className="image"
                    style={
                    {transform: `rotate(${props.rotation}deg)`,
                    filter: `grayscale(${props.grayscale}%) brightness(${props.brightness}%) contrast(${props.contrast}%) sepia(${props.sepia}%)` }
                    } 
                    src={props.fileURL} 
                    alt="picture"
                />
            </div>

        );
    }


export default Image;