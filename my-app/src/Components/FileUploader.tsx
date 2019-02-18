import * as React from 'react';
import ShowImg from './ShowImg';


interface IState{
  file: File | null,
  fileURL: string | '',
  rotation: 0
}

class FileUploader extends React.Component<any,IState> {

  constructor(props:any){
    super(props);
    this.state ={ 
      file : null,
      fileURL: '',
      rotation: 0
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
    return (
      <div>
          <input type="file" onChange ={this.handlerChange}/>
          {this.state.fileURL ? 
            (<div>
            <ShowImg fileURL={this.state.fileURL} />
          </div>) :
        (
          <div> Upload an Image</div>
        )}
          
      </div>
    );
  }
}

export default FileUploader;
