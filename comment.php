<?php
  $comment = htmlspecialchars($_POST["comment"]);
  $file = fopen("comment","at");
  fwrite($file,"$comment\n");
  fclose($file);
?>