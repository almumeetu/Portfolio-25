import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../constants';
import type { GalleryImage } from '../types';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 tracking-tight text-center">{children}</h2>
);

const GalleryModal: React.FC<{ src: string; alt: string; onClose: () => void }> = ({ src, alt, onClose }) => {
    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-[100] p-4 animate-fade-in"
            onClick={onClose}
        >
             <style>{`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-fade-in {
                    animation: fade-in 0.3s ease-out forwards;
                }
            `}</style>
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10">
                <i className="ph-bold ph-x text-3xl"></i>
            </button>
            <img src={src} alt={alt} className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl" />
        </div>
    );
};

// Note: This file is repurposed as the Gallery tab content.
const Gallery: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

    return (
        <div className="max-w-6xl mx-auto">
            <SectionTitle>Gallery</SectionTitle>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {GALLERY_IMAGES.map((image) => (
                    <div 
                        key={image.id}
                        className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer shadow-lg"
                        onClick={() => setSelectedImage(image)}
                    >
                        <img 
                            src={image.src} 
                            alt={image.alt} 
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                            <i className="ph-bold ph-magnifying-glass text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                        </div>
                    </div>
                ))}
            </div>
            {selectedImage && (
                <GalleryModal src={selectedImage.src} alt={selectedImage.alt} onClose={() => setSelectedImage(null)} />
            )}
        </div>
    );
};

export default Gallery;