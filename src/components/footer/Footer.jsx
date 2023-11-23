/*eslint-disable*/
import React from 'react';
import './Footer.css'


const sponsors = [
  {
    id: 1,
    name: 'Trutzi',
    logo: process.env.PUBLIC_URL + '/Trutzi.png',
    link: 'https://www.trutzi.ro/',
  },
  {
    id: 2,
    name: 'USV',
    logo: process.env.PUBLIC_URL + '/Sigla-USV-scroll.png',
    link: 'https://www.usv.ro/',
  },
];

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="sponsors-container">
        {sponsors.map((sponsor) => (
          <div key={sponsor.id} className="sponsor-circle">
            <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
              <img src={sponsor.logo} alt={sponsor.name} />
            </a>
          </div>
        ))}
      </div>
    </footer>
  );
};

