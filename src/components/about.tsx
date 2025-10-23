import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  return (
    <main className="flex h-full md:min-h-screen w-full flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white p-4 overflow-auto">
      <Card className="w-full max-w-md shadow-2xl border border-slate-700">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            🚀 Vite + React + Tailwind + Shadcn + TypeScript
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-slate-300">
            This is your starter playground. Edit <code>App.tsx</code> and watch it update live.
          </p>
          <Button onClick={() => alert("You’re all set up!")}>
            Click me
          </Button>
        </CardContent>
      </Card>
      <footer className="mt-8 text-sm text-slate-500">
        Built with ❤️ using Shadcn UI components
      </footer>
    </main>
  )
}
