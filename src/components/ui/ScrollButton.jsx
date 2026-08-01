'use client';

export default function ScrollButton({ label, targetId }) {
  const handleClick = (e) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="border-2 border-white/40 bg-black/50 text-white px-8 py-3.5 rounded-full font-mono text-xs uppercase tracking-widest hover:bg-white/30 active:scale-95 transition-all font-bold backdrop-blur-md shadow-2xl cursor-pointer inline-flex items-center justify-center"
    >
      {label}
    </button>
  );
}
