import { useEffect, useState } from "react";

export function useThemeSelector() {
  const [light, setLight] = useState(true);

  useEffect(() => {
    if (light) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [light]);
  return { light, setLight };
}
