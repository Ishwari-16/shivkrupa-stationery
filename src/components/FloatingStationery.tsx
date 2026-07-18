import React from 'react';
import { PenTool, BookOpen, Printer, Pencil, FileText, Notebook, Book } from 'lucide-react';

export default function FloatingStationery() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0 opacity-40">
      {/* Item 1: Pen */}
      <div className="absolute top-[12%] left-[8%] animate-float-1 text-blue-500/30">
        <PenTool size={36} strokeWidth={1.5} />
      </div>

      {/* Item 2: Open Book */}
      <div className="absolute top-[20%] right-[10%] animate-float-2 text-orange-500/30">
        <BookOpen size={48} strokeWidth={1.2} />
      </div>

      {/* Item 3: Printer */}
      <div className="absolute bottom-[25%] left-[6%] animate-float-3 text-blue-600/25">
        <Printer size={52} strokeWidth={1.2} />
      </div>

      {/* Item 4: Pencil */}
      <div className="absolute bottom-[18%] right-[12%] animate-float-4 text-orange-600/30">
        <Pencil size={40} strokeWidth={1.5} className="rotate-45" />
      </div>

      {/* Item 5: Document */}
      <div className="absolute top-[45%] left-[15%] animate-float-5 text-slate-400/30">
        <FileText size={44} strokeWidth={1.5} />
      </div>

      {/* Item 6: Notebook */}
      <div className="absolute top-[55%] right-[18%] animate-float-6 text-blue-400/35">
        <Book size={40} strokeWidth={1.5} />
      </div>

      {/* Additional smaller floaters for visual complexity */}
      <div className="absolute top-[8%] left-[45%] animate-float-3 text-orange-400/20">
        <Pencil size={24} strokeWidth={1.5} />
      </div>
      
      <div className="absolute bottom-[8%] left-[38%] animate-float-2 text-blue-500/20">
        <PenTool size={28} strokeWidth={1.5} />
      </div>
    </div>
  );
}
