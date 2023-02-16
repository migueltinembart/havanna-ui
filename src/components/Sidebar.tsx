import NavItem from './navigation/NavigationBar';

export default function Sidebar(): JSX.Element {
  return (
    <div
      className="lg:w-1/6 gap-4 flex flex-col items-stretch
    md:w-1/3"
    >
      <NavItem label="Home" url="http://localhost:5173/"></NavItem>
      <NavItem label="Teams" url="http://localhost:5173/"></NavItem>
      <NavItem label="Sites" url="http://localhost:5173/"></NavItem>
      <NavItem label="Employees" url="http://localhost:5173/"></NavItem>
    </div>
  );
}
