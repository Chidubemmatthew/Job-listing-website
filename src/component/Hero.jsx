import React from 'react'

const Hero = ({ title = "Become one of the best React Dev in the world", subtitle = "find the react job that fits your niche " }) => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-indigo-700 py-20 mb-4">
        <div
          className="max-w-7xl mz-auto px-4 sm:px-6 lg:px8
          flex flex-col items-center"
        >
          <div className="text-center">
            <h1
              className="text-4xl font-extrabold text-white
              sm:text-5xl md:text-6xl"
            >
              {title}
            </h1>
            <p className="my-4 text-xl text-white">
              {subtitle}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero
