import { useEffect, useState, useRef } from 'react';
import heroImage from './assests/WhatsApp Image 2026-06-06 at 5.54.43 PM.jpeg';
import aboutImageSrc from './assests/WhatsApp Image 2026-06-06 at 5.54.47 PM.jpeg';
import logo1 from './logos/WhatsApp Image 2026-06-06 at 5.53.40 PM.jpeg';
import logo2 from './logos/WhatsApp Image 2026-06-06 at 5.53.40 PM (1).jpeg';
import logo3 from './logos/WhatsApp Image 2026-06-06 at 5.53.40 PM (2).jpeg';
import logo4 from './logos/WhatsApp Image 2026-06-06 at 5.53.40 PM (3).jpeg';
import logo5 from './logos/WhatsApp Image 2026-06-06 at 5.53.41 PM.jpeg';
import logo6 from './logos/WhatsApp Image 2026-06-06 at 5.53.42 PM.jpeg';
import gallery1 from './assests/WhatsApp Image 2026-06-06 at 5.54.40 PM.jpeg';
import gallery2 from './assests/WhatsApp Image 2026-06-06 at 5.54.42 PM.jpeg';
import gallery3 from './assests/WhatsApp Image 2026-06-06 at 5.54.42 PM (1).jpeg';
import gallery4 from './assests/WhatsApp Image 2026-06-06 at 5.54.44 PM.jpeg';
import gallery5 from './assests/WhatsApp Image 2026-06-06 at 5.54.45 PM.jpeg';
import gallery6 from './assests/WhatsApp Image 2026-06-06 at 5.54.46 PM.jpeg';

const speakingTopics = [
  {
    title: 'Know Yourself – Mind Power',
    description: 'Discover the power of the subconscious mind and reprogram it to turn your goals into reality.',
    icon: 'M12 2L2 7l10 5 10-5-10-5z',
  },
  {
    title: 'Goal Setting & Achieving',
    description: 'Set a burning desire and a clear roadmap to achieve your biggest goals with confidence.',
    icon: 'M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9z',
  },
  {
    title: 'Time Management & Peak Performance',
    description: 'Master your time and habits to perform at your peak, every single day.',
    icon: 'M12 7v5l3 3',
  },
  {
    title: 'Attitude & Leadership Training',
    description: 'Build a winning attitude, strong moral values, and leadership qualities that last a lifetime.',
    icon: 'M8 7a4 4 0 0 1 8 0v4h-8V7z',
  },
  {
    title: 'Parenting Workshop',
    description: 'Understand your child\'s behaviour and build a healthier, more communicative relationship.',
    icon: 'M6 19l6-6 6 6',
  },
  {
    title: 'Love Your Exams',
    description: 'Topper secret systems, memory techniques, and stress relief methods to beat exam phobia.',
    icon: 'M12 4l2 7h7l-5.5 4 2 7L12 18l-5.5 4 2-7L3 11h7l2-7z',
  },
];

const statistics = [
  { value: '18 Lakh+', label: 'Lives Transformed Since 2013' },
  { value: '5 Lakh+', label: 'People Trained by Mind Plus' },
  { value: '10+', label: 'Years of Impact Across India' },
  { value: '1000+', label: 'Positive Google Reviews' },
];

const brandLogos = [logo1, logo2, logo3, logo4, logo5, logo6];

const galleryPhotos = [
  { src: gallery1, alt: 'Know Yourself Workshop session' },
  { src: gallery2, alt: 'Mind Plus training event' },
  { src: gallery3, alt: 'Audience during a Mohammad Johny session' },
  { src: gallery4, alt: 'Mohammad Johny conducting a live workshop' },
  { src: gallery5, alt: 'Students engaged in Mind Power training' },
  { src: gallery6, alt: 'Corporate mind power training session' },
];

