import React from 'react'

function CTA() {
  return (
    <div className="bg-white text-black flex flex-col min-h-screen w-full justify-center items-center relative">

      {/* Mobile*/}
      {/* Heading — on desktop: restored exact original offsets. On mobile: clean centered text with padding */}
      <div className="px-6 sm:px-10 lg:px-0 font-serif text-4xl sm:text-5xl lg:text-5xl text-center
                      lg:relative lg:right-50 lg:bottom-12">
        <p>We Build Systems That Brings you</p>
        <p className="lg:relative lg:right-32">Consistent Customers</p>
      </div>

      {/* Image — on desktop: restored exact original offsets. On mobile: centered with auto margins */}
      <div className="mt-6 flex justify-center lg:mt-0 lg:relative lg:top-8 lg:right-40">
        <img
          src="https://res.cloudinary.com/dpju1wia5/image/upload/v1772970546/photoPage2_yr5isy.jpg"
          className="h-[210px] w-full max-w-[310px] object-cover"
          alt="CTA visual"
        />
      </div>

      {/*text and buttons — on desktop: restored exact original offsets. On mobile: clean padded block */}
      <div className="text-black mt-8 px-6 sm:px-10 w-full max-w-xl
                      lg:px-0 lg:mt-0 lg:relative lg:left-60 lg:top-20 lg:w-[800px] lg:max-w-none">

        <p className="flex flex-col text-sm font-sans leading-relaxed">
          Too many companies waste money on ads, websites, and agencies that
          don't deliver real results. We create complete, conversion-focused
          lead generation systems that attract the right people, capture their
          interest, and turn them into paying customers automatically — without
          guesswork or wasted ad spend.
        </p>

        <div className="flex gap-3 mt-4 relative">
          <button className="bg-orange-400 rounded-2xl px-4 py-2 text-white font-sans hover:scale-110 transition duration-300">
            Learn More
          </button>

          <button className="bg-orange-400 h-10 w-10 rounded-2xl flex items-center justify-center hover:scale-110 transition duration-300">
            <i className="fa-solid fa-arrow-trend-up"></i>
          </button>
        </div>

      </div>

    </div>
  )
}

export default CTA