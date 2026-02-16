import React from 'react';

const Gallery = () => {
  // Array of placeholder images
  const photos = [
    { id: 1, src: 'https://picsum.photos/id/1/400/300', alt: 'Work Setup' },
    { id: 2, src: 'https://picsum.photos/id/2/400/300', alt: 'Development' },
    { id: 3, src: 'https://picsum.photos/id/3/400/300', alt: 'Creativity' },
    { id: 4, src: 'https://picsum.photos/id/4/400/300', alt: 'Technology' },
    { id: 5, src: 'https://picsum.photos/id/5/400/300', alt: 'Learning' },
    { id: 6, src: 'https://picsum.photos/id/6/400/300', alt: 'Collaboration' },
  ];

  return (
    <section id="gallery">
      <h2>Gallery</h2>
      <div className="gallery-grid" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
        gap: '15px' 
      }}>
        {photos.map(photo => (
          <div key={photo.id} className="card" style={{ padding: '10px' }}>
            <img 
              src={photo.src} 
              alt={photo.alt} 
              style={{ 
                width: '100%', 
                display: 'block', 
                border: '2px solid #000',
                imageRendering: 'pixelated' // Optional: gives photos a slightly sharper, "retro" edge
              }} 
            />
            <p style={{ marginTop: '8px', fontSize: '12px', textAlign: 'center' }}>
              {photo.alt}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;