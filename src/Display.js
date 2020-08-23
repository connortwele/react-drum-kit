import React, {Component} from 'react'

class Display extends Component{
    state = {
        sound: ''
    }

componentDidMount(){

    let sounds = {
        81: "sound 1",
        87: "sound 2",
        69: "sound 3",
        65: "sound 4",
        83: "sound 5",
        68: "sound 6",
        90: "sound 7",
        88: "sound 8",
        67: "sound 9"
    }

    window.addEventListener('keydown', function(e){

        const goal = e.keyCode
        let something = sounds[goal]
        this.setState({
            sound: something 
        })
        this.props.displayThis(this.state.sound)
        this.setState({
            sound: ''
        })
    }.bind(this))
}
render(){
    return(
        <div>

        </div>
    )
}

}

export default Display;