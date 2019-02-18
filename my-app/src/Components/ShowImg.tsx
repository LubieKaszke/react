import * as React from 'react';
import classNames from 'classnames';
import FilterImg from './FilterImg';
import Rotate from './Rotate';
import '../styles/app.css';


  interface IProps{
    fileURL: string | ''
}

    interface IState{
        fileURL: string | '',
        rotation: 0,
        isGrayscale: boolean,
        isInvert: boolean,
    }

    let classValue:any;

class ShowImg extends React.Component<IProps, IState> {

    constructor(props: IProps){
        super(props);
        this.state = {
            fileURL: this.props.fileURL,
            rotation:0,
            isGrayscale: false,
            isInvert: false,
        }
        this.updateRotation.bind(this);
        this.updateGrayscale.bind(this);

    }
    public updateRotation = (event: React.FormEvent<HTMLInputElement>):void => {
        this.setState({
            rotation:(event.target as any).value
        })
    }

    public updateGrayscale = ():void => {

        !this.state.isGrayscale ?
        this.setState({
            isGrayscale: true
        })
        :
        this.setState({
            isGrayscale: false
        })

    }

   public render(){
    classValue = classNames({
        'gray': this.state.isGrayscale,
        'invert': this.state.isInvert,

    });
        const { rotation } =  this.state;
        return <div id="showImg" className = "showImg">
        <img className={classValue}
        style={
                {transform: `rotate(${rotation}deg)`}
                } 
            src={this.state.fileURL} 
            alt="picture"
            />
        <Rotate updateRotation = {(r:any) => this.updateRotation(r)} />
        <FilterImg updateGrayscale ={this.updateGrayscale} />
    </div>
    }

    
}

export default ShowImg;