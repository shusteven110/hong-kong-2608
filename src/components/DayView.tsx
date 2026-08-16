import React from 'react';
import { Day } from '../types';
import { TimelineItem } from './TimelineItem';
import { Calendar } from 'lucide-react';

interface DayViewProps {
  day: Day;
  index: number;
}

export const DayView: React.FC<DayViewProps> = ({ day, index }) => {
  return (
    <div id={`day-${index + 1}`} className="mb-4 sm:mb-8 last:mb-0 scroll-mt-52 sm:scroll-mt-40">
      <div className="py-2 sm:py-3 border-b border-slate-200/60 mb-2 sm:mb-4 bg-slate-50/80 rounded-xl px-2 sm:px-3">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-orange-100 to-rose-100 text-orange-600 shadow-2xs sm:shadow-sm flex-shrink-0">
            <span className="font-bold text-xs sm:text-lg">D{index + 1}</span>
          </div>
          <div>
            <h2 className="text-sm sm:text-lg font-bold text-slate-800 flex items-center gap-1.5 sm:gap-2">
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-500" />
              {day.date}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">{day.title}</p>
          </div>
        </div>
      </div>
      
      <div className="relative">
        {day.activities.map((activity, i) => (
          <TimelineItem 
            key={i} 
            activity={activity} 
            isLast={i === day.activities.length - 1} 
          />
        ))}
      </div>
    </div>
  );
};
