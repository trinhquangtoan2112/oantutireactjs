import React, { Component } from 'react'
import { connect } from 'react-redux'
 class Computer extends Component {
  render() {
    let keyframe = `@keyframes dateTime${Date.now()} {
      0% {top: 0px;}
      50% {top: 200px;}
      100%  {top: 0px;}
    }`

    let animation={animation:`dateTime${Date.now()} .5s`,width:100,height:100,transform:'rotate(2deg)',position:"absolute",transform:"translateX(-50%)",}
    return (
        <div className='Player1'>
             <style>   {keyframe}</style>
        <div className='theThink' style={{position:'relative'}}>
        <img src={this.props.may.img} style={animation}    alt={this.props.may.ma} ></img>
        </div>
        <div className='speech-bubble'></div>
        <img style={{width:200,height:200}} src="./img/playerComputer.png"  alt="computer"></img>

       
      </div>
    )
  }
}

const mapStateTopProps = (state)=>{
     return {
      may :state.stateOanTuTi.computer
     }
}

export default connect(mapStateTopProps)(Computer)