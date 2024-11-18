export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Ashour</p>
          <h1 className="hero--section--title">
            <span className="hero--section--title--color">Full Stack</span>{' '}
            <br />
            Developer
          </h1>
          <p className="hero--section--description">
            Full-stack developer specializing in .Net,
            <br />
            TypeScript, React, Sql, and Azure solutions.
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/avatar-1.png" alt="Hero Section" />
      </div>
    </section>
  )
}
