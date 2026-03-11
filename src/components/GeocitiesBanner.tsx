import { useGeocities } from "@/contexts/GeocitiesContext";

const GeocitiesBanner = () => {
  const { geocitiesMode, toggleGeocities } = useGeocities();

  if (!geocitiesMode) return null;

  return (
    <>
      {/* Top marquee banner */}
      <div className="geocities-banner">
        <marquee scrollamount={3}>
          ★·.·´¯`·.·★ Welcome to Joe's AWESOME Home Page!!! ★·.·´¯`·.·★ You are visitor #
          {Math.floor(Math.random() * 99999).toString().padStart(5, "0")} ★·.·´¯`·.·★ Best
          viewed in Netscape Navigator 4.0 at 800x600 ★·.·´¯`·.·★
        </marquee>
      </div>

      {/* Under construction bar */}
      <div className="geocities-construction">
        🚧 THIS PAGE IS UNDER CONSTRUCTION 🚧
        <br />
        <span style={{ fontSize: "10px" }}>Last updated: Jan 14, 2000</span>
      </div>

      {/* Exit button */}
      <button
        onClick={toggleGeocities}
        className="geocities-exit"
        title="Return to modern site"
      >
        ✕ EXIT GEOCITIES MODE
      </button>

      {/* Guestbook link */}
      <div className="geocities-guestbook">
        📖{" "}
        <a href="#" onClick={(e) => { e.preventDefault(); alert("The guestbook is currently offline. Please try again in Y2K+25 years."); }}>
          Sign my Guestbook!
        </a>{" "}
        📖
      </div>
    </>
  );
};

export default GeocitiesBanner;
