import { format } from "date-fns";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "lucide-react";
import { MonthSelectorProps, useMonthSelector } from "./hooks/useMonthSelector";
import { ptBR } from "date-fns/locale";

export function MonthSelector(props: MonthSelectorProps) {
  const hook = useMonthSelector(props);
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-center mb-4 p-2 gap-3 shadow-xl rounded-lg dark:shadow dark:shadow-emerald-600">
        <ArrowLeftCircleIcon
          className="cursor-pointer text-emerald-600"
          onClick={hook.handlePrevMonth}
        />
        <h2 className="text-xl font-bold">
          {format(props.currentMonth, "MMMM yyyy", {
            locale: ptBR,
          })
            .charAt(0)
            .toUpperCase() +
            format(props.currentMonth, "MMMM yyyy", {
              locale: ptBR,
            }).slice(1)}
        </h2>
        <ArrowRightCircleIcon
          className="cursor-pointer text-emerald-600"
          onClick={hook.handleNextMonth}
        />
      </div>
    </div>
  );
}
