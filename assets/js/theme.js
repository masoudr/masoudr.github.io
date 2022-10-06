// Has to be in the head tag, otherwise a flicker effect will occur.

let toggleTheme = (theme) => {
  if (theme == "dark") {
    setTheme("light");
    setAnimatedBackground("light");
  } else {
    setTheme("dark");
    setAnimatedBackground("dark");
  }
}


let setTheme = (theme) => {
  transTheme();
  setHighlight(theme);

  if (theme) {
    document.documentElement.setAttribute("data-theme", theme);
  }
  else {
    document.documentElement.removeAttribute("data-theme");
  }
  localStorage.setItem("theme", theme);

  // Updates the background of medium-zoom overlay.
  if (typeof medium_zoom !== 'undefined') {
    medium_zoom.update({
      background: getComputedStyle(document.documentElement)
        .getPropertyValue('--global-bg-color') + 'ee',  // + 'ee' for trasparency.
    })
  }
};

let setHighlight = (theme) => {
  if (theme == "dark") {
    document.getElementById("highlight_theme_light").media = "none";
    document.getElementById("highlight_theme_dark").media = "";
  } else {
    document.getElementById("highlight_theme_dark").media = "none";
    document.getElementById("highlight_theme_light").media = "";
  }
}


let transTheme = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 500)
}


let initTheme = (theme) => {
  if (theme == null || theme == 'null') {
    const userPref = window.matchMedia;
    if (userPref && userPref('(prefers-color-scheme: dark)').matches) {
      theme = 'dark';
    }
  }
  // force dark theme
  theme = 'dark';
  setTheme(theme);
  setAnimatedBackground(theme);
}

let setAnimatedBackground = (theme) => {
  var bg_color = getComputedStyle(document.body).getPropertyValue('--global-bg-color-gradient');
  if (theme == "dark") {
    // dark
    document.getElementById("particles-js").style.background = bg_color;
    particlesJS.load('particles-js', '/assets/json/particles_dark.json', function () {
      // console.log('dark theme loaded');
    });
  }
  else {
    // light
    document.getElementById("particles-js").style.background = bg_color;
    particlesJS.load('particles-js', '/assets/json/particles_light.json', function () {
      // console.log('light theme loaded');
    });
  }
}


initTheme(localStorage.getItem("theme"));
