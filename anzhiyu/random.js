var posts=["2025/05/27/msf-eternal-blue-tutorial/","2025/05/28/ultimate-ai-toolbox-guide/","2025/05/27/linux-system-commands/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };