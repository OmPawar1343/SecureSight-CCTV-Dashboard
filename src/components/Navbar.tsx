import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between shadow">
      <div className="text-xl font-bold tracking-wide">SecureSight CCTV Dashboard</div>
      <div className="flex gap-4">
        <span className="text-sm">Incidents</span>
        <span className="text-sm">Cameras</span>
      </div>
    </nav>
  );
}
