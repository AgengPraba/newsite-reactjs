function Footer() {
  return (
    <div className="flex flex-row">
      <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10">
        <aside>
          <p>
            <strong className="text-3xl font-bold text-red-600 sm:text-6xl">news<span className="text-neutral">ite</span></strong>
            <br />
            Fast & reliable news since 2025
          </p>
        </aside>

        <nav>
          <h6 className="footer-title">Categories</h6>
          <a className="link link-hover" href="/business">Business</a>
          <a className="link link-hover" href="/entertainment">Entertainment</a>
          <a className="link link-hover" href="/general">General</a>
          <a className="link link-hover" href="/health">Health</a>
          <a className="link link-hover" href="/science">Science</a>
          <a className="link link-hover" href="/sports">Sports</a>
          <a className="link link-hover" href="/technology">Technology</a>
        </nav>

        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover" href="/about">About Us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Privacy Policy</a>
        </nav>

        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a>
              <img src="../../public/assets/icons8-facebook-50.png" alt="facebook_icon" width={27}/>
            </a>
            <a>
              <img src="../../public/assets/icons8-instagram-50.png" alt="instagram_icon" width={27}/>
            </a>
            <a>
              <img src="../../public/assets/icons8-x-50.png" alt="x_icon" width={27}/>
            </a>
            <a>
              <img src="../../public/assets/icons8-youtube-50.png" alt="youtube_icon" width={27}/>
            </a>
          </div>
        </nav>
      </footer>

    </div>
  );
}

export default Footer;