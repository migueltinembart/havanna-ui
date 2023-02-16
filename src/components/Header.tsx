import Logo from '~/assets/Logo';
import Navigation, { type NavItem } from './navigation/NavigationBar';
import Button from './base/Button';
import { theme } from '~/types/theme';

export default function Header(): JSX.Element {
  const menuItems: NavItem[] = [
    { id: 0, name: 'Teams', path: '/api/teams' },
    { id: 1, name: 'Sites', path: '/api/sites' },
    { id: 2, name: 'Users', path: '/api/users' },
  ];

  return (
    <>
      <div className="w-full bg-white shadow-md">
        <div
          id="navigation"
          className="bg-slate-800 text-white p-1 px-12 flex items-center justify-between"
        >
          <div>
            <a href="/" className="flex gap-3 items-center">
              <Logo color="#ffffff" size={32} />
              <span className="text-lg">Havanna</span>
            </a>
          </div>
          <Navigation items={menuItems}></Navigation>
          <div className="flex gap-4">
            <Button theme={theme.PRIMARY} text="Sign Up"></Button>
            <Button theme={theme.SECONDARY} text="Login"></Button>
          </div>
        </div>
        <div className="py-6 px-12">Test</div>
      </div>
    </>
  );
}
