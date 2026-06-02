'use client'

import { Mail, Phone, Linkedin, Github, Download } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Hero() {
  const roles = [
    'Senior Frontend Engineer',
    'Senior Full Stack Developer',
    'React Developer',
    'AI-Native Developer',
    'TypeScript Expert',
    'Micro-Frontend Architect',
  ]

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(100)

  useEffect(() => {
    const currentRole = roles[currentRoleIndex]

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1))
          setTypingSpeed(100)
        } else {
          // Pause at end before deleting
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(currentRole.slice(0, displayedText.length - 1))
          setTypingSpeed(50)
        } else {
          // Move to next role
          setIsDeleting(false)
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, currentRoleIndex, typingSpeed])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 pb-8 sm:pb-0 relative">
      {/* Floating gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8 mt-2">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 gradient-text float-animation">
            Nikhil Sharma
          </h1>
          <div className="h-10 flex items-center justify-center">
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400">
              {displayedText}
              <span className="animate-pulse ml-1">|</span>
            </p>
          </div>
          <p className="text-lg text-gray-500 dark:text-gray-500 mt-2">
            AI-Native Builder | React, Node.js & TypeScript | 7+ Years
          </p>
        </div>

        <div className="mb-8 max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Senior Frontend Engineer with 7+ years of experience building scalable, high-performance web applications 
            using React, TypeScript, and Node.js.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Led AI pilot programs integrating Azure OpenAI, architected micro-frontend systems using Module Federation, 
            and delivered enterprise-grade features for platforms serving millions of users.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Passionate about leveraging AI-assisted development tools (Claude Code, Cursor, GitHub Copilot) to accelerate 
            delivery and build innovative solutions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="mailto:nikhil.sharma2407@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 glow cursor-pointer"
          >
            <Mail size={20} />
            Get in touch
          </a>
          <a
            href="/Nikhil_Resume_Full_Stack.pdf"
            download="Nikhil-Resume-Full-Stack-7+yoe.pdf"
            className="flex items-center gap-2 px-6 py-3 glass rounded-lg hover:scale-105 transition-all duration-300 text-gray-800 dark:text-gray-200 cursor-pointer"
          >
            <Download size={20} />
            Download CV
          </a>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="https://linkedin.com/in/nikhil-web-js"
            target="_blank"
            rel="noopener noreferrer"
            className="glass p-3 rounded-full text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-125 hover:shadow-lg cursor-pointer"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/Nikhil-sharma24"
            target="_blank"
            rel="noopener noreferrer"
            className="glass p-3 rounded-full text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-125 hover:shadow-lg cursor-pointer"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="mailto:nikhil.sharma2407@gmail.com"
            className="glass p-3 rounded-full text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-125 hover:shadow-lg cursor-pointer"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
          <a
            href="tel:+917011590623"
            className="glass p-3 rounded-full text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-125 hover:shadow-lg cursor-pointer"
            aria-label="Phone"
          >
            <Phone size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}
