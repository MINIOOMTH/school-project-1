function showScrollTopButton() {
  var e = document.getElementById("scrollTopButton");
  document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
    ? e.classList.add("show")
    : e.classList.remove("show");
}
function scrollToTop() {
  var e = document.documentElement.scrollTop || document.body.scrollTop;
  e > 0 &&
    (window.requestAnimationFrame(scrollToTop), window.scrollTo(0, e - e / 8));
}
function showImage(e) {
  const t = document.createElement("div");
  t.classList.add("gallery-overlay"),
    t.addEventListener("click", (e) => {
      e.target === t && document.body.removeChild(t);
    });
  const o = document.createElement("span");
  (o.innerHTML = "&times;"),
    o.classList.add("gallery-close-btn"),
    o.addEventListener("click", () => {
      document.body.removeChild(t);
    });
  const n = document.createElement("img");
  (n.src = e.src),
    n.classList.add("gallery-expanded-image"),
    t.appendChild(o),
    t.appendChild(n),
    document.body.appendChild(t);
}
$(document).ready(function () {
  $(".menu-icon").click(function () {
    $(".menu").toggleClass("active");
  });
}),
  $(document).ready(function () {
    $("nav ul li a").on("click", function (e) {
      e.preventDefault();
      const t = $(this).attr("href");
      $("html, body").animate({ scrollTop: $(t).offset().top }, 800);
    });
  }),
  document.addEventListener("DOMContentLoaded", function () {
    let e = document.querySelector(".top-header"),
      t = 0;
    window.addEventListener("scroll", () => {
      window.scrollY > t ? e.classList.add("hide") : e.classList.remove("hide"),
        (t = window.scrollY);
    });
  }),
  window.addEventListener("scroll", function () {
    showScrollTopButton();
  }),
  document.addEventListener("DOMContentLoaded", () => {
    const e = document.querySelector(".changing-color"),
      t = ["ร้านกุ้งอบวุ้นเส้น", "ร้านเด็ดๆ", "สั่งออนไลน์ได้นะ", "เครดิตโดย คุณพงศกร"],
      o = ["red", "purple", "pink", "orange"];
    let n = 0,
      d = 0;
    function s() {
      d < t[n].length
        ? ((e.textContent += t[n].charAt(d)), d++, setTimeout(s, 100))
        : setTimeout(l, 2e3);
    }
    function l() {
      d > 0
        ? ((e.textContent = e.textContent.slice(0, -1)), d--, setTimeout(l, 50))
        : ((n = (n + 1) % t.length),
          (e.style.color = o[n]),
          setTimeout(() => {
            s();
          }, 1e3));
    }
    setTimeout(s, 1e3);
  }),

  document.addEventListener("DOMContentLoaded", function () {
    const e = document.querySelectorAll("nav ul li a");
    function t() {
      const t = window.pageYOffset;
      e.forEach((e) => {
        const o = e.getAttribute("href"),
          n = document.querySelector(o),
          d = n.offsetTop,
          s = n.offsetHeight;
        t >= d && t < d + s
          ? e.classList.add("active")
          : e.classList.remove("active");
      });
    }
    window.addEventListener("load", t), window.addEventListener("scroll", t);
  }),

  window.addEventListener("DOMContentLoaded", () => {
    const e = document.getElementById("menu-food-list");
    let t = !1,
      o = 0,
      n = 0;
    e.addEventListener("mousedown", (d) => {
      d.preventDefault(),
        (t = !0),
        (o = d.clientX),
        (n = e.scrollLeft),
        (e.style.cursor = "grabbing");
    }),
      e.addEventListener("mouseup", () => {
        (t = !1), (e.style.cursor = "grab");
      }),
      e.addEventListener("mousemove", (d) => {
        if (t) {
          const t = d.clientX - o;
          e.scrollLeft = n - t;
        }
      }),
      e.addEventListener("mouseleave", () => {
        (t = !1), (e.style.cursor = "grab");
      }),
      setInterval(() => {
        if (!t) {
          const t = e.firstElementChild,
            o = e.lastElementChild,
            n = o.offsetLeft + o.offsetWidth - t.offsetLeft,
            d = e.scrollLeft + 1;
          e.scrollLeft = d >= n ? 0 : d;
        }
      }, 30);
  });
const themeToggle = document.getElementById("theme-toggle"),
  body = document.body;
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-theme"), body.classList.toggle("light-theme");
});