const programs = [
  {
    title: 'Know Yourself Workshop – Mind Power',
    description: 'Our flagship program that unlocks the power of the subconscious mind to achieve goals and lasting success.',
  },
  {
    title: 'Global Mastery Workshop (Applied NLP)',
    description: 'Advanced NLP-based training to master communication, influence, and personal breakthroughs.',
  },
  {
    title: 'Teacher Training Program',
    description: 'Empowering educators with modern classroom strategies, student psychology, and engagement techniques.',
  },
  {
    title: 'Parenting Workshop',
    description: 'Practical tools to understand your child, build stronger communication, and manage exam-related stress.',
  },
  {
    title: 'Love Your Exams',
    description: 'Topper secret systems, memory mastery, and stress-relief techniques for students of all ages.',
  },
  {
    title: 'Corporate Mind Power Training',
    description: 'Business secrets, marketing strategies, and mind power sessions tailored for corporate teams.',
  },
];

const blogPosts = [
  {
    title: 'The Power of Your Subconscious Mind',
    excerpt: 'Why 90% of your potential lies beneath the surface and how to program it for success.',
  },
  {
    title: 'Goal Setting: Turning Desires Into Reality',
    excerpt: 'A step-by-step approach to setting a burning desire and achieving it with unstoppable focus.',
  },
  {
    title: 'Why Every Parent Needs a Parenting Workshop',
    excerpt: 'Understand your child\'s behaviour and build a healthier, more connected relationship at home.',
  },
];

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState({ error: '', success: '' });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.fade-in-section').forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, message } = formState;

    if (!name.trim() || !email.trim() || !message.trim()) {
      setFormStatus({ error: 'Please complete all fields before submitting.', success: '' });
      return;
    }

    // Compose email via mailto: to open user's mail client with the form details
    const to = 'mohammadjohny05@gmail.com';
    const subject = `Contact request from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // open mail client (will not work in some sandboxed environments)
    try {
      window.location.href = mailtoLink;
      setFormStatus({ error: '', success: 'Opening your mail client to send the message.' });
    } catch (err) {
      setFormStatus({ error: 'Unable to open mail client. Please copy and send manually.', success: '' });
    }

    setFormState({ name: '', email: '', message: '' });
  };

  const handleNavToggle = () => setNavOpen((value) => !value);
  const handleNavLink = () => setNavOpen(false);
  const videoRef = useRef(null);
  const [overlayHidden, setOverlayHidden] = useState(false);

  const handlePlayClick = (event) => {
    event.preventDefault();
    setOverlayHidden(true);
    try {
      if (videoRef.current?.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    } catch (err) {
      // ignore fullscreen errors
    }
  };

  return (
    <div className="page-shell">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <header className="app-header">
        <nav className="navbar" aria-label="Primary navigation">
          <a className="brand" href="#home">
            <span className="brand-name">Mohammad Johny</span>
          </a>

          <button
            className="nav-toggle"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={navOpen}
            onClick={handleNavToggle}
          >
            <span />
            <span />
            <span />
          </button>

          <div className={`nav-links ${navOpen ? 'is-open' : ''}`}>
            <a className="nav-link" href="#home" onClick={handleNavLink}>Home</a>
            <a className="nav-link" href="#about" onClick={handleNavLink}>About</a>
            <a className="nav-link" href="#speaking" onClick={handleNavLink}>Speaking</a>
            <a className="nav-link" href="#programs" onClick={handleNavLink}>Programs</a>
            <a className="nav-link" href="#gallery" onClick={handleNavLink}>Gallery</a>
            <a className="nav-link" href="#blog" onClick={handleNavLink}>Blog</a>
            <a className="nav-link" href="#contact" onClick={handleNavLink}>Contact</a>
          </div>

          <a className="nav-action-button" href="#contact">Book a Workshop</a>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero section fade-in-section hero-banner" id="home">
          <img
            src={heroImage}
            alt="Mohammad Johny delivering a motivational keynote on stage"
          />
          <div className="hero-overlay" />
          <div className="hero-panel">
            <div className="hero-copy">
              <p className="hero-caption">India's Youngest Mind Trainer & Founder of Mind Plus</p>
              <h1 className="hero-headline">Unlock Your Mind. Transform Your Life.</h1>
              <p className="hero-description">
                Join the movement that has transformed over 18 lakh lives since 2013 through the
                life-changing Know Yourself Workshop and Mind Power trainings.
              </p>
              <div className="hero-actions">
                <a className="button-primary" href="#speaking">Book a Speaking Event</a>
                <a className="button-secondary" href="#video">Watch My Story</a>
              </div>
              <div className="scroll-indicator" aria-hidden="true">
                <span className="scroll-dot" />
                <div className="scroll-arrow" />
              </div>
            </div>
          </div>
        </section>
        <section className="section fade-in-section" id="about">
          <div className="section-title">
            <span>About</span>
            <h2>India's youngest mind trainer, on a mission to Make India Positive.</h2>
          </div>
          <div className="about-grid">
            <div className="about-copy">
              <span className="about-highlight">Founder of Mind Plus (B.Tech, M.Sc. Psychology, MBA)</span>
              <div className="about-content">
                <p>
                  Mohammad Johny is one of India's youngest and most impactful mind trainers,
                  with a track record of transforming over 18 lakh lives since 2013. He blends
                  science and spirituality to spark mindset shifts in students, professionals,
                  and leaders alike. Founder of Mind Plus, a training brand with the vision to
                  "Make India Positive," Johny has impacted students, teachers, entrepreneurs,
                  parents, and corporate professionals across the country.
                </p>

                <p>
                  From school classrooms to packed auditoriums, his signature event "Know
                  Yourself" has become a movement that inspires people to reprogram their
                  mindsets, clarify goals, and unleash their full potential. His sessions
                  combine deep psychology with practical tools&mdash;covering everything from
                  memory mastery and goal setting to parenting, sales success, and mental
                  health.
                </p>

                <p>
                  With a growing digital presence and thousands of positive testimonials on
                  Google Maps, Mr. Johny continues to inspire a new wave of positive thinkers
                  across the nation, conducting regular trainings on Attitude, Leadership,
                  Goal Setting, Time Management, Peak Performance, and Sales.
                </p>

                <p>
                  Coming from the most common family, Johny always dreamed of changing the way
                  society thinks. His never-give-up attitude and ability to convert failure
                  into success made him one of the most leading young trainers of South India,
                  helping people discover their hidden powers and true potential.
                </p>

                <p>
                  <strong>
                    "He brings life into the audience. You don't just listen&mdash;you transform!"
                  </strong>
                </p>
              </div>
              <div className="about-stats">
                <div className="about-card"><strong>18 Lakh+</strong><span>Lives Transformed</span></div>
                <div className="about-card"><strong>10+</strong><span>Years of Impact</span></div>
                <div className="about-card"><strong>5 Lakh+</strong><span>Trained by Mind Plus</span></div>
              </div>
            </div>
            <div className="about-image">
              <img
                src={aboutImageSrc}
                alt="Mohammad Johny speaking on stage"
              />
            </div>
          </div>
        </section>

        <section className="section fade-in-section" id="speaking">
          <div className="section-title">
            <span>Speaking Topics</span>
            <h2>Workshops crafted to unlock the power of the mind.</h2>
          </div>
          <div className="topic-row">
            {speakingTopics.map((topic) => (
              <div key={topic.title} className="topic-chip">
                <div className="topic-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d={topic.icon} />
                  </svg>
                </div>
                <span>{topic.title}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section fade-in-section" id="stats">
          <div className="section-title">
            <span>Impact</span>
            <h2>Proven results, trusted by lakhs of people across India.</h2>
          </div>
          <div className="cards-grid stats-grid">
            {statistics.map((item) => (
              <article key={item.label} className="stat-card">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section fade-in-section" id="gallery">
          <div className="section-title">
            <span>Gallery</span>
            <h2>Moments from Know Yourself Workshops and Mind Plus events.</h2>
          </div>
          <div className="gallery-grid">
            {galleryPhotos.map((photo) => (
              <div key={photo.src} className="gallery-item">
                <img src={photo.src} alt={photo.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </section>

        <section className="section fade-in-section logo-section" id="trusted-by">
          <div className="section-title">
            <span>Trusted By</span>
            <h2>Recognised by schools, colleges, and corporates across India.</h2>
          </div>
          <div className="logo-grid" aria-hidden="true">
            {brandLogos.map((src, index) => (
              <div key={index} className="logo-card">
                <img src={src} alt="" loading="lazy" />
              </div>
            ))}
          </div>
        </section>

        <section className="section fade-in-section" id="video">
          <div className="section-title">
            <span>Video</span>
            <h2>Watch a powerful keynote moment.</h2>
          </div>
          <div className="video-card">
            <div className="video-wrapper">
              <iframe
                ref={videoRef}
                className="video-frame"
                title="Motivational keynote"
                src="https://www.youtube.com/embed/ioAXS9ztRBE?si=jsQAcDIpxhfQsjSm&autoplay=1&mute=1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

              {!overlayHidden && (
                <button
                  className="video-overlay video-play-button"
                  type="button"
                  onClick={handlePlayClick}
                  aria-label="Play video"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </button>
              )}

              {/* YouTube external link removed per request */}
            </div>

            {/* external fallback removed */}
          </div>
        </section>

        <section className="section fade-in-section" id="programs">
          <div className="section-title">
            <span>Programs & Workshops</span>
            <h2>Life-changing programs from Mind Plus, designed for lasting transformation.</h2>
          </div>
          <div className="cards-grid service-grid">
            {programs.map((program) => (
              <article key={program.title} className="service-card">
                <h3>{program.title}</h3>
                <p>{program.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section fade-in-section" id="blog">
          <div className="section-title">
            <span>Blog</span>
            <h2>Insights to help you think positive, grow, and succeed.</h2>
          </div>
          <div className="cards-grid blog-grid">
            {blogPosts.map((post) => (
              <article key={post.title} className="blog-card">
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section fade-in-section" id="contact">
          <div className="section-title">
            <span>Contact</span>
            <h2>Ready to book a workshop, keynote, or training session?</h2>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <p><strong>Email:</strong> mohammadjohny05@gmail.com</p>
              <p><strong>Phone:</strong> +91 94912 02404</p>
              {/* <p><strong>Social:</strong> @julianarc on Instagram, LinkedIn, and Twitter</p> */}
              <p><strong>Location:</strong> Warangal, Telangana</p>
              <div className="map-frame-wrapper">
                <iframe
                  className="map-frame"
                  title="Google Maps location"
                  src="https://www.google.com/maps?q=Warangal,Telangana,India&output=embed"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
            <form className="contact-card contact-form" onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" autoComplete="name" required value={formState.name} onChange={handleInputChange} placeholder="Your name" />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" autoComplete="email" required value={formState.email} onChange={handleInputChange} placeholder="you@example.com" />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required value={formState.message} onChange={handleInputChange} placeholder="Tell us about your event or coaching needs" />
              </div>
              <button className="submit-button" type="submit">Send Message</button>
              <div role="status" aria-live="polite">
                {formStatus.error && <p className="form-message form-message-error">{formStatus.error}</p>}
                {formStatus.success && <p className="form-message form-message-success">{formStatus.success}</p>}
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer fade-in-section">
        <div className="footer-grid">
          <div className="footer-card">
            <h3 className="brand-name">Mohammad Johny</h3>
            <p>Founder of Mind Plus &mdash; empowering India through Mind Power workshops, keynote sessions, and life-changing trainings since 2013.</p>
          </div>
          <div className="footer-card">
            <h3>Quick links</h3>
            <nav className="footer-links" aria-label="Footer navigation">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#speaking">Speaking</a>
              <a href="#gallery">Gallery</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
          <div className="footer-card">
            <h3>Newsletter</h3>
            <p>Get Mind Power tips, workshop updates, and success stories delivered to your inbox.</p>
            <form className="newsletter-form" onSubmit={(event) => event.preventDefault()}>
              <input type="email" aria-label="Email address" placeholder="Enter your email" />
              <button className="newsletter-button" type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Mohammad Johny &middot; Mind Plus. All rights reserved.</p>
          <p>Empowering India to think positive, achieve more, and live extraordinary lives.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
