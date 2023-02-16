export default function Logo(props: { color: string, size: number }): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width={`${props.size}px`}
      height={`${props.size}px`}
    >
      <path
        fill={props.color}
        d="M 5 5 L 5 27 L 27 27 L 27 5 L 5 5 z M 7 7 L 25 7 L 25 25 L 7 25 L 7 7 z M 9 9 L 9 23 L 15 23 L 15 19 L 19 19 L 19 15 L 23 15 L 23 9 L 9 9 z M 11 11 L 21 11 L 21 13 L 17 13 L 17 17 L 13 17 L 13 21 L 11 21 L 11 11 z"
      />
    </svg>
  );
}
