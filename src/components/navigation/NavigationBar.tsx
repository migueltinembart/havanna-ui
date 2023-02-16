interface NavItem {
  id: number;
  name: string;
  path: string;
}

export default function Navigation(props: { items: NavItem[] }): JSX.Element {
  return (
    <ul className="flex gap-8 font-thin">
      {props.items.map((item) => (
        <a key={item.id} href={item.path}>
          <li>{item.name}</li>
        </a>
      ))}
    </ul>
  );
}

export { type NavItem };
