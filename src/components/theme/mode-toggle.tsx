import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme/theme-provider"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative rounded-full md:hover:text-blue-500 md:hover:dark:text-yellow-500"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] dark:hidden transition-all" />
      <Moon className="h-[1.2rem] w-[1.2rem] hidden dark:block transition-all" />
    </Button>
  )
}
