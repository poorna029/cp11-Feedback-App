import {Component} from 'react'

import Feedback, {Opinion} from './components/Feedback'

import './App.css'

const resources = {
  emojis: [
    {
      id: 0,
      name: 'Sad',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/sad-emoji-img.png',
    },
    {
      id: 1,
      name: 'None',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/none-emoji-img.png',
    },
    {
      id: 2,
      name: 'Happy',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/happy-emoji-img.png',
    },
  ],
  loveEmojiUrl: 'https://assets.ccbp.in/frontend/react-js/love-emoji-img.png',
}

class App extends Component {
  state = {s: false}

  fe = () => {
    this.setState(p => ({s: !p.s}))
  }

  render() {
    const {s} = this.state
    console.log(s)

    return (
      <>
        {s === false ? (
          <Feedback resources={resources} f1={this.fe} />
        ) : (
          <Opinion rs={resources} />
        )}
      </>
    )
  }
}

export default App
