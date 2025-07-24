import React from 'react';

interface Incident {
  id: number;
  type: string;
  location: string;
  time: string;
  resolved: boolean;
  thumbnailUrl: string;
}

interface IncidentSidebarProps {
  incidents: Incident[];
  onResolve: (id: number) => void;
}

export default function IncidentSidebar({ incidents, onResolve }: IncidentSidebarProps) {
  const thumbnailMap: { [key: string]: string } = {
    'Face Recognised': '/thumbnail1.png',
    'Gun Threat': '/thumbnail2.png',
    'Unauthorised Access': '/thumbnail3.png',
  };

  return (
    <div className="w-full bg-secondary p-6 flex flex-col gap-4 border-l border-gold overflow-y-auto max-h-[500px]">
      <span className="text-gold font-semibold text-lg mb-2">Incident List</span>
      {incidents.map((incident) => (
        <div key={incident.id} className="flex items-center justify-between bg-main p-4 rounded-lg shadow mb-2">
          <div className="flex items-center gap-4">
            <img
              src={thumbnailMap[incident.type]}
              alt={`Thumbnail for ${incident.type}`}
              className="w-12 h-12 object-cover rounded"
            />
            <div>
              <div className="text-danger">{incident.type}</div>
              <div className="text-muted text-sm">{incident.location}</div>
              <div className="text-muted text-sm">{incident.time}</div>
            </div>
          </div>
          <button
            onClick={() => onResolve(incident.id)}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Resolve
          </button>
        </div>
      ))}
    </div>
  );
} 