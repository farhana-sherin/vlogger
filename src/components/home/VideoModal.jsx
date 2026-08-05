import React from 'react';
import { Play, X } from 'lucide-react';

export default function VideoModal({ video, onClose }) {
  if (!video) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#FFFFFF] text-[#1A1A1A] max-w-2xl w-full rounded-lg overflow-hidden border border-[#EEEEEE] flex flex-col">
        <div className="flex justify-between items-center p-4 border-b border-[#EEEEEE] bg-[#F8F9FA]">
          <span className="text-xs font-semibold text-[#666666] uppercase tracking-wider">
            {video.category}
          </span>
          <button
            onClick={onClose}
            className="p-1 hover:bg-[#EEEEEE] rounded text-[#1A1A1A] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="bg-[#1A1A1A] aspect-[16/9] w-full flex items-center justify-center text-white relative">
          <div className="text-center p-6">
            <Play className="w-16 h-16 mx-auto mb-3 text-white opacity-80" />
            <p className="text-sm font-semibold">{video.title}</p>
            <p className="text-xs text-gray-400 mt-1">Simulated Video Stream Viewport • Foodie World</p>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{video.title}</h3>
          <p className="text-sm text-[#4A4A4A] mb-4">{video.desc}</p>
          <div className="flex items-center justify-between text-xs text-[#666666] border-t border-[#EEEEEE] pt-4">
            <div>Location: <strong>{video.location}</strong></div>
            <div>Rating: <strong>⭐ {video.rating}</strong></div>
            <div>Views: <strong>{video.views}</strong></div>
          </div>
        </div>
      </div>
    </div>
  );
}
