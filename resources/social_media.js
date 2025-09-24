const container = document.getElementById("social-buttons-container");
const socialPlatforms = [
  {
    name: "WhatsApp Channel",
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
    link: "https://discord.gg/QWs6Yw9v"
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
    link: "https://www.instagram.com/prokaiofficial?igsh=MTI5cWc5NTlqaGc0Zg==" // <-- replace with your actual handle
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
  hoverColor: "#3b5998",
  hoverIconColor: "#ffffff",
  link: "#" // <-- replace with your actual page if different
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
