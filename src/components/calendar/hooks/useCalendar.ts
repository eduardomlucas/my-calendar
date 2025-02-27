import { useState, useMemo } from "react";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  subMonths,
  addMonths,
} from "date-fns";

export function useCalendar() {
  const [currentMonth, setCurrentMonth] = useState(startOfMonth(new Date()));
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [isOpen, setIsOpen] = useState(false);
  const [dateColor, setDateColor] = useState("");
  const startMonth = startOfMonth(currentMonth);
  const endMonth = endOfMonth(currentMonth);
  const startWeek = startOfWeek(startMonth, { weekStartsOn: 0 });
  const endWeek = endOfWeek(endMonth, { weekStartsOn: 0 });

  const days = useMemo(() => {
    const totalDays =
      (endWeek.getTime() - startWeek.getTime()) / (1000 * 60 * 60 * 24) + 1;
    return Array.from({ length: totalDays }, (_, i) => addDays(startWeek, i));
  }, [startWeek, endWeek]);

  const handlePrevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const handleNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const handleSelectDate = (date: Date) => {
    setSelectedDate(date);
    setIsOpen(true);
  };

  return {
    currentMonth,
    setCurrentMonth,
    startMonth,
    endMonth,
    days,
    handlePrevMonth,
    handleNextMonth,
    handleSelectDate,
    selectedDate,
    isOpen,
    setIsOpen,
    dateColor,
    setDateColor,
  };
}
