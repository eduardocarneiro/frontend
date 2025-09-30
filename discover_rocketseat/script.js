function toggleMode() {
  const html = document.documentElement
  //  if (html.classList.contains("light")) {
  //    html.classList.remove("light")
  //  } else {
  //    html.classList.add("light")
  //  }
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a image
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a image light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se não tiver light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
