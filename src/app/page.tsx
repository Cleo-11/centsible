import Link from "next/link";

export default function OnboardingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-sm text-center py-12">
        <div className="text-6xl mb-4">💰</div>
        <h1 className="font-heading text-[32px] font-bold mb-2">Centsible</h1>
        <p className="text-dim text-[15px] leading-relaxed mb-10 px-5">
          Your AI-powered finance companion. Track spending, set goals, and get
          personalized insights — all in one place.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mb-10 px-2">
          <span className="pill">📊 Smart Analytics</span>
          <span className="pill">🎯 Goal Tracking</span>
          <span className="pill">🤖 AI Insights</span>
          <span className="pill">🔔 Bill Reminders</span>
        </div>
        <Link href="/dashboard" className="block">
          <button className="btn btn-primary w-full">Get Started</button>
        </Link>
        <p className="mt-4 text-xs text-dim">
          Already have an account?{" "}
          <Link href="/dashboard" className="text-accent-light hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
