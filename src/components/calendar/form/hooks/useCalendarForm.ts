export interface CalendarFormsProps {
  today: Date;
  handleDateColor: (color: string) => void;
}

export function useCalendarForm() {
  const colors = [
    {
      id: "blue",
      border: "border border-blue-500",
      bg: "bg-blue-500",
    },
    {
      id: "red",
      border: "border border-red-500",
      bg: "bg-red-500",
    },
    {
      id: "green",
      border: "border border-green-500",
      bg: "bg-green-500",
    },
    {
      id: "yellow",
      border: "border border-yellow-500",
      bg: "bg-yellow-500",
    },
    {
      id: "purple",
      border: "border border-purple-500",
      bg: "bg-purple-500",
    },
  ];
  return { colors };
}
