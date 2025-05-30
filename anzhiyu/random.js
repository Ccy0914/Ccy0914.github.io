var posts=["2025/05/27/linux-system-commands/","2025/05/30/dvwa-web-security-guide/","2024/03/17/msf-eternal-blue-tutorial/","2025/05/30/sqli-lab-guide/","2025/05/28/ultimate-ai-toolbox-guide/","2025/05/30/upload-labs-guide/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };