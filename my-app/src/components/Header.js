import React from 'react'

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-3">
        <h1 className="text-2xl font-bold mb-2 md:mb-0">My App</h1>
        <nav>
          <ul className="flex flex-col md:flex-row gap-2 md:gap-6">
            <li>
              <a
                href="/"
                className="hover:text-blue-200 transition-colors duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/exercicios"
                className="hover:text-blue-200 transition-colors duration-200"
              >
                Exercícios
              </a>
            </li>
            <li>
              <a
                href="/meus-treinos"
                className="hover:text-blue-200 transition-colors duration-200"
              >
                Meus Treinos
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
