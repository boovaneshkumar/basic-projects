<?php
$title=$_POST["title"];
$assigned=$_POST["assigned"];
$priority=$_POST["priority"];
$department=$_POST["department"];
$hours=$_POST["hours"];
$due=$_POST["due"];
$customer=$_POST["customer"];
$task=$_POST["task"];
$status=$_POST["status"];
$description=$_POST["description"];
?>
<?php
echo "The new Task are:";
echo "<br>";

echo "$title";
echo "<br>";

echo "$assigned";
echo "<br>";

echo "$priority";
echo "<br>";

echo "$department";
echo "<br>";

echo "$hours";
echo "<br>";

echo "$due";
echo "<br>";

echo "$customer";
echo "<br>";

echo "$task";
echo "<br>";

echo "$status";
echo "<br>";

echo "$description";
echo "<br>";

?>
<?php  
$target_path = "upload/";  
$target_path = $target_path.basename( $_FILES['file']['name']);   
  
if(move_uploaded_file($_FILES['file']['tmp_name'], $target_path)) {  
    echo "File uploaded On Your Folder successfully!";  
} else{  
    echo "Sorry, file not uploaded, please try again!";  
}  
?>  