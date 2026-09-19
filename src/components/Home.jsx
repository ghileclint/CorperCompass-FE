import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSliders, FiSearch, FiPlus, FiChevronDown } from "react-icons/fi";
import styles from "../css/home.module.css";
import PostCard from "./PostCard";
import CreatePost from "./CreatePost";

export default function Home({ posts, api }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [createOpen, setCreateOpen] = useState(false);

  const submitSearch = e => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/?query=${encodeURIComponent(query.trim())}`);
  };

  return (
    <main className={styles.appShell}>
      <header className={styles.topHeader}>
        <h1>Home</h1>
        <button className={styles.headerFilter} aria-label="Feed settings">
          <FiSliders />
        </button>
      </header>

      <section className={styles.searchSection}>
        <form className={styles.searchBox} onSubmit={submitSearch}>
          <FiSearch />
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search vendors, lodges, food..."
            aria-label="Search vendors, lodges, food"
          />
        </form>
      </section>

      <section className={styles.feedWrap}>
        <div className={styles.feedToolbar}>
          <div>
            <span className={styles.feedTitle}>Latest</span>
            <button className={styles.sortButton} type="button">
              For you <FiChevronDown />
            </button>
          </div>
          <button className={styles.createButton} onClick={() => setCreateOpen(true)}>
            <FiPlus /> Create post
          </button>
        </div>

        <div className={styles.feed}>
          {posts.map(post => (
            <PostCard key={post.id} post={post} api={api} />
          ))}
        </div>
      </section>

      <button className={styles.mobileCreate} onClick={() => setCreateOpen(true)} aria-label="Create post">
       <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 12.5417C0 5.6151 5.6151 0 12.5417 0C13.0249 0 13.4167 0.391751 13.4167 0.875C13.4167 1.35825 13.0249 1.75 12.5417 1.75C6.58159 1.75 1.75 6.58159 1.75 12.5417C1.75 18.5017 6.58159 23.3333 12.5417 23.3333C18.5017 23.3333 23.3333 18.5017 23.3333 12.5417C23.3333 12.0584 23.7251 11.6667 24.2083 11.6667C24.6916 11.6667 25.0833 12.0584 25.0833 12.5417C25.0833 19.4682 19.4682 25.0833 12.5417 25.0833C5.6151 25.0833 0 19.4682 0 12.5417ZM18.1073 1.1969C19.7032 -0.398967 22.2906 -0.398967 23.8864 1.1969C25.4823 2.79277 25.4823 5.38018 23.8864 6.97605L16.1303 14.7322C15.6972 15.1654 15.4258 15.4368 15.123 15.6729C14.7664 15.9511 14.3805 16.1896 13.9722 16.3842C13.6255 16.5494 13.2614 16.6707 12.6803 16.8644L9.29164 17.994C8.66602 18.2025 7.97627 18.0397 7.50996 17.5734C7.04366 17.1071 6.88083 16.4173 7.08937 15.7917L8.2189 12.4031C8.41259 11.8219 8.53392 11.4578 8.69913 11.1112C8.89372 10.7029 9.13221 10.317 9.41039 9.96032C9.64657 9.65751 9.91795 9.38617 10.3512 8.953L18.1073 1.1969ZM22.649 2.43434C21.7365 1.52189 20.2572 1.52189 19.3447 2.43434L18.9053 2.87373C18.9318 2.98557 18.9689 3.11882 19.0204 3.26744C19.1876 3.74934 19.504 4.384 20.1017 4.98166C20.6993 5.57932 21.334 5.89571 21.8159 6.0629C21.9645 6.11446 22.0978 6.15151 22.2096 6.178L22.649 5.73861C23.5614 4.82616 23.5614 3.34679 22.649 2.43434ZM20.831 7.5566C20.229 7.29773 19.5278 6.8827 18.8642 6.2191C18.2006 5.55549 17.7856 4.85429 17.5267 4.25233L11.6288 10.1503C11.1428 10.6362 10.9523 10.8289 10.7903 11.0366C10.5903 11.293 10.4188 11.5705 10.2789 11.864C10.1656 12.1018 10.0785 12.3584 9.86114 13.0104L9.35726 14.522L10.5613 15.7261L12.073 15.2222C12.7249 15.0049 12.9816 14.9177 13.2193 14.8044C13.5129 14.6645 13.7903 14.4931 14.0467 14.2931C14.2544 14.1311 14.4471 13.9405 14.933 13.4546L20.831 7.5566Z" fill="white"/>
      </svg>

      </button>

      {createOpen && (
        <CreatePost
          onClose={() => setCreateOpen(false)}
          onCreate={api.createPost}
        />
      )}
    </main>
  );
}
