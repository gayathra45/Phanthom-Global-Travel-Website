const video = document.createElement("video");
video.id = "bg-video";
video.autoplay = true;
video.muted = true;
video.loop = true;
video.playsInline = true;

const source = document.createElement("source");
source.src = "abc1.mp4";
source.type = "video/mp4";
video.appendChild(source);

document.body.prepend(video);

const allPosts = [
  {
    title: "Phantom Global - Building Bridges to Your Future Abroad",
    label: "About Us",
    thumbnail: "image7.jpg",
    summary: "Phantom Global helps you to travel or study abroad with expert visa support and trusted guidance for destinations like Australia,Canada,New Zealand,Switzerland & UK.",
    link: "./Aboutus/index.html",
    layout: "full-width"
  },
  {
    title: "Explore Our Services",
    label: "What We Do For You",
    thumbnail: "image2.jpg",
    summary: "Our services cover everything from visa applications to travel planning,ensuring a smooth and stress-free experience for students and tourists heading abroad",
    link: "./exploreservices/index.html",
    layout: "half-width"
  },
  {
    title: "Reasons To Trust Us",
    label: "What Makes Us Different",
    thumbnail: "image6.jpg",
    summary: "We are committed to delivering quality,reliability and exceptional service.Our experienced team puts your needs first,ensuring trust and satisfaction every step of the way.",
    link: "./trust us/index.html",
    layout: "half-width"
  },
  {
    title: "Honoring Excellence and Achievement",
    label: "Awards & Recognition",
    thumbnail: "image8.jpg",
    summary: "We take pride in the awards and recognitions that highlight our commitment to quality,innovation,and exceptional service.These achievements inspire us to continually raise the bar and deliver the best for our clients.",
    link: "./achivement/index.html",
    layout: "full-width"
  }
];

const blogPostsContainer = document.querySelector(".blog-posts-container");

allPosts.forEach((p) => {
  const HTML = `
    <div class="thumbnail">
      <img src="${p.thumbnail}" alt="" />
    </div>
    <div class="text-content">
      <div class="label">${p.label}</div>
      <h3 class="post-title">${p.title}</h3>
      <div class="summary">${p.summary}</div>
      <a class="read-more-btn" href="${p.link}">Read More...</a>
    </div>
  `;
  const blogPost = document.createElement("div");
  blogPost.classList.add("blog-post");
  if (p.layout === "full-width") blogPost.classList.add("full-width");
  blogPost.innerHTML = HTML;
  blogPostsContainer.appendChild(blogPost);
});



// Create footer element
const footer = document.createElement("footer");
footer.classList.add("site-footer");
footer.innerHTML = `
  <div class="footer-top">
    <div class="logo">
      <img src="../New folder/logo2.png" alt="Truly Sri Lanka">
    </div>
    <nav class="footer-nav">
      <ul>
        <li><b>Navigation</b></li><br>
        <li><a href="../main.html">Home</a></li>
        <li><a href="../AboutUsPage/index.html">About Us</a></li>
        <li><a href="../Destinations/index.html">Destinations</a></li>
        <li><a href="../ContactUs/contactus1.html">Contact Us</a></li>
        <li><a href="../PlanYourTrip/index.html">Plan Your Trip</a></li>
      </ul>
      <ul>
        <li><b>Tours</b></li><br>
        <li><a href="../Categories/SunandBeach/index.html">Sun and Beach</a></li>
        <li><a href="../Categories/WildLife/index.html">Wild Life and Safari</a></li>
        <li><a href="../Categories/Nightlife/index.html">Night Life</a></li>
        <li><a href="../Categories/Culture/index.html">Heritage and Culture</a></li>
        <li><a href="../Categories/shopping/index.html">Shopping</a></li>
        <li><a href="../Categories/Adventure/index.html">Adventure</a></li>
        <li><a href="../Categories/sightseeing/index.html">Sightseeing</a></li>
      </ul>
    </nav>
    <div class="newsletter">
      <h2>Newsletter</h2>
      <p>For the latest updates and special offers</p>
      <form id="newsletter-form">
        <input type="email" placeholder="Enter Your Email" required>
        <button type="submit">Submit</button>
      </form>
      <div class="social-icons">
        <!-- Social icons SVG here -->
      </div>
    </div>
  </div>

  <div class="footer-bottom">
    <a href="../Termsandcondition/terms.html">Terms and Conditions</a>
    <a href="../PrivacyPolicy/index.html">Privacy Policy</a>
    <a href="../FAQ/index.html">FAQ</a>
  </div>

  <div class="footer-p">
    <p>Website Designed &amp; Developed by Phanthom Group</p>
  </div>

  <div class="terms">
    <h6>© 2025 Phanthom Global, All Rights Reserved</h6>
  </div>
`;

// Append footer at the very end
document.body.appendChild(footer);


