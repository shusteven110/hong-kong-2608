import React, { useState, useEffect } from 'react';
import { CheckCircle2, Circle, Edit2, MapPin, ExternalLink } from 'lucide-react';

export interface Todo {
  id: string;
  label: string;
  checked: boolean;
  comment: string;
  mapUrl?: string;
  mapName?: string;
}

const defaultTodos: Todo[] = [
  { 
    id: 'visa', 
    label: '申請並列印「台灣居民預辦入境登記」(電子港簽/PAR)', 
    checked: false, 
    comment: '',
    mapUrl: 'https://www.immd.gov.hk/hkt/services/vwp.html',
    mapName: '入境處官網'
  },
  { 
    id: 'checkin', 
    label: '出發前 48-24 小時辦理「航空公司線上登機 (Online Check-in)」', 
    checked: false, 
    comment: '' 
  },
  { 
    id: 'flight', 
    label: '預訂機票 (去程: UO115, 回程: HX260)', 
    checked: false, 
    comment: '' 
  },
  { 
    id: 'hotel', 
    label: '預訂飯店 (合和酒店 Hopewell Hotel)', 
    checked: false, 
    comment: '',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Hopewell+Hotel+Wan+Chai',
    mapName: '合和酒店'
  },
  { 
    id: 'esim', 
    label: '購買上網 eSIM 並完成實名登記', 
    checked: false, 
    comment: '' 
  },
  { 
    id: 'octopus', 
    label: '準備/購買 香港八達通 (Octopus)', 
    checked: false, 
    comment: '' 
  },
  { 
    id: 'tram', 
    label: '購買 太平山頂纜車 + 凌霄閣摩天台門票', 
    checked: false, 
    comment: '',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Peak+Tram+Lower+Terminus+Garden+Road',
    mapName: '花園道山頂纜車總站'
  },
  { 
    id: 'chiikawa', 
    label: '預約 MOKO 吉伊卡哇活動門票', 
    checked: false, 
    comment: '',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=MOKO+Grand+Century+Place+Mong+Kok',
    mapName: 'MOKO 新世紀廣場'
  },
];

