/* --- PREVIOUS STYLES REMAIN THE SAME UNTIL HERE --- */

.bg-darker { background-color: #050505; }

/* Giant Team Hero Headline (from your screenshot) */
.team-hero-header {
    text-align: left;
    margin-bottom: 4rem;
    position: relative;
}
.giant-title {
    font-size: clamp(4rem, 8vw, 8rem);
    font-weight: 900;
    line-height: 0.9;
    text-transform: uppercase;
    letter-spacing: -2px;
    text-shadow: 2px 4px 10px rgba(230, 43, 30, 0.15);
}

/* Your Exact Editions Card Design */
.editions-wrapper {
    margin-top: 2rem;
}
.edition-card {
    border: 1px solid rgba(230, 43, 30, 0.4);
    border-radius: 16px;
    background: linear-gradient(to bottom, #111111, #080808);
    overflow: hidden;
    margin-top: 1rem;
}
.edition-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 2.5rem;
    border-bottom: 1px solid rgba(230, 43, 30, 0.2);
}
.edition-year {
    font-size: 0.8rem;
    font-weight: 800;
    letter-spacing: 2px;
}
.year-text {
    font-size: 1.5rem;
    color: #fff;
    margin-left: 10px;
}
.edition-status {
    font-size: 0.8rem;
    font-weight: 800;
    color: var(--color-red);
    letter-spacing: 2px;
}

/* Grid for Team Members inside the card */
.edition-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
}
.member-card {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 2.5rem;
    border-right: 1px solid rgba(255, 255, 255, 0.05);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}
.member-photo {
    width: 110px;
    height: 130px;
    flex-shrink: 0;
    border-radius: 4px;
    overflow: hidden;
    background: #000;
}
.member-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%);
    transition: filter 0.3s;
}
.member-card:hover .member-photo img {
    filter: grayscale(0%);
}
.member-info {
    display: flex;
    flex-direction: column;
}
.member-role {
    font-size: 0.85rem;
    color: var(--color-red);
    letter-spacing: 2px;
    font-weight: 800;
    margin-bottom: 0.5rem;
}
.member-name {
    font-size: 1.8rem;
    font-weight: 900;
    text-transform: uppercase;
    line-height: 1.1;
    color: #ffffff;
}

/* Lightbox Modal */
.modal { display: none; position: fixed; z-index: 999; padding-top: 50px; left: 0; top: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.95); align-items: center; justify-content: center; }
.modal-content { max-width: 85%; max-height: 85vh; object-fit: contain; border: 2px solid #333; }
.close-modal { position: absolute; top: 30px; right: 50px; color: #fff; font-size: 40px; font-weight: bold; transition: color 0.3s; }
.close-modal:hover { color: var(--color-red); }

@media (max-width: 768px) {
    .edition-header { flex-direction: column; align-items: flex-start; gap: 1rem; }
    .member-card { border-right: none; }
    .giant-title { font-size: 3.5rem; }
}