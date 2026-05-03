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
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  }

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } }
  }

  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      icon: "🎨"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "Django", "REST APIs", "GraphQL"],
      icon: "⚙️"
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Prisma", "Redis"],
      icon: "🗄️"
    },
    {
      title: "Cloud & Infra",
      skills: ["AWS", "Vercel", "Docker", "GitHub Actions", "Firebase"],
      icon: "☁️"
    },
    {
      title: "Tools",
      skills: ["Git", "VS Code", "Postman", "Figma", "Jira"],
      icon: "🛠️"
    }
  ]

  return (
    <main className="w-full overflow-x-hidden">
      {/* ================= HERO ================= */}
      <section className="min-h-screen flex items-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 max-w-6xl mx-auto w-full  md:py-0"
        >
          {/* LEFT */}
          <div className="space-y-6 md:space-y-8">
            <motion.div variants={fadeUp} className="space-y-4 md:space-y-6">
              <div className="inline-block">
                <span className="text-sm uppercase tracking-wider text-primary/70 font-mono">
                  Hello, I'm
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                Roshan <br />
                <span className="text-primary/80">Thapa Magar</span>
              </h1>

              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-md">
                I design and build scalable, high-performance web applications with
                real-world impact. Crafting digital experiences that matter.
              </p>
            </motion.div>

            {/* BUTTONS */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 md:gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full px-6 md:px-8 shadow-lg hover:shadow-primary/25 transition-shadow"
              >
                <a href="/resume.pdf" download="Roshan_Thapa_Magar_CV.pdf">
                  Download CV
                </a>
              </Button>

              <Button variant="outline" size="lg" className="rounded-full px-6 md:px-8">
                Contact Me
              </Button>
            </motion.div>

            {/* SOCIAL LINKS */}
            <motion.div variants={fadeUp} className="flex gap-2 md:gap-3 text-muted-foreground">
              <motion.a
                href="https://www.facebook.com/roshan.thapa.magar.193061"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="p-2 md:p-3 rounded-full bg-muted/50 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF size={16} />
              </motion.a>

              <motion.a
                href="https://www.instagram.com/roshanthapamagar_/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="p-2 md:p-3 rounded-full bg-muted/50 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={16} />
              </motion.a>

              <motion.a
                href="https://x.com/RoshanThap21156"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="p-2 md:p-3 rounded-full bg-muted/50 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                aria-label="Twitter"
              >
                <FaTwitter size={16} />
              </motion.a>

              <motion.a
                href="https://github.com/roshan-thapa-magar"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="p-2 md:p-3 rounded-full bg-muted/50 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={16} />
              </motion.a>

              <motion.a
                href="https://www.tiktok.com/@yourusername"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="p-2 md:p-3 rounded-full bg-muted/50 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                aria-label="TikTok"
              >
                <FaTiktok size={16} />
              </motion.a>
            </motion.div>

            {/* STATS */}
            <motion.div variants={fadeUp} className="flex gap-6 md:gap-8 pt-2 md:pt-4">
              <div>
                <p className="text-xl md:text-2xl font-bold text-primary">2+</p>
                <p className="text-xs text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-bold text-primary">15+</p>
                <p className="text-xs text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-bold text-primary">10+</p>
                <p className="text-xs text-muted-foreground">Happy Clients</p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex items-center justify-center lg:justify-end mt-8 lg:mt-0"
          >
            <div className="relative w-full max-w-xs md:max-w-sm lg:max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl hidden md:block group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Image
                src="/roshan.jpeg"
                alt="Roshan Thapa Magar"
                fill
                priority
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= ABOUT ================= */}
      <section>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center max-w-6xl mx-auto w-full "
        >
          {/* IMAGE - left on desktop, top on mobile */}
          <motion.div variants={fadeUp} className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-xs md:max-w-sm lg:max-w-md aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10 rounded-3xl" />
              <Image
                src="/roshan.jpeg"
                alt="Roshan Thapa Magar"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div variants={fadeUp} className="space-y-6 md:space-y-8">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-12 h-px bg-primary" />
                <span className="text-sm font-mono text-primary/80 tracking-wider">
                  ABOUT ME
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                A bit about me
              </h2>
            </div>

            <Card className="bg-muted/30 border-border/50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 md:p-8 space-y-4 md:space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  My name is{" "}
                  <span className="text-foreground font-semibold">
                    Roshan Thapa Magar
                  </span>
                  , originally from Dhading and currently living in Thulo Bharang,
                  Kathmandu.
                </p>

                <p>
                  I am pursuing my bachelor's degree in{" "}
                  <span className="text-foreground font-medium">
                    BSc (Hons) Computer Science
                  </span>{" "}
                  at Herald College Kathmandu. I am passionate about building software
                  that solves real-world problems and creating systems that are
                  efficient, scalable, and user-friendly.
                </p>

                <p>
                  I enjoy working across the full stack — from designing clean and
                  intuitive user interfaces to building strong backend systems. Coding
                  is not just my study field, it's something I genuinely enjoy doing.
                </p>

                <p>
                  Outside of tech, I like listening to music, playing video games, and
                  watching movies. These help me stay relaxed, creative, and motivated.
                </p>
              </CardContent>
            </Card>

            {/* FUN FACT */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 p-4 bg-primary/5 rounded-2xl">
              <span className="text-2xl">💡</span>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Fun fact:</span> I can
                solve a Rubik's cube in under 2 minutes!
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="py-16 md:py-20 lg:py-24">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="max-w-6xl mx-auto w-full space-y-8 md:space-y-12"
        >
          <motion.div variants={fadeUp} className="text-center lg:text-left space-y-3">
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <div className="w-12 h-px bg-primary" />
              <span className="text-sm tracking-wider">EXPERTISE</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              My Toolbox
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Technologies and tools I work with to bring ideas to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-muted/30 border-border/50 rounded-2xl hover:bg-muted/50 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{category.icon}</span>
                      <h3 className="text-xl font-semibold">{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm bg-background/50 rounded-full text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= CONTACT & FOOTER ================= */}
      <section className="border-t border-border/50 bg-muted/20">
        <div className="max-w-4xl mx-auto w-full py-12 md:py-16 px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="w-full text-center space-y-6 md:space-y-8"
          >
            <motion.div variants={fadeUp} className="space-y-3">
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-px bg-primary" />
                <span className="text-sm font-mono text-primary/80 tracking-wider">
                  GET IN TOUCH
                </span>
                <div className="w-12 h-px bg-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Let's work together
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base px-4">
                Have a project in mind? I'd love to hear about it. Let's create
                something amazing together.
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Button size="lg" className="rounded-full px-8 md:px-10 shadow-lg hover:shadow-primary/25 transition-shadow">
                Get in Touch
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} className="pt-6 md:pt-8 space-y-3 md:space-y-4">
              <div className="flex flex-col items-center gap-2">
                <p className="text-muted-foreground text-sm md:text-base">
                  Email:{" "}
                  <a
                    href="mailto:roshan.thapamagar@gmail.com"
                    className="text-primary hover:underline font-medium"
                  >
                    roshan.thapamagar@gmail.com
                  </a>
                </p>
                <p className="text-muted-foreground text-sm md:text-base">
                  Phone:{" "}
                  <a
                    href="tel:+9779742531161"
                    className="text-primary hover:underline font-medium"
                  >
                    9742531161
                  </a>
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Footer content */}
          <div className="border-t border-border/30 mt-8 md:mt-12 pt-6 md:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
              <div className="space-y-2 text-center md:text-left">
                <p className="text-xs md:text-sm text-muted-foreground">
                  © {new Date().getFullYear()} Roshan Thapa Magar. All rights
                  reserved.
                </p>
                <div className="flex gap-4 justify-center md:justify-start">
                  <a
                    href="#"
                    className="text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#"
                    className="text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    Terms of Service
                  </a>
                </div>
              </div>

              <motion.div
                className="flex gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.a
                  href="https://www.facebook.com/roshan.thapa.magar.193061"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="p-2 rounded-full bg-muted/50 hover:bg-primary/10 hover:text-primary transition-all"
                >
                  <FaFacebookF size={14} />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/roshanthapamagar_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="p-2 rounded-full bg-muted/50 hover:bg-primary/10 hover:text-primary transition-all"
                >
                  <FaInstagram size={14} />
                </motion.a>
                <motion.a
                  href="https://github.com/roshan-thapa-magar"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="p-2 rounded-full bg-muted/50 hover:bg-primary/10 hover:text-primary transition-all"
                >
                  <FaGithub size={14} />
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}