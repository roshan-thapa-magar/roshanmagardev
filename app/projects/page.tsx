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

const projects = [
  {
    name: "Cloud of Kiyirmu",
    description:
      "Enjoy fresh coffee, organic foods, and a healthy lifestyle experience.",
    images: [
      "/projects/cloudbykyirmu/1.png",
      "/projects/cloudbykyirmu/2.png",
      "/projects/cloudbykyirmu/3.png",
      "/projects/cloudbykyirmu/4.png",
      "/projects/cloudbykyirmu/5.png",
    ],
    language: "Next.js, TypeScript, Shadcn, Tailwind CSS, Node.js, MongoDB",
    live: "https://cloud-by-kyirmu.vercel.app",
    source: "",
    status: "live",
    launchDate: "2026-02-12",
  },
  {
    name: "Barber Management System",
    description:
      "A complete barber shop management platform for appointments, staff schedules, customer records, and billing.",
    images: [
      "/projects/barber/1.png",
      "/projects/barber/2.png",
      "/projects/barber/3.png",
    ],
    language: "Next.js, TypeScript, Shadcn, Tailwind CSS, Node.js, MongoDB",
    live: "https://rojan-three.onrender.com",
    source: "",
    status: "live",
    launchDate: "2025-10-20",
  },
  {
    name: "Smart Table",
    description:
      "QR-based smart restaurant system with real-time ordering and admin control.",
    images: ["/projects/smart-table/1.png"],
    language:
      "Next.js, TypeScript, Shadcn, Tailwind CSS, FastAPI, Redis, Redux, PostgreSQL",
    status: "inprogress",
    upcomingLaunchDate: "2026-06-15",
  },
  {
    name: "Restaurant Management System",
    description:
      "A full-stack restaurant management app with real-time orders, billing, table management, and payment integration.",
    images: [
      "/projects/restaurant/2.png",
      "/projects/restaurant/1.png",
      "/projects/restaurant/3.png",
    ],
    language: "React.js, Tailwind CSS, Node.js, MongoDB",
    live: "https://dinex.vercel.app",
    source: "https://github.com/roshan-thapa-magar/Frontend",
    status: "live",
    launchDate: "2025-08-01",
  },
]

type Filter = "all" | "live" | "inprogress"

/* STATUS BADGE */
function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={`text-xs px-2 py-1 rounded-full ${
        status === "live"
          ? "bg-green-100 text-green-700"
          : "bg-yellow-100 text-yellow-700"
      }`}
    >
      {status === "live" ? "Live" : "In Progress"}
    </span>
  )
}

/* DATE BADGE */
function DateInfo({
  launchDate,
  upcomingLaunchDate,
  status,
}: {
  launchDate?: string
  upcomingLaunchDate?: string
  status: string
}) {
  if (status === "live" && launchDate) {
    return (
      <Badge variant="secondary" className="text-xs w-fit">
        Launched: {launchDate}
      </Badge>
    )
  }
  if (status === "inprogress" && upcomingLaunchDate) {
    return (
      <Badge variant="outline" className="text-xs w-fit">
        Coming: {upcomingLaunchDate}
      </Badge>
    )
  }
  return null
}

/* IMAGE MODAL */
function ImageModal({
  images,
  startIndex,
  projectName,
  onClose,
}: {
  images: string[]
  startIndex: number
  projectName: string
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
            alt={`${projectName} ${current + 1}`}
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

/* PROJECT CARD */
function ProjectCard({
  project,
  onExpandImage,
}: {
  project: any
  onExpandImage: (images: string[], index: number, name: string) => void
}) {
  return (
    <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition">

      {/* IMAGE CAROUSEL */}
      <Carousel className="w-full">
        <CarouselContent className="m-0">
          {project.images.map((img: string, index: number) => (
            <CarouselItem key={index} className="p-0">
              <div
                className="relative w-full h-48 cursor-pointer overflow-hidden group"
                onClick={() => onExpandImage(project.images, index, project.name)}
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
                  alt={`${project.name} ${index}`}
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

        {project.images.length > 1 && (
          <>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </>
        )}
      </Carousel>

      {/* TITLE */}
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg">{project.name}</CardTitle>
        <StatusBadge status={project.status} />
      </CardHeader>

      {/* CONTENT */}
      <CardContent className="flex flex-col flex-1 space-y-3">
        <p className="text-sm text-muted-foreground">{project.description}</p>
        <p className="text-xs text-muted-foreground">{project.language}</p>

        <DateInfo
          launchDate={project.launchDate}
          upcomingLaunchDate={project.upcomingLaunchDate}
          status={project.status}
        />

        <div className="mt-auto flex justify-end gap-2">
          {project.live && (
            <Link href={project.live} target="_blank">
              <Button className="w-full">Live Preview</Button>
            </Link>
          )}
          {project.source && (
            <Link href={project.source} target="_blank">
              <Button variant="outline" className="w-full">
                Source Code
              </Button>
            </Link>
          )}
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
    name: string
  } | null>(null)

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true
    return project.status === filter
  })

  return (
    <div>
      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-semibold">Projects</h1>
        <p className="text-muted-foreground text-sm mt-2">
          Some of my recent work and builds
        </p>
      </div>

      {/* FILTER */}
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-md py-3 mb-8 border-b">
        <div className="flex gap-2">
          {(["all", "live", "inprogress"] as Filter[]).map((f) => (
            <Button
              key={f}
              variant={filter === f ? "default" : "outline"}
              onClick={() => setFilter(f)}
              className="capitalize"
            >
              {f === "inprogress" ? "In Progress" : f.charAt(0).toUpperCase() + f.slice(1)}
            </Button>
          ))}
        </div>
      </div>

      {/* GRID */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onExpandImage={(images, i, name) =>
              setModal({ images, index: i, name })
            }
          />
        ))}
      </div>

      {/* IMAGE MODAL */}
      {modal && (
        <ImageModal
          images={modal.images}
          startIndex={modal.index}
          projectName={modal.name}
          onClose={() => setModal(null)}
        />
      )}
    </div>
  )
}