<?php
  $comment = htmlspecialchars($_POST["comment"]);
  $file = fopen("comment.txt","at");
  fwrite($file,"$comment\n");
  fclose($file);
?>