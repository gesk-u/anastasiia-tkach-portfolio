import './App.css';
import Profile from './components/Profile.tsx';
//import { useState } from 'react';
//import { filters, projects, skills } from './content'
//import type { Filter, Skill } from './content'


function App() {
  //const [activeSkill, setActiveSkill] = useState<Skill>(skills[0])
  //const [filter, setFilter] = useState<Filter>('ALL')
  ///const visibleSkills = skills.filter((s) => filter === 'ALL' || (filter === 'CORE' ? s.core : s.cat === filter))
  //const [openProject, setOpenProject] = useState(0)


  return (
    <main>
      <div className="noise" aria-hidden="true" />
      
      <header className="site-header">
        <a href="#top" className="brand" aria-label="Back to top">
          <span className="brand-mark" aria-hidden="true">AT</span>
          <span>ANASTASIIA.TKACH<span className="cursor">_</span></span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#profile">01_PROFILE</a>
          <a href="#skills">02_STACK</a>
          <a href="#work">03_WORK</a>
          <a href="#contact">04_CONTACT</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <div className="eyebrow"><span>[ ENGINEER / DEVELOPER/ ML ]</span><span>SYS.{new Date().getFullYear()}.</span></div>
          <h1><span>Anastasiia</span><span className="outline">Tkach</span></h1>
          <p className="hero-intro">
            Full-stack developer based in Finland. I care about <strong>clean code</strong>,{' '}
            <strong>accessible interfaces</strong> and tools people actually use.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#work">VIEW PROJECTS <span>↘</span></a>
            <a className="button ghost" href="#contact">INITIATE CONTACT</a>
          </div>
        </div>
        <div className="portrait-wrap">
          <></>
        </div>
        <div className="hero-footer">
          <span>BASED IN FINLAND / AVAILABLE WORLDWIDE</span>
          <span>SEE MY WORK ↓</span>
        </div>
      </section>

      <Profile />




    </main>
  )
}

export default App
