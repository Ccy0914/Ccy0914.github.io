var posts=["2025/05/25/hello-bt/","2025/05/25/hello-git/","2025/05/25/hello-web/","2025/05/25/hello-world/","2025/05/25/hello-hub/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };