import React from 'react'

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full flex justify-end px-10 py-4 z-20">
        <div className="backdrop-blur-md bg-black/30 border border-white/10 rounded-xl px-6 py-2 flex space-x-4 text-gray-200 font-medium">
            {["About", "Projects", "Contact"].map((item) => (
            <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-white"
            >
                {item}
            </a>
            ))}
        </div>
    </nav>

  )
}

export default Navbar
