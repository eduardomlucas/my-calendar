import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { CalendarFormsProps } from "./hooks/useCalendarForm";
import { format } from "date-fns";

export function CalendarForm(props: CalendarFormsProps) {
  return (
    <div className="flex flex-col">
      <div className="mt-5 mb-5 text-center font-bold">
        {format(props.today, "dd/MM/yyyy")}
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <Label htmlFor="title">Título</Label>
          <Input />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="time">Horário</Label>
          <div className="flex gap-2 items-center">
            <Input type="time" />-<Input type="time" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="color">Cor</Label>
          <div className="border rounded-md p-2 flex items-center justify-between gap-2">
            <div
              onClick={() => props.handleDateColor("border-3 border-blue-500")}
              className="w-5 h-5 rounded-full border bg-blue-500 cursor-pointer"
            ></div>
            <div
              onClick={() => props.handleDateColor("border-3 border-red-500")}
              className="w-5 h-5 rounded-full border bg-red-500 cursor-pointer"
            ></div>
            <div
              onClick={() => props.handleDateColor("border-3 border-green-500")}
              className="w-5 h-5 rounded-full border bg-green-500 cursor-pointer"
            ></div>
            <div
              onClick={() =>
                props.handleDateColor("border-3 border-yellow-500")
              }
              className="w-5 h-5 rounded-full border bg-yellow-500 cursor-pointer"
            ></div>
            <div
              onClick={() =>
                props.handleDateColor("border-3 border-purple-500")
              }
              className="w-5 h-5 rounded-full border bg-purple-500 cursor-pointer"
            ></div>
          </div>
        </div>

        <div
          className="text-center border rounded-md p-1 bg-zinc-950 text-white cursor-pointer "
          onClick={() => console.log("salvando")}
        >
          Salvar tarefa
        </div>
      </div>
    </div>
  );
}
