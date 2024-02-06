import React from 'react'
import {  NavLink } from 'react-router-dom'

function Hadder() {
  return (
    <div>
      <header className="p-2  bg-blue-950 text-gray-100">
	<div className="container flex justify-between h-10 mx-auto">
		<div className="flex">
			<a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
				<img className='h-12 w-15' src="./img/pg.png" alt="" />
			</a>
			<ul className="items-stretch hidden space-x-3 lg:flex">

            <li className="flex ">
					<NavLink to={'/'} rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent active   ">Home</NavLink>
				</li>
				<li className="flex">
					<NavLink to={'/Product'} rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent"> Product</NavLink>
				</li>
				
				<li className="flex">
					<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">About</a>
				</li>
				<li className="flex">
					<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Contuct</a>
				</li>
			</ul>
		</div>
		<div className="items-center flex-shrink-0 hidden lg:flex">
			<button className="px-8 py-3 font-semibold rounded bg-violet-400 text-gray-900">Log in</button>
		</div>
		<button className="p-4 lg:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-100">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>
    </div>
  )
}

export default Hadder
