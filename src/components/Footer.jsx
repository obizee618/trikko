import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-dark text-backdrop pt-20 pb-10 px-4'>
      <small className="pt-5 border-t border-light opacity-50 justify-center flex text-xs">&copy; Copyright {new Date().getFullYear()}. All rights reserved</small>
    </footer>
  )
}
