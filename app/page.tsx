'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Video, Play, FileText, Users, Flame, MessageCircle, Link, Briefcase, Clock } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    { 
      icon: Video, 
      title: "Live Learning", 
      description: "Join interactive live sessions with industry experts and learn in real-time",
      highlight: false 
    },
    { 
      icon: Play, 
      title: "Courses", 
      description: "Access comprehensive courses designed to accelerate your business growth",
      highlight: true 
    },
    { 
      icon: FileText, 
      title: "Insights", 
      description: "Get actionable insights and data-driven strategies for your business",
      highlight: false 
    },
    { 
      icon: Users, 
      title: "Community", 
      description: "Connect with like-minded entrepreneurs and build valuable relationships",
      highlight: false 
    },
    { 
      icon: Flame, 
      title: "WWRN", 
      description: "Weekly Winner Recognition Network - celebrate success stories",
      highlight: false 
    },
    { 
      icon: MessageCircle, 
      title: "Coaching", 
      description: "Get personalized coaching from experienced business mentors",
      highlight: false 
    },
    { 
      icon: FileText, 
      title: "Templates", 
      description: "Ready-to-use templates and frameworks for rapid implementation",
      highlight: false 
    },
    { 
      icon: Link, 
      title: "Resources", 
      description: "Curated collection of tools and resources for business growth",
      highlight: false 
    },
    { 
      icon: Briefcase, 
      title: "Job Board", 
      description: "Find opportunities and connect with top companies in your industry",
      highlight: false 
    },
    { 
      icon: Clock, 
      title: "And More", 
      description: "Discover additional features and tools as we continue to expand",
      highlight: false 
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-black overflow-hidden">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Header Navigation */}
        <header className="relative z-10 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
          <div className="text-white font-bold text-lg tracking-wide">
            Amorketing
          </div>
          <nav className="flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              NEWSLETTER
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              LOGIN
            </a>
            <Button 
              variant="outline" 
              className="border-gray-600 text-black hover:bg-white hover:text-black transition-colors px-6 py-2 text-sm font-medium"
            >
              UNETE GRATIS
            </Button>
          </nav>
        </header>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Subtitle */}
            <p className="text-gray-400 text-sm font-medium tracking-wider uppercase">
              NHB PLATFORM IS COMING
            </p>
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-gray-300">A one of a kind</span>
              <br />
              <span className="text-gray-300">hyper-growth platform</span>
              <br />
              <span className="text-gray-300">where </span>
              <span className="text-white">Nothing Is Held Back</span>
            </h1>
            
            {/* Description */}
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Learn to grow any business, get ahead of the competition
            </p>
            
            {/* Email Signup Form */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mt-12">
              <Input
                type="email"
                placeholder="example@gmail.com"
                className="bg-transparent border-gray-600 text-white placeholder:text-gray-500 focus:border-blue-500 h-12 px-4 flex-1"
              />
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 h-12 font-medium transition-colors"
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Element - Bottom Right */}
        <div className="absolute bottom-0 right-0 w-96 h-96 opacity-10">
          <div className="w-full h-full bg-gradient-to-tl from-white/5 to-transparent rounded-full blur-3xl" />
        </div>
      </section>
      {/* Product Demo Section */}
      <section className="relative py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          {/* Section Content */}
          <div className="relative">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent" />
            
            {/* Devices Container */}
            <div className="relative z-10 flex items-center justify-center">
              <div className="relative w-full max-w-6xl">
                {/* Laptop Mockup */}
                <div className="relative transform -rotate-12 scale-90 md:scale-100">
                  <div className="bg-gray-900 rounded-t-xl p-2 shadow-2xl">
                    {/* Laptop Screen Bezel */}
                    <div className="bg-black rounded-lg p-1">
                      <div className="bg-white rounded-md overflow-hidden aspect-[16/10]">
                        {/* Laptop Screen Content */}
                        <div className="w-full h-full bg-gray-50 relative">
                          {/* Navigation Bar */}
                          <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className="font-bold text-gray-800">NHB</div>
                              <div className="text-sm text-gray-600">BETA</div>
                            </div>
                            <div className="flex items-center space-x-6">
                              <span className="text-sm text-gray-600">Feed</span>
                              <span className="text-sm text-gray-600">Live</span>
                              <span className="text-sm text-gray-600">Library</span>
                              <span className="text-sm text-gray-600">Mind AI</span>
                            </div>
                          </div>
                          
                          {/* Main Content Area */}
                          <div className="flex h-full">
                            {/* Sidebar */}
                            <div className="w-64 bg-white border-r border-gray-200 p-4">
                              <div className="space-y-4">
                                <div className="text-sm font-medium text-gray-800">Feed</div>
                                <div className="space-y-2">
                                  <div className="text-sm text-gray-600">For you</div>
                                  <div className="text-sm text-gray-600">Popular</div>
                                  <div className="text-sm text-blue-600">From NHB</div>
                                </div>
                              </div>
                            </div>
                            
                            {/* Main Feed */}
                            <div className="flex-1 p-6">
                              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                                <div className="flex items-center space-x-3 mb-4">
                                  <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                                  <div>
                                    <div className="font-medium text-gray-800">Floyd Miles</div>
                                    <div className="text-sm text-gray-500">2h • Beginner</div>
                                  </div>
                                </div>
                                
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                                  Unpacking Social Optics and Symbolism: A New Perspective
                                </h3>
                                
                                <p className="text-gray-600 text-sm mb-4">
                                  Explore the hidden meanings behind everyday interactions and the symbolic world that shapes our perceptions...
                                </p>
                                
                                {/* Video Thumbnail */}
                                <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-teal-400 rounded-lg aspect-video mb-4">
                                  <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-white text-2xl font-bold">
                                      SOCIAL OPTICS<br />& SYMBOLISM
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            {/* Right Sidebar */}
                            <div className="w-80 bg-gray-50 p-4">
                              <div className="bg-blue-600 text-white rounded-lg p-4 mb-4">
                                <div className="text-sm font-medium mb-2">Your personal upgrade is here</div>
                                <div className="text-xs opacity-90">Get access to premium content and exclusive features</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Laptop Base */}
                    <div className="bg-gray-800 h-4 rounded-b-xl"></div>
                  </div>
                </div>
                
                {/* Mobile Mockup */}
                <div className="absolute top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2 rotate-12 scale-75 md:scale-90">
                  <div className="bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                    <div className="bg-black rounded-[2rem] p-1">
                      <div className="bg-white rounded-[1.5rem] overflow-hidden w-64 h-[500px]">
                        {/* Mobile Screen Content */}
                        <div className="w-full h-full bg-white relative">
                          {/* Status Bar */}
                          <div className="flex justify-between items-center px-6 py-2 text-xs">
                            <span>9:41</span>
                            <div className="flex items-center space-x-1">
                              <div className="w-4 h-2 bg-black rounded-sm"></div>
                              <div className="w-4 h-2 bg-black rounded-sm"></div>
                              <div className="w-6 h-3 border border-black rounded-sm"></div>
                            </div>
                          </div>
                          
                          {/* App Header */}
                          <div className="px-4 py-3 border-b border-gray-200">
                            <div className="flex items-center justify-between">
                              <div className="font-bold text-lg">NHB</div>
                              <div className="flex items-center space-x-4">
                                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Content */}
                          <div className="p-4">
                            <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-lg p-4 mb-4 text-white">
                              <div className="text-xs font-medium mb-1">NHB+</div>
                              <div className="text-lg font-bold">PODCAST USA TRAINING</div>
                            </div>
                            
                            <div className="space-y-3">
                              <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                                <div className="flex-1">
                                  <div className="text-sm font-medium">Alan Sultanic</div>
                                  <div className="text-xs text-gray-500">Join us for our NHB Growth Call...</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team/Testimonials Carousel Section */}
      <section className="relative py-20 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join thousands of professionals worldwide
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From marketers to coaches, our global community is growing every day
            </p>
          </div>
        </div>
        
        {/* Rotating Carousel */}
        <div className="relative">
          <div className="flex carousel-scroll">
            {/* First set of profiles */}
            <div className="flex space-x-8 min-w-max">
              {[
                { name: "Sarah", role: "Marketer", flag: "/flags/canada.png", image: "/professional-woman-diverse.png" },
                { name: "Marcus", role: "Coach", flag: "/flags/usa.png", image: "/professional-black-man.png" },
                { name: "Lisa", role: "Copywriter", flag: "/flags/australia.png", image: "/professional-asian-woman.png" },
                { name: "David", role: "Influencer", flag: "/flags/usa.png", image: "/professional-bearded-man.png" },
                { name: "Alex", role: "Designer", flag: "/flags/netherlands.png", image: "/professional-young-man.png" },
                { name: "Emma", role: "SEO Marketer", flag: "/flags/usa.png", image: "/professional-blonde-woman.png" },
                { name: "Sophie", role: "Coach", flag: "/flags/germany.png", image: "/professional-woman-smiling.png" },
                { name: "James", role: "Marketer", flag: "/flags/usa.png", image: "/placeholder.svg" },
                { name: "Anna", role: "Agency owner", flag: "/flags/norway.png", image: "/professional-business-woman.png" },
                { name: "Michael", role: "CMO", flag: "/flags/usa.png", image: "/placeholder.svg" },
                { name: "Carlos", role: "Strategist", flag: "/flags/spain.png", image: "/placeholder.svg" },
              ].map((person, index) => (
                <div key={index} className="flex flex-col items-center space-y-3 min-w-[140px] group">
                  <div className="relative transform transition-transform duration-300 group-hover:scale-110">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-3 border-gray-700 shadow-lg">
                      <img 
                        src={person.image || "/placeholder.svg"} 
                        alt={person.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-800">
                      <img 
                        src={person.flag || "/placeholder.svg"} 
                        alt="Country flag"
                        className="w-5 h-5 rounded-sm object-cover"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-300 text-sm font-medium">{person.role}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Duplicate set for seamless loop */}
            <div className="flex space-x-8 min-w-max ml-8">
              {[
                { name: "Sarah", role: "Marketer", flag: "/flags/canada.png", image: "/professional-woman-diverse.png" },
                { name: "Marcus", role: "Coach", flag: "/flags/usa.png", image: "/professional-black-man.png" },
                { name: "Lisa", role: "Copywriter", flag: "/flags/australia.png", image: "/professional-asian-woman.png" },
                { name: "David", role: "Influencer", flag: "/flags/usa.png", image: "/professional-bearded-man.png" },
                { name: "Alex", role: "Designer", flag: "/flags/netherlands.png", image: "/professional-young-man.png" },
                { name: "Emma", role: "SEO Marketer", flag: "/flags/usa.png", image: "/professional-blonde-woman.png" },
                { name: "Sophie", role: "Coach", flag: "/flags/germany.png", image: "/professional-woman-smiling.png" },
                { name: "James", role: "Marketer", flag: "/flags/usa.png", image: "/placeholder.svg" },
                { name: "Anna", role: "Agency owner", flag: "/flags/norway.png", image: "/professional-business-woman.png" },
                { name: "Michael", role: "CMO", flag: "/flags/usa.png", image: "/placeholder.svg" },
                { name: "Carlos", role: "Strategist", flag: "/flags/spain.png", image: "/placeholder.svg" },
              ].map((person, index) => (
                <div key={`duplicate-${index}`} className="flex flex-col items-center space-y-3 min-w-[140px] group">
                  <div className="relative transform transition-transform duration-300 group-hover:scale-110">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-3 border-gray-700 shadow-lg">
                      <img 
                        src={person.image || "/placeholder.svg"} 
                        alt={person.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-800">
                      <img 
                        src={person.flag || "/placeholder.svg"} 
                        alt="Country flag"
                        className="w-5 h-5 rounded-sm object-cover"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-300 text-sm font-medium">{person.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Mission Statement Section */}
      <section className="relative py-32 bg-black overflow-hidden">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          {/* Decorative Lines */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gray-600 max-w-32"></div>
            <div className="mx-4 w-2 h-2 bg-gray-600 rounded-full"></div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gray-600 max-w-32"></div>
          </div>
          
          {/* Subtitle */}
          <p className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent text-sm font-medium tracking-wider uppercase mb-8">
            MORE THAN A MASTERMIND
          </p>
          
          {/* Main Message */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-5xl mx-auto">
            We are a community of entrepreneurs dedicated to helping each other grow, scale and reach new heights through innovation
          </h2>
        </div>
      </section>
      {/* Features Section - Learn, Plan, Execute */}
      <section className="relative py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Learn Column */}
            <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
              {/* Flowchart Visual */}
              <div className="mb-8 h-48 flex items-center justify-center">
                <div className="relative w-full max-w-80">
                  {/* Top Row: You and Principles */}
                  <div className="flex justify-between items-center mb-12">
                    <div className="bg-gray-900 border border-gray-600 rounded-2xl px-6 py-3 text-white text-sm font-medium">
                      You
                    </div>
                    <div className="bg-gray-900 border border-gray-600 rounded-2xl px-6 py-3 text-white text-sm font-medium">
                      Principles
                    </div>
                  </div>
                  
                  {/* Philosophy - Center */}
                  <div className="flex justify-center mb-12">
                    <div className="bg-gray-900 border border-gray-600 rounded-2xl px-6 py-3 text-white text-sm font-medium">
                      Philosophy
                    </div>
                  </div>
                  
                  {/* Bottom: Proven success methods */}
                  <div className="flex justify-center">
                    <div className="bg-gray-900 border border-gray-600 rounded-2xl px-6 py-3 text-white text-sm font-medium">
                      Proven success methods
                    </div>
                  </div>
                  
                  {/* Animated Lines */}
                  {/* Horizontal line between You and Principles */}
                  <div className="absolute top-[22px] left-[76px] w-[128px] h-0.5 bg-gray-600 overflow-hidden">
                    <div className="h-full bg-white animate-snake-horizontal"></div>
                  </div>
                  
                  {/* Vertical line from You down */}
                  <div className="absolute top-[46px] left-[76px] w-0.5 h-[34px] bg-gray-600 overflow-hidden">
                    <div className="w-full bg-white animate-snake-vertical-delay-1"></div>
                  </div>
                  
                  {/* Vertical line from Principles down */}
                  <div className="absolute top-[46px] right-[76px] w-0.5 h-[34px] bg-gray-600 overflow-hidden">
                    <div className="w-full bg-white animate-snake-vertical-delay-1"></div>
                  </div>
                  
                  {/* Horizontal line from You's vertical to Philosophy (left side) */}
                  <div className="absolute top-[80px] left-[76px] w-[64px] h-0.5 bg-gray-600 overflow-hidden">
                    <div className="h-full bg-white animate-snake-horizontal-delay-2"></div>
                  </div>
                  
                  {/* Horizontal line from Principles' vertical to Philosophy (right side) */}
                  <div className="absolute top-[80px] right-[76px] w-[64px] h-0.5 bg-gray-600 overflow-hidden">
                    <div className="h-full bg-white animate-snake-horizontal-delay-2"></div>
                  </div>
                  
                  {/* Vertical line from Philosophy to Proven success methods */}
                  <div className="absolute top-[104px] left-1/2 transform -translate-x-1/2 w-0.5 h-[34px] bg-gray-600 overflow-hidden">
                    <div className="w-full bg-white animate-snake-vertical-delay-3"></div>
                  </div>
                </div>
              </div>
              
              {/* Badge */}
              <div className="text-center mb-6">
                <span className="border border-yellow-500 text-yellow-500 bg-transparent px-6 py-2 rounded-full text-sm font-medium">
                  Learn
                </span>
              </div>
              
              {/* Content */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Growth Philosophy</h3>
                <p className="text-gray-400 leading-relaxed">
                  Master the fundamental NHB principles and philosophy essential for a business.
                </p>
              </div>
            </div>

            {/* Plan Column */}
            <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
              {/* Topics Grid */}
              <div className="mb-8 h-48 flex flex-col justify-center">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Branding', 'Team Building', 'Tactics', 'Operations',
                    'Sales', 'Negotiation', 'Business Growth', 'Strategies'
                  ].map((topic, index) => (
                    <div key={index} className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-xs text-center">
                      {topic}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Badge */}
              <div className="text-center mb-6">
                <span className="border border-yellow-500 text-yellow-500 bg-transparent px-6 py-2 rounded-full text-sm font-medium">
                  Plan
                </span>
              </div>
              
              {/* Content */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Your Strategic Plan</h3>
                <p className="text-gray-400 leading-relaxed">
                  Build and refine your strategic plan to navigate your path to success.
                </p>
              </div>
            </div>

            {/* Execute Column */}
            <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
              {/* Mobile Mockup */}
              <div className="mb-8 h-48 flex items-center justify-center">
                <div className="relative">
                  <div className="w-32 h-56 bg-gray-800 rounded-2xl p-1 shadow-xl">
                    <div className="w-full h-full bg-blue-900 rounded-xl overflow-hidden relative">
                      {/* Status Bar */}
                      <div className="flex justify-between items-center px-3 py-1 text-xs text-white">
                        <span>9:41</span>
                        <div className="flex space-x-1">
                          <div className="w-3 h-1.5 bg-white rounded-sm"></div>
                          <div className="w-3 h-1.5 bg-white rounded-sm"></div>
                          <div className="w-4 h-2 border border-white rounded-sm"></div>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-2 space-y-2">
                        <div className="bg-red-600 rounded px-2 py-1">
                          <div className="text-white text-xs font-bold">NHB Theory - Trust Trust Trust</div>
                        </div>
                        <div className="text-white text-xs">Today on...</div>
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
                          <div className="text-white text-xs">Alan</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Badge */}
              <div className="text-center mb-6">
                <span className="border border-yellow-500 text-yellow-500 bg-transparent px-6 py-2 rounded-full text-sm font-medium">
                  Execute
                </span>
              </div>
              
              {/* Content */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Execute The Plan</h3>
                <p className="text-gray-400 leading-relaxed">
                  Turn your dreams into reality with ruthless precision and execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Platform Features Section */}
      <section className="relative py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          {/* Main Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-6xl mx-auto">
              We'll help you become best of the best in the game by giving you everything you'll ever need to win
            </h2>
          </div>
          
          {/* Features Grid */}
          <div className="flex justify-center items-center gap-3 md:gap-4 lg:gap-6">
            {[
              { icon: "Video", label: "Live Learning", highlight: false },
              { icon: "Play", label: "Courses", highlight: false },
              { icon: "FileText", label: "Insights", highlight: false },
              { icon: "Users", label: "Community", highlight: false },
              { icon: "Flame", label: "WWRN", highlight: false },
              { icon: "MessageCircle", label: "Coaching", highlight: false },
              { icon: "FileTemplate", label: "Templates", highlight: false },
              { icon: "Link", label: "Resources", highlight: false },
              { icon: "Briefcase", label: "Job Board", highlight: false },
              { icon: "Clock", label: "And More", highlight: false },
            ].map((feature, index) => {
              const IconComponent = feature.icon === "Video" ? Video :
                                  feature.icon === "Play" ? Play :
                                  feature.icon === "FileText" ? FileText :
                                  feature.icon === "Users" ? Users :
                                  feature.icon === "Flame" ? Flame :
                                  feature.icon === "MessageCircle" ? MessageCircle :
                                  feature.icon === "FileTemplate" ? FileText :
                                  feature.icon === "Link" ? Link :
                                  feature.icon === "Briefcase" ? Briefcase :
                                  Clock;
              
              const isActive = index === currentSlide;
              
              return (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className="flex flex-col items-center space-y-3 group cursor-pointer flex-shrink-0 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                    isActive
                      ? (index === 1 ? 'bg-blue-600 scale-110 shadow-lg shadow-blue-600/25' : 'bg-gray-600 scale-110 shadow-lg shadow-gray-600/25')
                      : (feature.highlight 
                          ? 'bg-blue-600 hover:bg-blue-700' 
                          : 'bg-gray-800 hover:bg-gray-700 border border-gray-700')
                  }`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <span className={`text-sm font-medium text-center whitespace-nowrap transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-gray-400'
                  }`}>
                    {feature.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>
      {/* Features Slideshow Section */}
      <section className="relative py-20 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Slideshow Container */}
          <div className="relative">
            {/* Main Slide Content */}
            <div className="flex items-center justify-center min-h-[500px]">
              <div className="text-center max-w-4xl mx-auto">
                {/* Current Slide Icon */}
                <div className="mb-8">
                  <div className={`w-24 h-24 mx-auto rounded-3xl flex items-center justify-center transition-all duration-500 ${
                    currentSlide === 1 // Solo "Courses" (index 1) debe ser azul
                      ? 'bg-blue-600' 
                      : 'bg-gray-800 border border-gray-700'
                  }`}>
                    {React.createElement(slides[currentSlide].icon, { className: "w-12 h-12 text-white" })}
                  </div>
                </div>
                
                {/* Current Slide Content */}
                <div className="space-y-6">
                  <h3 className="text-4xl md:text-5xl font-bold text-white">
                    {slides[currentSlide].title}
                  </h3>
                  <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
                    {slides[currentSlide].description}
                  </p>
                </div>
                
                {/* Placeholder Image */}
                <div className="mt-12">
                  <div className="bg-gray-800 rounded-2xl aspect-video max-w-3xl mx-auto flex items-center justify-center border border-gray-700">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gray-700 rounded-xl flex items-center justify-center">
                        {React.createElement(slides[currentSlide].icon, { className: "w-8 h-8 text-gray-400" })}
                      </div>
                      <p className="text-gray-500 text-lg">
                        {slides[currentSlide].title} Preview
                      </p>
                      <p className="text-gray-600 text-sm mt-2">
                        Placeholder Image
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Slide Indicators */}
            <div className="flex justify-center mt-12 space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-blue-600 w-8' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
            
          </div>
        </div>
      </section>
      {/* Final CTA Section */}
      <section className="relative py-32 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Subtitle */}
          <p className="text-blue-500 text-lg font-medium mb-6">
            Join The Waitlist
          </p>
          
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-12">
            Be The First To Get Access
          </h2>
          
          {/* CTA Button */}
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-lg font-medium rounded-full transition-colors"
          >
            Unete gratis
          </Button>
        </div>
      </section>
      {/* Footer */}
      <footer className="relative bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Left - Copyright */}
            <div className="text-gray-400 text-sm">
              © Nothing Held Back 2025 All rights reserved
            </div>
            
            {/* Center - Logo */}
            <div className="text-white font-bold text-lg tracking-wider">
              NOTHING HELD BACK
            </div>
            
            {/* Right - Links */}
            <div className="flex items-center space-x-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Acceptable use</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
