interface Props {
  condition: boolean;
  children: React.ReactNode;
}
export function If(props: Props) {
  return props.condition ? <>{props.children}</> : <></>;
}
