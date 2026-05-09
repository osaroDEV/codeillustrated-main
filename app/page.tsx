"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Code,
  ExternalLink,
  Sparkles,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function LandingPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-black text-white selection:bg-primary/30 overflow-x-hidden"
    >
      {/* Grid Background Effect */}
      <div className="fixed inset-0 grid-bg opacity-30 pointer-events-none" />

      {/* Ambient Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b-0 border-white/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <img
              src="/logo-portrait-no-bg.png"
              alt="CIS Logo"
              className="w-12 h-12 object-contain"
            />

            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-white to-white/70">
              Code Illustrated
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {["Academy", "Labs"].map((item) => (
              <Link
                key={item}
                href={item === "Labs" ? "/labs" : `/${item.toLowerCase()}`}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <motion.div
          style={{ opacity, scale }}
          className="absolute inset-0 z-0 overflow-hidden"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-40 grayscale"
          >
            <source src="/bg-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-linear-to-b from-black via-black/20 to-black" />
        </motion.div>

        <div className="container relative z-10 mx-auto px-6">
          <motion.div
            initial="initial"
            animate={isLoaded ? "animate" : "initial"}
            variants={stagger}
            className="max-w-4xl"
          >
            <motion.div
              variants={fadeIn}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass mb-8 border-white/10"
            >
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-medium tracking-wide uppercase text-white/80">
                Pioneering Digital Excellence
              </span>
            </motion.div>

            <motion.h1
              variants={fadeIn}
              className="text-6xl md:text-8xl font-bold mb-8 leading-[1.1] tracking-tight"
            >
              Build Skills. <br />
              <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-accent">
                Build Brands.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl leading-relaxed"
            >
              The ultimate destination for mastering modern technologies and
              accessing elite digital solutions tailored for the next
              generation.
            </motion.p>

            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-6"
            >
              <Link
                href="/academy"
                className="group relative px-8 py-4 bg-primary text-white rounded-xl font-semibold overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
              >
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center justify-center gap-2">
                  Explore Academy
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                href="/labs"
                className="group px-8 py-4 glass text-white rounded-xl font-semibold transition-all hover:bg-white/10 flex items-center justify-center gap-2"
              >
                Hire Agency
                <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Choice Section (Academy vs Agency) */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Academy Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative p-10 rounded-3xl glass border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity group-hover:scale-110 duration-500">
                <Brain className="w-40 h-40" />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 border border-primary/20">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Academy</h3>
                <p className="text-white/60 mb-8 text-lg">
                  Master the tools of tomorrow. From Web Development to AI, our
                  hands-on curriculum is designed to turn beginners into elite
                  engineers.
                </p>
                <Link
                  href="/academy"
                  className="inline-flex items-center gap-2 text-primary font-semibold group/link"
                >
                  Start Learning
                  <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Labs Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative p-10 rounded-3xl glass border-white/5 hover:border-accent/30 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity group-hover:scale-110 duration-500">
                <Code className="w-40 h-40" />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center mb-6 border border-accent/20">
                  <Code className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Labs</h3>
                <p className="text-white/60 mb-8 text-lg">
                  Enterprise-grade digital production. We build scalable
                  products, stunning interfaces, and robust systems for
                  visionary brands.
                </p>
                <Link
                  href="/labs"
                  className="inline-flex items-center gap-2 text-accent font-semibold group/link"
                >
                  Build with us
                  <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] bg-linear-to-br from-white/10 to-transparent p-12 md:p-20 text-center glass border-white/5 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent)]" />
            <h2 className="text-4xl md:text-6xl font-bold mb-8 relative z-10">
              Ready to redefine <br />
              <span className="text-white/50 italic">your digital limit?</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link
                href="/academy"
                className="px-10 py-5 bg-white text-black rounded-2xl font-bold hover:bg-white/90 transition-all active:scale-95"
              >
                Join the Academy
              </Link>
              <Link
                href="/labs"
                className="px-10 py-5 glass text-white rounded-2xl font-bold hover:bg-white/10 transition-all active:scale-95"
              >
                Partner with Labs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            <div className="max-w-xs">
              <Link href="/" className="flex items-center gap-2 mb-6">
                <img
                  src="/logo-portrait-no-bg.png"
                  alt="Logo"
                  className="w-10 h-10"
                />
                <span className="text-lg font-bold">Code Illustrated</span>
              </Link>
              <p className="text-white/50 text-sm leading-relaxed">
                Empowering creators through elite education and world-class
                digital production. Based in the future, built for today.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/30">
                Platforms
              </h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li>
                  <Link
                    href="/academy"
                    className="hover:text-primary transition-colors"
                  >
                    Academy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/labs"
                    className="hover:text-primary transition-colors"
                  >
                    Labs
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
            <p className="text-white/30 text-xs">
              &copy; {new Date().getFullYear()} Code Illustrated Systems. All
              rights reserved.
            </p>
            <div className="flex gap-6">{/* Social icons could go here */}</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
