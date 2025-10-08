"use client"

import Image from "next/image";
import { useState } from "react";
import { ShoppingCart, Plus } from "lucide-react";
import { formatCurrency } from "../lib/currency";
import ImageLightbox from "./utils/ImageLightbox";


type Props = {
  title: string;
  price: number;
  imageSrc: string;
};

export default function ProductCard({ title, price, imageSrc }: Props) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  return (
    <article className="group rounded-2xl border border-gray-200 bg-white p-0 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className="relative aspect-square w-full overflow-hidden rounded-t-xl bg-transparent">
        <button className="absolute inset-0 cursor-pointer" onClick={() => setLightboxOpen(true)}>
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="(min-width: 768px) 250px, 45vw"
            className="object-cover"
          />
        </button>
      </div>
      <div className="p-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-sm font-medium text-gray-900">{title}</h3>
          <p className="mt-1 text-xl font-medium text-red-600">{formatCurrency(price)}</p>
        </div>
        <button className="relative p-2 rounded-lg border border-red-200 bg-red-50 text-red-600 hover:bg-red-100">
          <ShoppingCart className="h-4 w-4" />
          <Plus className="h-3 w-3 absolute -top-1 -right-1" />
        </button>
      </div>
      <ImageLightbox src={imageSrc} alt={title} open={lightboxOpen} onClose={() => setLightboxOpen(false)} />
    </article>
  );
}
