import React, { Component } from 'react';
import '../Styles/App.css';


class PlayListItem extends Component {
  render() {
    let border ={
      "borderStyle":"solid",
      "borderColor":"black",
      "borderWidth":"1px"
    }
    let color={
      "color":"black"
    }
    let songs = this.props.arr.map((song, index)=>{
    return (
      <div className="item">
      <div style={border} key={index}>
      <div className="items"> UserName: {song.userName} </div>
      <br></br>
      <div className="items"> Artist: {song.songArtist}</div>
      <br></br>
      <div className="items"> Title: {song.songTitle}</div>
      <br></br>
      <div className="items"> Notes: {song.songNotes}</div>
      </div>
      </div>
    )
  })
  return(
    <div>
    {songs}
    </div>
  )
}
}







export default PlayListItem
