import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white font-sans selection:bg-blue-100 text-slate-900 overflow-x-hidden">
            <Navbar />

            {/* HERO SECTION */}
            <main className="relative pt-16 pb-24 overflow-hidden">
                {/* Background Blobs with Pulse Animation */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
                    <div className="absolute top-[-5%] left-[-5%] w-[50%] h-[50%] bg-blue-50/70 rounded-full blur-[120px] animate-blob"></div>
                    <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-orange-50/70 rounded-full blur-[120px] animate-blob [animation-delay:2s]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8 text-center lg:text-left">
                        {/* Staggered Content Animation using [animation-delay] */}
                        <div className="animate-reveal opacity-0 inline-flex items-center gap-3 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-full">
                            <span className="bg-blue-600 text-[10px] font-bold text-white px-2 py-0.5 rounded-full uppercase tracking-tighter animate-pulse">Live</span>
                            <span className="text-[11px] font-medium text-slate-500 uppercase tracking-widest">v2.0 Hyper-Local Logistics</span>
                        </div>

                        <h1 className="animate-reveal opacity-0 [animation-delay:150ms] text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-slate-900">
                            The tech behind <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">every great meal.</span>
                        </h1>

                        <p className="animate-reveal opacity-0 [animation-delay:300ms] text-lg text-slate-500 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                            MomFood scales your kitchen operations with enterprise-grade dispatching, real-time menu syncing, and deep analytics. Built for the next generation of food delivery.
                        </p>

                        <div className="animate-reveal opacity-0 [animation-delay:450ms] flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
                            <Link to="/signup" className="group bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold shadow-xl shadow-slate-200 hover:bg-blue-600 transition-all active:scale-95 flex items-center justify-center gap-2">
                                Launch Your Kitchen
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                            <button className="bg-white text-slate-600 border border-slate-200 px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all">
                                How it Works
                            </button>
                        </div>

                        <div className="animate-reveal opacity-0 [animation-delay:600ms] pt-8 flex items-center justify-center lg:justify-start gap-3">
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 shadow-sm transition-transform hover:-translate-y-1 hover:z-10 cursor-pointer" />
                                ))}
                            </div>
                            <p className="text-sm text-slate-400 font-medium">Trusted by 2,400+ modern kitchens</p>
                        </div>
                    </div>

                    {/* HERO IMAGE / MOCKUP WITH FLOAT */}
                    <div className="relative">
                        <div className="relative z-10 rounded-3xl border border-slate-200 shadow-2xl overflow-hidden transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                            <img
                                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000"
                                alt="Food Analytics"
                                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all"
                            />
                            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20">
                                <div className="flex justify-between items-center">
                                    <p className="font-bold text-slate-900">Real-time Order Volume</p>
                                    <span className="text-blue-600 font-black">+142%</span>
                                </div>
                                <div className="mt-2 w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                    <div className="bg-blue-600 h-full w-[70%]"></div>
                                </div>
                            </div>
                        </div>
                        {/* Orange Floating Element */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-500 rounded-3xl -z-10 animate-bounce transition-all duration-1000"></div>
                    </div>
                </div>
            </main>

            {/* LOGO CLOUD */}
            <section className="py-12 bg-white border-y border-slate-50">
                <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-8">Integrated with the best</p>
                <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-12 opacity-30 grayscale contrast-125">
                    {['ZOMATO', 'SWIGGY', 'UBEREATS', 'DUNZO'].map(brand => (
                        <span key={brand} className="text-xl font-black italic tracking-tighter hover:opacity-100 transition-opacity cursor-default">{brand}</span>
                    ))}
                </div>
            </section>

            {/* BENTO GRID FEATURES */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 space-y-3 animate-reveal opacity-0">
                    <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Scale your brand, not your stress.</h2>
                    <p className="text-slate-500 font-normal">Everything you need to dominate the delivery market.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Feature 1 */}
                    <div className="md:col-span-2 bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden group border border-slate-800 hover:border-blue-500 transition-colors duration-500">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-4 tracking-tight">Smart Inventory Sync</h3>
                            <p className="text-slate-400 max-w-sm leading-relaxed">
                                Automatically toggle items across all platforms. When your kitchen runs out of Paneer, your Zomato and Swiggy menus update in milliseconds.
                            </p>
                        </div>
                        <div className="absolute right-[-5%] bottom-[-10%] w-64 h-64 bg-blue-600/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-[2s]"></div>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-orange-500 rounded-[2.5rem] p-10 text-white flex flex-col justify-end border border-orange-400 hover:-translate-y-2 transition-transform shadow-lg shadow-orange-100">
                        <h3 className="text-2xl font-bold mb-2 tracking-tight">99.9% Reliable</h3>
                        <p className="text-orange-50 text-sm font-medium">Enterprise-grade stability for high-volume rush hours.</p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-100 transition-all hover:-translate-y-1">
                        <div className="w-10 h-10 bg-blue-600 rounded-lg mb-6 flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-blue-200">API</div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">Open Integration</h3>
                        <p className="text-slate-500 text-sm font-normal">Connect your POS, kitchen printers, and accounting tools instantly.</p>
                    </div>

                    {/* Feature 4 */}
                    <div className="md:col-span-2 bg-white rounded-[2.5rem] p-10 border border-slate-100 flex items-center justify-between hover:shadow-lg transition-all group">
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold text-slate-900 tracking-tight">Growth Analytics</h3>
                            <p className="text-slate-500 text-sm font-normal max-w-xs">AI insights to help you identify trending dishes and reduce food wastage by 24%.</p>
                        </div>
                        <div className="flex gap-1.5 items-end h-12">
                            {[30, 50, 40, 80, 45].map((h, i) => (
                                <div
                                    key={i}
                                    style={{ height: `${h}%` }}
                                    className="w-2.5 bg-blue-600/20 rounded-full group-hover:bg-blue-600 transition-all duration-700"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-slate-50 border-t border-slate-100 pt-24 pb-12 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-5 gap-12 mb-20">
                        {/* Brand Section */}
                        <div className="lg:col-span-2 space-y-8">
                            <div className="space-y-6">
                                <div className="flex items-center gap-2 group cursor-pointer">
                                    <div className="w-9 h-9 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-blue-600 transition-colors duration-500">
                                        <span className="text-white font-bold text-sm italic">M</span>
                                    </div>
                                    <span className="text-2xl font-bold tracking-tighter italic">MomFood<span className="text-blue-600">.</span></span>
                                </div>
                                <p className="text-slate-500 text-base max-w-xs leading-relaxed font-medium">
                                    The infrastructure for the next generation of cloud kitchens and multi-brand operators.
                                </p>
                            </div>

                            {/* App Store Badges Integration */}
                            <div className="flex flex-wrap gap-4 pt-2">
                                <a href="#playstore" className="transition-transform hover:scale-105 active:scale-95">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-10 w-auto" />
                                </a>
                                <a href="#appstore" className="transition-transform hover:scale-105 active:scale-95">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-10 w-auto" />
                                </a>
                            </div>
                        </div>

                        {/* Smart Links Sections */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:col-span-3 gap-8">
                            <div>
                                <h4 className="font-bold text-[11px] uppercase tracking-[0.2em] text-slate-900 mb-6">Platform</h4>
                                <ul className="space-y-4 text-slate-500 text-sm font-semibold">
                                    <li className="hover:text-blue-600 transition-colors cursor-pointer flex items-center gap-2 group">
                                        Inventory OS <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[10px]">↗</span>
                                    </li>
                                    <li className="hover:text-blue-600 transition-colors cursor-pointer flex items-center gap-2 group">
                                        Dispatch API <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[10px]">↗</span>
                                    </li>
                                    <li className="hover:text-blue-600 transition-colors cursor-pointer">Live Analytics</li>
                                    <li className="hover:text-blue-600 transition-colors cursor-pointer">Kitchen Display</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold text-[11px] uppercase tracking-[0.2em] text-slate-900 mb-6">Resources</h4>
                                <ul className="space-y-4 text-slate-500 text-sm font-semibold">
                                    <li className="hover:text-blue-600 transition-colors cursor-pointer">Documentation</li>
                                    <li className="hover:text-blue-600 transition-colors cursor-pointer">Help Center</li>
                                    <li className="hover:text-blue-600 transition-colors cursor-pointer">Community</li>
                                    <li className="hover:text-blue-600 transition-colors cursor-pointer">Partner Program</li>
                                </ul>
                            </div>

                            <div className="col-span-2 md:col-span-1">
                                <h4 className="font-bold text-[11px] uppercase tracking-[0.2em] text-slate-900 mb-6">Stay Updated</h4>
                                <div className="space-y-4">
                                    <p className="text-slate-500 text-xs font-medium leading-relaxed">Join 5,000+ chefs receiving our weekly kitchen-tech teardown.</p>
                                    <div className="relative group">
                                        <input
                                            type="email"
                                            placeholder="chef@kitchen.com"
                                            className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
                                        />
                                        <button className="absolute right-2 top-1.5 bg-slate-900 text-white px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-blue-600 transition-colors">
                                            Join
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="pt-10 border-t border-slate-200/60 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.3em]">
                                © 2026 MOMFOOD TECHNOLOGIES
                            </p>
                            <div className="flex gap-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                <a href="#privacy" className="hover:text-slate-900 transition-colors">Privacy</a>
                                <a href="#terms" className="hover:text-slate-900 transition-colors">Terms</a>
                                <a href="#status" className="hover:text-slate-900 transition-colors flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                    Systems OK
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="flex gap-4 grayscale opacity-40 hover:opacity-100 transition-opacity">
                                <span className="text-[10px] font-black italic tracking-tighter">STRIPE</span>
                                <span className="text-[10px] font-black italic tracking-tighter">AWS</span>
                                <span className="text-[10px] font-black italic tracking-tighter">POSTHOG</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;