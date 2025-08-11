export default function ErrorMessage({ msg = "Something went wrong." }: { msg?: string }) {
  return <div style={{ padding: 16, color: "crimson", textAlign: "center" }}>{msg}</div>;
}