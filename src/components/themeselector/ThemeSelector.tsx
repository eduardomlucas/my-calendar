import { MoonIcon, SunIcon } from "lucide-react";
import { Switch } from "../ui/switch";
import { useThemeSelector } from "./hooks/useThemeSelector";

export function ThemeSelector() {
  const hook = useThemeSelector();
  return (
    <div
      className="absolute flex items-center cursor-pointer"
      onClick={() => hook.setLight(!hook.light)}
    >
      {hook.light ? (
        <MoonIcon size={15} className="absolute left-4 z-1" />
      ) : (
        <SunIcon size={15} className="absolute left-0.5 z-1" />
      )}

      <Switch
        checked={hook.light}
        onCheckedChange={hook.setLight}
        className="cursor-pointer"
      />
    </div>
  );
}
