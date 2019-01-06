import React, { Component } from 'react'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContect'

class Button extends Component {
  renderSubmit(value){
    return value === 'english' ? 'Submit' : 'Voorleggen'
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
            {(value)=> this.renderSubmit(value)}
        </LanguageContext.Consumer> 
      </button>
    )
  }
  // The Context Type is not needed when Consumer is used.
  // Below the {text} is wrapped with the consumer and Const text is being left for reference only

    // static contextType = LanguageContext
  render() {
    // const text = this.context ==='english' ? 'Submit' : 'Voorleggen'
    
    return (

      <ColorContext.Consumer>  
      {(color)=> this.renderButton(color) }
        
      </ColorContext.Consumer>
    )
  }
}
export default Button