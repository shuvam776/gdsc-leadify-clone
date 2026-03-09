"use client"

import React, { useState } from "react"

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
        image : "",
        text : "Something",
        name : "i dont know man",
        role : "Neither do i bro",
    },
    {
       image : "",
        text : "Something",
        name : "i dont know man",
        role : "Neither do i bro",
    },
    {
        image : "",
        text : "Something",
        name : "i dont know man",
        role : "Neither do i bro",
    },
    {
        image : "",
        text : "Something",
        name : "i dont know man",
        role : "Neither do i bro",
    },
    
  ]

  const [index, setIndex] = useState(0)

  const nextCard = () =>
    setIndex((i) => (i + 1) % dummyCardDatas.length)

  const previousCard = () =>
    setIndex((i) => (i - 1 + dummyCardDatas.length) % dummyCardDatas.length)

  return (
    <section className="py-20 bg-white">
      <div className="flex items-start justify-between max-w-6xl mx-auto mb-16">

        <h2 className="font-serif text-5xl leading-tight">
          What Our <br /> Clients Say
        </h2>

        <p className="relative text-gray-600 w-100 top-10">
          Real feedback from businesses that use our lead
          generation systems to grow every day.
        </p>

      </div>

      {/* Carousel or Pagination whatever people call it */}
      <div className="max-w-6xl mx-auto overflow-hidden">

        <div
          className="flex gap-6 transition-transform duration-500"
          style={{
            transform: `translateX(-${index * 33.333}%)`
          }}
        >

          {dummyCardDatas.map((card, i) => (

            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow-sm min-w-[32%]"
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
            className={`h-2 w-8 rounded-full ${
              i === index ? "bg-orange-500" : "bg-gray-300"
            }`}
          />
        ))}

      </div>

    </section>
  )
}

export default Testimonials