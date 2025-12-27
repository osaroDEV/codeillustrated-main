'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Code, Palette, Users, Sparkles, Zap, Layers} from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">
            Code Illustrated
          </div>
          <div className="hidden md:flex space-x-8 text-sm">
            <Link href="/academy" className="hover:text-gray-600 transition-colors">Academy</Link>
            <Link href="/labs" className="hover:text-gray-600 transition-colors">Agency</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 mb-8">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">Building the future of digital excellence</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Build Skills.
            <span className="block">Build Brands.</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Whether you're looking to master cutting-edge technologies or need expert digital solutions, 
            we're here to elevate your journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/academy" className="group px-8 py-4 bg-black hover:bg-gray-800 text-white rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2">
              Explore Academy
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/labs" className="group px-8 py-4 border border-black hover:bg-gray-50 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2">
              Higher Agency
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

      </section> */}
      {/* Hero Section */}
<section className="relative overflow-hidden">
  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/bg-video.mp4" type="video/mp4" />
  </video>

  {/* Overlay (for readability) */}
  <div className="absolute inset-0 bg-white/0"></div>

  {/* Content */}
  <div className="relative container mx-auto px-6 py-20 md:py-32">
    <div className="text-center max-w-5xl mx-auto">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 mb-8 bg-white/70 backdrop-blur">
        <Sparkles className="w-4 h-4" />
        <span className="text-sm">Building the future of digital excellence</span>
      </div>

      <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
        Build Skills.
        <span className="block">Build Brands.</span>
      </h1>

      <p className="text-xl text-gray-100 mb-12 max-w-3xl mx-auto leading-relaxed">
        Whether you're looking to master cutting-edge technologies or need expert digital solutions,
        we're here to elevate your journey.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="/academy"
          className="group px-8 py-4 bg-black hover:bg-gray-800 text-white rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
        >
          Explore Academy
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>

        <a
          href="/labs"
          className="group px-8 py-4 border border-black hover:bg-gray-50 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 bg-white"
        >
          Higher Agency
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  </div>
</section>


      {/* Footer CTA */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you want to learn or build, we're here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/academy" className="px-8 py-4 bg-black hover:bg-gray-800 text-white rounded-lg font-medium transition-all duration-300">
                Join Academy
              </a>
              <a href="/labs" className="px-8 py-4 border border-black hover:bg-gray-50 rounded-lg font-medium transition-all duration-300">
                Hire Agency
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-xl font-bold mb-4">
                Code Illustrated
              </div>
              <p className="text-gray-600 text-sm">
                Empowering the next generation of digital creators and innovators.
              </p>
            </div>
            
          </div>
          <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Code Illustrated. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}