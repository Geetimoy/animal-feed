import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../config/api";
import { Link } from "react-router-dom";

//const FAQ_API_URL = "https://neonatestaging.com/animal_feed/public/api/faqs";

/**
 * Normalizes the API response into a list of { category, items } groups.
 * - Prefers `grouped` when present.
 * - Falls back to a single group built from `data`, sorted by sort_order.
 * - Groups with no items are dropped.
 */
function normalizeFaqResponse(json) {
  if (Array.isArray(json?.grouped) && json.grouped.length > 0) {
    const groups = json.grouped
      .map((g) => ({
        category: g.category || "General",
        items: Array.isArray(g.items) ? g.items : [],
      }))
      .filter((g) => g.items.length > 0);
    if (groups.length > 0) return groups;
  }
  if (Array.isArray(json?.data) && json.data.length > 0) {
    const sorted = [...json.data].sort(
      (a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0)
    );
    return [{ category: "General", items: sorted }];
  }
  return [];
}

function WheatIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 3v18"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {[5, 8, 11, 14].map((y) => (
        <g key={y}>
          <path
            d={`M12 ${y} C 9.5 ${y - 1.4}, 8 ${y - 3.4}, 9 ${y - 5}`}
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <path
            d={`M12 ${y} C 14.5 ${y - 1.4}, 16 ${y - 3.4}, 15 ${y - 5}`}
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </g>
      ))}
      <path
        d="M12 21c-1.6 0-2.8-1-2.8-1s1.2-1 2.8-1 2.8 1 2.8 1-1.2 1-2.8 1z"
        fill="currentColor"
      />
    </svg>
  );
}

