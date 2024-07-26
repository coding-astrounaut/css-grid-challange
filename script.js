function toggleNav() {
  const containerMaster = document.querySelector(".container-master");
  console.log(containerMaster.classList);
  containerMaster.classList.toggle("container-master-expanded");
  const nav = document.querySelector("nav");
  nav.classList.toggle("hide-nav");
}
