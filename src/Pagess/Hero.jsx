import React from 'react'

function Hero() {
  return (
    <div>
      <section className= "w-full bg-gray-800 text-gray-100">
	<div className="container flex flex-col justify-center   mx-auto lg:py-0 sm:py-12  lg:flex-row  ">
		<div className="flex items-center justify-center  lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="./img/img2.png" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
		<div className="flex flex-col p-2 justify-center  text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-2xl font-bold leadi sm:text-2xl">PG Shopping <br />
				<span className="text-violet-400">All</span> Product is Very good Quelety
			</h1>
			<p className="mt-6 mb-8 text-2xl sm:mb-12">Happy Shopping
				<br className="hidden md:inline lg:hidden"/> See The all Offer
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900">Buy Product</a>
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded border-gray-100">See Offer</a>
			</div>
		</div>
	</div>
</section>
    </div>
  )
}

export default Hero
