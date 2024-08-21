import { useEffect, useState } from "react";

export default function useDarkTheme() {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(
    localStorage.getItem('selectedTheme') === 'Dark' || false,
  );

  useEffect(() => {
    localStorage.setItem('selectedTheme', isDarkTheme ? 'Dark' : 'Light');
    if (isDarkTheme) {
      document.body?.classList.add('dark');
    } else {
      document.body?.classList.remove('dark');
    }
  }, [isDarkTheme]);

  const toggleTheme: any = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return [isDarkTheme, toggleTheme];
}