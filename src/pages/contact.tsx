"use client";

import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function Contact() {
  const [open, setOpen] = useState(false);

  return (
    <section className="flex flex-col items-center justify-center h-[75vh] w-screen bg-gradient-to-b from-background via-muted/30 to-background text-foreground space-y-10">
      <div className="text-center space-y-2">
        <p className="text-muted-foreground tracking-wide uppercase text-sm">
          Crafting code with a dash of chaos
        </p>
        <h1 className="text-5xl font-bold tracking-tight">Stephen Paul</h1>
        <p className="text-muted-foreground text-base">
          Let’s connect and build something cool together.
        </p>
      </div>

      <div className="flex gap-8">
        <Button
          variant="outline"
          size="icon"
          className="h-14 w-14 hover:scale-110 transition-transform duration-200"
          asChild
        >
          <a href="mailto:stephenpaul4040@gmail.com" target="_blank" rel="noopener noreferrer">
            <Mail className="h-6 w-6" />
          </a>
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="h-14 w-14 hover:scale-110 transition-transform duration-200"
          asChild
        >
          <a href="https://github.com/stephenpaul-03" target="_blank" rel="noopener noreferrer">
            <Github className="h-6 w-6" />
          </a>
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="h-14 w-14 hover:scale-110 transition-transform duration-200"
          asChild
        >
          <a href="https://linkedin.com/in/stephen-paul-i/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-6 w-6" />
          </a>
        </Button>
      </div>

      <div className="w-[35vw]">
        <Separator className="bg-muted/50" />
      </div>

      <div className="flex items-center gap-2 text-muted-foreground text-xs tracking-wide">
        <p>
          &copy; {new Date().getFullYear()} Stephen Paul — All rights reserved.
        </p>
        <span
          onClick={() => setOpen(true)}
          className="underline cursor-pointer hover:text-foreground transition-colors"
        >
          Credits
        </span>
      </div>

      {/* Credits Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Special Thanks To</DialogTitle>
            <DialogDescription asChild>
              <ul className="list-disc pl-5 space-y-2 text-sm text-left mt-3">
                <li>That one guy who made the Favicon</li>
                <li>My Buddies who gave me a thumpsup regardless of how the site looks</li>
                <li>All the techstack that I use</li>
                <li>oh and Coffee.</li>
              </ul>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
}
