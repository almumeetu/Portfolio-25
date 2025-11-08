import React from 'react';

// Note: This file is repurposed as the Home tab content.
const Home: React.FC = () => {
    return (
        <div className="max-w-5xl mx-auto space-y-16 md:space-y-20">
             {/* Hero Section */}
            <div className="text-center space-y-6 md:space-y-8 pt-10 md:pt-20">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tighter">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500 animate-gradient-x">
                        Al Mumeetu Saikat
                    </span>
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl font-medium text-gray-300 max-w-3xl mx-auto">
                    A creative WordPress Expert & Frontend Developer, now building high-performance web applications with React and Next.js.
                </p>
            </div>

            {/* About Section */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
                <div className="relative w-full md:w-1/3 flex-shrink-0 flex justify-center">
                    <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full blur-2xl opacity-30 max-w-sm mx-auto"></div>
                    <img
                        src="https://i.ibb.co/6yvppCr/Al-Mumeetu-Saikat.jpg"
                        alt="Al Mumeetu Saikat"
                        className="relative rounded-full w-60 h-60 md:w-72 md:h-72 border-4 border-slate-700 shadow-2xl object-cover"
                    />
                </div>
                <div className="md:w-2/3 text-lg text-gray-300 space-y-4 text-center md:text-left">
                     <p>
                        With a strong foundation in custom WordPress theme development and Elementor, I create pixel-perfect, user-friendly websites. My journey began with building ThemeForest-standard templates, evolving into complex WordPress customization for international clients.
                    </p>
                    <p>
                        I am now expanding my expertise into the modern JavaScript ecosystem, leveraging frameworks like React and Next.js to deliver fast, scalable, and dynamic frontend experiences. I thrive on clean code, performance optimization, and creating digital solutions that exceed client expectations.
                    </p>
                </div>
            </div>
            
             {/* Additional Info Section */}
            <div className="text-center space-y-8">
                <div>
                    <h3 className="text-2xl font-bold text-purple-400 mb-2">Languages</h3>
                    <p className="text-lg text-gray-300">English and Bengali</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-purple-400 mb-2">Interests</h3>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                        Full Stack Development, Data Science, Machine Learning, Artificial Intelligence, Coding, Traveling.
                    </p>
                </div>
            </div>


             <style>{`
                @keyframes gradient-x {
                    0%, 100% {
                        background-size: 200% 200%;
                        background-position: left center;
                    }
                    50% {
                        background-size: 200% 200%;
                        background-position: right center;
                    }
                }
                .animate-gradient-x {
                    animation: gradient-x 5s ease infinite;
                }
            `}</style>
        </div>
    );
};

export default Home;