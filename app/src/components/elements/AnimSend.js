import React,{Component} from 'react';
import lottie from 'lottie-web';
import data from '../../assets/bodym/sending.json';
import '../../style/anims.css';

export default class AnimSend extends Component{
  constructor(props){
    super(props)
    this.send=React.createRef()
    this.state={

    }
  }
  componentDidMount=()=>{
    
      this.animation = lottie.loadAnimation({
        container: this.send.current,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        animationData: data
      })

      this.animation.addEventListener('complete',()=>{
        this.props.endAnim()
      })


  }
  render(){
    return(
      <div className="animSend" ref={this.send}/>
    )
  }
}
