"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, Maximize2 } from "lucide-react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const education = [
  {
    title: "SEE (Class 10)",
    level: "School Level",
    school: "Kalidevi Secondary School",
    status: "completed",
    year: "2020",
    description: "Completed Secondary Education Examination",
    // result: "GPA: 2.70 (B)",
    images: ["/education/kalidevi.jpg"],
  },
  {
    title: "+2 Management (Account)",
    level: "Higher Secondary",
    school: "Neelakantha Balmandir Secondary School",
    status: "completed",
    year: "2020 - 2022",
    description: "Completed +2 in Management (Account)",
    // result: "GPA: 2.72 (B)",
    images: ["/education/Neelakantha.jpg"],
  },
  {
    title: "BSc (Hons) Computer Science",
    level: "Bachelor Degree",
    school: "Herald College Kathmandu",
    status: "completed",
    year: "2022 - 2025",
    description:
      "Herald College Kathmandu (Affiliated with University of Wolverhampton)",
    result: "First Class",
    images: [
      "/education/wolverhampton.jpg",
      "/education/herald-college.png",
    ],
  },
  // {
  //   title: "Master in Cyber Security",
  //   level: "Future Plan",
  //   school: "Planning to pursue",
  //   status: "future",
  //   year: "2026",
  //   description: "Planning to pursue Master's degree in Cyber Security",
  //   result: "Planned",
  //   images: ["/education/1.png","/education/next1.jpeg","/education/future.png"],
  // },
]

type Filter = "all" | "completed" | "future"

/* STATUS BADGE */
function StatusBadge({ status }: { status: string }) {
  let label = ""
  let classes = "text-xs px-2 py-1 rounded-full"

  if (status === "completed") {
    label = "Completed"
    classes += " bg-green-100 text-green-700"
  } else if (status === "future") {
    label = "Future Plan"
    classes += " bg-blue-100 text-blue-700"
  } else {
    label = status
    classes += " bg-gray-100 text-gray-700"
  }

  return <span className={classes}>{label}</span>
}

/* YEAR BADGE */
function YearBadge({ year }: { year: string }) {
  return (
    <Badge variant="secondary" className="text-xs w-fit">
      {year}
    </Badge>
  )
}

/* RESULT BADGE */
function ResultBadge({ result }: { result?: string }) {
  if (!result) return null
  
  return (
    <Badge variant="outline" className="text-xs w-fit">
      {result}
    </Badge>
  )
}

/* SCHOOL NAME COMPONENT */
function SchoolName({ school }: { school: string }) {
  return (
    <p className="text-xs font-medium text-muted-foreground">
      {school}
    </p>
  )
}

