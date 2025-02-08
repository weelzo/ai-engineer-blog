export function useTheme() {
  useEffect(() => {
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    const toggleButton = document.getElementById('theme-toggle');
    if (!toggleButton) return;
    
    const handleClick = () => {
      const newTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    };
    
    toggleButton.addEventListener('click', handleClick);
    return () => toggleButton.removeEventListener('click', handleClick);
  }, []);
} 