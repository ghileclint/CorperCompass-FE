// src/features/explore/vendors/pages/VendorProfilePage.jsx

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiHeart,
  FiShare2,
  FiMapPin,
  FiStar,
  FiChevronRight,
} from "react-icons/fi";

import {
  fetchVendorById,
  fetchMoreVendors,
} from "../../../../api/vendors.api";

import ShareModal from "../components/ShareModal";
import styles from "./VendorProfilePage.module.css";

export default function VendorProfilePage() {
  const { id: vendorId } = useParams();
  const navigate = useNavigate();

  const [vendor, setVendor] = useState(null);
  const [moreVendors, setMoreVendors] = useState([]);
  const [status, setStatus] = useState("loading");
  const [showShare, setShowShare] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [showFullGallery, setShowFullGallery] = useState(false);
  const [savedMoreVendorIds, setSavedMoreVendorIds] = useState(new Set());

  useEffect(() => {
    let cancelled = false;

    async function loadVendor() {
      try {
        setStatus("loading");

        const [profile, related] = await Promise.all([
          fetchVendorById(vendorId),
          fetchMoreVendors(vendorId),
        ]);

        if (cancelled) return;

        setVendor(profile);
        setMoreVendors(Array.isArray(related) ? related : []);
        setStatus("ready");
      } catch (error) {
        console.error(error);

        if (!cancelled) {
          setStatus("error");
        }
      }
    }

    loadVendor();

    return () => {
      cancelled = true;
    };
  }, [vendorId]);

  const handleSave = () => {
    setSaved((current) => !current);
  };

  const handleViewMap = () => {
    if (!vendor?.location) return;

    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      vendor.location
    )}`;

    window.open(mapUrl, "_blank", "noopener,noreferrer");
  };

  const handleMessage = () => {
    setShowMessage(true);
  };

  const closeMessage = () => {
    setShowMessage(false);
    setMessage("");
  };

  const submitMessage = (event) => {
    event.preventDefault();

    if (!message.trim()) return;

    window.alert(
      `Your message for ${vendor.name} is ready to be connected to the messaging API.`
    );

    closeMessage();
  };

  const handleMoreVendor = (id) => {
    if (!id) return;

    navigate(`/vendors/${id}`);
  };

  const handleToggleSaveMoreVendor = (id) => {
    setSavedMoreVendorIds((current) => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  if (status === "loading") {
    return (
      <main className={styles.page}>
        <div className={styles.stateMessage}>Loading vendor…</div>
      </main>
    );
  }

  if (status === "error" || !vendor) {
    return (
      <main className={styles.page}>
        <div className={styles.stateMessage}>
          <p>Couldn&apos;t load this vendor.</p>

          <button
            type="button"
            className={styles.retryButton}
            onClick={() => window.location.reload()}
          >
            Try again
          </button>
        </div>
      </main>
    );
  }

  const gallery = Array.isArray(vendor.gallery)
    ? vendor.gallery.filter(Boolean)
    : [];

  const mainImage = gallery[0] || vendor.image || "";

  const sideImages = gallery.slice(1, 3);

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <button
          type="button"
          className={styles.backButton}
          onClick={() => navigate(-1)}
          aria-label="Go back"
        >
          <FiArrowLeft />
        </button>

        <h1 className={styles.title}>{vendor.name}</h1>

        <div className={styles.headerActions}>
          <button
            type="button"
            className={styles.iconButton}
            onClick={handleSave}
            aria-label={saved ? "Unsave vendor" : "Save vendor"}
          >
            <FiHeart
              fill={saved ? "currentColor" : "none"}
              className={saved ? styles.savedHeart : ""}
            />
          </button>

          <button
            type="button"
            className={styles.iconButton}
            onClick={() => setShowShare(true)}
            aria-label="Share vendor"
          >
            <FiShare2 />
          </button>
        </div>
      </header>

      {!showFullGallery ? (
        <section className={styles.gallery}>
          <div className={styles.mainImageWrapper}>
            {mainImage ? (
              <img
                src={mainImage}
                alt={vendor.name}
                className={styles.mainImage}
              />
            ) : (
              <div className={styles.imagePlaceholder}>
                No image available
              </div>
            )}
          </div>

          <div className={styles.sideImages}>
            {sideImages.map((image, index) => (
              <div
                className={styles.sideImageWrapper}
                key={`${image}-${index}`}
              >
                <img
                  src={image}
                  alt={`${vendor.name} ${index + 2}`}
                  className={styles.sideImage}
                />
              </div>
            ))}

            {sideImages.length < 2 &&
              Array.from({ length: 2 - sideImages.length }).map(
                (_, index) => (
                  <div
                    className={styles.sideImagePlaceholder}
                    key={`placeholder-${index}`}
                  />
                )
              )}
          </div>

          {gallery.length > 1 && (
            <button
              type="button"
              className={styles.seeMoreButton}
              onClick={() => setShowFullGallery(true)}
            >
              See more
            </button>
          )}
        </section>
      ) : (
        <section className={styles.fullGalleryWrapper}>
          <div className={styles.fullGalleryHeader}>
            <button
              type="button"
              className={styles.backToPreviewButton}
              onClick={() => setShowFullGallery(false)}
            >
              <FiArrowLeft size={16} /> Back to photos
            </button>
          </div>
          <div className={styles.fullGallery}>
            {gallery.map((src, i) => (
              <img
                key={src + i}
                src={src}
                alt={`${vendor.name} photo ${i + 1}`}
                className={styles.fullGalleryImage}
              />
            ))}
          </div>
        </section>
      )}

      <section className={styles.content}>
        <h2 className={styles.vendorHeading}>{vendor.subtitle}</h2>

        <p className={styles.description}>{vendor.description}</p>

        <div className={styles.metaRow}>
          <button
            type="button"
            className={styles.mapButton}
            onClick={handleViewMap}
          >
            <FiMapPin />
            <span>View on map</span>
          </button>

          <div className={styles.ratingStats}>
            <div className={styles.ratingColumn}>
              <strong>{vendor.rating}</strong>
              <div className={styles.starsRow}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <FiStar
                    key={i}
                    className={styles.statStar}
                    fill={i < Math.round(vendor.rating) ? "#14532d" : "none"}
                  />
                ))}
              </div>
            </div>

            <div className={styles.statDivider} />

            <div className={styles.ratingColumn}>
              <strong>{vendor.reviews}</strong>
              <span className={styles.statLabel}>Reviews</span>
            </div>
          </div>
        </div>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.primaryButton}
            onClick={handleMessage}
          >
            Message vendor
          </button>

          <button
            type="button"
            className={styles.secondaryButton}
            onClick={handleSave}
          >
            {saved ? "Saved this vendor" : "Save this vendor"}
          </button>
        </div>

        {moreVendors.length > 0 && (
          <section className={styles.moreSection}>
            <div className={styles.moreHeader}>
              <h2 className={styles.moreTitle}>More vendors</h2>

              <button
                type="button"
                className={styles.moreArrow}
                onClick={() => navigate("/vendors")}
                aria-label="View all vendors"
              >
                <FiChevronRight />
              </button>
            </div>

            <div className={styles.moreGrid}>
              {moreVendors.map((item) => (
                <article
                  key={item.id}
                  className={styles.moreCard}
                  onClick={() => handleMoreVendor(item.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      handleMoreVendor(item.id);
                    }
                  }}
                >
                  <div className={styles.moreImageWrapper}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className={styles.moreImage}
                    />

                    <button
                      type="button"
                      className={styles.cardHeart}
                      aria-label={
                        savedMoreVendorIds.has(item.id)
                          ? `Remove ${item.name} from saved`
                          : `Save ${item.name}`
                      }
                      onClick={(event) => {
                        event.stopPropagation();
                        handleToggleSaveMoreVendor(item.id);
                      }}
                    >
                      <FiHeart
                        fill={savedMoreVendorIds.has(item.id) ? "currentColor" : "none"}
                        className={savedMoreVendorIds.has(item.id) ? styles.savedHeart : ""}
                      />
                    </button>
                  </div>

                  <div className={styles.moreBody}>
                    <p className={styles.moreName}>{item.name}</p>

                    <p className={styles.moreLocation}>
                      {item.location}
                    </p>

                    <p className={styles.moreRating}>
                      <FiStar />

                      <span>{item.rating}</span>

                      <span>· {item.reviews} reviews</span>
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </section>

      {showShare && (
        <ShareModal
          vendorName={vendor.name}
          onCancel={() => setShowShare(false)}
          onSelect={() => setShowShare(false)}
        />
      )}

      {showMessage && (
        <div className={styles.messageOverlay}>
          <div className={styles.messageModal}>
            <div className={styles.messageHeader}>
              <h2>Message vendor</h2>

              <button
                type="button"
                onClick={closeMessage}
                className={styles.closeButton}
              >
                ×
              </button>
            </div>

            <p className={styles.messageVendorName}>
              {vendor.name}
            </p>

            <form onSubmit={submitMessage}>
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Write your message..."
                className={styles.messageInput}
                rows={5}
              />

              <button
                type="submit"
                className={styles.sendButton}
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
