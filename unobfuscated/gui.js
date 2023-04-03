fetch("https://api.github.com/repos/CyberCornVr/jebby/releases/latest")
  .then(data => window.alert(data.tag_name))
  .catch(error => console.error(error));
