async function CheckVersion() {
  let x = await fetch("https://raw.githubusercontent.com/CyberCornVr/jebby/main/version/version.txt");
  let y = await x.text();
  if(y > 1.0) {
    let z = window.confirm(The Code you are using is outdated!\nTo use the latest version press OK\nTo use your current version press cancel);
    if(z = true) {
      window.location.href = "https://github.com/CyberCornVr/jebby"
    }
  }
}

