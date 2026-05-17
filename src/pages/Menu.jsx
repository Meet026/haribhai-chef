import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import MENU_CATEGORIES from "../data/menuData";

export default function Menu() {
  const [selectedCategoryId, setSelectedCategoryId] = useState(MENU_CATEGORIES[0].id);
  const [hoveredCardKey, setHoveredCardKey] = useState(null);
  const mainContentRef = useRef(null);

  const activeCategory = MENU_CATEGORIES.find((c) => c.id === selectedCategoryId);

  useEffect(() => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
    const items = document.querySelectorAll(".editorial-card");
    if (items.length > 0) {
      gsap.fromTo(
        items,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.05, ease: "power2.out" }
      );
    }
  }, [selectedCategoryId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const heroImage = activeCategory?.items[0]?.image ?? "";

  return (
    <div className="menu-split-layout">
      {/* ─── Sidebar ─── */}
      <aside className="menu-sidebar-fixed" style={{ zIndex: 1100 }}>
        <Link to="/" className="menu-back-link-custom">
          <ArrowLeft size={14} />
          <span>Back to Home</span>
        </Link>

        <div className="menu-logo-area">
          <h1 className="menu-brand-title">
            The
            <br />
            Menu
          </h1>
          <p className="menu-brand-desc">
            Explore our culinary selection, crafted with love &amp; tradition.
          </p>
        </div>

        <div className="menu-filter-section">
          <p className="eyebrow" style={{ marginBottom: "16px" }}>
            Categories
          </p>
          <ul className="menu-vertical-cats">
            {MENU_CATEGORIES.map((cat) => (
              <li key={cat.id}>
                <button
                  className={`menu-vert-cat-btn ${selectedCategoryId === cat.id ? "active" : ""}`}
                  onClick={() => setSelectedCategoryId(cat.id)}
                >
                  <span
                    className="cat-bullet"
                    style={{ opacity: selectedCategoryId === cat.id ? 1 : 0 }}
                  >
                    •
                  </span>
                  <span style={{ fontWeight: selectedCategoryId === cat.id ? 600 : 400 }}>
                    {cat.name}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* ─── Main Content ─── */}
      <main className="menu-main-content" ref={mainContentRef}>
        {/* Category Hero Image */}
        <div className="menu-hero-image-wrap">
          <img src={heroImage} alt={activeCategory?.name} className="menu-hero-cat-img" />
          <div className="menu-hero-overlay">
            <h2 className="menu-hero-cat-title">{activeCategory?.name}</h2>
          </div>
        </div>

        <h3 className="menu-items-heading">
          All Items ({activeCategory?.items.length ?? 0})
        </h3>

        {/* Food Editorial Grid */}
        <div className="menu-photo-grid">
          {activeCategory?.items.map((dish) => {
            // Composite key — category + item id — prevents cross-category id collisions
            const cardKey = `${selectedCategoryId}-${dish.id}`;
            return (
              <div
                key={cardKey}
                className={`editorial-card ${hoveredCardKey === cardKey ? "hovered" : ""}`}
                onMouseEnter={() => setHoveredCardKey(cardKey)}
                onMouseLeave={() => setHoveredCardKey(null)}
              >
                <div className="editorial-img-container">
                  <img src={dish.image} alt={dish.name} loading="lazy" />
                  <div className="editorial-hover-add">
                    <span>Add to Order</span>
                    <Plus size={16} />
                  </div>
                </div>

                <div className="editorial-content">
                  <div className="editorial-header">
                    <h4 className="editorial-name">{dish.name}</h4>
                    {dish.price && <span className="editorial-price">{dish.price}</span>}
                  </div>

                  {(dish.reviews || dish.description) && (
                    <div className="editorial-meta">
                      {dish.reviews && (
                        <span className="editorial-reviews">★ {dish.reviews}</span>
                      )}
                      {dish.reviews && dish.description && (
                        <span className="editorial-dot">•</span>
                      )}
                      {dish.description && (
                        <span className="editorial-portion">1 Portion</span>
                      )}
                    </div>
                  )}

                  {dish.description && (
                    <p className="editorial-desc">{dish.description}</p>
                  )}

                  {dish.ingredients?.length > 0 && (
                    <div className="editorial-ingredients">
                      <strong>Ingredients:</strong> {dish.ingredients.join(", ")}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
