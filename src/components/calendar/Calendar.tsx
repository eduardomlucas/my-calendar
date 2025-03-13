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

const Calendar = () => {
  const hook = useCalendar();

  return (
    <div className="p-5 h-screen w-screen overflow-hidden flex flex-col">
      <MonthSelector {...hook} />
      <div className=" border-t flex flex-col flex-grow rounded-xl shadow-xl">
        <div className="bg-emerald-600 rounded-t-xl text-white p-1 grid grid-cols-7">
          {["DOM.", "SEG.", "TER.", "QUA.", "QUI.", "SEX.", "SÁB."].map(
            (day) => (
              <div key={day} className="text-center font-thin">
                {day}
              </div>
            )
          )}
        </div>

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
                    className={`p-2 border-t cursor-pointer flex items-start justify-start
                          ${index % 7 === 6 ? "" : "border-r"}  
                          ${!isCurrentMonth ? "text-gray-400" : ""}`}
                  >
                    <div
                      className={`${isSameDay(day, new Date()) ? "font-bold text-white rounded-full p-1 bg-emerald-600" : ""}`}
                    >
                      {format(day, "d")}
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
