import { ThemeProvider } from "@/components/theme/theme-provider"
import About from "./pages/about"
import Projects from "./pages/projects"
import Contact from "./pages/contact"
import Hero from "./pages/hero"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex min-h-svh flex-col items-center justify-center overflow-visible">
        <Hero />
        <div id="about" className="w-full">
          <About />
        </div>
        <div id="projects" className="w-full">
          <Projects />
        </div>
        <div id="contact" className="w-full">
          <Contact />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
