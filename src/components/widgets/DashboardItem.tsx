interface dashboardItemOption {
  id: string;
  amount: number;
  title: string;
  URL?: string;
  close?: () => void;
}

export default function DashboardItem(item: dashboardItemOption): JSX.Element {
  return (
    <div className="shadow-md p-2 rounded-md h-full flex gap-2 items-center">
      <div className="flex-1 text-2xl text-green-500">{item.amount}</div>
      <div className="flex-[3] text-2xl">{item.title}</div>
      <button onClick={item.close}>x</button>
    </div>
  );
}

export { type dashboardItemOption };
