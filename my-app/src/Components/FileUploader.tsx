import * as React from 'react';
import ShowImg from './ShowImg';


interface IState{
  file: File | null,
  fileURL: string | '',
  rotation: number,
  width: number,
  height: number
}


class FileUploader extends React.Component<any,IState> {

  constructor(props:any){
    super(props);
    this.state ={ 
      file : null,
      fileURL: '',
      rotation: 0,
      width: 0,
      height: 0
    }
    this.handlerChange.bind(this);
    
  }

  public handlerChange = (event: any): void => {
    this.setState({
      file:event.target.files[0],
      fileURL: URL.createObjectURL(event.target.files[0])
    })
    }

 public render() {
  const getPixels = require("get-pixels");
   if(this.state.file){
   
   getPixels(this.state.fileURL, function(err:any, pixels:any) {
     if(err) {
       // tslint:disable-next-line:no-console
       console.log("Bad image path")
       return
     }
      // tslint:disable-next-line:no-console
      console.log(pixels.shape.slice());
   });
  }
    return (
      <div className="container">
        <label htmlFor="file-upload" className="custom-file-upload"> Choose image
        </label>
          <input id="file-upload" type="file" onChange ={this.handlerChange}/>
          {this.state.fileURL ? 
            (<div>
            <ShowImg fileURL={this.state.fileURL} />
          </div>) :
        (
          <div className="upload-message"> No image uploaded</div>
        )}
          
      </div>
    );
  }
}

export default FileUploader;
