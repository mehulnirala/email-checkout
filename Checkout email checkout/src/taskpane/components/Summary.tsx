export default function Summary(props: any) {
  return <div>{JSON.stringify(props.orderDetails, null, 2)}</div>;
}
