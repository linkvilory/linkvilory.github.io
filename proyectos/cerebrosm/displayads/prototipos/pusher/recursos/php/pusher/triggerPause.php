<?
require('Pusher.php');

$options = array(
  'encrypted' => true
);
$pusher = new Pusher(
  'fff12bb284dea31b5200',
  '0f145e7a54e8ab295a99',
  '198831',
  $options
);

$data['message'] = $_POST["message"];
$pusher->trigger($_POST["channel"], $_POST["funct"], $data);

?>
