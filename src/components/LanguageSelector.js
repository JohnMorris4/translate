import React, { Component } from 'react'
import LanguageContext from '../contexts/LanguageContext'

class LanguageSelector extends Component {
// Setup the context type
static contextType = LanguageContext

  render() {
    return (
    <div>
        Select a language: <span>
            <i className="flag us" onClick={()=> this.context.onLanguageChange('english')} />
            <i className="flag nl" onClick={()=> this.context.onLanguageChange('dutch')} />
        </span> 
    </div>
    )
  }
}



export default LanguageSelector