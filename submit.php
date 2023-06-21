$host = "localhost";
$username = "root"; 
$password = "qqq111"; 
$database = "cipdb";

// MySQL 연결
$connection = mysqli_connect($host, $username, $password, $database);

// 연결 오류 체크
if (mysqli_connect_errno()) {
  die("MySQL 연결 실패: " . mysqli_connect_error());
}

$title = $_POST['title'];
$content = $_POST['content'];

$query = "INSERT INTO posts (title, content) VALUES ('$title', '$content')";

if (mysqli_query($connection, $query)) {
  echo "글이 성공적으로 작성되었습니다.";
} else {
  echo "글 작성에 실패하였습니다: " . mysqli_error($connection);
}

mysqli_close($connection);
?>