import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { X } from "lucide-react";
import { format, isSameDay } from "date-fns";

import { useCalendar } from "./hooks/useCalendar";
import { CalendarForm } from "./form/CalendarForm";
import { MonthSelector } from "../monthselector/MonthSelector";
import { ThemeSelector } from "../themeselector/ThemeSelector";
import { CalendarHeader } from "./header/CalendarHeader";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@radix-ui/react-tooltip";
const Calendar = () => {
  const hook = useCalendar();

  return (
    <div className="p-5 h-screen w-screen overflow-hidden flex flex-col">
      <ThemeSelector />

      <MonthSelector {...hook} />
      <div className="  flex flex-col flex-grow rounded-xl shadow-xl dark:shadow-md dark:shadow-emerald-600">
        <CalendarHeader />

        <div className=" grid grid-cols-7 flex-grow select-none">
          {hook.days.map((day, index) => {
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
                    className={`p-2 border-t cursor-pointer flex items-start justify-between
                          ${index % 7 === 6 ? "" : "border-r"}  
                          ${!isCurrentMonth ? "text-gray-400" : ""}`}
                  >
                    <div
                      className={`${isSameDay(day, new Date()) ? "font-bold text-white rounded-full p-1 bg-emerald-600" : ""}`}
                    >
                      {format(day, "d")}
                    </div>
                    <div className="flex flex-col gap-1 ">
                      {hook.tasks
                        .filter((task) =>
                          isSameDay(task.date ?? new Date(), day)
                        )
                        .map((task, index) => (
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <div
                                  key={index}
                                  className={`w-4 h-3 rounded-full bg-${task.color}-600`}
                                ></div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <div className="bg-zinc-900 text-white rounded-md p-2 dark:bg-zinc-100 dark:text-zinc-900 font-medium ">
                                  {task.title}
                                </div>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        ))}
                    </div>
                  </div>
                </PopoverTrigger>
                <PopoverContent>
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

                  <CalendarForm today={day} />
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
