import { useState, useEffect } from "react";
import "../assets/sass/_home.scss";

import Video1 from "../assets/videos/video1.mp4";
import Video2 from "../assets/videos/video2.mp4";
import Video3 from "../assets/videos/video3.mp4";
import Video4 from "../assets/videos/video4.mp4";
import Video5 from "../assets/videos/video5.mp4";
import Courses from "../components/card/Courses";

const HomePage = () => {
  const videos = [Video1, Video2, Video3, Video4, Video5];
  const [currentVideo, setCurrentVideo] = useState(0);

  // Har 5 sekundda video almashsin
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [videos.length]);

  return (
    <>
      <section className="hero">
        {/* Background video */}
        <video
          key={currentVideo}
          className="hero-bg"
          src={videos[currentVideo]}
          autoPlay
          loop
          muted
        />

        {/* Overlay qoplama */}
        <div className="overlay"></div>

        <div className="container hero-content">
          {/* LEFT */}
          <div className="hero-left">
            <h1>Biz bilan o‘qish imkoniyati</h1>
            <p>
              Siz uchun eng yaxshi kurslar,sifatli talim eng yaxshi ustozlar va
              mukammal muhit.
            </p>
            <button className="hero-btn">Boshlash</button>
          </div>

          {/* RIGHT */}
          <div className="hero-right">
            <form action="">
              <input placeholder="Ismingiz" type="text" />
              <input placeholder="Qaysi kurslarni tanlamoqchisiz" type="text" />
              <input placeholder="Tel:" type="tel" />
              <button className="send-btn">Yuborish</button>
            </form>
          </div>
        </div>
      </section>
      <section>
        <Courses />
      </section>
    </>
  );
};

export default HomePage;
