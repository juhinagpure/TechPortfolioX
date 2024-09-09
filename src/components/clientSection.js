import React from 'react';
import '../styles/clientSection.css';

const importImage = (imageName) => {
  try {
    return require(`../assets/images/${imageName}`);
  } catch (error) {
    console.warn(`Image not found: ${imageName}`);
    return ''; 
  }
};

const clients = [
  { name: 'Suruchi', imageUrl: importImage('suruchi-logo.jpg') },
  { name: 'Alishan', imageUrl: importImage('alishan-logo.jpg') },
  { name: 'Shree Laxmi Venture', imageUrl: importImage('shree-laxmi-logo.jpg') },
  { name: 'minuli Group', imageUrl: importImage('minuli-logo.jpg') },
  { name: 'Credai', imageUrl: importImage('credai-logo.jpg') },
  { name: 'Aura', imageUrl: importImage('aura-logo.jpg') },
  { name: 'Party Studio', imageUrl: importImage('party-studio-logo.jpg') },
  { name: 'RA Architects', imageUrl: importImage('ra-architects-logo.jpg') },
  { name: 'sattva-jivan', imageUrl: importImage('sattva-jivan-logo.jpg') },
  { name: 'Securetech', imageUrl: importImage('securetech-solutions-logo.jpg') },
  { name: 'Shree Shyam Group', imageUrl: importImage('shree-shyam-logo.jpg') },
  { name: 'Vedsons', imageUrl: importImage('vedsons-logo.jpg') },
  { name: 'Property Clinic', imageUrl: importImage('property-clinic-logo.jpg') },
  { name: 'shera-bano-merchant', imageUrl: importImage('shera-bano-merchant-logo.jpg') },
  { name: 'agora', imageUrl: importImage('agora-logo.jpg') },
  { name: 'A.K. Tutorial', imageUrl: importImage('ak-tutorial-logo.jpg') },
  { name: 'AM Studio', imageUrl: importImage('am-studio-logo.jpg') },
  { name: 'annapurna', imageUrl: importImage('annapurna-logo.jpg') },
];



const ClientSection = () => {
  return (
    <section className="client-section">
      <h2>Say Hi To Our Clients</h2>
      <p>
        "We've been honoured to create brands, device products, and launch campaigns
        for many clients whom we call friends. We like them, and they seem to like us back."
      </p>
      <div className="client-grid">
        {clients.map((client, index) => (
          <div key={index} className="client-logo">
            {client.imageUrl && (
              <div className="logo-container">
                <img src={client.imageUrl} alt={`${client.name} logo`} />
              </div>
            )}
          </div>
        ))}
      </div>
      <button className="view-all-btn">VIEW ALL</button>
    </section>
  );
};

export default ClientSection;