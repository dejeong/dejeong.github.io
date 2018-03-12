<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Daeun Jeong</title>
  <meta name="author" content="Daeun Jeong">

  <script type="text/javascript" src="scripts/jquery.min.js"></script>

  <!-- <link rel="stylesheet" href="https://rawgit.com/dejeong/dejeong.github.io/master/assets/fonts/fonts.css"> -->
  <link rel="stylesheet" href="styles/styles-00.css">

  <?php
  $action = $_GET["action"];
  $myText = $_POST["mytext"];

  if($action = "save") {
    $targetFolder = "/path/to/folder";
    file_put_contents($targetFolder."mytext.txt", $myText);
  }
  ?>
</head>
<body>
  <form action="?action=save" name="myform" method="post">
    <input type=text name="mytext">
    <input type="submit" value="save">
  </form>
</body>
</html>
