import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { ArrowLeftCircleIcon, X } from "lucide-react";
import { format, isSameDay } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useCalendar } from "./hooks/useCalendar";
import { CalendarForm } from "./CalendarForm";

const Calendar = () => {
  const hook = useCalendar();

  return (
    <div className="p-4">
      <div className="flex items-center mb-4 gap-3">
        <ArrowLeftCircleIcon
          className="font-bold cursor-pointer"
          onClick={hook.handlePrevMonth}
        />
        <ArrowLeftCircleIcon
          className="cursor-pointer rotate-180"
          onClick={hook.handleNextMonth}
        />
        <h2 className="text-xl font-bold">
          {format(hook.currentMonth, "MMMM yyyy", { locale: ptBR })}
        </h2>
      </div>

      <div className="flex flex-col">
        <div className="grid grid-cols-7">
          {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map((day) => (
            <div key={day} className="text-center font-bold">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2">
          {hook.days.map((day) => {
            const isCurrentMonth =
              day.getMonth() === hook.currentMonth.getMonth();

            return (
              <Popover
                key={day.toString()}
                onOpenChange={(isOpen) => {
                  if (isOpen) hook.handleSelectDate(day);
                }}
              >
                <PopoverTrigger asChild>
                  <div
                    className={`p-10 rounded-xl cursor-pointer text-center  
                          ${isSameDay(day, new Date()) ? "font-bold border-zinc-950" : ""}
                          ${!isCurrentMonth ? "text-gray-400" : "border"}
                          ${isSameDay(day, hook.selectedDate as Date) ? "bg-zinc-950 text-white" : ""}`}
                  >
                    {format(day, "d")}
                  </div>
                </PopoverTrigger>
                <PopoverContent className={`${hook.dateColor}`}>
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      document.dispatchEvent(
                        new KeyboardEvent("keydown", { key: "Escape" })
                      );
                    }}
                    className="absolute top-4 right-4 cursor-pointer"
                  >
                    <X />
                  </div>

                  <CalendarForm
                    today={day}
                    handleDateColor={hook.setDateColor}
                  />
                </PopoverContent>
              </Popover>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
