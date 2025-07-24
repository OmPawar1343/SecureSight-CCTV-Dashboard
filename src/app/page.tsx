
"use client";
import Navbar from '@/components/Navbar';
import IncidentPlayer from '@/components/IncidentPlayer';
import IncidentSidebar from '@/components/IncidentSidebar';
import { useEffect, useState } from 'react';

// Define the Incident type
interface Incident {
  id: number;
  type: string;
  location: string;
  tsStart: string;
  tsEnd: string;
  thumbnailUrl: string;
  resolved: boolean;
  time: string;
  cameraId: number; // Add this line
}

export default function Home() {
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [mainVideo, setMainVideo] = useState('/cam1.mp4');

  useEffect(() => {
    fetch('/api/incidents?resolved=false')
      .then((res) => res.json())
      .then((data) => {
        setIncidents(data);
      });
  }, []);

  const handleResolve = async (id: number) => {
    setIncidents((prev) => prev.map((i) => i.id === id ? { ...i, resolved: true } : i));
    await fetch(`/api/incidents/${id}/resolve`, { method: 'PATCH' });
  };

  const handleCameraClick = (cameraId: number) => {
    const videoMap: { [key: number]: string } = {
      1: '/cam1.mp4',
      2: '/cam2.mp4',
      3: '/cam3.gif',
    };
    setMainVideo(videoMap[cameraId]);
  };

  return (
    <div className="min-h-screen bg-main text-white flex flex-col">
      <Navbar />
      <div className="flex flex-1 flex-col md:flex-row overflow-hidden">
        <div className="flex flex-col flex-1 bg-main p-4 md:p-6 gap-4 overflow-hidden">
          <div className="flex-1 flex items-center justify-center">
            <IncidentPlayer videoUrls={[mainVideo]} />
          </div>
          <div className="bg-secondary rounded-lg shadow p-4 min-h-[120px] text-white">
            <span className="text-muted">Timeline</span>
            <div className="flex justify-between mt-2">
              <div className="flex flex-col">
                <div className="flex justify-between">
                  {[...Array(24).keys()].map(hour => (
                    <div key={hour} className="flex-1 text-center" style={{ minWidth: '50px' }}>
                      {hour}:00
                    </div>
                  ))}
                </div>
                <div className="flex flex-col mt-2">
                  {['Camera 01', 'Camera 02', 'Camera 03'].map((camera, idx) => (
                    <div key={camera} className="flex items-center gap-2 cursor-pointer" onClick={() => handleCameraClick(idx + 1)}>
                      <span className="text-sm">{camera}</span>
                      <div className="flex-1 bg-gray-700 h-1 relative">
                        {incidents.filter(i => i.cameraId === idx + 1).map(incident => (
                          <div
                            key={incident.id}
                            className="absolute bg-red-500 h-3 w-3 rounded-full"
                            style={{ left: `${(new Date(incident.tsStart).getHours() / 24) * 100}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[400px] bg-secondary p-4 md:p-6 flex flex-col gap-4 border-t md:border-t-0 md:border-l border-gold overflow-y-auto max-h-[500px]">
          <IncidentSidebar incidents={incidents} onResolve={handleResolve} />
        </div>
      </div>
    </div>
  );
}
