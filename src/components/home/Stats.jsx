import React from 'react';
import { STATS_DATA } from '../../constants/data';

export default function Stats() {
  return (
    <section className="bg-white border border-[#EEEEEE] rounded-3xl p-6 lg:p-10 my-10 shadow-sm">
      <div className="flex flex-col sm:flex-row justify-around items-center gap-6 text-center">
        {STATS_DATA.map((stat, idx) => (
          <React.Fragment key={idx}>
            <div className="space-y-1">
              {/* Display Number (Lilita One font) */}
              <div className="font-display text-4xl lg:text-6xl tracking-wide text-[#1A1A1A]">
                {stat.count.slice(0, -1)}<span className="text-[#EA580C]">{stat.count.slice(-1)}</span>
              </div>
              {/* Label (Poppins font) */}
              <div className="font-sans font-semibold text-xs uppercase tracking-[0.2em] text-[#666666]">
                {stat.label}
              </div>
            </div>
            {idx < STATS_DATA.length - 1 && (
              <div className="hidden sm:block w-px h-12 bg-[#EEEEEE]"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
