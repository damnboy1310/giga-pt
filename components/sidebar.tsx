"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageSquare, Plus, Search, ChevronLeft, ChevronRight, Target, BarChart3, Users } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

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

interface SidebarProps {
  collapsed: boolean
  onToggle: () => void
  selectedChat?: string
  onChatSelect?: (chat: string) => void
}

export function Sidebar({ collapsed, onToggle, selectedChat, onChatSelect }: SidebarProps) {
  const pathname = usePathname()

  return (
    <div
      className={`${collapsed ? "w-12" : "w-64"} transition-none bg-sidebar border-r border-sidebar-border flex flex-col`}
    >
      {collapsed ? (
        <div className="flex flex-col items-center py-3 space-y-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggle}
            className="w-8 h-8 p-0 text-sidebar-foreground hover:bg-sidebar-accent transition-none"
            title="Expand sidebar"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          <Link href="/" title="New chat">
            <Button
              variant="ghost"
              size="sm"
              className="w-8 h-8 p-0 text-sidebar-foreground hover:bg-sidebar-accent transition-none"
            >
              <Plus className="w-4 h-4" />
            </Button>
          </Link>

          <Button
            variant="ghost"
            size="sm"
            className="w-8 h-8 p-0 text-sidebar-foreground hover:bg-sidebar-accent transition-none"
            title="Search"
          >
            <Search className="w-4 h-4" />
          </Button>

          <Link href="/goals" title="Goals">
            <Button
              variant="ghost"
              size="sm"
              className={`w-8 h-8 p-0 text-sidebar-foreground hover:bg-sidebar-accent transition-none ${
                pathname === "/goals" ? "bg-sidebar-accent" : ""
              }`}
            >
              <Target className="w-4 h-4" />
            </Button>
          </Link>

          <Link href="/summary" title="Summary">
            <Button
              variant="ghost"
              size="sm"
              className={`w-8 h-8 p-0 text-sidebar-foreground hover:bg-sidebar-accent transition-none ${
                pathname === "/summary" ? "bg-sidebar-accent" : ""
              }`}
            >
              <BarChart3 className="w-4 h-4" />
            </Button>
          </Link>

          <Link href="/explore" title="Explore">
            <Button
              variant="ghost"
              size="sm"
              className={`w-8 h-8 p-0 text-sidebar-foreground hover:bg-sidebar-accent transition-none ${
                pathname === "/explore" ? "bg-sidebar-accent" : ""
              }`}
            >
              <Users className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      ) : (
        <>
          {/* Header */}
          <div className="p-3 border-b border-sidebar-border">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-primary rounded-sm flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="font-semibold text-sidebar-foreground">ChatGPT</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={onToggle}
                className="text-sidebar-foreground hover:bg-sidebar-accent transition-none"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
            </div>

            <Link href="/">
              <Button
                variant="outline"
                className="w-full justify-start gap-2 bg-sidebar text-sidebar-foreground border-sidebar-border hover:bg-sidebar-accent transition-none"
              >
                <Plus className="w-4 h-4" />
                New chat
                <span className="ml-auto text-xs text-muted-foreground">⌘K</span>
              </Button>
            </Link>
          </div>

          {/* Search */}
          <div className="p-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search"
                className="pl-10 bg-sidebar border-sidebar-border text-sidebar-foreground placeholder:text-muted-foreground"
              />
            </div>
          </div>

          {/* Service Sections */}
          <div className="border-b border-sidebar-border">
            <div className="px-3 pb-3 space-y-1">
              <Link href="/goals">
                <Button
                  variant="ghost"
                  className={`w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent transition-none ${
                    pathname === "/goals" ? "bg-sidebar-accent" : ""
                  }`}
                >
                  <Target className="w-4 h-4" />
                  Goals
                </Button>
              </Link>
              <Link href="/summary">
                <Button
                  variant="ghost"
                  className={`w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent transition-none ${
                    pathname === "/summary" ? "bg-sidebar-accent" : ""
                  }`}
                >
                  <BarChart3 className="w-4 h-4" />
                  Summary
                </Button>
              </Link>
              <Link href="/explore">
                <Button
                  variant="ghost"
                  className={`w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent transition-none ${
                    pathname === "/explore" ? "bg-sidebar-accent" : ""
                  }`}
                >
                  <Users className="w-4 h-4" />
                  Explore
                </Button>
              </Link>
            </div>
          </div>

          {/* Chat History */}
          <ScrollArea className="flex-1 px-3 pt-3">
            {chatHistory.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-4">
                <h3 className="text-xs font-medium text-muted-foreground mb-2 px-2">{section.section}</h3>
                <div className="space-y-1">
                  {section.chats.map((chat, chatIndex) => (
                    <Button
                      key={chatIndex}
                      variant="ghost"
                      className={`w-full justify-start text-left h-auto p-2 text-sm text-sidebar-foreground hover:bg-sidebar-accent transition-none ${
                        chat === selectedChat ? "bg-sidebar-accent" : ""
                      }`}
                      onClick={() => onChatSelect?.(chat)}
                    >
                      <span className="truncate">{chat}</span>
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </ScrollArea>

          {/* Footer */}
          <div className="p-3 border-t border-sidebar-border">
            <Button
              variant="ghost"
              className="w-full justify-start gap-2 text-sidebar-foreground hover:bg-sidebar-accent transition-none"
            >
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                <span className="text-xs text-primary-foreground font-medium">G</span>
              </div>
              Get App
            </Button>

            <div className="mt-2 flex items-center gap-2 px-2">
              <span className="text-xs text-muted-foreground">baha</span>
              <div className="w-4 h-4 bg-muted rounded-full flex items-center justify-center">
                <span className="text-xs">?</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
