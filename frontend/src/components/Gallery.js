import React, { useState } from 'react';

const RYAN_EXPRESSIONS = [
  './images/ryan_avatar/ryan_final_draft_neutral.png',
  './images/ryan_avatar/ryan_final_draft_happy.png',
  './images/ryan_avatar/ryan_final_draft_surprised_dot_eyes.png',
  './images/ryan_avatar/ryan_final_draft_sad.png',
  './images/ryan_avatar/ryan_final_draft_agitated_without_vein.png',
  './images/ryan_avatar/ryan_final_draft_agitated_with_vein.png',
  './images/ryan_avatar/ryan_final_draft_anger_without_vein.png',
  './images/ryan_avatar/ryan_final_draft_anger_with_vein.png'
];

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [isFlipping, setIsFlipping] = useState(false);
  const [expressionIndex, setExpressionIndex] = useState(0);

  const handleImageClick = () => {
    if (selectedImg.id === 4 && !isFlipping) {
        setIsFlipping(true);
        
        // Total animation time is 0.15s * 3 = 450ms
        // We change the face right before the final flip finishes
        setTimeout(() => {
        setExpressionIndex((prevIndex) => (prevIndex + 1) % RYAN_EXPRESSIONS.length);
        }, 350); 

        // Stop the flipping state after 450ms
        setTimeout(() => {
        setIsFlipping(false);
        }, 450);
    }
  };

    // This ensures the X button and clicking the overlay reset him
    const handleClose = () => {
    setSelectedImg(null);
    setExpressionIndex(0); // Back to neutral
    };
  
  const photos = [
    { id: 1, src: 'https://picsum.photos/id/1/800/600', alt: 'Project Alpha', desc: 'A deep dive into backend architecture and database schema design.' },
    { id: 2, src: 'https://picsum.photos/id/2/800/600', alt: 'UI Exploration', desc: 'Experimenting with minimalist aesthetics and user-centric navigation.' },
    { id: 3, src: 'https://picsum.photos/id/3/800/600', alt: 'System Design', desc: 'Mapping out the flow between React components and Flask endpoints.' },
    { 
      id: 4, 
      // FIXED PATH HERE
      src: './images/ryan_avatar/ryan_final_draft_neutral.png', 
      alt: 'Original Drawing', 
      desc: 'A hand-drawn character design. (Click the image to see a surprise!)',
      isDrawing: true 
    },
  ];

  return (
    <section id="gallery">
      <h2>Gallery</h2>
      <div className="gallery-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '15px' }}>
        {photos.map(photo => (
        <div key={photo.id} className="card gallery-item" onClick={() => setSelectedImg(photo)}>
            <div className="image-container">
            <img src={photo.src} alt={photo.alt} />
            </div>
            <div className="card-footer">
            <p className="view-details-text">VIEW_DETAILS</p>
            </div>
        </div>
        ))}
      </div>

      {selectedImg && (
        /* 1. Clicking the dark background now calls handleClose */
        <div className="modal-overlay" onClick={handleClose}>
            
            <div className="window-box" onClick={(e) => e.stopPropagation()}>
            <div className="window-header">
                <span className="window-title">DRAWING_INSPECTOR.EXE</span>
                
                {/* 2. The X button now calls handleClose */}
                <button className="window-close" onClick={handleClose}>X</button>
            </div>
            
            <div className="window-body">
                <img 
                src={selectedImg.id === 4 ? RYAN_EXPRESSIONS[expressionIndex] : selectedImg.src} 
                alt={selectedImg.alt} 
                className={`modal-img ${isFlipping ? 'pixel-flip' : ''}`}
                onClick={handleImageClick}
                />
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