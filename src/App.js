import React, { Component } from 'react';
import sound1 from './sounds/sound1.mp3'
import sound2 from './sounds/sound2.mp3'
import sound3 from './sounds/sound3.mp3'
import sound4 from './sounds/sound4.mp3'
import sound5 from './sounds/sound5.mp3'
import sound6 from './sounds/sound6.mp3'
import sound7 from './sounds/sound7.mp3'
import sound8 from './sounds/sound8.mp3'
import sound9 from './sounds/sound9.mp3'
import Display from './Display'



class App extends Component{
  state={
    sound: ''
  }

componentDidMount(){
  window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const active = document.querySelector(`.drumpad[data-key="${e.keyCode}"]`)
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    active.classList.add('active');
    setTimeout(function(){
      active.classList.remove('active')
    }, 150)
  }) 
  
}

displayThis = (argument) =>{
  this.setState({
    sound: argument
  })
  setTimeout(function(){
    this.setState({
      sound: ''
    })
  }.bind(this),150)
}





render() {
  

      
  return (
    <div className="App" id="drum-machine">
      <div className="drumpad" data-key="81"><kbd>Q</kbd></div>
      <div className="drumpad" data-key="87"><kbd>W</kbd></div>
      <div className="drumpad" data-key="69"><kbd>E</kbd></div>
      <div className="drumpad" data-key="65"><kbd>A</kbd></div>
      <div className="drumpad" data-key="83"><kbd>S</kbd></div>
      <div className="drumpad" data-key="68"><kbd>D</kbd></div>
      <div className="drumpad" data-key="90"><kbd>Z</kbd></div>
      <div className="drumpad" data-key="88"><kbd>X</kbd></div>
      <div className="drumpad" data-key="67"><kbd>C</kbd></div>
      <audio src={sound1} type="audio/mpeg"data-key="81"></audio>
      <audio src={sound2} type="audio/mpeg"data-key="87"></audio>
      <audio src={sound3} type="audio/mpeg"data-key="69"></audio>
      <audio src={sound4} type="audio/mpeg"data-key="65"></audio>
      <audio src={sound5} type="audio/mpeg"data-key="83"></audio>
      <audio src={sound6} type="audio/mpeg"data-key="68"></audio>
      <audio src={sound7} type="audio/mpeg"data-key="90"></audio>
      <audio src={sound8} type="audio/mpeg"data-key="88"></audio>
      <audio src={sound9} type="audio/mpeg"data-key="67"></audio>
      <div className="displayText">{ this.state.sound }</div>
      <Display displayThis = {this.displayThis}/>

 
    </div>
  );
}
}

export default App;
