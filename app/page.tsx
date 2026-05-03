"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter, FaGithub } from "react-icons/fa"
import { motion } from "framer-motion"

export default function Page() {

  // animations
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } }
  }

  return (
    <main className="w-full">

      {/* ================= HERO ================= */}
      <section className="min-h-screen flex items-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto w-full"
        >

          {/* LEFT */}
          <div className="space-y-8 py-12 md:py-0">

            <motion.div variants={fadeUp} className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-extralight leading-tight">
                Roshan <br /> Thapa Magar
              </h1>

              <p className="text-muted-foreground max-w-md text-base md:text-lg">
                I design and build scalable, high-performance web applications with real-world impact.
              </p>
            </motion.div>

            {/* BUTTONS */}
            <motion.div variants={fadeUp} className="flex gap-4 ">

              {/* DOWNLOAD CV */}
              <Button asChild>
                <a
                  href="/resume.pdf"
                  download="Roshan_Thapa_Magar_CV.pdf"
                  className="px-8 py-5"
                >
                  Download CV
                </a>
              </Button>

              <Button variant="ghost">
                Contact Me
              </Button>
            </motion.div>


            {/* SOCIAL LINKS */}
            <motion.div variants={fadeUp} className="flex gap-5  text-muted-foreground">

              <motion.a
                href="https://www.facebook.com/roshan.thapa.magar.193061"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="p-2 hover:text-primary transition"
                aria-label="Facebook"
              >
                <FaFacebookF size={16} />
              </motion.a>

              <motion.a
                href="https://www.instagram.com/roshanthapamagar_/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="p-2 hover:text-primary transition"
                aria-label="Instagram"
              >
                <FaInstagram size={16} />
              </motion.a>

              <motion.a
                href="https://x.com/RoshanThap21156"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="p-2 hover:text-primary transition"
                aria-label="Twitter"
              >
                <FaTwitter size={16} />
              </motion.a>

              <motion.a
                href="https://github.com/roshan-thapa-magar"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="p-2 hover:text-primary transition"
                aria-label="GitHub"
              >
                <FaGithub size={16} />
              </motion.a>

            </motion.div>

          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center justify-end"
          >
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="/roshan.jpeg"
                alt="Roshan"
                fill
                priority
                className="object-cover grayscale group-hover:grayscale-0 transition duration-500"
              />
            </div>
          </motion.div>

        </motion.div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="min-h-screen flex items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto w-full"
        >

          {/* IMAGE */}
          <motion.div variants={fadeUp} className="flex justify-center md:justify-start">
            <div className="relative w-full max-w-sm aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/roshan.jpeg"
                alt="Roshan Thapa Magar"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div variants={fadeUp} className="space-y-6">

            <div className="flex items-center gap-3 text-muted-foreground/50 text-xs tracking-widest">
              <div className="w-6 h-px bg-foreground/30" />
              <span>ABOUT ME</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-light">
              A bit about me
            </h2>

            <Card className="bg-muted/40 border-none rounded-2xl">
              <CardContent className="p-8 space-y-4 text-muted-foreground leading-relaxed">

                <p>
                  My name is <span className="text-foreground font-medium">Roshan Thapa Magar</span>, originally from Dhading and currently living in Thulo Bharang, Kathmandu.
                </p>

                <p>
                  I am pursuing my bachelor's degree in BSc (Hons) Computer Science at Herald College Kathmandu.
                  I am passionate about building software that solves real-world problems and creating systems that are efficient, scalable, and user-friendly.
                </p>

                <p>
                  I enjoy working across the full stack — from designing clean and intuitive user interfaces to building strong backend systems.
                  Coding is not just my study field, it's something I genuinely enjoy doing.
                </p>

                <p>
                  Outside of tech, I like listening to music, playing video games, and watching movies.
                  These help me stay relaxed, creative, and motivated.
                </p>

              </CardContent>
            </Card>

          </motion.div>

        </motion.div>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="min-h-screen flex items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-6xl mx-auto w-full space-y-12"
        >

          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-light">
            My toolbox
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Frontend", "Backend", "Databases", "Cloud & Infra", "Tools"].map((title, i) => (
              <motion.div key={i} variants={fadeUp} whileHover={{ y: -6 }}>
                <Card className="bg-muted/40 border-none rounded-2xl">
                  <CardContent className="p-6">
                    <h3 className="font-medium">{title}</h3>
                    <p className="text-muted-foreground text-sm">
                      Modern technologies & best practices
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="mt-24 border-t py-8 text-center text-sm text-muted-foreground">
        <p>
          <a
            href="mailto:roshan.thapamagar@gmail.com"
            className="hover:underline"
          >
            roshan.thapamagar@gmail.com
          </a>
        </p>
        <p>&copy; {new Date().getFullYear()} Roshan Thapa Magar</p>
      </footer>

    </main>
  )
}