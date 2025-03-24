type VendorLayoutParams = {
  children: React.ReactNode;
};

export default function VendorLayout({ children }: VendorLayoutParams) {
  return (
    <div>
      <h1>Vendor Layout</h1>
      {children}
    </div>
  );
}
