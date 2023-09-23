import React, { Component } from 'react'
import { connect } from 'react-redux'
class Player extends Component {
  render() {
    return (
      <div className='Player1'>
        <div className='theThink'>
          <img src={this.props.mangDatCuon.find(item => item.datCuoc === true).img} style={{ width: 100, height: 100, transform: 'rotate(2deg)' }} alt={this.props.mangDatCuon.find(item =>item.datCuoc===true).ma}></img>

        </div>
        <div className='speech-bubble'></div>
        <img style={{ width: 200, height: 200 }} src="./img/player.png" alt="player"></img>

        <div className='row'>
          {this.props.mangDatCuon.map((item, index) => {

            let border = {};
            if (item.datCuoc) {
              border = { border: '3px solid orange' };
            }
            return <div className='col-4' key={index}>
              <button style={border} className='btnItem' onClick={()=>{
                this.props.datCuoc(item.ma)
              }}>
                <img src={item.img} style={{ width: 50, height: 50 }} alt={item.ma}></img>
              </button>
            </div>
          })}

        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    mangDatCuon: state.stateOanTuTi.mangDatCuon
  }
}

const mapDispacthtoProps =(dispatch)=>{
      return {
        datCuoc:(maChoi)=>{
           let action ={
            type:"Chon_Keo_Bua_bao",
            maChoi
           }
           dispatch(action)
        }


      }
}

export default connect(mapStateToProps,mapDispacthtoProps)(Player)