//  Menu
$(document).ready(function () {
  $(".menu-icon").click(function () {
    $(".menu").toggleClass("active");
  });
});

//  Scroll TO #
$(document).ready(function () {
  // เมื่อคลิกที่ลิงก์ในเมนู
  $("nav ul li a").on("click", function (e) {
    // หยุดการกระจายลิงก์เพื่อไม่ให้โหลดหน้าใหม่
    e.preventDefault();

    // ดึงค่า href ของลิงก์ที่คลิก
    const target = $(this).attr("href");

    // ใช้ animate() ในการเลื่อนไปยังตำแหน่งที่กำหนด
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top,
      },
      800
    ); // 800 คือความเร็วในการเลื่อน (มิลลิวินาที)
  });
});



document.addEventListener("DOMContentLoaded", function () {
  let topHeader = document.querySelector(".top-header");
  let lastScrollY = 0;

  window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
      topHeader.classList.add("hide");
    } else {
      topHeader.classList.remove("hide");
    }
    lastScrollY = window.scrollY;
  });
});

//  Scroll TO Top
window.addEventListener("scroll", function () {
  showScrollTopButton();
});

function showScrollTopButton() {
  var button = document.getElementById("scrollTopButton");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.classList.add("show");
  } else {
    button.classList.remove("show");
  }
}

function scrollToTop() {
  var currentScroll =
    document.documentElement.scrollTop || document.body.scrollTop;
  if (currentScroll > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, currentScroll - currentScroll / 8); // Change the value to control scrolling speed
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const text = document.querySelector(".changing-color");
  const texts = ["YouTuber", "Tiktoker", "Steamer", "MiNiOOMTH"];
  const colors = ["red", "purple", "pink", "orange"]; // กำหนดสีที่ต้องการเปลี่ยนให้กับข้อความ

  let textIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < texts[textIndex].length) {
      text.textContent += texts[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 100); // เพิ่มเวลาในการพิมพ์ทีละตัวอักษร
    } else {
      setTimeout(erase, 2000); // หลังจากพิมพ์ข้อความเสร็จแล้ว หยุดพัก 2 วินาที
    }
  }

  function erase() {
    if (charIndex > 0) {
      text.textContent = text.textContent.slice(0, -1);
      charIndex--;
      setTimeout(erase, 50); // เพิ่มเวลาในการลบข้อความทีละตัวอักษร
    } else {
      textIndex = (textIndex + 1) % texts.length;
      text.style.color = colors[textIndex]; // เปลี่ยนสีข้อความตามลำดับของ colors array
      setTimeout(() => {
        //   text.textContent = "I am "; // เพิ่มข้อความ "I am " ต่อหลังทุกครั้งที่เปลี่ยนข้อความ
        type();
      }, 1000); // หลังจากลบข้อความเสร็จแล้ว หยุดพัก 1 วินาทีแล้วเริ่มพิมพ์ข้อความใหม่
    }
  }

  setTimeout(type, 1000); // ให้เริ่มเอฟเฟกต์พิมพ์หลังจากโหลดหน้าเว็บเสร็จสิ้น 1 วินาที
});


//  Show Images
function showImage(element) {
  const overlay = document.createElement("div");
  overlay.classList.add("gallery-overlay");

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      document.body.removeChild(overlay);
    }
  });

  const closeBtn = document.createElement("span");
  closeBtn.innerHTML = "&times;";
  closeBtn.classList.add("gallery-close-btn");

  closeBtn.addEventListener("click", () => {
    document.body.removeChild(overlay);
  });

  const img = document.createElement("img");
  img.src = element.src;
  img.classList.add("gallery-expanded-image");

  overlay.appendChild(closeBtn);
  overlay.appendChild(img);
  document.body.appendChild(overlay);
}




//  Scroll Menu
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav ul li a");

  function setActiveLink() {
    const scrollY = window.pageYOffset;

    navLinks.forEach((link) => {
      const sectionId = link.getAttribute("href");
      const section = document.querySelector(sectionId);
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  // Call the setActiveLink function on page load and scroll
  window.addEventListener("load", setActiveLink);
  window.addEventListener("scroll", setActiveLink);
});



// Menu Food
window.addEventListener('DOMContentLoaded', () => {
  const menuList = document.getElementById('menu-food-list');
  let isScrolling = false;
  let startScrollX = 0;
  let currentScrollX = 0;

  menuList.addEventListener('mousedown', (e) => {
    e.preventDefault();
    isScrolling = true;
    startScrollX = e.clientX;
    currentScrollX = menuList.scrollLeft;
    menuList.style.cursor = 'grabbing';
  });

  menuList.addEventListener('mouseup', () => {
    isScrolling = false;
    menuList.style.cursor = 'grab';
  });

  menuList.addEventListener('mousemove', (e) => {
    if (isScrolling) {
      const scrollAmount = e.clientX - startScrollX;
      menuList.scrollLeft = currentScrollX - scrollAmount;
    }
  });

  menuList.addEventListener('mouseleave', () => {
    isScrolling = false;
    menuList.style.cursor = 'grab';
  });

  setInterval(() => {
    if (!isScrolling) {
      const firstItem = menuList.firstElementChild;
      const lastItem = menuList.lastElementChild;
      const menuWidth = lastItem.offsetLeft + lastItem.offsetWidth - firstItem.offsetLeft;
      const scrollAmount = menuList.scrollLeft + 1;

      if (scrollAmount >= menuWidth) {
        menuList.scrollLeft = 0;
      } else {
        menuList.scrollLeft = scrollAmount;
      }
    }
  }, 30);
});




// Theme
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
    body.classList.toggle("light-theme");
});



