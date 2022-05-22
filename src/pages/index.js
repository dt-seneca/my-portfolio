import * as React from "react"
import Helmet from "react-helmet"
import favicon from '../images/favicon.ico'
import Header from "../components/header"
import Intro from '../components/intro'
import About from '../components/about'
import Project from '../components/project'
import Contact from '../components/contact'
import Education from "../components/education"
import { container } from '../components/index.module.css'
// styles

// data

// markup
const IndexPage = () => {
  return (
    <main className={container}>
      <Helmet
        title="Derrick's Portfolio"
      meta={
        [{name: 'description', content: '...'}, {name: 'keywords', content: '...'}]
      }
      link={[
        { rel: 'shortcut icon', type: 'image/ico', href: `${favicon}`},
        { rel: 'preconnect', href: "https://fonts.googleapis.com"},
        { rel: 'preconnect', href: "https://fonts.gstatic.com", crossOrigin: 'anonymous'},
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap'}
      ]}
        script={
          [{src: 'https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.1/p5.min.js'}]
        }
      />
      <Header/>
      <Intro />
      <About />
      <Project />
      <Education />
      <Contact />
    </main>
  )
}

export default IndexPage
