const container = document.getElementById("social-buttons-container");
const socialPlatforms = [
  {
    name: "WhatsApp",
    icon: "fa-whatsapp",
    hoverColor: "#25D366",
    hoverIconColor: "#ffffff",
    link: "https://whatsapp.com/channel/0029Vb5oZSqKmCPRBBis0316"
  },
  {
    name: "Discord",
    icon: "fa-discord",
    hoverColor: "#5865F2",
    hoverIconColor: "#ffffff",
    link: "https://discord.com/invite/eaWn4T6R8G"
  },
  {
    name: "Blogspot",
    icon: "fa-brands fa-blogger-b",
    hoverColor: "#f57d00",
    hoverIconColor: "#ffffff",
    link: "https://prokaiofficial.blogspot.com/"
  },
  {
    name: "YouTube",
    icon: "fa-youtube",
    hoverColor: "#FF0000",
    hoverIconColor: "#ffffff",
    link: "https://www.youtube.com/@ProkaiOfficial"
  },
  {
    name: "LinkedIn",
    icon: "fa-linkedin-in",
    hoverColor: "#0077b5",
    hoverIconColor: "#ffffff",
    link: "https://www.linkedin.com/in/prokaiofficial"
  },
  {
    name: "Instagram",
    icon: "fa-brands fa-instagram",
    hoverColor: "#E4405F",
    hoverIconColor: "#ffffff",
    link: "https://www.instagram.com/prokaiofficial" // <-- replace with your actual handle
  },
  {
    name: "Telegram",
    icon: "fa-brands fa-telegram",
    hoverColor: "#0088cc",
    hoverIconColor: "#ffffff",
    link: "https://t.me/ProkaiOfficial"
  },
  {
  name: "Facebook",
  icon: "fa-brands fa-facebook-f",
  hoverColor: "#1DA1F2",
  hoverIconColor: "#ffffff",
  link: "https://www.facebook.com/people/ProKai-Official/61578215294386" // <-- replace with your actual page if different
},
  {
  name: "X",
  icon: "fa-brands fa-x-twitter",
  hoverColor: "#000",
  hoverIconColor: "#ffffff",
  link: "https://www.linkedin.com/in/prokaiofficial" // <-- replace with your actual page if different
}
];


socialPlatforms.forEach(platform => {
  const a = document.createElement("a");
  a.href = platform.link;
  a.target = "_blank";
  a.className = `social-button social-button--${platform.name.toLowerCase()}`;
  a.setAttribute("aria-label", platform.name);
  a.style.backgroundColor = "#FF66C4FF";
  a.style.color = "#ffffff";
  a.style.transition = "all 0.3s ease";

  const icon = document.createElement("i");
  icon.className = `fab ${platform.icon} fa-lg`;
  a.appendChild(icon);

  // Hover effect (invert colors)
  a.addEventListener("mouseenter", () => {
    a.style.backgroundColor = platform.hoverColor;
    a.style.color = platform.hoverIconColor;
  });

  a.addEventListener("mouseleave", () => {
    a.style.backgroundColor = "#FF66C4FF";
    a.style.color = "#ffffff";
  });

  container.appendChild(a);
});
