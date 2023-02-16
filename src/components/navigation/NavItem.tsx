interface MenuItem {
  label: string;
  url: string;
}

export default function NavItem(item: MenuItem): JSX.Element {
  return (
    <>
      <button className="h-12 shadow-md rounded-md bg-white text-center hover:bg-slate-200">
        {item.label}
      </button>
    </>
  );
}
