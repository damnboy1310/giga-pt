"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Target, Plus, CheckCircle2, Circle, Calendar, Flag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function GoalsPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  const goals = [
    {
      id: 1,
      title: "Complete React Advanced Course",
      description: "Finish the advanced React course including hooks, context, and performance optimization",
      progress: 75,
      status: "in-progress",
      dueDate: "2024-01-15",
      priority: "high",
    },
    {
      id: 2,
      title: "Build Portfolio Website",
      description: "Create a professional portfolio website showcasing my projects and skills",
      progress: 40,
      status: "in-progress",
      dueDate: "2024-01-30",
      priority: "medium",
    },
    {
      id: 3,
      title: "Learn TypeScript",
      description: "Master TypeScript fundamentals and advanced concepts",
      progress: 100,
      status: "completed",
      dueDate: "2023-12-20",
      priority: "high",
    },
    {
      id: 4,
      title: "Contribute to Open Source",
      description: "Make meaningful contributions to at least 3 open source projects",
      progress: 20,
      status: "in-progress",
      dueDate: "2024-03-01",
      priority: "low",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500"
      case "in-progress":
        return "bg-blue-500"
      default:
        return "bg-gray-500"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "low":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="flex h-screen bg-background">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Goals Content */}
        <div className="flex-1 overflow-auto p-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <Target className="w-8 h-8 text-blue-600" />
                <div>
                  <h1 className="text-3xl font-bold text-foreground">Goals</h1>
                  <p className="text-muted-foreground">Track and manage your personal and professional goals</p>
                </div>
              </div>
              <Button className="flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Add New Goal
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="text-2xl font-bold">1</p>
                      <p className="text-sm text-muted-foreground">Completed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2">
                    <Circle className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-2xl font-bold">3</p>
                      <p className="text-sm text-muted-foreground">In Progress</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-orange-600" />
                    <div>
                      <p className="text-2xl font-bold">2</p>
                      <p className="text-sm text-muted-foreground">Due Soon</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2">
                    <Flag className="w-5 h-5 text-red-600" />
                    <div>
                      <p className="text-2xl font-bold">2</p>
                      <p className="text-sm text-muted-foreground">High Priority</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Goals List */}
            <div className="space-y-4">
              {goals.map((goal) => (
                <Card key={goal.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-lg">{goal.title}</CardTitle>
                          <Badge variant="outline" className={getPriorityColor(goal.priority)}>
                            {goal.priority}
                          </Badge>
                          <div className={`w-3 h-3 rounded-full ${getStatusColor(goal.status)}`} />
                        </div>
                        <CardDescription className="text-sm">{goal.description}</CardDescription>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        Due: {new Date(goal.dueDate).toLocaleDateString()}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Progress</span>
                        <span className="font-medium">{goal.progress}%</span>
                      </div>
                      <Progress value={goal.progress} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
