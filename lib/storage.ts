
export interface InquiryData {
  id: string;
  name: string;
  organization: string;
  email: string;
  type: string;
  message: string;
  timestamp: string;
  status: 'new' | 'processed';
  backendAnalysis?: {
    department: string;
    priority: string;
    estimatedResponse: string;
    summary: string;
  };
}

export interface GalleryImage {
  id: number;
  url: string;
  category: string;
  caption: string;
}

const DB_KEY = 'corebit_consulting_db_v1';
const GALLERY_DB_KEY = 'corebit_gallery_db_v1';

const DEFAULT_GALLERY: GalleryImage[] = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    category: "Team",
    caption: "Strategic Planning Session"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    category: "Workspace",
    caption: "Lagos HQ Interior"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop",
    category: "Events",
    caption: "Client Workshop 2024"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
    category: "Workspace",
    caption: "Data Analytics Hub"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
    category: "Team",
    caption: "Executive Training"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop",
    category: "Events",
    caption: "Annual Tech Summit"
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1504384308090-c54be3855833?q=80&w=1974&auto=format&fit=crop",
    category: "Workspace",
    caption: "Abuja Office"
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    category: "Team",
    caption: "Project Review"
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop",
    category: "Events",
    caption: "Networking Night"
  }
];

export const db = {
  saveInquiry: (data: Omit<InquiryData, 'id' | 'timestamp' | 'status'>): InquiryData => {
    const existing = db.getAllInquiries();
    
    const newRecord: InquiryData = {
      ...data,
      id: `TKT-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`,
      timestamp: new Date().toISOString(),
      status: 'new'
    };

    const updated = [newRecord, ...existing];
    localStorage.setItem(DB_KEY, JSON.stringify(updated));
    return newRecord;
  },

  getAllInquiries: (): InquiryData[] => {
    try {
      const item = localStorage.getItem(DB_KEY);
      return item ? JSON.parse(item) : [];
    } catch (e) {
      console.error("Database error", e);
      return [];
    }
  },

  getGalleryImages: (): GalleryImage[] => {
    try {
      const item = localStorage.getItem(GALLERY_DB_KEY);
      if (!item) {
        // Initialize with default data if empty
        localStorage.setItem(GALLERY_DB_KEY, JSON.stringify(DEFAULT_GALLERY));
        return DEFAULT_GALLERY;
      }
      return JSON.parse(item);
    } catch (e) {
      console.error("Gallery Database error", e);
      return DEFAULT_GALLERY;
    }
  },

  addGalleryImage: (image: Omit<GalleryImage, 'id'>): GalleryImage => {
    const images = db.getGalleryImages();
    // Generate simple ID
    const newId = images.length > 0 ? Math.max(...images.map(i => i.id)) + 1 : 1;
    
    const newImage: GalleryImage = {
      ...image,
      id: newId
    };

    const updated = [newImage, ...images]; // Add to top
    localStorage.setItem(GALLERY_DB_KEY, JSON.stringify(updated));
    return newImage;
  },

  deleteGalleryImage: (id: number): void => {
    const images = db.getGalleryImages();
    const updated = images.filter(img => img.id !== id);
    localStorage.setItem(GALLERY_DB_KEY, JSON.stringify(updated));
  }
};