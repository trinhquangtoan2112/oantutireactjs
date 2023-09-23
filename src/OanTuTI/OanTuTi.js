import React, { Component } from 'react'
import "./oanTUTI.css"
import Player from './Player'
import Computer from './Computer'
import ThongTinTroChoi from './ThongTinTroChoi'

import { connect } from 'react-redux'
class OanTuTi extends Component {



  render() {





    return (
      <div className='game'>


        <div className='row text-center mt-5'>
          <div className='col-4'>
            <Player></Player>
          </div>
          <div className='col-4'>
            <ThongTinTroChoi></ThongTinTroChoi>
            <button className='btn btn-success p-3 display-4'
              onClick={() => {
                this.props.BamCHoi()
              }}>Click me</button>
          </div>
          <div className='col-4'>
            <Computer></Computer>
          </div>
        </div>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    BamCHoi: () => {
      let count = 0;
      let randomComPuterItem = setInterval(() => {
        let action = {
          type: "Bat_Dau"
        }
        count++;
        dispatch(action)
        if (count > 10) {
          clearInterval(randomComPuterItem)
          let timeOut =setTimeout(20000)
         
         
        
          let action = {
            type: "Ket_Qua"
          }

          dispatch(action)
         
         
        }

      
      }, 100)


    }


  }
}
export default connect(null, mapDispatchToProps)(OanTuTi)