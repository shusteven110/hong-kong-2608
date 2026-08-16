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
      return 'bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800';
    case 'activity':
      return 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800';
    case 'food':
      return 'bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800';
    case 'accommodation':
      return 'bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800';
    case 'shopping':
      return 'bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-800';
    default:
      return 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-slate-300 border-gray-200 dark:border-slate-700';
  }
};

export const TimelineItem: React.FC<TimelineItemProps> = ({ activity, isLast }) => {
  const colorClass = getColorClass(activity.type);
  
  return (
    <div className="relative pl-7 sm:pl-28 py-2 sm:py-4 group">
      {/* Timeline vertical line */}
      {!isLast && (
        <div className="absolute left-[10px] sm:left-[95px] top-6 sm:top-8 bottom-[-0.5rem] sm:bottom-[-1rem] w-px bg-slate-200 dark:bg-slate-800 group-hover:bg-orange-300 dark:group-hover:bg-orange-600 transition-colors duration-300" />
      )}
      
      {/* Time tag for Desktop */}
      <div className="hidden sm:block absolute left-0 top-5 w-20 text-right">
        <span className="text-sm font-medium text-slate-500 dark:text-slate-400 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">{activity.time}</span>
      </div>

      {/* Icon node */}
      <div className={`absolute left-0 sm:left-[84px] top-3.5 sm:top-5 flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full border ${colorClass} bg-white dark:bg-slate-900 ring-2 sm:ring-4 ring-white dark:ring-slate-900 z-10 group-hover:scale-110 transition-transform duration-300`}>
        <div className="w-3 h-3 sm:w-3.5 sm:h-3.5">
          {getIcon(activity.type)}
        </div>
      </div>

      {/* Content */}
      <div className="bg-white dark:bg-slate-850/90 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-800/80 rounded-xl p-2.5 sm:p-4 shadow-2xs sm:shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-default group-hover:border-orange-200 dark:group-hover:border-slate-700">
        {/* Time tag for Mobile */}
        <div className="sm:hidden mb-1 inline-flex items-center px-2 py-0.2 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-750 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 group-hover:bg-orange-50 dark:group-hover:bg-orange-950/40 group-hover:text-orange-700 dark:group-hover:text-orange-300 transition-colors">
          {activity.time}
        </div>
        
        <h4 className="text-sm sm:text-lg font-semibold text-slate-800 dark:text-slate-100 mb-0.5 sm:mb-1 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">{activity.title}</h4>
        
        {activity.description && (
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3 whitespace-pre-line">
            {activity.description}
          </p>
        )}

        {/* Google Maps Location Badges */}
        {activity.locations && activity.locations.length > 0 && (
          <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 border-t border-slate-100 dark:border-slate-800">
            {activity.locations.map((loc, i) => (
              <a
                key={i}
                href={loc.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`在 Google 地圖中開啟 ${loc.name}`}
                className="inline-flex items-center gap-1 sm:gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg text-[11px] sm:text-xs font-medium bg-slate-50 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-orange-50 dark:hover:bg-slate-750 dark:hover:border-orange-500/50 hover:text-orange-700 dark:hover:text-orange-300 hover:border-orange-200 hover:shadow-xs transition-all duration-200 group/loc"
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
