import "../LandingPage/landingpage.css";
import lpVid from "../../assets/igniteLP2.mp4";
function LandingPage() {
  return (
    <div className="landing-page-main-container">
      <div className="landing-page-vid-container">
        <h1 className="font-white">Hello</h1>
        <video
          src={lpVid}
          autoPlay
          muted
          loop
          className="landing-page-main-vid"
        />
      </div>
    </div>
  );
}

export const landingRoute = {
  element: <LandingPage />,
};
