import Toggle from "@/components/Toggle";
import Link from "next/link";

export default function ProfilePage() {
  return (
    <>
      <h1 className="font-heading text-[26px] font-bold mb-6">Profile</h1>

      {/* Avatar */}
      <div className="text-center mb-6">
        <div
          className="w-20 h-20 rounded-full mx-auto mb-3 flex items-center justify-center text-[32px] font-heading font-bold text-white"
          style={{ background: "linear-gradient(135deg, #6C5CE7, #00D2A0)" }}
        >
          C
        </div>
        <h2 className="text-lg font-semibold">Cleo</h2>
        <p className="text-[13px] text-dim">cleo@email.com</p>
      </div>

      {/* Preferences */}
      <h3 className="section-title">Preferences</h3>
      <div className="setting-row">
        <span>Dark Mode</span>
        <Toggle defaultOn />
      </div>
      <div className="setting-row">
        <span>Push Notifications</span>
        <Toggle defaultOn />
      </div>
      <div className="setting-row">
        <span>Bill Reminders</span>
        <Toggle defaultOn />
      </div>
      <div className="setting-row">
        <span>AI Insights</span>
        <Toggle defaultOn />
      </div>
      <div className="setting-row">
        <span>Biometric Lock</span>
        <Toggle />
      </div>

      {/* Account */}
      <h3 className="section-title mt-4">Account</h3>
      <div className="setting-row cursor-pointer">
        <span>Export Data (CSV)</span>
        <span className="text-accent-light">→</span>
      </div>
      <div className="setting-row cursor-pointer">
        <span>Connected Banks</span>
        <span className="text-accent-light">→</span>
      </div>
      <Link href="/" className="setting-row cursor-pointer">
        <span className="text-danger">Log Out</span>
        <span className="text-danger">→</span>
      </Link>
    </>
  );
}