/* IMAGE MODAL */
function ImageModal({
  images,
  startIndex,
  educationTitle,
  onClose,
}: {
  images: string[]
  startIndex: number
  educationTitle: string
  onClose: () => void
}) {
  const [current, setCurrent] = useState(startIndex)

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length)
  const next = () => setCurrent((c) => (c + 1) % images.length)

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Blurred background using current image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={images[current]}
          alt=""
          fill
          className="object-cover scale-110 blur-2xl opacity-50"
          aria-hidden
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Close Button */}
      <button
        className="absolute top-4 right-4 z-50 text-white bg-black/50 hover:bg-black/80 rounded-full p-2 transition"
        onClick={onClose}
      >
        <X size={22} />
      </button>

      {/* Modal Content */}
      <div
        className="relative w-full max-w-5xl flex flex-col items-center gap-4 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Main Image */}
        <div className="relative w-full h-[70vh] rounded-xl overflow-hidden">
          <Image
            src={images[current]}
            alt={`${educationTitle} ${current + 1}`}
            fill
            className="object-contain drop-shadow-2xl"
          />
        </div>

        {/* Navigation */}
        {images.length > 1 && (
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" onClick={prev}>
              ← Prev
            </Button>
            <span className="text-white text-sm">
              {current + 1} / {images.length}
            </span>
            <Button variant="outline" size="sm" onClick={next}>
              Next →
            </Button>
          </div>
        )}

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex gap-2 flex-wrap justify-center">
            {images.map((img, i) => (
              <div
                key={i}
                onClick={() => setCurrent(i)}
                className={`relative w-16 h-12 rounded-md overflow-hidden cursor-pointer border-2 transition ${
                  i === current
                    ? "border-white"
                    : "border-transparent opacity-50 hover:opacity-80"
                }`}
              >
                <Image src={img} alt={`thumb-${i}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

/* EDUCATION CARD */
function EducationCard({
  edu,
  onExpandImage,
}: {
  edu: typeof education[0]
  onExpandImage: (images: string[], index: number, title: string) => void
}) {
  return (
    <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition">

      {/* IMAGE CAROUSEL */}
      <Carousel className="w-full">
        <CarouselContent className="m-0">
          {edu.images.map((img: string, index: number) => (
            <CarouselItem key={index} className="p-0">
              <div
                className="relative w-full h-48 cursor-pointer overflow-hidden group"
                onClick={() => onExpandImage(edu.images, index, edu.title)}
              >
                {/* Blurred background layer */}
                <Image
                  src={img}
                  alt=""
                  fill
                  className="object-cover scale-110 blur-md opacity-60"
                  aria-hidden
                />

                {/* Sharp foreground image */}
                <Image
                  src={img}
                  alt={`${edu.title} ${index}`}
                  fill
                  className="object-contain relative z-10 transition group-hover:opacity-90"
                  priority
                />

                {/* Expand icon overlay */}
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black/20">
                  <div className="bg-black/60 text-white rounded-full p-2">
                    <Maximize2 size={18} />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {edu.images.length > 1 && (
          <>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </>
        )}
      </Carousel>

      {/* TITLE & STATUS */}
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex-1">
          <CardTitle className="text-lg">{edu.title}</CardTitle>
          <p className="text-xs text-muted-foreground mt-0.5">{edu.level}</p>
        </div>
        <StatusBadge status={edu.status} />
      </CardHeader>

      {/* CONTENT */}
      <CardContent className="flex flex-col flex-1 space-y-3">
        {/* School Name */}
        <SchoolName school={edu.school} />
        
        {/* Description */}
        <p className="text-sm text-muted-foreground">{edu.description}</p>

        {/* Year and Result */}
        <div className="flex flex-wrap gap-2">
          <YearBadge year={edu.year} />
          {edu.result && <ResultBadge result={edu.result} />}
        </div>
      </CardContent>
    </Card>
  )
}

/* MAIN PAGE */
export default function Page() {
  const [filter, setFilter] = useState<Filter>("all")
  const [modal, setModal] = useState<{
    images: string[]
    index: number
    title: string
  } | null>(null)

  const filteredEducation = education.filter((edu) => {
    if (filter === "all") return true
    return edu.status === filter
  })

  return (
    <div>
      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-semibold">Education</h1>
        <p className="text-muted-foreground text-sm mt-2">
          My academic journey and qualifications
        </p>
      </div>

      {/* FILTER */}
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-md py-3 mb-8 border-b">
        <div className="flex gap-2">
          {(["all", "completed", "future"] as Filter[]).map((f) => (
            <Button
              key={f}
              variant={filter === f ? "default" : "outline"}
              onClick={() => setFilter(f)}
              className="capitalize"
            >
              {f === "completed" ? "Completed" : f === "future" ? "Future Plans" : "All"}
            </Button>
          ))}
        </div>
      </div>

      {/* GRID */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
        {filteredEducation.map((edu, index) => (
          <EducationCard
            key={index}
            edu={edu}
            onExpandImage={(images, i, title) =>
              setModal({ images, index: i, title })
            }
          />
        ))}
      </div>

      {/* IMAGE MODAL */}
      {modal && (
        <ImageModal
          images={modal.images}
          startIndex={modal.index}
          educationTitle={modal.title}
          onClose={() => setModal(null)}
        />
      )}
    </div>
  )
}