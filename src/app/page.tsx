"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Sidebar } from "@/components/sidebar"
import { MessageSquare, Copy, ThumbsUp, ThumbsDown, RotateCcw } from "lucide-react"

const chatHistory = [
  {
    section: "TODAY",
    chats: [
      "New chat",
      "Verification email issue",
      "Logo concept for project",
      "Write a short riddle with the ans...",
      "Explain quantum entanglement...",
    ],
  },
  {
    section: "YESTERDAY",
    chats: [
      "Verification email issue",
      "Logo concept for project",
      "Write a short riddle with the ans...",
      "Explain quantum entanglement...",
    ],
  },
]

export default function ChatInterface() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [selectedChat, setSelectedChat] = useState("help me with setting up TailwindCSS")

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <Sidebar
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        selectedChat={selectedChat}
        onChatSelect={setSelectedChat}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Chat Content */}
        <ScrollArea className="flex-1 p-6">
          <div className="max-w-3xl mx-auto space-y-6">
            {/* User Message */}
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-sm text-primary-foreground font-medium">U</span>
              </div>
              <div className="flex-1">
                <p className="text-foreground">help me with setting up TailwindCSS</p>
              </div>
            </div>

            {/* AI Response */}
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-4 h-4 text-secondary-foreground" />
              </div>
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-sm text-muted-foreground">
                    Setting up TailwindCSS for theme support involves configuring CSS variables, TailwindCSS theme
                    extension, and optionally dark mode. Here's a step-by-step guide:
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">1. Install TailwindCSS (if not installed)</h3>
                    <div className="bg-muted rounded-lg p-4 relative">
                      <Button variant="ghost" size="sm" className="absolute top-2 right-2">
                        <Copy className="w-4 h-4" />
                        Copy
                      </Button>
                      <code className="text-sm font-mono text-foreground">
                        npm install -D tailwindcss postcss autoprefixer npx tailwindcss init -p
                      </code>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">2. Configure tailwind.config.js for Theme Support</h3>
                    <p className="text-muted-foreground mb-3">
                      Tailwind allows extending themes using the extend property. You can define custom themes with CSS
                      variables.
                    </p>

                    <div className="mb-3">
                      <strong>Example: Multiple Themes (Light/Dark Mode)</strong>
                    </div>

                    <div className="bg-muted rounded-lg p-4 relative">
                      <Button variant="ghost" size="sm" className="absolute top-2 right-2">
                        <Copy className="w-4 h-4" />
                        Copy
                      </Button>
                      <pre className="text-sm font-mono text-foreground overflow-x-auto">
                        {`module.exports = {
  darkMode: "class", // Enables dark mode using class
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)", // Uses CSS variables for theming
        secondary: "var(--secondary)",
        background: "var(--background)",
      },
    },
  },
}`}
                      </pre>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 pt-4">
                  <Button variant="ghost" size="sm">
                    <ThumbsUp className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <ThumbsDown className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <RotateCcw className="w-4 h-4" />
                  </Button>
                  <Separator orientation="vertical" className="h-4" />
                  <span className="text-xs text-muted-foreground">03 min</span>
                  <Button variant="ghost" size="sm">
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="border-t border-border p-4">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <Input placeholder="Message ChatGPT..." className="pr-12 py-3 text-base" />
              <Button size="sm" className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <span className="sr-only">Send</span>↑
              </Button>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-2">AI-generated, for reference only</p>
          </div>
        </div>
      </div>
    </div>
  )
}
