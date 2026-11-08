"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

// LGPD: signed-in users who have not accepted the current privacy policy (accounts
// created before it, or after a policy update) see this dialog once and must accept
// it or sign out. The acceptance is recorded by POST /api/privacy.
export default function PrivacyGate() {
    const { status } = useSession();
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (status !== "authenticated" || pathname === "/privacy") return;
        let cancelled = false;
        fetch("/api/privacy")
            .then((res) => (res.ok ? res.json() : null))
            .then((data) => { if (!cancelled && data && !data.accepted) setOpen(true); })
            .catch(() => {});
        return () => { cancelled = true; };
    }, [status, pathname]);

    if (!open) return null;

    const accept = async () => {
        setSaving(true);
        setError(false);
        try {
            const res = await fetch("/api/privacy", { method: "POST" });
            if (!res.ok) throw new Error();
            setOpen(false);
        } catch {
            setError(true);
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" role="dialog" aria-modal="true" aria-labelledby="privacy-update-title">
            <div className="w-full max-w-lg flex flex-col gap-5 bg-bgsecondary text-primary rounded-xl p-8">
                <h2 id="privacy-update-title" className="text-2xl font-bold">We updated our Privacy Policy</h2>
                <p className="leading-relaxed">
                    To keep using Project Time Tracker, please read and accept our Privacy Policy. It explains what data
                    we keep, why, and how to access or delete it.
                </p>
                <p>
                    <Link href="/privacy" target="_blank" className="text-highlight underline hover:text-highlighthover">Read the Privacy Policy</Link>
                </p>
                {error && <p className="text-highlight text-sm">Could not save your answer. Please try again.</p>}
                <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
                    <button type="button" onClick={() => signOut({ callbackUrl: "/login" })}
                        className="px-4 py-2 rounded-md bg-transparent border border-bgmenu hover:bg-bgmenu transition">
                        Sign out
                    </button>
                    <button type="button" onClick={accept} disabled={saving}
                        className="px-4 py-2 rounded-md bg-highlight hover:bg-highlighthover font-semibold transition disabled:opacity-60">
                        {saving ? "Saving..." : "I have read and agree"}
                    </button>
                </div>
            </div>
        </div>
    );
}
