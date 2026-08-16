/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { itineraryData } from './data';
import { DayView } from './components/DayView';
import { TodoList } from './components/TodoList';
import { TravelTips } from './components/TravelTips';
import { PlaneTakeoff, Heart, CalendarDays, BookOpen, ListTodo, Sparkles } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'itinerary' | 'tips'>('itinerary');
  const [activeDay, setActiveDay] = useState<number>(1);

  const scrollToDay = (dayNum: number) => {
    setActiveDay(dayNum);
    const element = document.getElementById(`day-${dayNum}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTodos = () => {
    const element = document.getElementById('todo-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-orange-100 selection:text-orange-900">
      {/* Hero Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-3 pb-2 sm:pt-5 sm:pb-3">
          <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-50 text-orange-600 text-[11px] sm:text-xs font-semibold mb-1 sm:mb-1.5">
                <PlaneTakeoff className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span>4 Days in Hong Kong · 8/28 (五) ~ 8/31 (一)</span>
              </div>
              <h1 className="text-xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                Hong Kong Adventure
              </h1>
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center gap-1.5 sm:gap-2 bg-slate-100 p-1 sm:p-1.5 rounded-xl sm:rounded-2xl border border-slate-200">
              <button
                onClick={() => setActiveTab('itinerary')}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeTab === 'itinerary'
                    ? 'bg-white text-orange-600 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                <CalendarDays className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>每日行程 ＆ 待辦</span>
              </button>

              <button
                onClick={() => setActiveTab('tips')}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold transition-all relative ${
                  activeTab === 'tips'
                    ? 'bg-white text-orange-600 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>出國注意事項</span>
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" title="重要入境須知" />
              </button>
            </div>
          </div>

          {/* Quick Day Jumper & Dates Bar (Prominently displayed in top header) */}
          {activeTab === 'itinerary' && (
            <div className="flex items-center justify-between gap-2 sm:gap-3 pt-2 mt-2 sm:pt-3 sm:mt-3 border-t border-slate-100">
              <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none w-full sm:w-auto">
                <div className="flex items-center gap-1 text-[11px] sm:text-xs font-bold text-slate-500 whitespace-nowrap mr-0.5 sm:mr-1 flex-shrink-0">
                  <CalendarDays className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-500" />
                  <span className="hidden sm:inline">行程直達:</span>
                  <span className="sm:hidden">直達:</span>
                </div>

                {/* Mobile-Only Quick Jump Button for To-Do List */}
                <button
                  onClick={scrollToTodos}
                  className="flex sm:hidden items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap flex-shrink-0 bg-emerald-50 text-emerald-700 border border-emerald-200 active:bg-emerald-100"
                >
                  <ListTodo className="w-3.5 h-3.5 text-emerald-600" />
                  <span>待辦清單</span>
                </button>

                {itineraryData.map((day, i) => (
                  <button
                    key={i}
                    onClick={() => scrollToDay(i + 1)}
                    className={`flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap flex-shrink-0 ${
                      activeDay === i + 1
                        ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-sm ring-2 ring-orange-200'
                        : 'bg-slate-50 text-slate-700 hover:bg-orange-50 hover:text-orange-600 border border-slate-200 hover:border-orange-200'
                    }`}
                  >
                    <span className={`px-1.5 py-0.5 rounded-md text-[10px] sm:text-[11px] font-extrabold ${
                      activeDay === i + 1 ? 'bg-white/25 text-white' : 'bg-orange-100 text-orange-600'
                    }`}>
                      Day {i + 1}
                    </span>
                    <span className="tracking-tight">{day.date}</span>
                  </button>
                ))}
              </div>

              <div className="text-xs text-slate-400 font-medium hidden lg:flex items-center gap-2 flex-shrink-0">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>灣仔合和 · 旺角吉伊卡哇 · 太平山頂 · 伴手禮</span>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8 py-3 sm:py-6">
        {activeTab === 'itinerary' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-6 items-start">
            
            {/* Left Column: To-Do List (Sticky on desktop, independent scroll) */}
            <div id="todo-section" className="lg:col-span-4 lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] scroll-mt-52 sm:scroll-mt-40">
              <TodoList />
            </div>

            {/* Right Column: Itinerary Timeline */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-slate-200 p-2.5 sm:p-6 lg:p-7">
                {itineraryData.map((day, index) => (
                  <DayView key={index} day={day} index={index} />
                ))}
              </div>
            </div>
            
          </div>
        ) : (
          <TravelTips />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-6 sm:py-8 text-center mt-8 sm:mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="flex items-center justify-center gap-2 text-xs sm:text-sm">
            Designed for an amazing trip <Heart className="w-3.5 h-3.5 text-rose-500" /> Safe travels!
          </p>
        </div>
      </footer>
    </div>
  );
}

