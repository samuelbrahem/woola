"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Clock, Video, Phone, CheckCircle2, CalendarCheck } from "lucide-react";

const MEETING_TYPES = [
  { id: "intro", label: "Intro call", length: "15 min", icon: Phone, blurb: "Quick fit check — your buildings, our coverage." },
  { id: "walkthrough", label: "Walk-through planning", length: "45 min", icon: Video, blurb: "Scope a site visit and maintenance plan." },
  { id: "portfolio", label: "Portfolio review", length: "60 min", icon: CalendarCheck, blurb: "Multi-building strategy with a senior advisor." },
];

const SLOTS = ["9:00 AM", "9:45 AM", "10:30 AM", "11:15 AM", "1:00 PM", "1:45 PM", "2:30 PM", "3:15 PM", "4:00 PM"];

const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const DOW = ["Su","Mo","Tu","We","Th","Fr","Sa"];

export function BookingCalendar() {
  const today = useMemo(() => new Date(), []);
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [meetingType, setMeetingType] = useState(MEETING_TYPES[0].id);
  const [confirmed, setConfirmed] = useState(false);

  const firstDow = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  const isPast = (day: number) => {
    const d = new Date(viewYear, viewMonth, day);
    const t = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return d < t;
  };
  const isWeekend = (day: number) => {
    const dow = new Date(viewYear, viewMonth, day).getDay();
    return dow === 0 || dow === 6;
  };

  const prevMonth = () => {
    setSelectedDay(null);
    setSelectedSlot(null);
    if (viewMonth === 0) { setViewMonth(11); setViewYear(viewYear - 1); }
    else setViewMonth(viewMonth - 1);
  };
  const nextMonth = () => {
    setSelectedDay(null);
    setSelectedSlot(null);
    if (viewMonth === 11) { setViewMonth(0); setViewYear(viewYear + 1); }
    else setViewMonth(viewMonth + 1);
  };

  const chosenType = MEETING_TYPES.find((m) => m.id === meetingType)!;

  if (confirmed) {
    return (
      <div className="card p-10 text-center bg-white">
        <CheckCircle2 className="w-14 h-14 mx-auto text-brand-500" strokeWidth={1.25} />
        <h3 className="mt-5 text-2xl font-semibold text-ink-800">You&apos;re booked.</h3>
        <p className="mt-3 text-ink-500 max-w-md mx-auto">
          {chosenType.label} ({chosenType.length}) · {MONTHS[viewMonth]} {selectedDay}, {viewYear} at {selectedSlot} PT.
          A calendar invite and video link are on their way to your inbox.
        </p>
        <button className="btn btn-outline mt-7" onClick={() => { setConfirmed(false); setSelectedDay(null); setSelectedSlot(null); }}>
          Book another time
        </button>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-12 gap-6 items-start">
      {/* Meeting type */}
      <div className="lg:col-span-4 space-y-3">
        {MEETING_TYPES.map((m) => {
          const Icon = m.icon;
          const active = meetingType === m.id;
          return (
            <button
              key={m.id}
              onClick={() => setMeetingType(m.id)}
              className={`card w-full text-left p-5 flex gap-4 items-start transition ${
                active ? "!border-brand-500 ring-1 ring-brand-500/40 bg-brand-50/40" : "bg-white"
              }`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${active ? "bg-brand-500 text-cream-50" : "bg-cream-100 text-ink-700"}`}>
                <Icon className="w-4.5 h-4.5 w-5 h-5" strokeWidth={1.5} />
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-semibold text-ink-800">{m.label}</span>
                  <span className="text-xs text-ink-400 inline-flex items-center gap-1"><Clock className="w-3 h-3" />{m.length}</span>
                </div>
                <div className="text-sm text-ink-500 mt-1">{m.blurb}</div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Calendar */}
      <div className="lg:col-span-5 card p-6 bg-white">
        <div className="flex items-center justify-between">
          <button onClick={prevMonth} aria-label="Previous month" className="p-2 rounded-full hover:bg-cream-100 transition">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="font-semibold text-ink-800">{MONTHS[viewMonth]} {viewYear}</div>
          <button onClick={nextMonth} aria-label="Next month" className="p-2 rounded-full hover:bg-cream-100 transition">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="mt-5 grid grid-cols-7 gap-1 text-center text-xs text-ink-400 font-medium">
          {DOW.map((d) => <div key={d} className="py-1">{d}</div>)}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: firstDow }).map((_, i) => <div key={`pad-${i}`} />)}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const disabled = isPast(day) || isWeekend(day);
            const selected = selectedDay === day;
            return (
              <button
                key={day}
                disabled={disabled}
                onClick={() => { setSelectedDay(day); setSelectedSlot(null); }}
                className={`aspect-square rounded-full text-sm transition flex items-center justify-center
                  ${disabled ? "text-ink-200 cursor-not-allowed" : "hover:bg-brand-50 text-ink-700"}
                  ${selected ? "!bg-brand-500 !text-cream-50 font-semibold" : ""}`}
              >
                {day}
              </button>
            );
          })}
        </div>
        <div className="mt-4 pt-4 border-t hairline text-xs text-ink-400 flex items-center gap-2">
          <Clock className="w-3.5 h-3.5" /> Pacific Time (Vancouver) · weekdays only
        </div>
      </div>

      {/* Time slots */}
      <div className="lg:col-span-3 card p-6 bg-white">
        <div className="font-semibold text-ink-800 text-sm">
          {selectedDay ? `${MONTHS[viewMonth]} ${selectedDay}` : "Pick a day"}
        </div>
        <div className="mt-4 space-y-2 max-h-[330px] overflow-y-auto pr-1">
          {selectedDay ? (
            SLOTS.map((s) => (
              <button
                key={s}
                onClick={() => setSelectedSlot(s)}
                className={`w-full py-2.5 rounded-md border text-sm font-medium transition ${
                  selectedSlot === s
                    ? "bg-brand-500 text-cream-50 border-brand-500"
                    : "border-ink-200 text-ink-700 hover:border-brand-500 hover:text-brand-500"
                }`}
              >
                {s}
              </button>
            ))
          ) : (
            <p className="text-sm text-ink-400 leading-relaxed">
              Select a date on the calendar to see available times with an advisor.
            </p>
          )}
        </div>
        <button
          disabled={!selectedDay || !selectedSlot}
          onClick={() => setConfirmed(true)}
          className="btn btn-primary w-full justify-center mt-5 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Confirm booking
        </button>
      </div>
    </div>
  );
}
