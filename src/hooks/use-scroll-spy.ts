import { useEffect, useState, useRef, useCallback } from "react";

export function useScrollSpy(sectionIds: string[]) {
  const [activeId, setActiveId] = useState("");
  const visibleRef = useRef(new Set<string>());

  const pickActive = useCallback(() => {
    const visible = visibleRef.current;

    // At the bottom of the page, activate the last section
    const atBottom =
      window.innerHeight + window.scrollY >= document.body.scrollHeight - 50;
    if (atBottom && visible.size > 0) {
      const last = [...sectionIds].reverse().find((id) => visible.has(id));
      if (last) {
        setActiveId(last);
        return;
      }
    }

    // Find the visible section whose top is closest to (but below) the viewport top
    let best = "";
    let bestTop = Infinity;
    for (const id of sectionIds) {
      if (!visible.has(id)) continue;
      const el = document.getElementById(id);
      if (!el) continue;
      const top = el.getBoundingClientRect().top;
      // Pick the section whose top is closest to the header (80px)
      const dist = Math.abs(top - 80);
      if (dist < bestTop) {
        bestTop = dist;
        best = id;
      }
    }
    if (best) setActiveId(best);
  }, [sectionIds]);

  useEffect(() => {
    const visible = visibleRef.current;
    visible.clear();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.add(entry.target.id);
          } else {
            visible.delete(entry.target.id);
          }
        }
        pickActive();
      },
      { rootMargin: "-60px 0px 0px 0px", threshold: 0 }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    // Also listen to scroll for bottom-of-page detection
    window.addEventListener("scroll", pickActive, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", pickActive);
    };
  }, [sectionIds, pickActive]);

  return activeId;
}
