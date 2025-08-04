'use client'

import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Connect to backend for email signup
    console.log('Signup email:', email)
    alert('Thanks for your interest! We\'ll notify you when CheatCode launches.')
    setEmail('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Navigation */}
      <nav className="px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-slate-800">
            CheatCode<span className="text-blue-600">.ai</span>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
            Join Waitlist
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            Master Coding with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              {' '}AI-Powered{' '}
            </span>
            Practice
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Level up your programming skills with intelligent challenges, personalized feedback, 
            and adaptive learning. The smartest way to ace your next technical interview.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <form onSubmit={handleSignup} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg bg-white border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 w-80 shadow-sm"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
              >
                Get Started
              </button>
            </form>
          </div>
          <p className="text-sm text-slate-500 mt-4">Join 10,000+ developers already on the waitlist</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 text-center mb-16">
            Why CheatCode is Different
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg transition-all shadow-sm">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">AI-Powered Hints</h3>
              <p className="text-slate-600">
                Get intelligent, contextual hints when you're stuck. Our AI understands your code and provides just the right nudge to keep you learning.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg transition-all shadow-sm">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Adaptive Learning</h3>
              <p className="text-slate-600">
                Problems adjust to your skill level automatically. Focus on areas where you need improvement with personalized learning paths.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg transition-all shadow-sm">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Real-time Feedback</h3>
              <p className="text-slate-600">
                Instant code analysis with detailed explanations. Understand not just what's wrong, but why and how to improve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-slate-600">Coding Problems</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-600 mb-2">50k+</div>
              <div className="text-slate-600">Solutions Generated</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">95%</div>
              <div className="text-slate-600">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">24/7</div>
              <div className="text-slate-600">AI Mentor Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 text-center mb-16">
            What Developers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-600 mb-4">
                "CheatCode's AI feedback is incredible. It's like having a senior developer mentoring me 24/7. Landed my dream job at Google!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-3"></div>
                <div>
                  <div className="text-slate-800 font-semibold">Sarah Chen</div>
                  <div className="text-slate-500 text-sm">Software Engineer @ Google</div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-600 mb-4">
                "The adaptive learning is game-changing. Problems get harder as I improve, keeping me challenged without being overwhelming."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-3"></div>
                <div>
                  <div className="text-slate-800 font-semibold">Marcus Johnson</div>
                  <div className="text-slate-500 text-sm">Senior Developer @ Meta</div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-600 mb-4">
                "Finally, a platform that explains the 'why' behind solutions. My problem-solving skills improved dramatically in just 2 months."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mr-3"></div>
                <div>
                  <div className="text-slate-800 font-semibold">Priya Patel</div>
                  <div className="text-slate-500 text-sm">Full Stack Developer @ Netflix</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">
            Ready to Level Up Your Coding?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Join thousands of developers who are already mastering algorithms and data structures with AI-powered guidance.
          </p>
          <form onSubmit={handleSignup} className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-6 py-4 rounded-lg bg-white border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full md:w-80 shadow-sm"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 w-full md:w-auto shadow-lg"
            >
              Start Free Trial
            </button>
          </form>
          <p className="text-sm text-slate-500 mt-4">7-day free trial • No credit card required</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-slate-200 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold text-slate-800 mb-4 md:mb-0">
              CheatCode<span className="text-blue-600">.ai</span>
            </div>
            <div className="flex space-x-6 text-slate-600">
              <a href="#" className="hover:text-slate-800 transition-colors">Privacy</a>
              <a href="#" className="hover:text-slate-800 transition-colors">Terms</a>
              <a href="#" className="hover:text-slate-800 transition-colors">Contact</a>
              <a href="#" className="hover:text-slate-800 transition-colors">Blog</a>
            </div>
          </div>
          <div className="text-center text-slate-500 mt-8">
            © 2024 CheatCode.ai. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}