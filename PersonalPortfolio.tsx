import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail, Download, Code, Briefcase, User, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Progress } from '@/components/ui/progress'

export default function Component() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <header className="fixed w-full z-10 bg-gray-900 bg-opacity-90 backdrop-blur-md">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold"
          >
            TuNombre
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            className="flex space-x-4"
          >
            {['Sobre mí', 'Habilidades', 'Experiencia', 'Proyectos', 'Contacto'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-sm font-medium hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        </nav>
      </header>

      <main>
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <motion.div
            style={{ opacity, scale }}
            className="text-center z-10"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-7xl font-bold mb-6"
            >
              Hola, soy TuNombre
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto"
            >
              Desarrollador web apasionado por crear experiencias digitales excepcionales
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                Conóceme mejor
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-20"></div>
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
          </div>
        </section>

        <section id="sobre-mí" className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-center mb-12"
            >
              Sobre mí
            </motion.h2>
            <div className="flex flex-col md:flex-row items-center gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="md:w-1/3"
              >
                <Avatar className="w-48 h-48 mx-auto">
                  <AvatarImage src="/placeholder.svg?height=192&width=192" alt="Tu Nombre" />
                  <AvatarFallback>TN</AvatarFallback>
                </Avatar>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="md:w-2/3"
              >
                <p className="text-lg mb-6">
                  Soy un desarrollador web con X años de experiencia, especializado en crear aplicaciones web modernas y eficientes. Mi pasión por la tecnología y el diseño me impulsa a buscar constantemente nuevas formas de mejorar la experiencia del usuario y optimizar el rendimiento de las aplicaciones.
                </p>
                <p className="text-lg mb-6">
                  Fuera del mundo del código, disfruto [tus hobbies o intereses]. Creo firmemente en el aprendizaje continuo y en compartir conocimientos con la comunidad de desarrolladores.
                </p>
                <div className="flex space-x-4">
                  <Button variant="outline" className="rounded-full">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                  <Button variant="outline" className="rounded-full">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Button>
                  <Button variant="outline" className="rounded-full">
                    <Download className="mr-2 h-4 w-4" />
                    CV
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="habilidades" className="py-20 px-6 bg-gray-800">
          <div className="container mx-auto max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-center mb-12"
            >
              Mis Habilidades
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { skill: "React", level: 90 },
                { skill: "TypeScript", level: 85 },
                { skill: "Node.js", level: 80 },
                { skill: "CSS/Sass", level: 85 },
                { skill: "GraphQL", level: 75 },
                { skill: "Docker", level: 70 },
              ].map((item, index) => (
                <motion.div
                  key={item.skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{item.skill}</span>
                    <span>{item.level}%</span>
                  </div>
                  <Progress value={item.level} className="h-2" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="experiencia" className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-center mb-12"
            >
              Experiencia Laboral
            </motion.h2>
            <div className="space-y-12">
              {[
                {
                  company: "Empresa Innovadora",
                  role: "Desarrollador Full Stack Senior",
                  period: "2020 - Presente",
                  description: "Lideré el desarrollo de aplicaciones web de alto rendimiento utilizando React, Node.js y GraphQL. Implementé prácticas de CI/CD y mejoré el rendimiento de las aplicaciones existentes."
                },
                {
                  company: "Startup Tecnológica",
                  role: "Desarrollador Front-end",
                  period: "2018 - 2020",
                  description: "Desarrollé interfaces de usuario responsivas y accesibles utilizando React y TypeScript. Colaboré estrechamente con diseñadores UX para implementar diseños pixel-perfect."
                },
              ].map((job, index) => (
                <motion.div
                  key={job.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-gray-800 p-6 rounded-lg shadow-lg"
                >
                  <h3 className="text-2xl font-semibold mb-2">{job.role}</h3>
                  <p className="text-blue-400 mb-4">{job.company} | {job.period}</p>
                  <p>{job.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="proyectos" className="py-20 px-6 bg-gray-800">
          <div className="container mx-auto max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-center mb-12"
            >
              Proyectos Destacados
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Plataforma de E-learning",
                  description: "Desarrollé una plataforma de aprendizaje en línea con funcionalidades de video streaming y evaluaciones interactivas.",
                  tech: ["React", "Node.js", "MongoDB"]
                },
                {
                  title: "Dashboard Analítico",
                  description: "Creé un dashboard interactivo para visualizar datos de ventas y métricas de rendimiento en tiempo real.",
                  tech: ["Vue.js", "D3.js", "Firebase"]
                },
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-gray-700 p-6 rounded-lg shadow-lg"
                >
                  <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                  <p className="mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-blue-600 text-sm px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="py-20 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold mb-12"
            >
              ¿Listo para trabajar juntos?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl mb-12"
            >
              Estoy siempre abierto a nuevas oportunidades y colaboraciones. No dudes en contactarme para discutir cómo puedo aportar valor a tu equipo o proyecto.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center space-x-4"
            >
              <Button className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                <Mail className="mr-2 h-5 w-5" />
                Envíame un email
              </Button>
              <Button variant="outline" className="text-lg px-8 py-6 rounded-full">
                <Linkedin className="mr-2 h-5 w-5" />
                Conéctate en LinkedIn
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-6 px-6 bg-gray-900 text-center">
        <p className="text-sm">© 2023 TuNombre. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}