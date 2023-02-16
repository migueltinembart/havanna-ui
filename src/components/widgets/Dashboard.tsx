import useStore from '~/stores/dashboardstore';
import DashboardItem from './DashboardItem';

export default function Dashboard(): JSX.Element {
  const sizelimit = 6;
  const items = useStore((state) => state.items);
  const removeItem = useStore((state) => state.removeItem);
  function TitleInput(): JSX.Element {
    const setTitle = useStore((state) => state.setTitle);
    return (
      <input className="bg-green-200" type="text" onChange={setTitle}></input>
    );
  }

  function DashboardAdd(): JSX.Element {
    const addItem = useStore((state) => state.addItem);
    return (
      <button className="bg-red-200" onClick={addItem}>
        Add to Dashboard
      </button>
    );
  }

  return (
    <div className="shadow-md rounded-md bg-white p-4 flex-1 justify-evenly h-24 grid grid-cols-6 grid-rows-1 gap-8">
      {items.map((item) => (
        <DashboardItem
          key={item.id}
          amount={item.amount}
          title={item.title}
          id={item.id}
          close={() => {
            removeItem(item.id);
          }}
        ></DashboardItem>
      ))}
      {items.length < sizelimit && (
        <div>
          <TitleInput></TitleInput>
          <DashboardAdd />
        </div>
      )}
    </div>
  );
}
