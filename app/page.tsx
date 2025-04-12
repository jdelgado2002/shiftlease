'use client'

import * as React from "react"
import { ArrowRight, Clock, CalendarCheck, TrendingUp, ShieldCheck } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { WaitlistForm } from "@/components/waitlist-form"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-2 items-center text-xl font-bold">
            <CalendarCheck className="h-6 w-6 text-emerald-600" />
            <span>EasyShiftHQ</span>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <Button variant="outline" size="sm">
              <Link href="#join-waitlist" className="flex items-center">
                Join Waitlist
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    AI-Powered Scheduling for Multi-Unit Restaurants
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Save time, reduce costs, and optimize staffing with intelligent scheduling that adapts to your
                    business needs.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    <Link href="#join-waitlist" className="flex items-center">
                      Get Early Access
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4 text-emerald-600" />
                    <span>Coming Soon</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full aspect-video overflow-hidden rounded-xl border bg-gradient-to-b from-emerald-50 to-white p-4 shadow-lg dark:from-emerald-950/50 dark:to-background">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/80 to-transparent opacity-60 dark:from-emerald-900/20"></div>
                  <div className="relative z-10 h-full flex flex-col justify-center items-center">
                    <CalendarCheck className="h-16 w-16 text-emerald-600 mb-4" />
                    <div className="text-center">
                      <h3 className="text-xl font-bold">EasyShiftHQ</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">AI-Driven Restaurant Scheduling</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">The Problem</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Restaurant managers spend 4+ hours per week (over 200 hours a year) creating schedules manually
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Time-Consuming Process</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Managers spend hours each week building schedules, taking time away from customer service and
                        supervision.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Costly Staffing Errors</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Understaffing during peak periods can cost $150-$300 per hour in lost revenue, while
                        overstaffing inflates labor costs unnecessarily.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Compliance Risks</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Labor regulations like predictive scheduling laws require advanced notice and impose penalties
                        of $500+ per violation.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Multi-Location Complexity</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Ensuring consistent staffing levels across multiple locations compounds scheduling challenges
                        for franchisees and chain owners.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">High Employee Turnover</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        With nearly 79% annual turnover in hospitality, managers constantly onboard new staff and must
                        quickly incorporate their availability.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Manual Methods Fail</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Current scheduling methods are error-prone and ill-suited for the complexity of modern
                        restaurant operations.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Introducing EasyShiftHQ</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  AI-enhanced scheduling designed specifically for multi-unit restaurant operators
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <TrendingUp className="h-6 w-6 text-emerald-600 mb-2" />
                  <CardTitle>Demand Forecasting</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Predicts busy periods using historical sales data, seasonal trends, local events, and even weather
                    forecasts.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CalendarCheck className="h-6 w-6 text-emerald-600 mb-2" />
                  <CardTitle>Intelligent Scheduling</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Automatically generates optimal staff schedules that adapt to business dynamics and employee
                    availability.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <ShieldCheck className="h-6 w-6 text-emerald-600 mb-2" />
                  <CardTitle>Compliance Safeguards</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Enforces labor laws and regulations automatically, preventing violations and costly penalties.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Business Impact</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Transform your restaurant operations with EasyShiftHQ
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white dark:bg-gray-800">
                <div className="text-emerald-600 text-4xl font-bold">80%</div>
                <h3 className="text-xl font-bold text-center">Reduced Scheduling Time</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Cut scheduling time dramatically, freeing managers to focus on customers and staff.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white dark:bg-gray-800">
                <div className="text-emerald-600 text-4xl font-bold">3-5%</div>
                <h3 className="text-xl font-bold text-center">Lower Labor Costs</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Reduce labor cost as a percentage of sales through optimized staffing levels.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white dark:bg-gray-800">
                <div className="text-emerald-600 text-4xl font-bold">100%</div>
                <h3 className="text-xl font-bold text-center">Compliance Confidence</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Ensure schedules meet all labor regulations across different jurisdictions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="join-waitlist" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Join the Waitlist</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Be the first to know when EasyShiftHQ launches and get exclusive early access.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <WaitlistForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} EasyShiftHQ. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
