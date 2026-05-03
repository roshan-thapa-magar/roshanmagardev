"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa"
import { motion } from "framer-motion"

export default function Page() {

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  }

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.18 } }
  }

  return (
    <main className="w-full">

      {/* ================= HERO ================= */}
      <section className="py-24 md:py-32">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto px-6 items-center"
        >

          {/* LEFT */}
          <div className="space-y-10">

            <motion.div variants={fadeUp} className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-extralight leading-[1.1] tracking-tight">
                Roshan <br /> Thapa Magar
              </h1>

              <p className="text-muted-foreground max-w-md text-lg leading-relaxed">
                I design and build scalable, high-performance web applications with real-world impact.
              </p>
            </motion.div>

            {/* BUTTONS */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">

              <Button asChild className="px-8 py-6 rounded-xl">
                <a href="/resume.pdf" download="Roshan_Thapa_Magar_CV.pdf">
                  Download CV
                </a>
              </Button>

              <Button variant="ghost" className="px-6 py-6 rounded-xl">
                Contact Me
              </Button>
            </motion.div>

            {/* SOCIAL LINKS */}
            <motion.div
              variants={fadeUp}
              className="flex gap-4 text-muted-foreground"
            >
              {[FaFacebookF, FaInstagram, FaTwitter, FaGithub].map((Icon, i) => (
                <motion.a
                  key={i}
                  href={[
                    "https://www.facebook.com/roshan.thapa.magar.193061",
                    "https://www.instagram.com/roshanthapamagar_/",
                    "https://x.com/RoshanThap21156",
                    "https://github.com/roshan-thapa-magar"
                  ][i]}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -6, scale: 1.15 }}
                  className="p-3 rounded-full hover:bg-muted transition"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </motion.div>

          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex justify-end"
          >
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden shadow-xl group">
              <Image
                src="/roshan.jpeg"
                alt="Roshan"
                fill
                priority
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-500"
              />
            </div>
          </motion.div>

        </motion.div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-24 md:py-32 bg-muted/20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="grid md:grid-cols-2 gap-20 items-center max-w-6xl mx-auto px-6"
        >

          {/* IMAGE */}
          <motion.div variants={fadeUp}>
            <div className="relative w-full max-w-sm aspect-[3/4] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/roshan.jpeg"
                alt="Roshan"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div variants={fadeUp} className="space-y-8">

            <div className="flex items-center gap-3 text-muted-foreground/50 text-xs tracking-widest">
              <div className="w-8 h-px bg-foreground/30" />
              <span>ABOUT ME</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-light tracking-tight">
              A bit about me
            </h2>

            <Card className="bg-background/60 backdrop-blur border border-border/40 rounded-2xl">
              <CardContent className="p-8 space-y-5 text-muted-foreground leading-relaxed">

                <p>
                  My name is <span className="text-foreground font-medium">Roshan Thapa Magar</span>.
                  I’m from Dhading and currently based in Kathmandu.
                </p>

                <p>
                  I’m pursuing BSc (Hons) Computer Science at Herald College Kathmandu.
                  I focus on building scalable systems and solving real-world problems.
                </p>

                <p>
                  I enjoy full-stack development — creating clean UI and powerful backend systems.
                </p>

                <p>
                  Outside coding, I enjoy music, gaming, and movies.
                </p>

              </CardContent>
            </Card>

          </motion.div>

        </motion.div>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="py-24 md:py-32">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-6xl mx-auto px-6 space-y-14"
        >

          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-light tracking-tight"
          >
            My toolbox
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Frontend", "Backend", "Databases", "Cloud & Infra", "Tools"].map((title, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -8 }}
              >
                <Card className="bg-muted/40 border-none rounded-2xl hover:shadow-lg transition">
                  <CardContent className="p-6 space-y-2">
                    <h3 className="font-medium text-lg">{title}</h3>
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
      <footer className="border-t py-10 text-center text-sm text-muted-foreground space-y-3">
        <p>
          <a href="mailto:roshan.thapamagar@gmail.com" className="hover:underline">
            roshan.thapamagar@gmail.com
          </a>
        </p>
        <p>© {new Date().getFullYear()} Roshan Thapa Magar</p>
      </footer>

    </main>
  )
}