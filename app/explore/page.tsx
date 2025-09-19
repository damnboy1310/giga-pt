"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Heart, MessageCircle, Share, MoreHorizontal, Plus } from "lucide-react"

// Mock data for friends' stories
const friendsStories = [
  { id: 1, name: "Alex", avatar: "A", hasStory: true, isViewed: false },
  { id: 2, name: "Sarah", avatar: "S", hasStory: true, isViewed: true },
  { id: 3, name: "Mike", avatar: "M", hasStory: true, isViewed: false },
  { id: 4, name: "Emma", avatar: "E", hasStory: true, isViewed: true },
  { id: 5, name: "John", avatar: "J", hasStory: true, isViewed: false },
  { id: 6, name: "Lisa", avatar: "L", hasStory: true, isViewed: true },
]

// Mock data for friends' posts
const friendsPosts = [
  {
    id: 1,
    user: { name: "Alex Johnson", avatar: "A" },
    goal: "Complete 30-day fitness challenge",
    completedAt: "2 hours ago",
    gigaChadQuote: "Pain is temporary, but quitting lasts forever! 💪",
    likes: 24,
    comments: 8,
    isLiked: false,
  },
  {
    id: 2,
    user: { name: "Sarah Kim", avatar: "S" },
    goal: "Read 12 books this year",
    completedAt: "5 hours ago",
    gigaChadQuote: "Knowledge is power, and I'm getting stronger every page! 📚",
    likes: 18,
    comments: 5,
    isLiked: true,
  },
  {
    id: 3,
    user: { name: "Mike Chen", avatar: "M" },
    goal: "Learn Spanish fluency",
    completedAt: "1 day ago",
    gigaChadQuote: "¡Hola mundo! Dreams don't work unless you do! 🌟",
    likes: 31,
    comments: 12,
    isLiked: false,
  },
]

export default function ExplorePage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set([2]))

  const handleLike = (postId: number) => {
    setLikedPosts((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(postId)) {
        newSet.delete(postId)
      } else {
        newSet.add(postId)
      }
      return newSet
    })
  }

  return (
    <div className="flex h-screen bg-background">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />

      <main className="flex-1 overflow-hidden">
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="border-b border-border p-4">
            <h1 className="text-2xl font-bold text-foreground">Explore</h1>
            <p className="text-muted-foreground">Discover what your friends are achieving</p>
          </div>

          <ScrollArea className="flex-1">
            <div className="max-w-2xl mx-auto p-4 space-y-6">
              {/* Friends Stories Section */}
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-foreground">Friends Activity</h2>
                <div className="flex gap-4 overflow-x-auto pb-2">
                  {/* Your Story */}
                  <div className="flex flex-col items-center space-y-2 min-w-[70px]">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center border-2 border-background">
                        <Plus className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground text-center">Your Story</span>
                  </div>

                  {/* Friends Stories */}
                  {friendsStories.map((friend) => (
                    <div key={friend.id} className="flex flex-col items-center space-y-2 min-w-[70px]">
                      <div className="relative">
                        <div
                          className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-semibold text-lg border-2 ${
                            friend.isViewed
                              ? "bg-gray-400 border-gray-300"
                              : "bg-gradient-to-br from-pink-500 to-orange-500 border-pink-400"
                          }`}
                        >
                          {friend.avatar}
                        </div>
                        {friend.hasStory && (
                          <div
                            className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-background ${
                              friend.isViewed ? "bg-gray-400" : "bg-green-500"
                            }`}
                          />
                        )}
                      </div>
                      <span className="text-xs text-muted-foreground text-center truncate w-full">{friend.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Friends Posts Section */}
              <div className="space-y-6">
                {friendsPosts.map((post) => (
                  <div key={post.id} className="bg-card border border-border rounded-lg overflow-hidden">
                    {/* Post Header */}
                    <div className="p-4 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                          {post.user.avatar}
                        </div>
                        <div>
                          <h3 className="font-semibold text-card-foreground">{post.user.name}</h3>
                          <p className="text-sm text-muted-foreground">{post.completedAt}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>

                    {/* Post Content */}
                    <div className="px-4 pb-4">
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">✓</span>
                          </div>
                          <span className="text-sm font-medium text-green-800 dark:text-green-200">
                            Goal Completed!
                          </span>
                        </div>
                        <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">{post.goal}</h4>
                        <blockquote className="text-green-700 dark:text-green-300 italic">
                          "{post.gigaChadQuote}"
                        </blockquote>
                      </div>
                    </div>

                    {/* Post Actions */}
                    <div className="px-4 pb-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleLike(post.id)}
                            className={`flex items-center space-x-2 ${
                              likedPosts.has(post.id) ? "text-red-500" : "text-muted-foreground"
                            }`}
                          >
                            <Heart className={`w-5 h-5 ${likedPosts.has(post.id) ? "fill-current" : ""}`} />
                            <span>{likedPosts.has(post.id) ? post.likes + 1 : post.likes}</span>
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="flex items-center space-x-2 text-muted-foreground"
                          >
                            <MessageCircle className="w-5 h-5" />
                            <span>{post.comments}</span>
                          </Button>
                          <Button variant="ghost" size="sm" className="text-muted-foreground">
                            <Share className="w-5 h-5" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollArea>
        </div>
      </main>
    </div>
  )
}
