function RemoveFixedComment(){var e=document.querySelectorAll(".fixedcomment");if(e)for(i=0;i<e.length;i++)e[i].classList.remove("fixedcomment")}function AddFixedComment(){var e=document.getElementById("post-comment"),t=document.getElementById("quit-board");e.classList.add("fixedcomment"),t.classList.add("fixedcomment")}function CreateQuitBoard(){document.getElementById("post-comment").insertAdjacentHTML("beforebegin",'<div id="quit-board" onclick="RemoveFixedComment()"></div>')}function FixedCommentBtn(){var e=document.getElementById("post-comment");e?-1<e.className.indexOf("fixedcomment")?RemoveFixedComment():(CreateQuitBoard(),AddFixedComment()):pjax?pjax.loadUrl("/comment/#post-comment"):window.location.href="/comment/#post-comment"}RemoveFixedComment();