function ChevronIcon({ open }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
        open ? "rotate-180" : "rotate-0"
      }`}
      aria-hidden="true"
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5" aria-hidden="true">
      <path
        d="M5 5l10 10M15 5L5 15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-[#1F3D2B]/10 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full cursor-pointer flex items-center justify-between gap-4 py-4 px-1 text-left group"
        aria-expanded={isOpen}
      >
        <span
          className={`text-[15px] leading-snug transition-colors ${
            isOpen
              ? "text-[#1F3D2B] font-semibold"
              : "text-[#2B2620] font-medium group-hover:text-[#1F3D2B]"
          }`}
        >
          {item.question}
        </span>
        <span
          className={`flex items-center justify-center w-7 h-7 rounded-full shrink-0 transition-colors ${
            isOpen ? "bg-[#1F3D2B] text-[#FAF6EC]" : "bg-[#1F3D2B]/8 text-[#1F3D2B]"
          }`}
        >
          <ChevronIcon open={isOpen} />
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-[13.5px] leading-relaxed text-[#2B2620]/70 pb-4 pr-9 pl-1">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

function FAQSkeleton() {
  return (
    <div className="px-5 py-3 space-y-4 animate-pulse">
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="flex items-center justify-between gap-4 py-1">
          <div
            className="h-3.5 rounded-full bg-[#1F3D2B]/10"
            style={{ width: `${65 - i * 8}%` }}
          />
          <div className="w-7 h-7 rounded-full bg-[#1F3D2B]/10 shrink-0" />
        </div>
      ))}
    </div>
  );
}

function FAQError({ message, onRetry }) {
  return (
    <div className="px-6 py-10 flex flex-col items-center text-center gap-3">
      <span className="flex items-center justify-center w-11 h-11 rounded-full bg-[#B84A3E]/10 text-[#B84A3E]">
        <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5" aria-hidden="true">
          <path
            d="M10 6.5v4M10 13.2h.01M2.9 16h14.2c1.1 0 1.8-1.2 1.3-2.1L11.3 3.4c-.6-1-2-1-2.6 0L1.6 13.9c-.5.9.2 2.1 1.3 2.1Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <p className="text-[13.5px] text-[#2B2620]/70 max-w-xs">
        {message || "Couldn't load the FAQs right now."}
      </p>
      <button
        onClick={onRetry}
        className="mt-1 px-4 py-2 rounded-full bg-[#1F3D2B] text-[#FAF6EC] text-[13px] font-semibold hover:bg-[#16301f] transition-colors"
      >
        Try again
      </button>
    </div>
  );
}

export default function FloatingFAQ() {
  const [isOpen, setIsOpen] = useState(false);
  const [openKey, setOpenKey] = useState(null); // `${groupIndex}-${itemIndex}` of the expanded item

  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [groups, setGroups] = useState([]); // [{ category, items }]
  const [errorMessage, setErrorMessage] = useState("");

  // Load display + body fonts to match the "feed sack tag" aesthetic
  useEffect(() => {
    const id = "faq-widget-fonts";
    if (!document.getElementById(id)) {
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Inter:wght@400;500;600&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  // Lock background scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const fetchFaqs = async () => {
    setStatus("loading");
    setErrorMessage("");
    try {
      const res = await axios.get(`${API_URL}/faqs`);
      console.log("FAQ Response:", res.data);
      // const json = await res.json();
      const normalized = normalizeFaqResponse(res.data);
      if (normalized.length === 0) {
        setGroups([]);
        setStatus("error");
        setErrorMessage("No FAQs are available yet.");
        return;
      }
      setGroups(normalized);
      setOpenKey("0-0"); // expand the first question by default
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Couldn't load the FAQs right now."
      );
    }
  };

  // Fetch the first time the modal is opened; skip re-fetching on subsequent opens
  const handleOpen = () => {
    setIsOpen(true);
    if (status === "idle") {
      fetchFaqs();
    }
  };

  return (
    <div style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      {/* Floating trigger button */}
      <button
        onClick={handleOpen}
        className="fixed bottom-6 cursor-pointer right-6 z-40 group flex items-center gap-2 pl-4 pr-5 py-3 rounded-full
                   bg-gradient-to-br from-[#E3B75B] to-[#C98A2E] text-[#1F3D2B]
                   shadow-[0_8px_24px_rgba(31,61,43,0.35)]
                   ring-1 ring-[#1F3D2B]/20
                   hover:shadow-[0_10px_30px_rgba(31,61,43,0.45)] hover:-translate-y-0.5
                   active:translate-y-0 active:scale-95
                   transition-all duration-300"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-label="Open frequently asked questions"
      >
        <span className="absolute inset-0 rounded-full bg-[#E3B75B]/50 animate-ping-slow -z-10 group-hover:opacity-0" />
        <WheatIcon className="w-5 h-5" />
        <span className="text-[14px] font-semibold tracking-wide">FAQ</span>
      </button>

      {/* Modal overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1F3D2B]/50 backdrop-blur-sm animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label="Frequently asked questions"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          <div className="w-full max-w-lg max-h-[85vh] flex flex-col rounded-2xl overflow-hidden bg-[#FAF6EC] shadow-2xl animate-pop-in">
            {/* Header */}
            <div className="relative bg-[#1F3D2B] px-6 py-5 flex items-start justify-between gap-4">
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, #FAF6EC 0px, #FAF6EC 1px, transparent 1px, transparent 12px)",
                }}
              />
              <div className="relative flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#D9A441] text-[#1F3D2B]">
                  <WheatIcon className="w-5 h-5" />
                </span>
                <div>
                  <h2
                    className="text-[#FAF6EC] text-lg font-semibold leading-tight"
                    style={{ fontFamily: "Fraunces, serif" }}
                  >
                    Frequently asked questions
                  </h2>
                  <p className="text-[#FAF6EC]/60 text-[12.5px] mt-0.5">
                    Feed, delivery and bulk orders
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="relative cursor-pointer shrink-0 flex items-center justify-center w-8 h-8 rounded-full text-[#FAF6EC]/80 hover:text-[#FAF6EC] hover:bg-[#FAF6EC]/10 transition-colors"
                aria-label="Close"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Accordion body */}
            <div className="overflow-y-auto">
              {status === "loading" && <FAQSkeleton />}

              {status === "error" && (
                <FAQError message={errorMessage} onRetry={fetchFaqs} />
              )}

              {status === "success" && (
                <div className="px-5 py-2">
                  {groups.map((group, gIdx) => (
                    <div key={group.category + gIdx} className="mb-1">
                      {groups.length > 1 && (
                        <p className="pt-4 pb-1 px-1 text-[11px] font-semibold tracking-wide uppercase text-[#1F3D2B]/50">
                          {group.category}
                        </p>
                      )}
                      {group.items.map((item, iIdx) => {
                        const key = `${gIdx}-${iIdx}`;
                        return (
                          <FAQItem
                            key={item.id ?? key}
                            item={item}
                            isOpen={openKey === key}
                            onToggle={() =>
                              setOpenKey(openKey === key ? null : key)
                            }
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer CTA */}
            <div className="px-6 py-4 bg-[#1F3D2B]/[0.04] border-t border-[#1F3D2B]/10 flex items-center justify-between gap-3">
              <p className="text-[12.5px] text-[#2B2620]/60">
                Still have questions?
              </p>
              {/* <Link to="/contact-us" className="px-4 py-2 rounded-full bg-[#B84A3E] text-[#FAF6EC] text-[13px] font-semibold hover:bg-[#a03e33] transition-colors">
                Contact our team
              </Link> */}
              <Link to="/contact-us" onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-full bg-[#B84A3E] text-[#FAF6EC] text-[13px] font-semibold hover:bg-[#a03e33] transition-colors"
              >
                Contact our team
              </Link>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.6; }
          80%, 100% { transform: scale(1.6); opacity: 0; }
        }
        .animate-ping-slow { animation: ping-slow 2.2s cubic-bezier(0,0,0.2,1) infinite; }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.2s ease-out; }

        @keyframes pop-in {
          from { opacity: 0; transform: translateY(12px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-pop-in { animation: pop-in 0.25s cubic-bezier(0.16,1,0.3,1); }
      `}</style>
    </div>
  );
}