export const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem('hk-trip-todos');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Merge with defaultTodos in case mapUrl was added
        return defaultTodos.map(dt => {
          const found = parsed.find((p: Todo) => p.id === dt.id);
          return found ? { ...dt, checked: found.checked, comment: found.comment } : dt;
        });
      } catch (e) {
        return defaultTodos;
      }
    }
    return defaultTodos;
  });

  const [filter, setFilter] = useState<'all' | 'pending' | 'completed'>('all');

  useEffect(() => {
    localStorage.setItem('hk-trip-todos', JSON.stringify(todos));
  }, [todos]);

  const toggleCheck = (id: string) => {
    setTodos(todos.map(t => t.id === id ? { ...t, checked: !t.checked } : t));
  };

  const updateComment = (id: string, comment: string) => {
    setTodos(todos.map(t => t.id === id ? { ...t, comment } : t));
  };

  const completedCount = todos.filter(t => t.checked).length;
  const progress = Math.round((completedCount / todos.length) * 100);

  const filteredTodos = todos.filter(t => {
    if (filter === 'pending') return !t.checked;
    if (filter === 'completed') return t.checked;
    return true;
  });

  return (
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-slate-200 p-3 sm:p-5 flex flex-col max-h-[calc(100vh-6rem)] sm:max-h-[calc(100vh-4rem)]">
      {/* Header */}
      <div className="flex-shrink-0">
        <div className="flex items-center justify-between mb-1.5 sm:mb-2">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-800">行前準備清單</h2>
            <span className="text-[11px] sm:text-xs text-slate-400 font-normal">({completedCount}/{todos.length})</span>
          </div>
          <span className="text-[11px] sm:text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
            {progress}% 完成
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-slate-100 rounded-full h-1.5 mb-2 sm:mb-3 overflow-hidden">
          <div 
            className="bg-emerald-500 h-1.5 rounded-full transition-all duration-500 ease-out" 
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Quick Filter Pills */}
        <div className="flex items-center gap-1 mb-2 sm:mb-3 pb-1.5 sm:pb-2 border-b border-slate-100">
          <button
            onClick={() => setFilter('all')}
            className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[11px] sm:text-xs font-medium transition-colors ${
              filter === 'all' 
                ? 'bg-orange-500 text-white shadow-xs' 
                : 'text-slate-500 hover:bg-slate-100'
            }`}
          >
            全部 ({todos.length})
          </button>
          <button
            onClick={() => setFilter('pending')}
            className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[11px] sm:text-xs font-medium transition-colors ${
              filter === 'pending' 
                ? 'bg-orange-500 text-white shadow-xs' 
                : 'text-slate-500 hover:bg-slate-100'
            }`}
          >
            待辦 ({todos.length - completedCount})
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[11px] sm:text-xs font-medium transition-colors ${
              filter === 'completed' 
                ? 'bg-orange-500 text-white shadow-xs' 
                : 'text-slate-500 hover:bg-slate-100'
            }`}
          >
            已完成 ({completedCount})
          </button>
        </div>
      </div>

      {/* Todo items list with dedicated smooth scrolling */}
      <div className="flex-1 overflow-y-auto space-y-2 sm:space-y-2.5 pr-1 -mr-1 sm:pr-1.5 sm:-mr-1.5 focus:outline-none custom-scrollbar">
        {filteredTodos.map((todo) => (
          <div 
            key={todo.id} 
            className={`group rounded-lg sm:rounded-xl border p-2 sm:p-2.5 transition-all duration-200 hover:shadow-xs ${
              todo.checked 
                ? 'bg-slate-50/80 border-slate-200' 
                : 'bg-white border-slate-200 hover:border-orange-300'
            }`}
          >
            <div className="flex items-start gap-2 sm:gap-2.5">
              <button 
                onClick={() => toggleCheck(todo.id)}
                className="mt-0.5 flex-shrink-0 text-slate-400 hover:text-emerald-500 transition-colors focus:outline-none"
                aria-label={todo.checked ? '標示為未完成' : '標示為已完成'}
              >
                {todo.checked ? (
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500" />
                ) : (
                  <Circle className="w-4 h-4 sm:w-5 sm:h-5" />
                )}
              </button>
              
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center justify-between gap-1">
                  <label 
                    className={`block text-xs sm:text-sm font-medium cursor-pointer transition-colors ${
                      todo.checked ? 'text-slate-400 line-through' : 'text-slate-800'
                    }`}
                    onClick={() => toggleCheck(todo.id)}
                  >
                    {todo.label}
                  </label>
                  
                  {todo.mapUrl && (
                    <a
                      href={todo.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-medium text-orange-600 hover:text-orange-700 hover:underline flex-shrink-0"
                    >
                      <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-rose-500" />
                      <span>{todo.mapName || '地圖'}</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  )}
                </div>
                
                <div className="mt-1 sm:mt-1.5 flex items-center gap-1.5 bg-slate-50/60 rounded-md px-1.5 sm:px-2 py-0.5 sm:py-1 border border-slate-100 group-hover:border-slate-200 transition-colors">
                  <Edit2 className={`w-3 h-3 flex-shrink-0 ${todo.checked ? 'text-slate-300' : 'text-slate-400'}`} />
                  <input
                    type="text"
                    value={todo.comment}
                    onChange={(e) => updateComment(todo.id, e.target.value)}
                    placeholder="新增備註 (例如: 訂單號碼、取票時間)..."
                    className={`w-full text-[11px] sm:text-xs bg-transparent border-none outline-none focus:ring-0 p-0 ${
                      todo.checked ? 'text-slate-400' : 'text-slate-600 placeholder:text-slate-400'
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
