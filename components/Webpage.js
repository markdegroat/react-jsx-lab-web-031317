import FillerText from './FillerText'
import React from 'react'

export default class Webpage extends React.Component{
  render(){
    return(
      <div>
        <h1>"The world's coolest webpage"</h1>
        <FillerText />
        <FillerText />
      </div>

    )
  }
}
