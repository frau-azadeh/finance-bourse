import ThemeToggle from "./ThemeToggle";

const Header: React.FC = () => {
  return (
    <header className="p-4 bg-gray-100 dark:bg-gray-900 flex justify-between items-center">
      <h1 className="text-lg font-bold">Dashboard</h1>
      <ThemeToggle />
    </header>
  );
};

export default Header;
