interface NavItem {
  id: number;
  name: string;
  path: string;
}

export default function Navigation(props: { items: NavItem[] }): JSX.Element {
  return (
    <ul className="flex gap-8 font-thin">
      {props.items.map((item) => (
        <a href={item.path}>
          <li key={item.id}>{item.name}</li>
        </a>
      ))}
    </ul>
  );
}

export { type NavItem };
