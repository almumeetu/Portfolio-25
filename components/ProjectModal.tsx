
import React, { useEffect } from 'react';
import type { Project } from '../types';

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'auto';
        };
    }, [onClose]);

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            <div 
                className="bg-slate-800 rounded-lg shadow-2xl max-w-4xl w-full overflow-hidden relative border border-slate-700 animate-fade-in"
                onClick={(e) => e.stopPropagation()}
            >
                {/* FIX: Removed jsx prop from style tag to resolve TypeScript error. */}
                <style>{`
                    @keyframes fade-in {
                        from { opacity: 0; transform: scale(0.95); }
                        to { opacity: 1; transform: scale(1); }
                    }
                    .animate-fade-in {
                        animation: fade-in 0.3s ease-out forwards;
                    }
                `}</style>

                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10">
                    <i className="ph-bold ph-x text-2xl"></i>
                </button>

                <div className="md:flex">
                    <div className="md:w-1/2">
                        <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="md:w-1/2 p-8 flex flex-col">
                        <h2 className="text-3xl font-bold text-white mb-4">{project.title}</h2>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map(tag => (
                                <span key={tag} className="bg-purple-900/50 text-purple-300 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
                            ))}
                        </div>
                        <p className="text-gray-300 flex-grow mb-6">{project.longDescription}</p>
                        <div className="flex space-x-4 mt-auto">
                            {project.liveUrl && (
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition-all duration-300">
                                    Live Demo
                                </a>
                            )}
                            {project.codeUrl && (
                                <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-6 py-3 bg-slate-700 text-white font-semibold rounded-lg shadow-lg hover:bg-slate-600 transition-all duration-300">
                                    View Code
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;