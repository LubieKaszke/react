import * as React from 'react';
import FilterImg from './FilterImg';
import Rotate from './Rotate';
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
            sepia :1
        }
        this.updateRotation.bind(this);
        this.updateGrayscale.bind(this);
        this.updateBrightness.bind(this);
        this.updateContrast.bind(this);
        this.updateSepia.bind(this);

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

   public componentDidUpdate(oldProps: IProps) {
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
        }

    }

   public render(){
        const { rotation, grayscale, brightness, contrast,sepia } =  this.state;
        return <div id="showImg" className = "showImg">
        <img className="image"
        style={
                {transform: `rotate(${rotation}deg)`,
                filter: `grayscale(${grayscale}%) brightness(${brightness}%) contrast(${contrast}%) sepia(${sepia}%)` }
                } 
            src={this.state.fileURL} 
            alt="picture"
            />
        <Rotate updateRotation = {(r:any) => this.updateRotation(r)} />
        <FilterImg min="0" max="100" label="Grayscale" action = {this.updateGrayscale} />
        <FilterImg min="0" max="200" label="Brightness" action = {this.updateBrightness} />
        <FilterImg min="0" max="200" label="Contrast" action = {this.updateContrast} />
        <FilterImg min="1" max="100" label="Sepia" action = {this.updateSepia} />
    </div>
    }

    
}

export default ShowImg;