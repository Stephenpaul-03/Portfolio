import { ThemeProvider } from "@/components/theme/theme-provider"
import About from "./pages/about"
import Projects from "./pages/projects"
import Contact from "./pages/contact"
import Hero from "./pages/hero"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <div className="flex min-h-svh flex-col items-center justify-center overflow-visible">
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
    </ThemeProvider>
  )
}

export default App