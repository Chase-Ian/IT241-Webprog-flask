import React, { useState } from 'react';

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const photos = [
    { id: 1, src: 'https://picsum.photos/id/1/800/600', alt: 'Project Alpha', desc: 'A deep dive into backend architecture and database schema design.' },
    { id: 2, src: 'https://picsum.photos/id/2/800/600', alt: 'UI Exploration', desc: 'Experimenting with minimalist aesthetics and user-centric navigation.' },
    { id: 3, src: 'https://picsum.photos/id/3/800/600', alt: 'System Design', desc: 'Mapping out the flow between React components and Flask endpoints.' },

  ];

  return (
    <section id="gallery">
      <h2>Gallery</h2>
      <div className="gallery-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '15px' }}>
        {photos.map(photo => (
          <div key={photo.id} className="card" onClick={() => setSelectedImg(photo)} style={{ cursor: 'pointer', padding: '10px' }}>
            <img src={photo.src} alt={photo.alt} style={{ width: '100%', display: 'block', border: '2px solid #000' }} />
            <p style={{ marginTop: '8px', fontSize: '10px', textAlign: 'center', fontFamily: "'Press Start 2P'" }}>VIEW_DETAILS</p>
          </div>
        ))}
      </div>

      {/* --- The Modal Overlay --- */}
        {selectedImg && (
        <div className="modal-overlay" onClick={() => setSelectedImg(null)}>
            <div className="window-box" onClick={(e) => e.stopPropagation()}>
            {/* Title Bar */}
            <div className="window-header">
                <span className="window-title">IMAGE_INSPECTOR.EXE</span>
                <button className="window-close" onClick={() => setSelectedImg(null)}>X</button>
            </div>
            
            {/* Window Content */}
            <div className="window-body">
                <img src={selectedImg.src} alt={selectedImg.alt} className="modal-img" />
                <div className="modal-text">
                <h3>{selectedImg.alt}</h3>
                <p>{selectedImg.desc}</p>
                </div>
            </div>
            </div>
        </div>
        )}
    </section>
  );
};

export default Gallery;