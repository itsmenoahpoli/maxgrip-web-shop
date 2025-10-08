"use client";

import { useEffect } from "react";

type Props = {
  src: string;
  alt?: string;
  open: boolean;
  onClose: () => void;
};

export default function ImageLightbox({ src, alt, open, onClose }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      onClick={onClose}
    >
      <img
        src={src}
        alt={alt || ""}
        className="max-h-[90vh] max-w-[95vw] object-contain"
        onClick={(e) => e.stopPropagation()}
      />
      <button
        aria-label="Close"
        className="absolute top-4 right-4 text-white/80 hover:text-white text-2xl"
        onClick={onClose}
      >
        ×
      </button>
    </div>
  );
}


