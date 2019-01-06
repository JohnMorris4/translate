import React, { Component } from 'react'

class LanguageSelector extends Component {
  render() {
    return (
    <div>
        Select a language: <span>
            <i className="flag us" onClick={()=> this.props.onLanguageChange('english')} />
            <i className="flag nl" onClick={()=> this.props.onLanguageChange('dutch')} />
        </span> 
    </div>
    )
  }
}



export default LanguageSelector