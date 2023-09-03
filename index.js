window.addEventListener("load", () => {
  function onType(e) {
    if (!e || !e.data) return;
    e.data.trim().split(" ").forEach((ch) => {
      if (ch != " ") {
        const p = document.createElement("p");
        p.innerHTML = ch;
        p.className = "circle";
        container.appendChild(p);
      }
    });
  }

  const container = document.getElementById("container");
  const input = document.getElementById("prompt");
  input.oninput = onType;
});