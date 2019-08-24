import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import Techstack from './components/techstack'
import Projects from './components/projects'
import Footer from  './components/footer'
import 'bulma'
import './mystyle.scss'

class App extends React.Component {
  render() {
    return (
      <div>
        < Navbar />
        < Hero />
        < About />
        < Techstack />
        < Projects />
        < Footer />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
