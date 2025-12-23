'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Code, Palette, Users, Sparkles, Zap, Layers } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Code Illustrated
          </div>
          <div className="hidden md:flex space-x-8 text-sm">
            <Link href="/academy" className="hover:text-blue-400 transition-colors">Academy</Link>
            <Link href="/labs" className="hover:text-purple-400 transition-colors">Agency</Link>
            <Link href="#contact" className="hover:text-blue-400 transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-6 py-20 md:py-32">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300">Building the future of digital excellence</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transform Ideas Into
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Digital Reality
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Whether you're looking to master cutting-edge technologies or need expert digital solutions, 
            we're here to elevate your journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/academy" className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50">
              Explore Academy
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/labs" className="group px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105">
              View Agency Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-20">
          {[
            { label: 'Students Trained', value: '2,500+' },
            { label: 'Projects Delivered', value: '150+' },
            { label: 'Success Rate', value: '98%' },
            { label: 'Countries', value: '25+' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all hover:scale-105">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Academy Section */}
      <section id="academy" className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <Code className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300">Academy</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Master the Art of
              <span className="block text-blue-400">Coding Excellence</span>
            </h2>
            
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Join our virtual coding academy and learn from industry experts. 
              From foundational programming to advanced frameworks, we'll guide 
              you every step of the way.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: Zap, text: 'Live interactive sessions with expert instructors' },
                { icon: Users, text: 'Collaborative learning environment' },
                { icon: Layers, text: 'Real-world projects and portfolio building' }
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                    <feature.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="text-slate-300 mt-1">{feature.text}</span>
                </div>
              ))}
            </div>

            <a href="#" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 group">
              Start Learning Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 backdrop-blur-sm">
              <div className="space-y-4">
                <div className="h-12 bg-white/5 rounded-lg animate-pulse"></div>
                <div className="h-12 bg-white/5 rounded-lg animate-pulse delay-100"></div>
                <div className="h-12 bg-white/5 rounded-lg animate-pulse delay-200"></div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-24 bg-white/5 rounded-lg animate-pulse delay-300"></div>
                  <div className="h-24 bg-white/5 rounded-lg animate-pulse delay-400"></div>
                </div>
              </div>
              <div className="absolute top-4 right-4 px-3 py-1 bg-blue-500 rounded-full text-xs font-medium">
                Live Classes
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agency Section */}
      <section id="agency" className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/10 backdrop-blur-sm hover:scale-105 transition-all">
                  <Code className="w-8 h-8 text-purple-400 mb-3" />
                  <h4 className="font-semibold mb-2">Web Development</h4>
                  <p className="text-sm text-slate-400">Cutting-edge web solutions</p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 backdrop-blur-sm hover:scale-105 transition-all">
                  <Palette className="w-8 h-8 text-blue-400 mb-3" />
                  <h4 className="font-semibold mb-2">UI/UX Design</h4>
                  <p className="text-sm text-slate-400">Beautiful user experiences</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="p-6 rounded-xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-white/10 backdrop-blur-sm hover:scale-105 transition-all">
                  <Sparkles className="w-8 h-8 text-pink-400 mb-3" />
                  <h4 className="font-semibold mb-2">Visual Design</h4>
                  <p className="text-sm text-slate-400">Stunning visual identity</p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10 backdrop-blur-sm hover:scale-105 transition-all">
                  <Layers className="w-8 h-8 text-purple-400 mb-3" />
                  <h4 className="font-semibold mb-2">Brand Identity</h4>
                  <p className="text-sm text-slate-400">Memorable brand experiences</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <Palette className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300">Agency</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Crafting Digital
              <span className="block text-purple-400">Experiences That Matter</span>
            </h2>
            
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Our creative studio brings your vision to life with world-class design 
              and development services. From concept to launch, we handle it all.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Full-stack web development with modern technologies',
                'User-centered UI/UX design that converts',
                'Comprehensive brand identity and visual design',
                'Ongoing support and maintenance'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>

            <a href="#" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 group">
              Discuss Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <div className="rounded-2xl bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 border border-white/10 backdrop-blur-sm p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Whether you want to learn or build, we're here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/academy" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-all duration-300 hover:scale-105">
              Join Academy
            </Link>
            <Link href="/labs" className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-all duration-300 hover:scale-105">
              Hire Agency
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Code Illustrated
              </div>
              <p className="text-slate-400 text-sm">
                Empowering the next generation of digital creators and innovators.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Academy</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Courses</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instructors</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Agency</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Code Illustrated. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}