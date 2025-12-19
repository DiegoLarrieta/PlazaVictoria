import React from "react";
import { X, Copy, MessageCircle } from "lucide-react";

export function ShareModal({
  postId,
  onClose,
}: {
  postId: string;
  onClose: () => void;
}) {
  const link = React.useMemo(() => {
    // Como aún no hay página de detalle, compartimos ancla al post.
    // Luego lo cambiamos a /novedades/<slug> sin romper la UI.
    return `${window.location.origin}${window.location.pathname}#${postId}`;
  }, [postId]);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(link);
      alert("Link copiado ✅");
    } catch {
      // fallback básico
      prompt("Copia este link:", link);
    }
  };

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(link)}`;

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Compartir publicación"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl bg-white p-4 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold">Compartir</h3>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-zinc-100"
            aria-label="Cerrar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-4 space-y-3">
          <button
            type="button"
            onClick={onCopy}
            className="flex w-full items-center justify-between rounded-xl border border-zinc-200 px-4 py-3 text-sm hover:bg-zinc-50"
          >
            <span className="flex items-center gap-2">
              <Copy className="h-4 w-4" /> Copiar link
            </span>
            <span className="text-zinc-500">↗</span>
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="flex w-full items-center justify-between rounded-xl border border-zinc-200 px-4 py-3 text-sm hover:bg-zinc-50"
          >
            <span className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </span>
            <span className="text-zinc-500">↗</span>
          </a>

          <div className="rounded-xl bg-zinc-50 p-3 text-xs text-zinc-600 break-all">
            {link}
          </div>
        </div>
      </div>
    </div>
  );
}
