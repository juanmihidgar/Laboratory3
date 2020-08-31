import lemonLogo from "./css/content/logo.png";
import webpack from "./css/content/webpack.gif";

export const setDefaultPage = () => {
  var name: string = "Lemoncoders";

  const headerTitle: HTMLElement = document.createElement("h1");

  headerTitle.innerHTML = `<h1>Hello ${name}!</h1>`;
  document.body.appendChild(headerTitle);

  const description: HTMLElement = document.createElement("p");
  description.textContent =
    "This is a bundling laboratory made with webpack for lemoncode Frontend Master";

  document.body.appendChild(description);

  const imgContainer: HTMLElement = document.createElement("div");
  const img: HTMLImageElement = document.createElement("img");
  const gif: HTMLImageElement = document.createElement("img");

  img.src = lemonLogo;
  gif.src = webpack;

  imgContainer.appendChild(img);
  imgContainer.appendChild(gif);

  document.body.appendChild(imgContainer);

  // Test env vars
  console.log(`Api base: ${process.env.API_BASE}`);
};
