export default function ({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="p-2 border-b text-center">
        20% off on every order for next 5 days{" "}
      </div>
      {children}
    </div>
  );
}
