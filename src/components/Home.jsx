import React from 'react'
import Hero from './Hero'
import About from './About'
import Footer from './Footer'
import Skills from './Skills'
import Navbar from './Navbar'
import Contact from './Contact'
import Projects from './Projects'
import Education from './Education'
import Experience from './Experience'

const Home = () => {
    return (
        <div style={{ minHeight: '100vh', backgroundColor: 'hsl(var(--background))', color: 'hsl(var(--foreground))' }}>
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Education />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default Home