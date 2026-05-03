"use client"

import React, { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Maximize2, X } from "lucide-react"

const experiences = [
  {
    title: "Intern Software Developer",
    company: "OctSpace Pvt. Ltd",
    duration: "1 May 2025 - 30 September 2025",
    description:
      "Worked as a full stack developer intern gaining real-world experience in web development.",
    image: "/experence/intern.jpeg",
    type: "intern",
  },
  {
    title: "Full Stack + Machine Learning Training",
    company: "IT Relative Training Nepal Pvt. Ltd",
    duration: "5 Aug 2025 - 10 Feb 2026",
    description: "Completed full stack + machine learning training program.",
    image: "/experence/Tranning.jpg",
    type: "training",
  },
  {
    title: "Basic Computer Course",
    company: "Golden Eye Computer Institute Pvt. Ltd",
    duration: "15 Dec 2021 - 20 Apr 2022",
    description: "Learned computer fundamentals, MS Office, and basic IT skills.",
    image: "/experence/Basic.jpg",
    type: "training",
  },
]

export default function Page() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [filter, setFilter] = useState("all")

  const filtered =
    filter === "all"
      ? experiences
      : experiences.filter((item) => item.type === filter)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Experience</h1>
        <p className="text-muted-foreground text-sm mt-2">
          My work experience and training certificates
        </p>
      </div>
      {/* FILTER */}
      <div className="flex gap-2 flex-wrap bg-background/80 backdrop-blur-md py-3 mb-8 border-b">
        {["all", "intern", "training"].map((type) => (
          <Button
            key={type}
            variant={filter === type ? "default" : "outline"}
            onClick={() => setFilter(type)}
            className="capitalize"
          >
            {type}
          </Button>
        ))}
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((exp, index) => (
          <Card
            key={index}
            className="flex flex-col overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition"
          >
            {/* IMAGE */}
            <div
              className="relative w-full h-64 cursor-pointer overflow-hidden group"
              onClick={() => setSelectedImage(exp.image)}
            >
              {/* Blurred background version */}
              <Image
                src={exp.image}
                alt=""
                fill
                className="object-cover scale-110 blur-md opacity-60"
                aria-hidden
              />

              {/* Sharp foreground image */}
              <Image
                src={exp.image}
                alt={exp.title}
                fill
                className="object-contain relative z-10"
              />

              {/* Expand icon overlay on hover */}
              <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                <div className="bg-black/60 text-white rounded-full p-2">
                  <Maximize2 size={20} />
                </div>
              </div>
            </div>

            {/* CONTENT */}
            <CardContent className="p-4 flex flex-col flex-1">
              <h2 className="text-lg font-semibold">{exp.title}</h2>
              <p className="text-sm text-muted-foreground">{exp.company}</p>
              <p className="text-xs text-muted-foreground">{exp.duration}</p>

              <p className="text-sm mt-3">{exp.description}</p>

              <div className="flex-1" />

              <Button className="w-full mt-4" asChild>
                <a href={exp.image} download>
                  Download Certificate
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* FULL IMAGE MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Blurred full-screen background */}
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={selectedImage}
              alt=""
              fill
              className="object-cover scale-110 blur-2xl opacity-50"
              aria-hidden
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          {/* Close button */}
          <button
            className="absolute top-4 right-4 z-50 text-white bg-black/50 hover:bg-black/80 rounded-full p-2 transition"
            onClick={() => setSelectedImage(null)}
          >
            <X size={22} />
          </button>

          {/* Main image */}
          <div
            className="relative w-full max-w-4xl h-[80vh] z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Preview"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  )
}