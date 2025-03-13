import { addMonths, subMonths } from "date-fns";

export interface MonthSelectorProps {
  currentMonth: Date;
  setCurrentMonth: (date: Date) => void;
}
export function useMonthSelector(props: MonthSelectorProps) {
  const handlePrevMonth = () =>
    props.setCurrentMonth(subMonths(props.currentMonth, 1));
  const handleNextMonth = () =>
    props.setCurrentMonth(addMonths(props.currentMonth, 1));

  return { handlePrevMonth, handleNextMonth };
}
