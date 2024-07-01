// Theme types
type Theme = 'peach' | 'lime';
type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};