import React, { Component } from 'react'
import { connect } from 'react-redux'
 class ThongTinTroChoi extends Component {
  render() {
    return (
      <div>
        <p className='display-4 text-warning'>{this.props.ketQua}</p>
        <p  className='display-4 text-success'>Ban Thang: <span>{this.props.Thang}</span></p>
        <p  className='display-4 text-success'>Tong so: <span>{this.props.Tong}</span></p>
      </div>
    )
  }
}
const mapStateTopProps =(state)=>{
       return {
        ketQua :state.stateOanTuTi.ketQua,
        Thang :state.stateOanTuTi.soThang,
        Tong :state.stateOanTuTi.TongSo,
       }
}

export default connect(mapStateTopProps)(ThongTinTroChoi)



