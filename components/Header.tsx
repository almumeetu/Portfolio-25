import React from 'react';
import type { Tab } from '../App';

interface SidebarProps {
    activeTab: Tab;
    setActiveTab: (tab: Tab) => void;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const NavLink: React.FC<{
    tabName: Tab;
    icon: string;
    label: string;
    activeTab: Tab;
    onClick: (tab: Tab) => void;
}> = ({ tabName, icon, label, activeTab, onClick }) => {
    const isActive = activeTab === tabName;
    return (
        <button
            onClick={() => onClick(tabName)}
            className={`flex items-center w-full text-left p-3 rounded-lg transition-all duration-200 ${
                isActive ? 'bg-purple-500/20 text-purple-300' : 'text-gray-400 hover:bg-gray-700/50 hover:text-white'
            }`}
        >
            <i className={`ph-bold ${icon} text-2xl mr-4`}></i>
            <span className="font-semibold">{label}</span>
        </button>
    );
};

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, isOpen, setIsOpen }) => {
    const navLinks = [
        { tabName: 'home', icon: 'ph-house', label: 'Home' },
        { tabName: 'resume', icon: 'ph-identification-card', label: 'Resume' },
        { tabName: 'projects', icon: 'ph-kanban', label: 'Projects' },
        { tabName: 'blog', icon: 'ph-newspaper', label: 'Blog' },
        { tabName: 'gallery', icon: 'ph-images', label: 'Gallery' },
        { tabName: 'contact', icon: 'ph-paper-plane-tilt', label: 'Contact' },
    ] as const;

    const sidebarClasses = `
        fixed top-0 left-0 w-64 h-full bg-slate-900/70 backdrop-blur-md p-6 flex flex-col border-r border-slate-800/50 z-40
        transition-transform duration-300 ease-in-out
        md:relative md:translate-x-0 md:h-screen md:flex-shrink-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
    `;

    return (
        <>
            {/* Overlay for mobile */}
            {isOpen && (
                 <div 
                    className="fixed inset-0 bg-black/60 z-30 md:hidden"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
           
            <aside className={sidebarClasses}>
                 <div className="text-center mb-12">
                    <h1 className="text-2xl font-bold tracking-wider text-white">Al Mumeetu Saikat</h1>
                    <p className="text-sm text-purple-400 font-medium">WordPress & Frontend Expert</p>
                </div>
                <nav className="flex flex-col space-y-3">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.tabName}
                            {...link}
                            activeTab={activeTab}
                            onClick={setActiveTab}
                        />
                    ))}
                </nav>
                <div className="mt-auto text-center">
                     <div className="flex justify-center space-x-6 mb-4">
                        <a href="https://github.com/almumeetu" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                            <i className="ph-bold ph-github-logo text-2xl"></i>
                        </a>
                        <a href="https://linkedin.com/in/al-mumeetu-saikat" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                            <i className="ph-bold ph-linkedin-logo text-2xl"></i>
                        </a>
                        <a href="https://www.upwork.com/freelancers/~01e006522858184551" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                            <i className="ph-bold ph-briefcase text-2xl"></i>
                        </a>
                    </div>
                     <div className="my-4">
                        <span className="text-xs font-semibold text-slate-400 bg-slate-800/50 px-3 py-1 rounded-full">
                            Built with React & Tailwind
                        </span>
                    </div>
                    <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} Al Mumeetu Saikat</p>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;