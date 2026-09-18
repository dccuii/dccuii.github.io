/* thank you chatgpt: Copies code inside a SAS block */
document.querySelectorAll("figure.highlight").forEach((block) => {
  const code = block.querySelector("code.language-custom_sas td.code pre");
  if (!code) return;

  const toolbar = document.createElement("div");
  toolbar.className = "sas-copy-toolbar";

  const button = document.createElement("button");
  button.className = "sas-copy-button";
  button.type = "button";
  button.textContent = "Copy";

  toolbar.append(button);
  block.prepend(toolbar);

  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(code.textContent);
      button.textContent = "Copied!";
    } catch {
      button.textContent = "Copy failed";
    }

    setTimeout(() => {
      button.textContent = "Copy";
    }, 2000);
  });
});