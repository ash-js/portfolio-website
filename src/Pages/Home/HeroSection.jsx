export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Ashour</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{' '}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Enthusiastic Full-Stack Developer passionate about coding, with
            expertise in .NET, TypeScript, React, and SQL.
            <br /> Looking for Opportunities in the Industry.
          </p>
        </div>
        <a href="Ashour-Resume.pdf">
          <button className="btn btn-primary">Download My Resume</button>
        </a>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  )
}
