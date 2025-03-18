import { useCalendarHeader } from "./hooks/useCalendarHeader";

export function CalendarHeader() {
  const hook = useCalendarHeader();
  return (
    <div className="bg-emerald-600 rounded-t-xl text-white p-1 grid grid-cols-7">
      {hook.weekDays.map((day) => (
        <div key={day} className="text-center font-thin">
          {day}
        </div>
      ))}
    </div>
  );
}
