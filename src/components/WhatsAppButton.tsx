import React from 'react';
import { MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 left-6 z-40 group">
      {/* Pulse rings */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping -z-10 scale-110" />
      
      <a
        href={BUSINESS_INFO.whatsappUrl}
        target="_blank"
        referrerPolicy="no-referrer"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white rounded-full shadow-lg hover:shadow-emerald-200 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-200"
        aria-label="Chat with Shivkrupa Team on WhatsApp"
      >
        {/* Customized WhatsApp styled bubble */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.847.001-2.63-1.019-5.101-2.872-6.958C16.612 1.997 14.14 1.011 11.517 1.01c-5.44 0-9.866 4.415-9.869 9.85-.001 2.031.541 4.021 1.571 5.803l-.154.51L1.96 21.07l4.894-1.284-.207-.632zM17.18 14.39c-.3-.15-1.77-.874-2.046-.975-.276-.1-.477-.15-.677.15-.2.3-.775.975-.95 1.174-.176.2-.351.224-.651.075-.3-.15-1.265-.467-2.41-1.485-.89-.794-1.49-1.775-1.665-2.074-.176-.3-.019-.461.13-.61.135-.133.3-.349.45-.523.15-.174.2-.3.3-.498.1-.2.05-.374-.025-.524-.075-.15-.677-1.632-.926-2.23-.244-.583-.493-.503-.677-.512-.174-.008-.375-.01-.575-.01-.2 0-.527.075-.802.374-.276.3-1.053 1.028-1.053 2.507s1.079 2.905 1.229 3.104c.15.2 2.122 3.24 5.138 4.542.717.31 1.277.495 1.713.633.72.228 1.376.196 1.894.118.577-.087 1.772-.724 2.022-1.424.252-.7.252-1.3.176-1.425-.076-.12-.276-.195-.577-.345z" />
        </svg>
      </a>

      {/* Floating tooltip */}
      <span className="absolute left-16 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 shadow-lg whitespace-nowrap">
        Chat with us!
      </span>
    </div>
  );
}
