import React, { useState, useEffect } from 'react';
import Sidebar from './components/Header'; // Re-using Header.tsx as Sidebar
import Home from './components/Hero'; // Re-using Hero.tsx as Home
import Resume from './components/About'; // Re-using About.tsx as Resume
import Projects from './components/Projects';
import Blog from './components/Skills'; // Re-using Skills.tsx as Blog
import Gallery from './components/Experience'; // Re-using Experience.tsx as Gallery
import Contact from './components/Contact';
import BottomNavBar from './components/BottomNavBar';

export type Tab = 'home' | 'resume' | 'projects' | 'blog' | 'gallery' | 'contact';

const App: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Tab>('home');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Close sidebar when changing tabs on mobile
    useEffect(() => {
        if (isSidebarOpen) {
            setIsSidebarOpen(false);
        }
    }, [activeTab]);


    const renderContent = () => {
        switch (activeTab) {
            case 'home':
                return <Home />;
            case 'resume':
                return <Resume />;
            case 'projects':
                return <Projects />;
            case 'blog':
                return <Blog />;
            case 'gallery':
                return <Gallery />;
            case 'contact':
                return <Contact />;
            default:
                return <Home />;
        }
    };

    return (
        <div className="gradient-bg w-screen h-screen flex overflow-hidden">
            <div className="aurora-bg"></div>
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
            <main className="flex-1 h-screen overflow-y-auto relative z-10">
                <div key={activeTab} className="p-6 md:p-10 lg:p-12 pb-24 md:pb-12 animate-content-fade-in">
                    {renderContent()}
                </div>
            </main>
            <BottomNavBar activeTab={activeTab} setActiveTab={setActiveTab} onMenuClick={() => setIsSidebarOpen(true)} />
            <style>{`
                @keyframes content-fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-content-fade-in {
                    animation: content-fade-in 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
                }
                /* Custom scrollbar for webkit browsers */
                main::-webkit-scrollbar {
                    width: 8px;
                }
                main::-webkit-scrollbar-track {
                    background: transparent;
                }
                main::-webkit-scrollbar-thumb {
                    background-color: rgba(100, 116, 139, 0.5);
                    border-radius: 4px;
                    border: 2px solid transparent;
                    background-clip: content-box;
                }
                main::-webkit-scrollbar-thumb:hover {
                    background-color: rgba(100, 116, 139, 0.8);
                }
            `}</style>
        </div>
    );
};

export default App;