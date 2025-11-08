
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import ProjectModal from './ProjectModal';
import type { Project } from '../types';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12 tracking-tight">{children}</h2>
);

const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => (
    <div 
        className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
        onClick={onClick}
    >
        <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 group-hover:bg-opacity-70 flex flex-col justify-end p-6">
            <h3 className="text-2xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.title}</h3>
            <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{project.description}</p>
        </div>
    </div>
);


const Projects: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [filter, setFilter] = useState('All');

    const tags = ['All', ...Array.from(new Set(PROJECTS.flatMap(p => p.tags)))];

    const filteredProjects = filter === 'All' 
        ? PROJECTS 
        : PROJECTS.filter(p => p.tags.includes(filter));

    return (
        <div className="max-w-7xl mx-auto">
            <SectionTitle>My Work</SectionTitle>
            
            <div className="flex justify-center flex-wrap gap-2 mb-12">
                {tags.map(tag => (
                    <button 
                        key={tag}
                        onClick={() => setFilter(tag)}
                        className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${filter === tag ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-gray-300 hover:bg-slate-700'}`}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {filteredProjects.map(project => (
                    <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
                ))}
            </div>

            {selectedProject && (
                <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
            )}
        </div>
    );
};

export default Projects;