// scroll menu
// window.addEventListener("scroll", () => {
//   let navbar = document.querySelector(".navbar");
//   navbar.classList.toggle("sticky", window.scrollY > 20);

// });

// toggle menu bar
//  const menuBtn = document.querySelector(".menu-btn i");
//  const menu = document.querySelector(".menu");

// menuBtn.addEventListener("click", function () {
//   menu.classList.toggle("active");
//   menuBtn.classList.toggle("active");
// })

// contact form submit

// send email info

const submitForm = (e) => {
  e.preventDefault();

  // Get input value
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let subject = document.querySelector(".subject").value;
  let textinput = document.querySelector(".textinput").value
  
  sendEmail(name, email, subject, textinput)
  
  // console.log(name,email,subject,textinput);
}

const sendEmail = (name, email, subject, textinput) => {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "ademosuu@gmail.com",
    Password: "jkprfzwcowjddwpa",
    To: "ademosuu@gmail.com",
    From: "ademosuu@mail.com",
    Subject: `${name} sent you a message`,
    Body: `Name 🤵: ${name} <br/> Email 📧: ${email} <br/> Subject 📨: ${subject} <br/> Textarea: ${textinput}`,
  }).then((message) => alert("email sent succesfully"))
};

 



 






// listen for submit
const contactform = document.querySelector(".contact-form");
contactform.addEventListener("submit", submitForm);



// spinner
const loader = document.querySelector(".loader");
window.onload = () => {
  setTimeout(function () {
    loader.style.opacity = "0";
    setTimeout(function () {
      loader.style.display = "none";
    }, 500);
  }, 1500);
};

// darkmode
const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", () => {
  // change the theme of the website
  document.body.classList.toggle("dark");
});

// dynamically adding repos
const container = $(".container");

$.ajax({
  url: "https://api.github.com/users/Adecodess/repos",
  method: "GET",
}).then((results) => {
  console.log(results);

  for (let i = 0; i < results.length; i++) {
    if (results[i].stargazers_count != 0) {
      let article =
        "<section class=container><header class=repoName><h2>" +
        results[i].name +
        "</h2></header><p>" +
        results[i].description +
        "</p>" +
        "<ul class=actions><li><a href=" +
        results[i].html_url +
        " target=_blank class=bbutton>Github Repo</a></li><li><a href=" +
        results[i].homepage +
        " target=_blank class=bbutton>Deployed App</a></li></ul></section>";

      container.append(article);
    }
  }
});

$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    if (this.scroll > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-p script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });

  // toggle menu/navbar script
  $(".menu-btn").on("click", function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing animation script
  var typed = new Typed(".typing", {
    strings: [" Web Developer", "Web Designer", "Logo Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
});
