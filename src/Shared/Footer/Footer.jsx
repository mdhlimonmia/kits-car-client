import logo from "../../assets/Logo/Logo.png"
const Footer = () => {
  return (
    <footer className="footer p-8 bg-base-200 text-base-content mt-12">
      <div>
            <img src={logo} className="w-20 rounded" alt="" />
        <p>
          <samp className="footer-title"> Kits Car</samp>
          <br />
          Providing reliable product since 2023
        </p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>

      </div>
    </footer>
  );
};

export default Footer;
