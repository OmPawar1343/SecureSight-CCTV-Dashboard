import React, { useEffect, useState } from 'react';

interface IncidentPlayerProps {
  videoUrls: string[]; // array of incident types or video paths
}

const videoMap: { [key: string]: string } = {
  'Face Recognised': '/cam1.mp4',
  'Gun Threat': '/cam2.mp4',
  'Unauthorised Access': '/cam3.gif',
};

export default function IncidentPlayer({ videoUrls }: IncidentPlayerProps) {
  const [mainVideo, setMainVideo] = useState<string>("");

  useEffect(() => {
    if (videoUrls.length > 0) {
      setMainVideo(videoUrls[0]);
    }
  }, [videoUrls]);

  const getVideoSrc = (key: string) => videoMap[key] || key;

  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
      <div className="w-full h-64 bg-gray-200 flex items-center justify-center mb-4 rounded overflow-hidden">
        {mainVideo ? (
          <video
            src={getVideoSrc(mainVideo)}
            controls
            className="object-cover h-full w-full"
          />
        ) : (
          <p className="text-gray-500">No video available</p>
        )}
      </div>
      <div className="flex gap-2 overflow-x-auto">
        {videoUrls.map((src, idx) => (
          <video
            key={`${src}-${idx}`}
            src={getVideoSrc(src)}
            controls
            onClick={() => setMainVideo(src)}
            className={`w-16 h-16 object-cover rounded border cursor-pointer ${
              mainVideo === src ? 'ring-2 ring-blue-500' : ''
            }`}
          />
        ))}
      </div>
    </div>
  );
}
