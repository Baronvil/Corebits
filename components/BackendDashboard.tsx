import React, { useEffect, useState } from 'react';
import { db, InquiryData, GalleryImage } from '../lib/storage';
import { 
  LayoutDashboard, 
  RefreshCw, 
  Search, 
  MoreHorizontal,
  Clock,
  Building2,
  User,
  AlertTriangle,
  Lock,
  ArrowRight,
  ShieldAlert,
  Image as ImageIcon,
  Trash2,
  Plus,
  Upload
} from 'lucide-react';

export const BackendDashboard: React.FC = () => {
  // Auth State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState(false);

  // View State
  const [activeTab, setActiveTab] = useState<'inquiries' | 'gallery'>('inquiries');

  // Dashboard Data State
  const [inquiries, setInquiries] = useState<InquiryData[]>([]);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Upload State
  const [newImageCaption, setNewImageCaption] = useState('');
  const [newImageCategory, setNewImageCategory] = useState('Workspace');
  const [newImagePreview, setNewImagePreview] = useState<string | null>(null);

  const loadData = () => {
    setIsLoading(true);
    // Simulate a quick fetch
    setTimeout(() => {
        setInquiries(db.getAllInquiries());
        setGalleryImages(db.getGalleryImages());
        setIsLoading(false);
    }, 500);
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadData();
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === '6969') {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
      setPasscode('');
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const saveNewImage = () => {
    if (newImagePreview && newImageCaption) {
      db.addGalleryImage({
        url: newImagePreview,
        caption: newImageCaption,
        category: newImageCategory
      });
      // Reset form
      setNewImagePreview(null);
      setNewImageCaption('');
      setNewImageCategory('Workspace');
      // Refresh list
      setGalleryImages(db.getGalleryImages());
    }
  };

  const handleDeleteImage = (id: number) => {
    if (confirm('Are you sure you want to delete this image?')) {
      db.deleteGalleryImage(id);
      setGalleryImages(db.getGalleryImages());
    }
  };

  const getPriorityColor = (p?: string) => {
    switch(p?.toLowerCase()) {
      case 'high': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border-red-200 dark:border-red-800';
      case 'medium': return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border-amber-200 dark:border-amber-800';
      default: return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800';
    }
  };

  // Render Login Screen if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center p-4 transition-colors duration-300">
        <div className="max-w-md w-full bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-8 animate-in fade-in zoom-in duration-300">
          <div className="text-center mb-8">
            <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300 ${error ? 'bg-red-100 dark:bg-red-900/20 text-red-600' : 'bg-indigo-100 dark:bg-indigo-900/20 text-indigo-600'}`}>
              {error ? <ShieldAlert className="w-10 h-10" /> : <Lock className="w-10 h-10" />}
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Restricted Access</h2>
            <p className="text-slate-500 dark:text-slate-400">
              {error ? "Authentication Failed. Try again." : "Enter authorized personnel passcode to view backend systems."}
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <input 
                type="password" 
                value={passcode}
                onChange={(e) => {
                  setPasscode(e.target.value);
                  setError(false);
                }}
                className={`w-full px-4 py-4 rounded-xl border-2 bg-slate-50 dark:bg-slate-800 focus:outline-none text-center text-3xl tracking-[0.5em] font-mono text-slate-900 dark:text-white transition-all duration-300 ${
                  error 
                    ? 'border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/10' 
                    : 'border-slate-200 dark:border-slate-700 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10'
                }`}
                placeholder="••••"
                maxLength={4}
                autoFocus
              />
            </div>
            <button 
              type="submit"
              className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-lg flex items-center justify-center transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-indigo-600/20"
            >
              Authenticate System <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </form>
          
          <div className="mt-8 text-center">
            <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">
              Corebit Secure Environment v1.0
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Render Dashboard if authenticated
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300 animate-in fade-in duration-500">
      {/* Top Navigation Bar */}
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <LayoutDashboard className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight">Corebit<span className="text-indigo-500">Admin</span></span>
          </div>
          <div className="flex items-center gap-4">
            <button 
                onClick={loadData}
                className={`p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all ${isLoading ? 'animate-spin' : ''}`}
                title="Refresh Data"
            >
                <RefreshCw className="w-5 h-5 text-slate-500" />
            </button>
            <div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center border border-slate-300 dark:border-slate-700 relative">
                <User className="w-4 h-4 text-slate-500" />
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full"></div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-slate-100 dark:bg-slate-800/50 p-1 rounded-xl mb-8 max-w-md">
          <button
            onClick={() => setActiveTab('inquiries')}
            className={`flex-1 flex items-center justify-center py-2 text-sm font-semibold rounded-lg transition-all ${
              activeTab === 'inquiries' 
                ? 'bg-white dark:bg-slate-800 text-indigo-600 shadow-sm' 
                : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
            }`}
          >
            <LayoutDashboard className="w-4 h-4 mr-2" /> Inquiries
          </button>
          <button
            onClick={() => setActiveTab('gallery')}
            className={`flex-1 flex items-center justify-center py-2 text-sm font-semibold rounded-lg transition-all ${
              activeTab === 'gallery' 
                ? 'bg-white dark:bg-slate-800 text-indigo-600 shadow-sm' 
                : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
            }`}
          >
            <ImageIcon className="w-4 h-4 mr-2" /> Gallery Manager
          </button>
        </div>

        {activeTab === 'inquiries' ? (
          <>
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Total Inquiries</div>
                    <div className="text-3xl font-bold">{inquiries.length}</div>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">High Priority</div>
                    <div className="text-3xl font-bold text-red-600 dark:text-red-400">
                        {inquiries.filter(i => i.backendAnalysis?.priority === 'High').length}
                    </div>
                </div>
                 <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Pending Review</div>
                    <div className="text-3xl font-bold text-amber-600 dark:text-amber-400">
                        {inquiries.filter(i => i.status === 'new').length}
                    </div>
                </div>
            </div>

            {/* Data Table */}
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <h2 className="text-lg font-bold">Inquiry Management</h2>
                    <div className="flex gap-2">
                        <div className="relative">
                            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input 
                                type="text" 
                                placeholder="Search tickets..." 
                                className="pl-9 pr-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-slate-50 dark:bg-slate-950/50 text-slate-500 dark:text-slate-400 font-medium">
                            <tr>
                                <th className="px-6 py-4">Ticket ID</th>
                                <th className="px-6 py-4">Client</th>
                                <th className="px-6 py-4">AI Analysis</th>
                                <th className="px-6 py-4">Summary</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                            {inquiries.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="px-6 py-12 text-center text-slate-500">
                                        <div className="flex flex-col items-center gap-2">
                                            <AlertTriangle className="w-8 h-8 text-slate-300 mb-2" />
                                            <p>No inquiries found.</p>
                                            <p className="text-xs">Submit a form on the frontend to populate data.</p>
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                inquiries.map((inquiry) => (
                                    <tr key={inquiry.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                                        <td className="px-6 py-4 font-mono text-slate-500 text-xs">#{inquiry.id}</td>
                                        <td className="px-6 py-4">
                                            <div className="font-semibold text-slate-900 dark:text-white">{inquiry.name}</div>
                                            <div className="text-slate-500 text-xs">{inquiry.organization}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col gap-1 items-start">
                                                <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase border ${getPriorityColor(inquiry.backendAnalysis?.priority)}`}>
                                                    {inquiry.backendAnalysis?.priority} Priority
                                                </span>
                                                <span className="text-xs text-slate-600 dark:text-slate-300 flex items-center gap-1">
                                                    <Building2 className="w-3 h-3" /> {inquiry.backendAnalysis?.department}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 max-w-xs">
                                            <p className="truncate text-slate-600 dark:text-slate-400" title={inquiry.backendAnalysis?.summary}>
                                                {inquiry.backendAnalysis?.summary || inquiry.message}
                                            </p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                                                <Clock className="w-3 h-3" />
                                                {new Date(inquiry.timestamp).toLocaleDateString()}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="text-slate-400 hover:text-indigo-600 transition-colors">
                                                <MoreHorizontal className="w-5 h-5" />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
          </>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Upload Section */}
            <div className="lg:col-span-1">
               <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm sticky top-24">
                  <h3 className="text-lg font-bold mb-4 flex items-center">
                    <Plus className="w-5 h-5 mr-2 text-indigo-600" /> Add New Photo
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="relative aspect-video bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden border-2 border-dashed border-slate-300 dark:border-slate-700 flex flex-col items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                       {newImagePreview ? (
                         <img src={newImagePreview} alt="Preview" className="w-full h-full object-cover" />
                       ) : (
                         <div className="text-center p-4">
                           <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                           <p className="text-xs text-slate-500">Click to upload image</p>
                         </div>
                       )}
                       <input 
                         type="file" 
                         accept="image/*"
                         onChange={handleImageUpload}
                         className="absolute inset-0 opacity-0 cursor-pointer"
                       />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1 block">Caption</label>
                      <input 
                        type="text" 
                        value={newImageCaption}
                        onChange={(e) => setNewImageCaption(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                        placeholder="e.g. Annual Meeting"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1 block">Category</label>
                      <select 
                        value={newImageCategory}
                        onChange={(e) => setNewImageCategory(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                      >
                        <option>Team</option>
                        <option>Workspace</option>
                        <option>Events</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <button 
                      onClick={saveNewImage}
                      disabled={!newImagePreview || !newImageCaption}
                      className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg font-bold text-sm transition-all shadow-lg"
                    >
                      Upload to Gallery
                    </button>
                  </div>
               </div>
            </div>

            {/* Gallery Grid */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800">
                   <h3 className="font-bold">Active Photos ({galleryImages.length})</h3>
                </div>
                <div className="p-6 grid grid-cols-2 gap-4">
                  {galleryImages.map(img => (
                    <div key={img.id} className="group relative aspect-video bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700">
                       <img src={img.url} alt={img.caption} className="w-full h-full object-cover" />
                       <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3">
                          <div className="flex justify-between items-start">
                             <span className="text-[10px] font-bold bg-white/20 text-white px-2 py-0.5 rounded backdrop-blur-sm">{img.category}</span>
                             <button 
                               onClick={() => handleDeleteImage(img.id)}
                               className="p-1.5 bg-red-500/80 text-white rounded-full hover:bg-red-600 transition-colors"
                             >
                               <Trash2 className="w-4 h-4" />
                             </button>
                          </div>
                          <p className="text-white text-xs font-medium truncate">{img.caption}</p>
                       </div>
                    </div>
                  ))}
                  {galleryImages.length === 0 && (
                     <div className="col-span-2 py-12 text-center text-slate-400">
                       <ImageIcon className="w-12 h-12 mx-auto mb-3 opacity-20" />
                       <p>No images in gallery.</p>
                     </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};