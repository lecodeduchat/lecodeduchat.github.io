// Création dynamique du block SKILLS
//

const skillsContent = document.querySelector("div.skills.content");
const arraySkills = [
  {
    icon: "fa-code",
    title: "Intégration",
    info: "HTML5, CSS3, Sass et Flexbox.",
  },
  {
    icon: "icon-css",
    title: "Frameworks CSS",
    info: "Bootstrap et Foundation.",
  },
  {
    icon: "icon-js",
    title: "Javascript",
    info: "Principalement à des fins de manipulation du DOM.",
  },
  {
    icon: "fa-database",
    title: "Back-end",
    info: "PHP et MySql, JAVA et Python.",
  },
  {
    icon: "fa-layer-group",
    title: "CMS",
    info: "Wordpress et Drupal.",
  },
  {
    icon: "fa-code",
    title: "RWD",
    info: "Bonne pratique en design responsive. Approche mobile-first.",
  },
  {
    icon: "fa-gear",
    title: "Outils",
    info: "Photoshop, Visual Studio Code et Git.",
  },
];

for (let elt in arraySkills) {
  const skill = document.createElement("article");
  skill.classList.add("skills__item");
  skill.classList.add("content");
  skill.innerHTML = `
        <span class="skills__item-icon fa-solid ${arraySkills[elt].icon}"></span>
        <h3 class="skills__item-title">${arraySkills[elt].title}</h3>
        <p class="skills__item-info">${arraySkills[elt].info}</p>
        `;
  skillsContent.appendChild(skill);
}

// Ajout d'images d'icon pour css et js qui sont en version payante dans fontawesome!!!!
const iconCss = document.querySelector(".icon-css");
const iconJs = document.querySelector(".icon-js");
iconCss.textContent = "{ }";
iconJs.textContent = "});";
