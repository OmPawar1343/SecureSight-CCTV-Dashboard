import React from 'react';

interface Incident {
  id: number;
  type: 'Gun Threat' | 'Unauthorised Access' | 'Face Recognised' | string;
  resolved: boolean;
  thumbnailUrl: string;
  tsStart: string | number | Date;
  tsEnd: string | number | Date;
  camera: {
    location: string;
  };
}

interface IncidentListProps {
  incidents: Incident[];
  onResolve: (id: number) => void;
}

export default function IncidentList({ incidents, onResolve }: IncidentListProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-lg font-semibold mb-4">Incident List</h2>
      <ul className="space-y-4">
        {incidents.map((incident) => (
          <li
            key={incident.id}
            className={`flex items-center gap-4 p-2 rounded transition-opacity ${
              incident.resolved ? 'opacity-50' : ''
            }`}
          >
            <img
              src={incident.thumbnailUrl}
              alt="Thumbnail"
              className="w-16 h-16 object-cover rounded border"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span
                  className={`inline-block w-3 h-3 rounded-full ${
                    incident.type === 'Gun Threat'
                      ? 'bg-red-500'
                      : incident.type === 'Unauthorised Access'
                      ? 'bg-yellow-500'
                      : incident.type === 'Face Recognised'
                      ? 'bg-green-500'
                      : 'bg-blue-500'
                  }`}
                ></span>
                <span className="font-bold">
                  {incident.type === 'Face Recognised' && <span className="mr-1">👤</span>}
                  {incident.type}
                </span>
              </div>
              <div className="text-sm text-gray-600">{incident.camera.location}</div>
              <div className="text-xs text-gray-400">
                {new Date(incident.tsStart).toLocaleTimeString()} -{' '}
                {new Date(incident.tsEnd).toLocaleTimeString()}
              </div>
            </div>
            {!incident.resolved && (
              <button
                onClick={() => onResolve(incident.id)}
                className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
              >
                Resolve
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
