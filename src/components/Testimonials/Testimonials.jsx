"use client"

import React, { useState, useEffect } from "react"

function Testimonials() {

  const dummyCardDatas = [
    {
      image: "https://res.cloudinary.com/dpju1wia5/image/upload/v1769274336/cld-sample.jpg",
      text: "Working with this agency completely transformed our digital presence. Our inbound leads increased by 3x in just 60 days.",
      name: "Sarah Thompson",
      role: "Head of Marketing, Fintechly"
    },
    {
      image: "https://res.cloudinary.com/dpju1wia5/image/upload/v1769274334/samples/woman-on-a-football-field.jpg",
      text: "They don't just design — they think like business partners. Every decision was backed by strategy and data.",
      name: "Michael Chen",
      role: "Product Manager, SaaScore"
    },
    {
      image: "https://res.cloudinary.com/dpju1wia5/image/upload/v1769274332/samples/man-portrait.jpg",
      text: "From branding to website performance marketing — everything felt aligned. Best agency experience we've had.",
      name: "Daniel Roberts",
      role: "Founder, GrowthLab"
    },
    {
      image: "",
      text: "Something",
      name: "i dont know man",
      role: "Neither do i bro",
    },
    {
      image: "",
      text: "Something",
      name: "i dont know man",
      role: "Neither do i bro",
    },
    {
      image: "",
      text: "Something",
      name: "i dont know man",
      role: "Neither do i bro",
    },
    {
      image: "",
      text: "Something",
      name: "i dont know man",
      role: "Neither do i bro",
    },

  ]

  const [index, setIndex] = useState(0)

  // How many cards are visible at once, depends on screen width
  const [visibleCards, setVisibleCards] = useState(3)

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setVisibleCards(1)
      else if (window.innerWidth < 1024) setVisibleCards(2)
      else setVisibleCards(3)
    }
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  const nextCard = () =>
    setIndex((i) => (i + 1) % dummyCardDatas.length)

  const previousCard = () =>
    setIndex((i) => (i - 1 + dummyCardDatas.length) % dummyCardDatas.length)

  const cardWidthPercent = 100 / visibleCards

  return (
    <section className="py-20 bg-white">

      {/* mobile */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between max-w-6xl mx-auto px-6 sm:px-10 mb-16 gap-6">

        <h2 className="font-serif text-5xl leading-tight shrink-0">
          What Our <br /> Clients Say
        </h2>

        <p className="text-gray-600 sm:max-w-xs sm:pt-10">
          Real feedback from businesses that use our lead
          generation systems to grow every day.
        </p>

      </div>

      {/* Carousel or Pagination whatever people call it */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 overflow-hidden">

        <div
          className="flex gap-6 transition-transform duration-500"
          style={{
            transform: `translateX(-${index * cardWidthPercent}%)`
          }}
        >

          {dummyCardDatas.map((card, i) => (

            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow-sm shrink-0"
              style={{ width: `calc(${cardWidthPercent}% - 24px)` }}
            >
              <div className="mb-4">
                <img
                  src={card.image}
                  alt={card.name}
                  className="object-cover w-10 h-10 rounded-full"
                />
              </div>

              <p className="mb-6 text-gray-700">
                "{card.text}"
              </p>

              <div className="mt-6">
                <p className="font-semibold">
                  {card.name}
                </p>
                <p className="text-sm text-gray-500">
                  {card.role}
                </p>
              </div>

            </div>

          ))}

        </div>

      </div>

      {/* the left and right buttons */}
      <div className="flex justify-center gap-6 mt-10">

        <button
          onClick={previousCard}
          className="px-4 py-2 border rounded-md"
        >
          ←
        </button>

        <button
          onClick={nextCard}
          className="px-4 py-2 border rounded-md"
        >
          →
        </button>

      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-3 mt-6">

        {dummyCardDatas.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-8 rounded-full ${i === index ? "bg-orange-500" : "bg-gray-300"
              }`}
          />
        ))}

      </div>

    </section>
  )
}

export default Testimonials