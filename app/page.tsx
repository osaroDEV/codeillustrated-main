import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            {/* <h1 className="text-2xl font-bold text-slate-900">Code Illustrated</h1> */}
            <h1 className="hidden sm:block lg:text-xl font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
              CodeIllustrated
            </h1>
            <h1 className="text-2xl font-bold text-white">Code Illustrated</h1>
            <div className="flex gap-6">
              <Link
                href="/academy"
                className="text-white/90 hover:text-white transition-colors text-sm font-medium uppercase tracking-wide"
              >
                Academy
              </Link>
              <Link
                href="/labs"
                className="text-white/90 hover:text-white transition-colors text-sm font-medium uppercase tracking-wide"
              >
                Labs
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="relative">
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1920')",
            }}
          >
            <div className="absolute inset-0 bg-slate-900/60"></div>
          </div>

          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <p className="text-white/80 text-lg mb-4 font-light italic tracking-wide">
              Where Education Meets Innovation
            </p>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight">
              TRANSFORM YOUR<br />DIGITAL VISION
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Learn to code with our comprehensive online school or partner with our expert development agency to bring your ideas to life
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/academy"
                className="inline-flex items-center justify-center px-10 py-4 bg-white text-slate-900 font-semibold text-base hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide min-w-[180px]"
              >
                Start Learning
              </Link>
              <Link
                href="/labs"
                className="inline-flex items-center justify-center px-10 py-4 bg-slate-900 text-white font-semibold text-base border-2 border-white hover:bg-white hover:text-slate-900 transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide min-w-[180px]"
              >
                Build With Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
