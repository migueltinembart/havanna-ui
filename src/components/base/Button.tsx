import { theme } from '~/types/theme';

export default function Button(props: {
  theme: theme;
  text: string;
}): JSX.Element {
  const primary = [
    'bg-yellow-400 border-yellow-400 border-2 border-solid',
    'hover:bg-yellow-600 hover:border-yellow-600',
  ];

  const secondary = [
    'bg-inherit',
    'border-yellow-400 border-2 border-solid',
    'text-white',
    'hover:bg-yellow-400',
    '',
  ];

  let classes = ['w-auto', 'h-7', 'px-2', 'rounded-sm'];

  if (props.theme === theme.PRIMARY) {
    classes = classes.concat(primary);
  }

  if (props.theme === theme.SECONDARY) {
    classes = classes.concat(secondary);
  }

  return <button className={classes.join(' ')}>{props.text}</button>;
}
