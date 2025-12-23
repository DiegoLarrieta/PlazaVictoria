import React from "react";
import { Share2 } from "lucide-react";
import { ShareModal } from "./ShareModal";

type ShareButtonProps = {
  slug: string;
};

export function ShareButton({ slug }: ShareButtonProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 px-3 py-2 text-sm hover:bg-zinc-50"
        aria-label="Compartir"
      >
        <Share2 className="h-4 w-4" />
        <span className="hidden sm:inline">Compartir</span>
      </button>

      {open && <ShareModal slug={slug} onClose={() => setOpen(false)} />}
    </>
  );
}
