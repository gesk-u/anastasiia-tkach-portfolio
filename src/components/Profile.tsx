import profilePhoto from '../assets/profilePhoto.jpg'

export default function Profile() {
    return (
       <section className="profile section" id="profile">
        <div className="section-index identity-index">
          <div className="identity-index-label">
            <span>01</span>
            <span>/ABOUT</span>
          </div>
          <figure className="profile-photo">
            <img src={profilePhoto}  alt="Anastasiia Tkach" />
            <figcaption>SUBJECT_01 // VERIFIED</figcaption>
          </figure>
        </div>

        <div className="profile-copy">
          <p className="lead">
              <em>$</em> whoami
          </p>
          <div className="bio-grid">
            <p>
                Before I wrote code, I studied chemistry, 
                where one careless step can ruin a whole experiment. 
                That habit stayed with me: I test my work, check the details, 
                and like to understand why something works, not just that it does.
            </p>
            <p>
                I work across the whole stack, from the database to the interface, 
                and I care about the details people only notice when they're missing, 
                like accessibility. I'm looking for an internship where I can work 
                on a real product with people who know more than I do, and learn as much as I can.
            </p>
          </div>
        </div>
        <aside className="identity-panel">
            <div className="identity-card">
                <div><span>NAME</span><b>ANASTASIIA TKACH</b></div>
                <div><span>ROLE</span><b>FULL-STACK DEVELOPER</b></div>
                <div><span>AVAILABILITY</span><b className="green">INTERNSHIP FROM [MONTH YEAR]</b></div>
                <div><span>LANGUAGES</span><b>LANGUAGES	UA / EN / FI (B1)</b></div>
            </div>
            <nav className="profile-links" aria-label="Profile links">
                <a href="#top">
                GITHUB <span>↗</span>
                </a>
                <a href="#top">
                LINKEDIN <span>↗</span>
                </a>
                <a href="#contact">
                CV <span>↓</span>
                </a>
          </nav>
        </aside>

      </section> 
    )
}

