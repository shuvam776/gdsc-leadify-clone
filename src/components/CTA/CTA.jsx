import React from 'react'

function CTA() {
  return (
    <div className="bg-white text-black w-full min-h-screen flex items-center justify-center py-20 px-6 sm:px-10">

      {/* Mobile*/}
      <div className="w-full max-w-6xl flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16">

        {/*Heading and  Image */}
        <div className="flex flex-col gap-8 lg:max-w-[480px]">
          <div className="font-serif text-4xl sm:text-5xl text-center lg:text-left leading-tight">
            <p>We Build Systems That Brings You</p>
            <p>Consistent Customers</p>
          </div>

          <div className="flex justify-center lg:justify-start">
            <img
              src="https://res.cloudinary.com/dpju1wia5/image/upload/v1772970546/photoPage2_yr5isy.jpg"
              className="h-[210px] w-full max-w-[310px] object-cover rounded-xl"
              alt="CTA visual"
            />
          </div>
        </div>

        {/*text and buttons */}
        <div className="flex flex-col gap-6 lg:max-w-[420px]">
          <p className="text-sm font-sans leading-relaxed text-gray-700">
            Too many companies waste money on ads, websites, and agencies that
            don't deliver real results. We create complete, conversion-focused
            lead generation systems that attract the right people, capture their
            interest, and turn them into paying customers automatically — without
            guesswork or wasted ad spend.
          </p>

          <div className="flex gap-3">
            <button className="bg-orange-400 rounded-2xl px-4 py-2 text-white font-sans hover:scale-110 transition duration-300">
              Learn More
            </button>

            <button className="bg-orange-400 h-10 w-10 rounded-2xl flex items-center justify-center hover:scale-110 transition duration-300">
              <i className="fa-solid fa-arrow-trend-up"></i>
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CTA