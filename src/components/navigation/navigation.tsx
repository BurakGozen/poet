import { Logo } from "./logo";
import { ThemeSwitcher } from "./theme-switcher";

export function Navigation() {
  return (
    <nav className="fixed left-0 top-0 right-0 px-5 pt-4 z-10 w-full flex justify-between items-center">
      <Logo />
      <ThemeSwitcher />
    </nav>
  );
}
