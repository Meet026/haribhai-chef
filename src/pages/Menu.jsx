import React, { useState, useEffect, useRef } from "react";
import { Star } from "lucide-react";
import gsap from "gsap";
import MENU_CATEGORIES from "../data/menuData";
import { motion, AnimatePresence } from "framer-motion";

export default function Menu() {
  const [selectedCategoryId, setSelectedCategoryId] = useState(MENU_CATEGORIES[0].id);
  const activeCategory = MENU_CATEGORIES.find((c) => c.id === selectedCategoryId);
  const heroRef = useRef(null);
  const containerRef = useRef(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Simplified Cinematic Animation
  useEffect(() => {
    const cols = containerRef.current?.querySelectorAll(".masonry-column");
    if (cols?.length > 0) {
      gsap.fromTo(
        cols,
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.05,
          ease: "power1.out"
        }
      );
    }

    if (heroRef.current) {
      const elements = heroRef.current.querySelectorAll(".animate-hero");
      gsap.fromTo(
        elements,
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out"
        }
      );
    }
  }, [selectedCategoryId]);

  // Optimized Distribution logic with useMemo
  const columns = React.useMemo(() => {
    const items = activeCategory?.items || [];
    const colCount = 4;
    const cols = Array.from({ length: colCount }, () => []);
    items.forEach((item, index) => {
      cols[index % colCount].push(item);
    });
    return cols;
  }, [activeCategory]);

  const heroImage = activeCategory?.items[0]?.image ?? "";

  return (
    <div className="menu-page">
      {/* ─── Living Hero Banner (God Mode Immersive) ─── */}
      <section className="menu-hero-banner">
        <div className="menu-hero-inner">
          <AnimatePresence mode="wait">
            {/* Text on Left */}
            <motion.div
              className="menu-hero-content"
              ref={heroRef}
              key={`text-${selectedCategoryId}`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            >
              <div className="menu-hero-editorial">
                <div className="editorial-eyebrow">
                  <span className="eyebrow-text">Fine Dining Selection</span>
                </div>

                <h1 className="menu-hero-title">
                  <motion.span
                    className="title-pre"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                  >
                    Authentic
                  </motion.span>
                  <motion.span
                    className="title-main"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                  >
                    {activeCategory?.name}
                  </motion.span>
                </h1>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Sharp Framed Image on Right */}
          <AnimatePresence mode="wait">
            <motion.div
              className="menu-hero-card-wrapper"
              key={`img-${selectedCategoryId}`}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            >
              <div className="menu-hero-bg-container">
                <img
                  src={heroImage}
                  alt={activeCategory?.name}
                  className="menu-hero-bg"
                  decoding="async"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ─── Premium Editorial Category Nav ─── */}
      <nav className="menu-category-nav">
        <div className="menu-category-container">
          {MENU_CATEGORIES.map((cat) => {
            const isActive = selectedCategoryId === cat.id;
            return (
              <button
                key={cat.id}
                className={`menu-category-pill ${isActive ? "active" : ""}`}
                onClick={() => setSelectedCategoryId(cat.id)}
              >
                <span className="category-name">{cat.name}</span>
                {isActive && (
                  <motion.span
                    layoutId="activeCategoryUnderline"
                    className="category-underline"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </nav>

      {/* ─── True Masonry Grid ─── */}
      <main className="menu-content-wrapper">
        <div className="true-masonry-container" ref={containerRef}>
          {columns.map((columnItems, colIdx) => (
            <div key={`col-${colIdx}`} className="masonry-column">
              {columnItems.map((dish, dishIdx) => (
                <div key={`${dish.id}-${dishIdx}`} className="menu-3d-card">
                  <div className="menu-card-image-wrap">
                    {/* {dishIdx === 0 && colIdx % 2 === 0 && (
                      <div className="menu-card-badge">Signature</div>
                    )} */}
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="menu-card-image"
                      loading="lazy"
                      decoding="async"
                    />

                    <div className="menu-card-content">
                      <h3 className="menu-card-title">{dish.name}</h3>
                      {dish.price && <span className="menu-card-price">{dish.price}</span>}
                      {dish.description && <p className="menu-card-desc">{dish.description}</p>}

                      <div className="menu-card-footer">
                        <div className="menu-card-rating">
                          <Star size={10} fill="currentColor" />
                          <span>{dish.reviews || "4.9"}</span>
                        </div>
                        <span className="menu-action-btn">Details</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
