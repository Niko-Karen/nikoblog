document.addEventListener("scroll",function(){var e=window.scrollY+document.documentElement.clientHeight,t=window.scrollY,n=document.getElementById("pagination"),o=document.getElementById("post-comment");o&&n&&(o=o.offsetTop+o.offsetHeight/2,n.style.display=t<o&&o<e?"flex":"none")});