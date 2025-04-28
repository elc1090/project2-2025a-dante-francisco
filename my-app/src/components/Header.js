import React, { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (

    <header className="bg-black text-white shadow-md relative">
      <div className="container mx-auto flex items-center justify-between px-4 py-10">
        {/* Logo */}
        <h1 className="text-3xl font-bold">GYM Strong</h1>

        {/* Desktop nav */}
        <nav className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex gap-6">
            <li><a href="/" className="hover:text-blue-200 text-xl">Home</a></li>
            <li><a href="/exercicios" className="hover:text-blue-200 text-xl">Exercícios</a></li>
            <li><a href="/meus-treinos" className="hover:text-blue-200 text-xl">Meus Treinos</a></li>
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white focus:outline-none z-20"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile menu */}
        {isOpen && (
          <div className="fixed top-0 right-0 w-64 h-full bg-gray-900 shadow-lg p-6 z-10 transition-all duration-300">
            <ul className="flex flex-col gap-4">
              <li><a href="/" className="hover:text-blue-200" onClick={() => setIsOpen(false)}>Home</a></li>
              <li><a href="/exercicios" className="hover:text-blue-200" onClick={() => setIsOpen(false)}>Exercícios</a></li>
              <li><a href="/meus-treinos" className="hover:text-blue-200" onClick={() => setIsOpen(false)}>Meus Treinos</a></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
