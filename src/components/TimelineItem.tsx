import React from 'react';
import { Plane, Train, Utensils, Hotel, ShoppingBag, Map, Camera, Navigation, Coffee, Bed, Bus, Ship, Ticket, MapPin, ExternalLink } from 'lucide-react';
import { Activity } from '../types';

interface TimelineItemProps {
  activity: Activity;
  isLast?: boolean;
}

const getIcon = (type: Activity['type']) => {
  switch (type) {
    case 'transport':
      return <Navigation className="w-5 h-5" />;
    case 'activity':
      return <Camera className="w-5 h-5" />;
    case 'food':
      return <Utensils className="w-5 h-5" />;
    case 'accommodation':
      return <Hotel className="w-5 h-5" />;
    case 'shopping':
      return <ShoppingBag className="w-5 h-5" />;
    default:
      return <Map className="w-5 h-5" />;
  }
};

const getColorClass = (type: Activity['type']) => {
  switch (type) {
    case 'transport':
      return 'bg-blue-100 text-blue-600 border-blue-200';
    case 'activity':
      return 'bg-emerald-100 text-emerald-600 border-emerald-200';
    case 'food':
      return 'bg-amber-100 text-amber-600 border-amber-200';
    case 'accommodation':
      return 'bg-indigo-100 text-indigo-600 border-indigo-200';
    case 'shopping':
      return 'bg-rose-100 text-rose-600 border-rose-200';
    default:
      return 'bg-gray-100 text-gray-600 border-gray-200';
  }
};

export const TimelineItem: React.FC<TimelineItemProps> = ({ activity, isLast }) => {
  const colorClass = getColorClass(activity.type);
  
  return (
    <div className="relative pl-7 sm:pl-28 py-2 sm:py-4 group">
      {/* Timeline vertical line */}
      {!isLast && (
        <div className="absolute left-[10px] sm:left-[95px] top-6 sm:top-8 bottom-[-0.5rem] sm:bottom-[-1rem] w-px bg-slate-200 group-hover:bg-orange-300 transition-colors duration-300" />
      )}
      
      {/* Time tag for Desktop */}
      <div className="hidden sm:block absolute left-0 top-5 w-20 text-right">
        <span className="text-sm font-medium text-slate-500 group-hover:text-orange-600 transition-colors">{activity.time}</span>
      </div>

      {/* Icon node */}
      <div className={`absolute left-0 sm:left-[84px] top-3.5 sm:top-5 flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full border ${colorClass} bg-white ring-2 sm:ring-4 ring-white z-10 group-hover:scale-110 transition-transform duration-300`}>
        <div className="w-3 h-3 sm:w-3.5 sm:h-3.5">
          {getIcon(activity.type)}
        </div>
      </div>

      {/* Content */}
      <div className="bg-white border border-slate-100 rounded-xl p-2.5 sm:p-4 shadow-2xs sm:shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-default group-hover:border-orange-100">
        {/* Time tag for Mobile */}
        <div className="sm:hidden mb-1 inline-flex items-center px-2 py-0.2 rounded-md text-[11px] font-medium bg-slate-100 text-slate-600 group-hover:bg-orange-50 group-hover:text-orange-700 transition-colors">
          {activity.time}
        </div>
        
        <h4 className="text-sm sm:text-lg font-semibold text-slate-800 mb-0.5 sm:mb-1 group-hover:text-orange-600 transition-colors">{activity.title}</h4>
        
        {activity.description && (
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3 whitespace-pre-line">
            {activity.description}
          </p>
        )}

        {/* Google Maps Location Badges */}
        {activity.locations && activity.locations.length > 0 && (
          <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 border-t border-slate-100">
            {activity.locations.map((loc, i) => (
              <a
                key={i}
                href={loc.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`在 Google 地圖中開啟 ${loc.name}`}
                className="inline-flex items-center gap-1 sm:gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg text-[11px] sm:text-xs font-medium bg-slate-50 text-slate-700 border border-slate-200 hover:bg-orange-50 hover:text-orange-700 hover:border-orange-200 hover:shadow-xs transition-all duration-200 group/loc"
              >
                <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-rose-500 flex-shrink-0 group-hover/loc:scale-110 transition-transform" />
                <span className="truncate max-w-[170px] sm:max-w-xs">{loc.name}</span>
                <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-slate-400 group-hover/loc:text-orange-500 ml-0.5 flex-shrink-0" />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
