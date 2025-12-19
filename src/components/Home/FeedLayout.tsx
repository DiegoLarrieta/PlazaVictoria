import React from "react";

export function FeedLayout({
  left,
  center,
  right,
}: {
  left?: React.ReactNode;
  center: React.ReactNode;
  right?: React.ReactNode;
}) {
  return (
    <div className="w-full">
      {/* Fondo tipo “marco” en desktop */}
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-[72px_1fr] xl:grid-cols-[72px_1fr_280px] gap-6">
          {/* Left */}
          <aside className="hidden md:block">{left}</aside>

          {/* Center */}
          <main className="min-w-0">{center}</main>

          {/* Right (reservado, opcional) */}
          <aside className="hidden xl:block">{right ?? <div />}</aside>
        </div>
      </div>
    </div>
  );
}
