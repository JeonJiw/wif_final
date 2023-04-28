class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `   <header>
      <div id="logo-bar">
        <div id="logo-img">
          <a href="index.html"
            ><img src="img/logo-transparent-png.png" alt=""
          /></a>
        </div>
        <div id="menu-icon" onclick="toggleNavbar()">
          <i class="fa fa-bars fa-2x"></i>
        </div>
      </div>

      <nav id="nav-bar">
        <ul>
          <li>
            <a href="about.html">About Us</a>
          </li>
          <li>
            <a href="contact.html">Contact Us</a>
          </li>
          <li>
            <a href="service.html">Services</a>
          </li>
          <li>
            <a href="onlineEstimate.html">Online Estimate</a>
          </li>
          <li>
            <a href="testimonials.html">Testimonials</a>
          </li>
        </ul>
      </nav>
    </header>`;
  }
}

customElements.define("my-header", MyHeader);

class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `    
    <footer>
    <h4 class="follow">FOLLOW US</h4>
    <ul id="social-icons">
      <li>
        <a href="https://www.facebook.com/"
          ><i class="fa-2x fa fa-facebook"></i
        ></a>
      </li>
      <li>
        <a href="https://twitter.com/"><i class="fa-2x fa fa-twitter"></i></a>
      </li>
      <li>
        <a href="https://www.youtube.com/"
          ><i class="fa-2x fa fa-youtube"></i
        ></a>
      </li>
      <li>
        <a href="https://www.instagram.com/"
          ><i class="fa-2x fa fa-instagram"></i
        ></a>
      </li>
    </ul>

    <p>
      Terms of Use | Privacy Rights & Requests | Report an Error
    </p>
    <p>
      © <span id="current-year"></span> Green Thunmb Landscaping. All rights
      reserved.
    </p>
  </footer>`;
  }
}

customElements.define("my-footer", MyFooter);
