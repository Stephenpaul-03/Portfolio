import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section className="flex flex-col items-center justify-center h-[50vh] w-[100vw] border-t-2 bg-background text-foreground space-y-8">
      <h1 className="text-4xl font-bold tracking-tight">Stephen Paul</h1>
      <div className="flex gap-6">
        <Button
          variant="outline"
          size="icon"
          className="h-14 w-14"
          asChild
        >
          <a href="mailto:your.email@gmail.com" target="_blank" rel="noopener noreferrer">
            <Mail className="h-6 w-6" />
          </a>
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="h-14 w-14"
          asChild
        >
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <Github className="h-6 w-6" />
          </a>
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="h-14 w-14"
          asChild
        >
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-6 w-6" />
          </a>
        </Button>
      </div>
      <div className="w-[40vw]">
        <Separator />
      </div>
      <p className="text-muted-foreground text-sm">&copy; {new Date().getFullYear()} Stephen Paul. All rights reserved.</p>
    </section>
  );
}
