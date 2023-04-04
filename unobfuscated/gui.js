async function CheckVersion() {
  let x = await fetch("https://raw.githubusercontent.com/CyberCornVr/jebby/main/version/version.txt");
  let y = await x.text();
  if (y > 1.0) {
    let text = "The code you are using is outdated!\nTo use the latest version press OK\nTo use your current version press cancel";
    if (confirm(text) == true) {
      window.location.href = "https://github.com/CyberCornVr/jebby";
    } else {
      createGui();
    }
  }
}

function createGui() {
  let gui = "hi";
}

CheckVersion();
