import React from 'react';
import type { Tab } from '../App';

interface BottomNavBarProps {
    activeTab: Tab;
    setActiveTab: (tab: Tab) => void;
    onMenuClick: () => void;
}

const NavItem: React.FC<{
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
            className={`flex flex-col items-center justify-center w-full transition-colors duration-200 ${
                isActive ? 'text-purple-400' : 'text-gray-400 hover:text-white'
            }`}
        >
            <i className={`ph-bold ${icon} text-2xl`}></i>
            <span className="text-xs font-medium mt-1">{label}</span>
        </button>
    );
};

const BottomNavBar: React.FC<BottomNavBarProps> = ({ activeTab, setActiveTab, onMenuClick }) => {
    const navLinks = [
        { tabName: 'home', icon: 'ph-house', label: 'Home' },
        { tabName: 'resume', icon: 'ph-identification-card', label: 'Resume' },
        { tabName: 'projects', icon: 'ph-kanban', label: 'Projects' },
        { tabName: 'contact', icon: 'ph-paper-plane-tilt', label: 'Contact' },
    ] as const;

    return (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-slate-900/80 backdrop-blur-md border-t border-slate-800/50 z-50 flex items-center justify-around">
            {navLinks.map((link) => (
                <NavItem
                    key={link.tabName}
                    {...link}
                    activeTab={activeTab}
                    onClick={setActiveTab}
                />
            ))}
            <button
                onClick={onMenuClick}
                className="flex flex-col items-center justify-center w-full text-gray-400 hover:text-white transition-colors duration-200"
            >
                <i className="ph-bold ph-list text-2xl"></i>
                <span className="text-xs font-medium mt-1">Menu</span>
            </button>
        </nav>
    );
};

export default BottomNavBar;