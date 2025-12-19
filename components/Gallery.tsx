import React, { useState, useEffect } from 'react';
import { Section } from './ui/Section';
import { X, ZoomIn } from 'lucide-react';
import { db, GalleryImage } from '../lib/storage';

const categories = ["All", "Team", "Workspace", "Events"];

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [images, setImages] = useState<GalleryImage[]>([]);

  useEffect(() => {
    // Fetch images from storage on mount
    const storedImages = db.getGalleryImages();
    setImages(storedImages);
  }, []);

  const filteredImages = activeCategory === "All" 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <Section id="gallery" className="bg-slate-50 dark:bg-slate-900 scroll-mt-20">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Our Culture in Action</h2>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          A glimpse into the environment where innovation happens. From our state-of-the-art facilities to the people driving change.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
              activeCategory === category
                ? 'bg-brand-primary border-brand-primary text-white shadow-lg scale-105'
                : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((img) => (
          <div 
            key={img.id} 
            className="group relative aspect-video overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 bg-slate-200 dark:bg-slate-800"
            onClick={() => setSelectedImage(img)}
          >
            <img 
              src={img.url} 
              alt={img.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-2 py-1 mb-2 text-[10px] font-bold uppercase tracking-wider text-white bg-brand-primary rounded-md">
                  {img.category}
                </span>
                <p className="text-white font-semibold text-lg">
                  {img.caption}
                </p>
                <div className="flex items-center text-slate-300 text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                  <ZoomIn className="w-4 h-4 mr-1" /> Click to expand
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/95 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 p-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors z-50 focus:outline-none"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          
          <div 
            className="max-w-6xl w-full max-h-[90vh] relative rounded-lg overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex-grow overflow-hidden flex items-center justify-center bg-black">
                <img 
                src={selectedImage.url} 
                alt={selectedImage.caption}
                className="max-w-full max-h-[85vh] object-contain"
                />
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
              <div>
                <span className="text-brand-primary text-xs font-bold uppercase tracking-wider mb-1 block">
                    {selectedImage.category}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{selectedImage.caption}</h3>
              </div>
              <button 
                onClick={() => setSelectedImage(null)}
                className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg text-sm font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};