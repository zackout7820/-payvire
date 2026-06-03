const styleId = "cursor-changer-style";

function makeCursor(svg) {
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}") 16 16, auto`;
}

const cursorStyles = {
  default: "auto",
  rainbow: makeCursor(`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#ff3b3b"/><stop offset="25%" stop-color="#ffb400"/><stop offset="50%" stop-color="#00c957"/><stop offset="75%" stop-color="#3b9cff"/><stop offset="100%" stop-color="#a100ff"/></linearGradient></defs><circle cx="16" cy="16" r="13" fill="url(#g)" stroke="#ffffff" stroke-width="2"/></svg>`),
  heart: makeCursor(`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#ff3366" d="M16 29s-11-7.4-11-16.5S9.5 3 16 10.5 27 3 27 12.5 16 29 16 29z"/></svg>`),
  star: makeCursor(`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#ffd93b" stroke="#ffffff" stroke-width="2" d="M16 4l4.7 9.5L31 15l-7.5 7.4L25.3 29 16 24.5 6.7 29l1.8-6.6L1 15l10.3-1.5L16 4z"/></svg>`),
  pointer: makeCursor(`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#8a5cff" d="M6 2l18 13-7 1 1 9-6-5-6 5 1-10-7-8z"/></svg>`)
};

function applyCursorStyle(styleName) {
  const cursorValue = cursorStyles[styleName] || cursorStyles.default;
  const existingStyle = document.getElementById(styleId);
  const css = cursorValue === "auto"
    ? "* { cursor: auto !important; }"
    : `* { cursor: ${cursorValue} !important; }`;

  if (existingStyle) {
    existingStyle.textContent = css;
  } else {
    const styleElement = document.createElement("style");
    styleElement.id = styleId;
    styleElement.textContent = css;
    document.documentElement.appendChild(styleElement);
  }
}

chrome.storage.sync.get({ cursorStyle: "default" }, (result) => {
  applyCursorStyle(result.cursorStyle);
});

chrome.storage.onChanged.addListener((changes, area) => {
  if (area === "sync" && changes.cursorStyle) {
    applyCursorStyle(changes.cursorStyle.newValue);
  }
});
