<?

  require('Pusher.php');

  header('Content-Type: application/json');

  $pusher = new Pusher("fff12bb284dea31b5200", "0f145e7a54e8ab295a99", "198831");
  $user_id = uniqid();

  $presence_data = array('name' => "Jonathan");

  echo $pusher->presence_auth($_POST['channel_name'], $_POST['socket_id'], $user_id, $presence_data);


?>
