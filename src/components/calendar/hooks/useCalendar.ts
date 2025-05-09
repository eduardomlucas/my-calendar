import { useState, useMemo } from "react";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
} from "date-fns";
import { CalendarDto } from "@/services/calendar/calendar.type";

export function useCalendar() {
  const [currentMonth, setCurrentMonth] = useState(startOfMonth(new Date()));
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [isOpen, setIsOpen] = useState(false);
  const startMonth = startOfMonth(currentMonth);
  const endMonth = endOfMonth(currentMonth);
  const startWeek = startOfWeek(startMonth, { weekStartsOn: 0 });
  const endWeek = endOfWeek(endMonth, { weekStartsOn: 0 });

  const days = useMemo(() => {
    const totalDays =
      (endWeek.getTime() - startWeek.getTime()) / (1000 * 60 * 60 * 24) + 1;
    return Array.from({ length: totalDays }, (_, i) => addDays(startWeek, i));
  }, [startWeek, endWeek]);

  const handleSelectDate = (date: Date) => {
    setSelectedDate(date);
    setIsOpen(true);
  };

  const tasks: CalendarDto[] = useMemo(() => {
    return JSON.parse(localStorage.getItem("tasks") || "[]").sort(
      (a: CalendarDto, b: CalendarDto) =>
        new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  }, []);

  return {
    currentMonth,
    setCurrentMonth,
    startMonth,
    endMonth,
    days,
    handleSelectDate,
    selectedDate,
    isOpen,
    setIsOpen,
    tasks,
  };
}
