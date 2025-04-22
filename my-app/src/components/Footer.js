import React from 'react'


const Footer = () => {
  return (
    <footer className="footer bg-gray-900 text-white p-6 mt-8">
      <div className="mx-auto text-center">
        <p>&copy; 2023 My App. All rights reserved.</p>
        <nav>
          <ul>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer