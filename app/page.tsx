import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">woodmart.</h1>
            <div className="flex items-center gap-8">
              <Link
                href="/home"
                className="text-white/90 hover:text-white transition-colors text-sm font-medium"
              >
                HOME
              </Link>
              <Link
                href="/shop"
                className="text-white/90 hover:text-white transition-colors text-sm font-medium"
              >
                SHOP
              </Link>
              <Link
                href="/blog"
                className="text-white/90 hover:text-white transition-colors text-sm font-medium"
              >
                BLOG
              </Link>
              <Link
                href="/pages"
                className="text-white/90 hover:text-white transition-colors text-sm font-medium"
              >
                PAGES
              </Link>
              <Link
                href="/elements"
                className="text-white/90 hover:text-white transition-colors text-sm font-medium"
              >
                ELEMENTS
              </Link>
              <Link
                href="/buy"
                className="text-white/90 hover:text-white transition-colors text-sm font-medium"
              >
                BUY
              </Link>
              <div className="flex items-center gap-4 ml-4">
                <button className="text-white/90 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                <button className="text-white/90 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                <button className="text-white/90 hover:text-white transition-colors relative">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <span className="absolute -top-1 -right-1 bg-white text-slate-900 text-xs w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
                </button>
                <span className="text-white text-sm">$0.00</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="relative">
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1920')",
            }}
          >
            <div className="absolute inset-0 bg-slate-900/50"></div>
          </div>

          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <p className="text-white/80 text-lg mb-4 font-light italic tracking-wide">
              This is custom subtitle
            </p>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight">
              WOODMART PARALLAX<br />DEMO PREMIUM TEMPLATE
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Tempor adipiscing porta a in eros eros sodales non dis ut ullamcorper aliquam tellus nisl. Lluctus nec ullamcorper mattis.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/academy"
                className="inline-flex items-center justify-center px-10 py-4 bg-white text-slate-900 font-semibold text-base hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide min-w-[180px]"
              >
                READ MORE
              </Link>
              <Link
                href="/labs"
                className="inline-flex items-center justify-center px-10 py-4 bg-slate-900 text-white font-semibold text-base border-2 border-white hover:bg-white hover:text-slate-900 transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide min-w-[180px]"
              >
                ADD TO CART
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
