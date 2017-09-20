import React, { Component } from 'react';


class PlayListItem extends Component {
  render() {
    let border ={
      "borderStyle":"solid",
      "borderColor":"black",
      "borderWidth":"1px"
    }
    let songs = this.props.arr.map((song, index)=>{
    return (
      <div style={border} key={index}>
      <div> UserName: {song.userName}</div>
      <br></br>
      <div> Artist: {song.songArtist}</div>
      <br></br>
      <div> Title: {song.songTitle}</div>
      <br></br>
      <div> Notes: {song.songNotes}</div>
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
