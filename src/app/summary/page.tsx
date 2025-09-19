"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Target, TrendingUp, MessageSquare, Calendar } from "lucide-react"
import { Sidebar } from "@/components/sidebar"

export default function SummaryPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <div className="flex h-screen bg-background transition-none">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />

      <main className="flex-1 overflow-auto transition-none">
        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Summary</h1>
            <p className="text-muted-foreground">Your productivity overview and recent activity</p>
          </div>

          {/* Top Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Conversations</CardTitle>
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">127</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+12%</span> from last week
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Goals Completed</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8/12</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-blue-600">67%</span> completion rate
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Productivity Score</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">85</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+5</span> points this week
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Weekly Goals Progress */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Weekly Goals Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Complete project documentation</span>
                  </div>
                  <Badge variant="secondary">Completed</Badge>
                </div>
                <Progress value={100} className="h-2" />
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">Review and optimize codebase</span>
                  </div>
                  <Badge variant="outline">In Progress</Badge>
                </div>
                <Progress value={65} className="h-2" />
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-orange-600" />
                    <span className="text-sm">Prepare presentation slides</span>
                  </div>
                  <Badge variant="outline">In Progress</Badge>
                </div>
                <Progress value={30} className="h-2" />
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Target className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-muted-foreground">Schedule team meetings</span>
                  </div>
                  <Badge variant="secondary">Pending</Badge>
                </div>
                <Progress value={0} className="h-2" />
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3 pb-3 border-b border-border">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Completed goal: "Complete project documentation"</p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pb-3 border-b border-border">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Started new conversation about React optimization</p>
                    <p className="text-xs text-muted-foreground">4 hours ago</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pb-3 border-b border-border">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Updated progress on "Review and optimize codebase"</p>
                    <p className="text-xs text-muted-foreground">6 hours ago</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pb-3 border-b border-border">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Created new goal: "Prepare presentation slides"</p>
                    <p className="text-xs text-muted-foreground">1 day ago</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Had conversation about AI development trends</p>
                    <p className="text-xs text-muted-foreground">2 days ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
