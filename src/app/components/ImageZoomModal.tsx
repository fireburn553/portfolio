// src/app/components/ImageZoomModal.tsx
"use client";

import {
  TransformWrapper,
  TransformComponent,
  useControls,
} from "react-zoom-pan-pinch";
import Image from "next/image";

interface ImageZoomModalProps {
  src: string;
  onClose: () => void;
}

const Controls = () => {
  const { zoomIn, zoomOut, resetTransform } = useControls();
  return (
    <div className="absolute top-4 right-4 z-50 flex space-x-2">
      <button
        onClick={() => zoomIn()}
        className="bg-white/20 text-white rounded-full p-2 hover:bg-white/30"
      >
        +
      </button>
      <button
        onClick={() => zoomOut()}
        className="bg-white/20 text-white rounded-full p-2 hover:bg-white/30"
      >
        -
      </button>
      <button
        onClick={() => resetTransform()}
        className="bg-white/20 text-white rounded-full p-2 hover:bg-white/30"
      >
        x
      </button>
    </div>
  );
};

export default function ImageZoomModal({ src, onClose }: ImageZoomModalProps) {
  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="relative w-full h-full max-w-5xl max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white text-3xl z-50"
        >
          &times;
        </button>
        <TransformWrapper>
          <TransformComponent
            wrapperClass="!w-full !h-full"
            contentClass="!w-full !h-full"
          >
            {/* FIX: Add an explicit relative div as the direct parent */}
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt="Zoomable project image"
                fill
                // FIX: Update sizes to be more accurate for the modal
                sizes="(max-width: 1280px) 100vw, 1280px"
                style={{ objectFit: "contain" }}
              />
            </div>
          </TransformComponent>
        </TransformWrapper>
      </div>
    </div>
  );
}
