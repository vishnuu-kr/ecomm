import React from 'react';
import './FoundreePill.css';

export default function FoundreePill() {
  return (
    <div className="foundree-pill-wrapper">
      <a href="https://foundree.dev" target="_blank" rel="noopener noreferrer" className="foundree-pill">
        <span className="foundree-pill-text">Build by Foundree</span>
      </a>
    </div>
  );
}
