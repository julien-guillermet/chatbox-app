import React, { Component, createRef } from 'react'
import './App.css'
import './animations.css'
import Formulaire from './Components/Formulaire'
import Message from './Components/Message'

//Firebase
import base from './base'

//Animations
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group'

class App extends Component {
  state= {
    messages: {},
    pseudo: this.props.match.params.pseudo
  }

  messagesRef = createRef()

  componentDidUpdate () {
    const ref = this.messagesRef.current
    ref.scrollTop = ref.scrollHeight
  }

  componentDidMount (){
    base.syncState('/', {
      context: this,
      state: 'messages'
    })
  }

  addMessage = message => {
    const messages = {...this.state.messages}
    messages['message-'+ Date.now()] = message
    Object
    .keys(messages)
    .slice(0, -10)
    .forEach(key => {
      messages[key] = null
    })
    this.setState({ messages })
  }

  isUser = pseudo => pseudo === this.state.pseudo

  render () {

    const messages = Object
    .keys(this.state.messages)
    .map(key => (
      <CSSTransition
      timeout={1200}
      classNames='fade'
      key={key}>
         <Message
          isUser={this.isUser}
          pseudo={this.state.messages[key].pseudo}
          message={this.state.messages[key].message}/>
      </CSSTransition>
    ))

    return (
      <div className='box'>
        <div>
          <div className='messages' ref={this.messagesRef}>
            <TransitionGroup className='message'>
            { messages }
            </TransitionGroup>
          </div>
        </div>
        <Formulaire
        length={140}
        pseudo={this.state.pseudo}
        addMessage={this.addMessage}/>
      </div>
    )
  }
}

export default App
