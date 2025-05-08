import React from 'react'
import "./Home.css"

function Home() {
  return (
    <div className='bg p-5 mx-auto w-75'>
      <h1 className='p-3 rounded-3 shadow bg-dark text-white mb-4'>Welcome to the Future Of Web Development</h1>
      <p className="lead mb-4 ">Web development has evolved—and so have the tools that power it. Whether you're building a single-page application, a dashboard, or the next viral startup, the choice of framework can shape everything from your code structure to your sanity.In a world full of frameworks, three giants stand tall: Angular, React, and Vue.</p>
      <div className='def p-3 rounded-3 text-start shadow-lg'>
        <h3>Angular</h3>
        <p className="lead">Angular is the powerhouse—built by Google, it’s opinionated, full-featured, and perfect for enterprise-grade applications. Think of it as the heavyweight champ who brings everything to the table (sometimes more than you asked for).</p>
        <h3>React</h3>
        <p className="lead">React is the cool kid from Facebook—flexible, component-driven, and wildly popular. It doesn’t tell you how to build your app, just gives you the tools and lets you paint your masterpiece (or spaghetti, your call 😅).</p>
        <h3>Vue</h3>
        <p className="lead">Vue is the underdog turned superstar—lightweight, elegant, and incredibly beginner-friendly. It’s like that quiet student who turns out to be a genius.</p>
      </div>

    </div>
  )
}

export default Home
