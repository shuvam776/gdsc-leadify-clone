import React from 'react'

function CTA() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen text-black bg-white">

      {/* Heading */}
      <div className="relative font-serif text-5xl text-center right-50 bottom-12">
        <p>We Build Systems That Brings you</p>
        <p className="relative right-32">Consistent Customers</p>
      </div>
      <div className="relative top-8 right-40">
        <img src="https://res.cloudinary.com/dpju1wia5/image/upload/v1772970546/photoPage2_yr5isy.jpg" className="h-[210px] w-[310px] object-cover" />
      </div>
      <div className="text-black relative left-60 top-20 w-[800px]">

        <p className="flex flex-col font-sans text-sm leading-relaxed">
          Too many companies waste money on ads, websites, and agencies that
          don't deliver real results. We create complete, conversion-focused
          lead generation systems that attract the right people, capture their
          interest, and turn them into paying customers automatically — without
          guesswork or wasted ad spend.
        </p>

        <div className="relative flex gap-1 mt-4">
          <button className="px-4 py-2 font-sans text-white transition duration-300 bg-orange-400 rounded-2xl hover:scale-110">
            Learn More
          </button>

          <button className="flex items-center justify-center w-10 h-10 transition duration-300 bg-orange-400 rounded-2xl hover:scale-110">
            <i class="fa-solid fa-arrow-trend-up"></i>
          </button>
        </div>

      </div>

    </div>
  )
}

export default CTA