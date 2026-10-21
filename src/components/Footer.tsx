
export default function Footer() {
    return (
        <footer id="contact">
        <div className="footer-meta">
          <span>04 / OUTGOING_TRANSMISSION</span>
          <span>RESPONSE TIME: 24—48H</span>
        </div>
        <p>
          Have a project
          <br />
          in mind? <i>Let's talk.</i>
        </p>
        <a href="mailto:anastasiia.tkach.dev@gmail.com" className="email">
          ANASTASIIA.TKACH.DEV@GMAIL.COM <span>↗</span>
        </a>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} ANASTASIIA TKACH</span>
          <div>
            <a href="#top">GITHUB</a>
            <a href="#top">LINKEDIN</a>
            <a href="#top">CV</a>
          </div>
          <a href="#top">RETURN TO ROOT ↑</a>
        </div>
      </footer>
    );
}