import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { CalendarFormsProps, useCalendarForm } from "./hooks/useCalendarForm";
import { format } from "date-fns";

export function CalendarForm(props: CalendarFormsProps) {
  const hook = useCalendarForm();
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
          <div
            className={`border rounded-md p-2 flex items-center justify-between gap-2 ${hook.borderColor}`}
          >
            {hook.colors.map((color) => (
              <div
                onClick={() => hook.setBorderColor(color.border)}
                key={color.id}
                className={`w-6 h-6 rounded-full cursor-pointer ${color.bg}`}
              ></div>
            ))}
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
