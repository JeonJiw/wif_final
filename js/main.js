class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `    
    <footer>
    <p>FOLLOW US</p>
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
      Terms of Use | Privacy Rights & Requests | Español | Report an Error
    </p>
    <p>
      © <span id="current-year"></span> Green Thunmb Landscaping. All rights
      reserved.
    </p>
  </footer>`;
  }
}

customElements.define("my-footer", MyFooter);
