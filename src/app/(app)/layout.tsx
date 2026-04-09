import BottomNav from "@/components/BottomNav";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex justify-center">
      <div className="relative w-full max-w-md">
        <main className="px-5 pt-6 pb-28 min-h-screen">
          {children}
        </main>
        <BottomNav />
      </div>
    </div>
  );
}
