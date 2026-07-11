/* Peter Liu — site interactions: language toggle, mobile nav, scroll reveal */
(function () {
  var STORE = "pl-lang";
  var root = document.documentElement;

  function setLang(lang) {
    root.setAttribute("data-lang", lang);
    try { localStorage.setItem(STORE, lang); } catch (e) {}
    document.querySelectorAll("[data-lang-btn]").forEach(function (b) {
      b.classList.toggle("is-active", b.getAttribute("data-lang-btn") === lang);
    });
    root.setAttribute("lang", lang === "zh" ? "zh-Hant" : "en");
  }

  var saved = "en";
  try { saved = localStorage.getItem(STORE) || "en"; } catch (e) {}
  setLang(saved);

  document.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-lang-btn]");
    if (btn) { setLang(btn.getAttribute("data-lang-btn")); }

    var tog = e.target.closest(".nav-toggle");
    if (tog) {
      var links = document.querySelector(".nav-links");
      if (links) links.classList.toggle("open");
    }
    var navlink = e.target.closest(".nav-links a");
    if (navlink) {
      var l = document.querySelector(".nav-links");
      if (l) l.classList.remove("open");
    }
  });

  // scroll reveal
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });

  // contact form (front-end only)
  var form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var note = form.querySelector(".form-note");
      if (note) note.style.display = "block";
      form.reset();
    });
  }
})();
