import React, { useEffect, useState } from "react";

const terminalLines = [
  { type: "cmd", text: "whoami" },
  { type: "out", text: "rawda_sengab · frontend_developer" },
  { type: "cmd", text: "cat stack.json" },
  { type: "out", text: '["React", "Next.js", "TypeScript", "Tailwind"]' },
  { type: "cmd", text: "cat focus.md" },
  { type: "out", text: "building clean, accessible, high-performance UIs" },
];

const TerminalCard = () => {
  const [visibleLines, setVisibleLines] = useState([]);
  const [typing, setTyping] = useState("");

  useEffect(() => {
    let cancelled = false;
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));

    (async function run() {
      while (!cancelled) {
        for (const line of terminalLines) {
          if (line.type === "cmd") {
            setTyping("");
            for (let i = 1; i <= line.text.length; i++) {
              if (cancelled) return;
              await wait(45);
              setTyping(line.text.slice(0, i));
            }
            await wait(300);
            if (cancelled) return;
            setVisibleLines((prev) => [
              ...prev,
              { type: "cmd", text: line.text },
            ]);
            setTyping("");
          } else {
            await wait(200);
            if (cancelled) return;
            setVisibleLines((prev) => [...prev, line]);
          }
        }
        await wait(2500);
        if (cancelled) return;
        setVisibleLines([]);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div
      className="bg-bgColor md:pt-2 pt-0 sm:pb-5 md:pb-1 min-h-[400px] lg:col-span-2 md:col-span-2 col-span-1 flex justify-center items-center"
      data-aos="fade-down"
      data-aos-delay="500"
    >
      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-14px) rotate(6deg); }
        }
        @keyframes floatSlower {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(12px) rotate(-8deg); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      <div className="relative w-full max-w-[380px]">
        <div className="absolute -inset-6 rounded-[2rem] bg-hoverBtn/20 blur-3xl opacity-70" />

        <span
          className="absolute -top-8 -start-6 text-4xl font-mono text-hoverBtn/30 select-none"
          style={{ animation: "floatSlow 6s ease-in-out infinite" }}
        >
          {"</>"}
        </span>
        <span
          className="absolute -bottom-10 -end-4 w-16 h-16 rounded-full border-2 border-dashed border-effectColor/30"
          style={{ animation: "spinSlow 18s linear infinite" }}
        />
        <span
          className="absolute top-1/2 -end-8 w-6 h-6 rounded-md border-2 border-hoverBtn/40"
          style={{ animation: "floatSlower 7s ease-in-out infinite" }}
        />
        <span
          className="absolute -top-4 end-10 text-xl font-mono text-effectColor/40 select-none"
          style={{ animation: "floatSlower 5s ease-in-out infinite" }}
        >
          {"{ }"}
        </span>

        <div
          className="absolute -z-10 inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(currentColor 1px, transparent 1px)",
            backgroundSize: "18px 18px",
            color: "var(--tw-color-hoverBtn, #01cabc)",
            maskImage:
              "radial-gradient(circle at center, black 40%, transparent 75%)",
          }}
        />

        <div className="relative rounded-xl overflow-hidden border border-hoverBtn/20 shadow-[0_0_35px_-5px_#01cabc50] bg-borderColor backdrop-blur-sm">
          <div className="flex items-center gap-2 px-4 py-2.5 bg-black/30 border-b border-hoverBtn/10">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
            <span className="ms-3 text-xs text-secondfontColor/60 font-mono">
              rawda@portfolio: ~
            </span>
          </div>

          <div className="px-5 py-6 font-mono text-sm leading-8 min-h-[300px]">
            {visibleLines.map((line, i) =>
              line.type === "cmd" ? (
                <p key={i}>
                  <span className="text-emerald-400">➜</span>{" "}
                  <span className="text-sky-300">~</span>{" "}
                  <span className="text-secondfontColor">{line.text}</span>
                </p>
              ) : (
                <p key={i} className="text-hoverBtn ps-6">
                  {line.text}
                </p>
              ),
            )}

            <p>
              <span className="text-emerald-400">➜</span>{" "}
              <span className="text-sky-300">~</span>{" "}
              <span className="text-secondfontColor">{typing}</span>
              <span className="inline-block w-2 h-4 align-middle bg-effectColor animate-pulse ms-0.5" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TerminalCard;
