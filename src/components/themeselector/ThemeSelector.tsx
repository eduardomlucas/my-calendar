import { MoonIcon, SunIcon } from "lucide-react";
import { Switch } from "../ui/switch";
import { useThemeSelector } from "./hooks/useThemeSelector";

export function ThemeSelector() {
  const hook = useThemeSelector();
  return (
    <div
      className="flex items-center cursor-pointer"
      onClick={() => hook.setLight(!hook.light)}
    >
      {hook.light ? (
        <MoonIcon size={10} className="absolute left-9.75 z-1" />
      ) : (
        <SunIcon size={10} className="absolute left-6 z-1" />
      )}

      <Switch
        checked={hook.light}
        onCheckedChange={hook.setLight}
        className="cursor-pointer"
      />
    </div>
  );
}
