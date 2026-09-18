// src/features/explore/lodges/pages/LodgeProfilePage.jsx

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiHeart,
  FiMapPin,
  FiStar,
  FiChevronRight,
  FiSearch,
} from "react-icons/fi";
import {
  fetchLodgeById,
  fetchMoreLodges,
} from "../../../../api/lodges.api";
import LodgeCard from "../components/LodgeCard";
import styles from "./LodgeProfilePage.module.css";

export default function LodgeProfilePage() {
  const { id: lodgeId } = useParams();
  const navigate = useNavigate();

  const [lodge, setLodge] = useState(null);
  const [moreLodges, setMoreLodges] = useState([]);
  const [status, setStatus] = useState("loading");
  const [saved, setSaved] = useState(false);
  const [showFullGallery, setShowFullGallery] = useState(false);
  const [showAllReviews, setShowAllReviews] = useState(false);

  useEffect(() => {
    let cancelled = false;

    Promise.all([
      fetchLodgeById(lodgeId),
      fetchMoreLodges(lodgeId),
    ])
      .then(([profile, related]) => {
        if (cancelled) return;

        setLodge(profile);
        setMoreLodges(related);
        setStatus("ready");
      })
      .catch(() => {
        if (!cancelled) {
          setStatus("error");
        }
      });

    return () => {
      cancelled = true;
    };
  }, [lodgeId]);

  if (status === "loading") {
    return (
      <div className={styles.page}>
        <p className={styles.stateMessage}>Loading lodge…</p>
      </div>
    );
  }

  if (status === "error" || !lodge) {
    return (
      <div className={styles.page}>
        <p className={styles.stateMessage}>
          Couldn't load this lodge. Please try again.
        </p>
      </div>
    );
  }

  const reviews = Array.isArray(lodge.reviews)
    ? lodge.reviews
    : [];

  const reviewCount = reviews.length;

  const visibleReviews = showAllReviews
    ? reviews
    : reviews.slice(0, 3);

  const gallery = Array.isArray(lodge.gallery)
    ? lodge.gallery
    : [];

  return (
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <button
            type="button"
            onClick={() => navigate(-1)}
            aria-label="Go back"
            className={styles.iconButton}
          >
            <FiArrowLeft size={20} />
          </button>

          <h1 className={styles.headerTitle}>
            {lodge.name}
          </h1>

          <button
            type="button"
            onClick={() => setSaved((current) => !current)}
            aria-label={
              saved ? "Remove from saved" : "Save lodge"
            }
            className={styles.iconButton}
          >
            <FiHeart
              size={20}
              fill={saved ? "#ffffff" : "none"}
            />
          </button>
        </div>

        <button
          type="button"
          className={styles.searchWrapper}
          onClick={() => navigate("/lodges/search")}
        >
          <FiSearch
            size={18}
            className={styles.searchIcon}
          />

          <span className={styles.searchPlaceholder}>
            Search vendors, lodges, food...
          </span>
        </button>
      </header>

      {/* Gallery */}
      {!showFullGallery ? (
        gallery.length > 0 && (
          <div className={styles.gallery}>
            <img
              src={gallery[0]}
              alt={lodge.name}
              className={styles.mainImage}
            />

            {gallery.length > 1 && (
              <img
                src={gallery[1]}
                alt=""
                className={`${styles.thumbImage} ${
                  gallery.length === 2
                    ? styles.singleThumb
                    : ""
                }`}
              />
            )}

            {gallery.length > 2 && (
              <img
                src={gallery[2]}
                alt=""
                className={styles.thumbImage}
              />
            )}

            {gallery.length > 1 && (
              <button
                type="button"
                className={styles.seeMoreButton}
                onClick={() => setShowFullGallery(true)}
              >
                See more ({gallery.length} photos)
              </button>
            )}
          </div>
        )
      ) : (
        <div className={styles.fullGalleryWrapper}>
          <div className={styles.fullGalleryHeader}>
            <button
              type="button"
              className={styles.backToPreviewButton}
              onClick={() => setShowFullGallery(false)}
            >
              <FiArrowLeft size={16} />
              Back to photos
            </button>
          </div>

          <div className={styles.fullGallery}>
            {gallery.map((src, index) => (
              <img
                key={`${src}-${index}`}
                src={src}
                alt={`${lodge.name} photo ${index + 1}`}
                className={styles.fullGalleryImage}
              />
            ))}
          </div>
        </div>
      )}

      {/* Lodge information */}
      <div className={styles.content}>
        <p className={styles.subtitle}>
          {lodge.subtitle}
        </p>

        <p className={styles.tagline}>
          {lodge.tagline}
        </p>

        <p className={styles.roomInfo}>
          {lodge.roomInfo}
        </p>

        {/* Map + rating/reviews */}
        {/* Map + rating */}
<div className={styles.mapRow}>
  <a
    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      lodge.subtitle
    )}`}
    target="_blank"
    rel="noopener noreferrer"
    className={styles.mapButton}
  >
    <FiMapPin size={14} />
    <span>View on map</span>
  </a>

  <div className={styles.ratingSummary}>
    <div className={styles.ratingColumn}>
      <span className={styles.ratingValue}>
        {lodge.rating}
      </span>

      <div className={styles.ratingStars}>
        {Array.from({ length: 5 }).map((_, index) => (
          <FiStar
            key={index}
            size={11}
            className={styles.ratingStar}
            fill={
              index < Math.round(lodge.rating)
                ? "currentColor"
                : "none"
            }
          />
        ))}
      </div>
    </div>

    <div className={styles.reviewSummary}>
      <span className={styles.reviewNumber}>
        {lodge.reviews.length}
      </span>

      <span className={styles.reviewLabel}>
        Reviews
      </span>
    </div>
  </div>
</div>

        {/* Facilities */}
        <h2 className={styles.sectionTitle}>
          Facilities
        </h2>

        <ul className={styles.facilitiesList}>
          {lodge.facilities.map((facility) => (
            <li
              key={facility}
              className={styles.facilityItem}
            >
              {facility}
            </li>
          ))}
        </ul>

        {/* Reviews */}
        {reviews.length > 0 && (
          <>
            <h2 className={styles.sectionTitle}>
              Reviews
            </h2>

            <div className={styles.reviewsList}>
              {visibleReviews.map((review) => (
                <div
                  key={review.id}
                  className={styles.reviewCard}
                >
                  <div className={styles.reviewHeader}>
                    <div className={styles.avatar}>
                      {review.name?.charAt(0)}
                    </div>

                    <div>
                      <p
                        className={styles.reviewerName}
                      >
                        {review.name}
                      </p>

                      <p
                        className={styles.reviewTime}
                      >
                        {review.timeAgo}
                      </p>
                    </div>
                  </div>

                  <div className={styles.starsRow}>
                    {Array.from({
                      length: review.rating,
                    }).map((_, index) => (
                      <FiStar
                        key={index}
                        size={11}
                        fill="currentColor"
                      />
                    ))}
                  </div>

                  <p className={styles.reviewText}>
                    {review.text}
                  </p>
                </div>
              ))}
            </div>

            {!showAllReviews &&
              reviewCount > visibleReviews.length && (
                <button
                  type="button"
                  className={styles.seeAllButton}
                  onClick={() => setShowAllReviews(true)}
                >
                  See all {reviewCount} reviews
                </button>
              )}
          </>
        )}

        {/* More apartments */}
        {moreLodges.length > 0 && (
          <>
            <div className={styles.moreHeader}>
              <h2 className={styles.sectionTitle}>
                More apartments
              </h2>

              <button
                type="button"
                className={styles.moreArrow}
                onClick={() => navigate("/lodges")}
                aria-label="See more apartments"
              >
                <FiChevronRight size={18} />
              </button>
            </div>

            <div className={styles.moreGrid}>
              {moreLodges.slice(0, 2).map((related) => (
                <LodgeCard
                  key={related.id}
                  lodge={related}
                  onClick={(selectedLodge) =>
                    navigate(
                      `/lodges/${selectedLodge.id}`
                    )
                  }
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}