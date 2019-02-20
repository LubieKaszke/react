import * as React from 'react';
import FilterImg from './FilterImg';
import Rotate from './Rotate';
import Image from './Image';
import '../styles/app.css';
import '../styles/input.css';


  interface IProps{
    fileURL: string | ''
}

    interface IState{
        fileURL: string | '',
        rotation: number,
        grayscale: number,
        contrast: number,
        brightness: number,
        sepia: number,
        width:number,
        height:number
    }

class ShowImg extends React.Component<IProps, IState> {

    constructor(props: IProps){
        super(props);
        this.state = {
            fileURL: this.props.fileURL,
            rotation:0,
            grayscale: 0,
            contrast: 100,
            brightness: 100,
            sepia: 1,
            width: 0,
            height: 0
        }
    }
    public updateRotation = (event: React.FormEvent<HTMLInputElement>):void => {
        this.setState({
            rotation:(event.target as any).value
        })
    }

    public updateGrayscale = (event: React.FormEvent<HTMLInputElement>):void => {
        this.setState({
            grayscale:(event.target as any).value
        })
    }

    public updateBrightness = (event: React.FormEvent<HTMLInputElement>):void => {
        this.setState({
            brightness:(event.target as any).value
        })
    }

    public updateContrast = (event: React.FormEvent<HTMLInputElement>):void => {
        this.setState({
            contrast:(event.target as any).value
        })
    }

    public updateSepia = (event: React.FormEvent<HTMLInputElement>):void => {
        this.setState({
            sepia:(event.target as any).value
        })
    }

    public makePixels =( err:any, pixels:any)  => {
        if(err) {
          // tslint:disable-next-line:no-console
          console.log("Bad image path")
          return
        }
         this.setState({
             width: pixels.shape[0],
             height: pixels.shape[1]
         })
      }

    public componentDidMount(){
        const getPixels = require("get-pixels");
        getPixels(this.state.fileURL,this.makePixels );
    }

   public componentDidUpdate(oldProps: IProps) {
        const getPixels = require("get-pixels");
        const newProps =this.props;
        if(oldProps.fileURL !== newProps.fileURL){
            this.setState({
                fileURL: this.props.fileURL,
                rotation:0,
                grayscale: 0,
                contrast: 100,
                brightness: 100,
                sepia :1
            })
            getPixels(this.props.fileURL,this.makePixels );
        }

    }

   public render(){  
        const { rotation, grayscale, brightness, contrast,sepia,fileURL,width,height } =  this.state;
        return <div id="showImg" className = "showImg">
        <Image rotation={rotation} grayscale={grayscale} brightness={brightness} contrast={contrast} sepia={sepia} fileURL ={fileURL} />
        <p>{width} x {height} px </p>
        <Rotate updateRotation = {(r:any) => this.updateRotation(r)} />
        <FilterImg min="0" max="100" label="Grayscale" action = {this.updateGrayscale} />
        <FilterImg min="0" max="200" label="Brightness" action = {this.updateBrightness} />
        <FilterImg min="0" max="200" label="Contrast" action = {this.updateContrast} />
        <FilterImg min="1" max="100" label="Sepia" action = {this.updateSepia} />
        
    </div>
    }

    
}

export default ShowImg;