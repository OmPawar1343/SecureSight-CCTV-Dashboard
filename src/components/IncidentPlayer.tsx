import React, { useState } from 'react';

interface IncidentPlayerProps {
  videoUrls: string[];
}

export default function IncidentPlayer({ videoUrls }: IncidentPlayerProps) {
  const [mainVideo, setMainVideo] = useState(videoUrls[0] || "");

  React.useEffect(() => {
    setMainVideo(videoUrls[0] || "");
  }, [videoUrls]);

  const videoMap: { [key: string]: string } = {
    'Face Recognised': '/cam1.mp4',
    'Gun Threat': '/cam2.mp4',
    'Unauthorised Access': '/cam3.gif',
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
      <div className="w-full h-64 bg-gray-200 flex items-center justify-center mb-4">
        {mainVideo && (
          <video
            src={videoMap[mainVideo] || mainVideo}
            controls
            className="object-cover h-full w-full rounded"
          />
        )}
      </div>
      <div className="flex gap-2">
        {videoUrls.map((src, idx) => (
          <video
            key={src + '-' + idx}
            src={videoMap[src] || src}
            controls
            className={`w-16 h-16 object-cover rounded border cursor-pointer ${mainVideo === src ? 'ring-2 ring-blue-500' : ''}`}
            onClick={() => setMainVideo(src)}
          />
        ))}
      </div>
    </div>
  );
}