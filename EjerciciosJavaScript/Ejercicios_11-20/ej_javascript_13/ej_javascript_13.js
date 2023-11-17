function main() {
  let imagen = window.location.search.split("?");
  //document.write(imagen);
  console.log(imagen);
  document.write("<img src =" + imagen[1] + " alt='Imagen elegida'>");
}
main();