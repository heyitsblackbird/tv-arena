"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
    { name: "Leaderboard", href: "/" },
    { name: "Arena", href: "/arena" },
    { name: "Charts", href: "/charts" },
    { name: "Guess", href: "/guess" }
];

export function TabNav(){
    const pathname = usePathname();
    return (
        <nav className="inline-flex gap-1 rounded-full bg-surface p-1.5 shadow-md">
            {tabs.map((tab) => {
                const isActive = pathname === tab.href;
                return (
                    <Link
                        key={tab.name}
                        href={tab.href}
                        className={`px-5 py-2 rounded-full text-xs uppercase font-bold tracking-[0.15em] transition-colors duration-200 ease-out ${
                            isActive ? "bg-accent text-white" : "text-ink/70 hover:text-ink"
                        }`}
                    >
                        {tab.name}
                    </Link>
                );
            }

            )}
        </nav>
    );

}
