import React, { Component } from 'react'
import UserCreate from './UserCreate'
import LanguageContext from '../contexts/LanguageContext'

class App extends Component {

    state = { language: 'english'}

    onLanguageChange = language => {
        this.setState({ language })
    }
  render() {
    return (
      <div className="ui container">
        <div>
            Select a language: <span>
            <i className="flag us" onClick={()=> this.onLanguageChange('english')} />
            <i className="flag nl" onClick={()=> this.onLanguageChange('dutch')} />
            </span> 

           
        </div>
        <LanguageContext.Provider value={this.state.language}>
        <UserCreate />
        </LanguageContext.Provider>
        
      </div>
    )
  }
}

export default App
