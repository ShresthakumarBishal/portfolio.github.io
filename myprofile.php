<?php
// We need to use sessions, so you should always start sessions using the below code.
session_start();
// If the user is not logged in redirect to the login page...
/*if (!isset($_SESSION['open_sucess'])) {
	header('Location: index.php');
	exit;
}*/
//include php needed file
require_once('connection.php');
require_once('./php/component.php');
//echo $_SESSION['username'];
//$username=$_SESSION['username'];
//$sql="SELECT * FROM usertb where username='$username'";
//$result=mysqli_query($con, $sql);
//$row=mysqli_fetch_array($result);
//$user_id=$row['id'];
?>
<!DOCTYPE html>
<html lang="ne-NP">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link rel="stylesheet" href="cart_style.css">


        <!--font family for logo element-->
         <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia">
 
        <!--font family for all body element-->
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=
        Padauk:wght@400;700&display=swap" rel="stylesheet">
        
        <!--font awesome css emoji BootstrapCDN-->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <title>
         Hamro Bazar ! 
    </title>
    <style>
    #content {
        width: 90%;
        margin:5px auto;
        border: 1px solid blue;
        padding:5px;
        margin-top:5px;
        background: lightblue;
    }
    input {
        margin:2px;
        height: 25px;
    }
    button {
        padding: 5px 5px;
        background: red;
        font-size:15px;
    }
    </style>
</head>

<body>
<div class="navbar">
     <div class="logo"> <a href="index.php"> 
                    Hamro Bazar!
                    </a></div>
                <div> <?php if(isset($_SESSION['username'])) { echo $_SESSION['username']; }?> </div>
                <nav>
                    <ul id="MenuItems">
                        <li><a href="index.php"><i class="fa fa-home"></i>Home</a></li>
                        <li><a href="logout.php">logOut</a></li>
                        <li><a href="">Notification</a></li>
                        <li><a href="cart.php">cart </a></li>
                    </ul>
                </nav>
                <i id="menu" class="fa fa-bars" onclick="menutoggle()">Menu</i>
</div>
  <!-----------add product-------------->
  <div class="small-contanier">
    <div id="content">
    <button id="add_product" onclick="showForm()">ADD PRODUCT</button>
    <div id="show_form" style="display: none;">
    <h3>ADD PRODUCT</h3>
    <form action="upload.php" method="post" enctype="multipart/form-data">
        <h3>Select image to upload:</h3>
        <strong>1th Image:</strong> <input type="file" name="image"><br>
        <strong>2nd Image:</strong> <input type="file" name="image_1"><br>
        <strong>3rd Image:</strong> <input type="file" name="image_2"><br>
        <strong>4th Image: </strong><input type="file" name="image_3"><br>
        <strong>Product Name:</strong> <input type="text" name="text" placeholder="product name"><br>
        <strong>Product Price: </strong><input type="text" name="price"  placeholder="price in Rps"><br>
         <h3>Details About Your Product</h3><textarea name="detail" rows="5" cols="40" placeholder="Write About Your Product"></textarea>
        <input type="hidden" name="user_id" value="<?php echo $user_id; ?>"><br>
        <button type="submit" name="submit"><b>Upload Image</b></button>
    </form>
    </div>
    </div>
</div>
  <!-----------featured product-------------->
    <div class="small-contanier">
         <h2>Products</h2>
       <div class="row">

       <?php
                $sql="SELECT * FROM producttb";
                $result=mysqli_query($con, $sql);
        while($row = mysqli_fetch_array($result)) {
            echo delete($row['product_price'], $row['product_image'], $row['id']);
        }
        ?>

       </div>

   <!--footer-->
    <div class="footer">
    <div class="container">
        <div class="row">
            <div class="footer-col-1">
                <h4>about me</h4>
                <p>this web side for you</p>
            </div>
            <div class="footer-col-1">
                <h4>Custamer</h4>
                <p>custamer yygygtytyt gfyty <br><strong> HaMro BaZar</strong></p>
            </div>
            <div class="footer-col-1">
                <h4>contact Me</h4>
                <p><strong> HaMro BaZar</strong></p>
            </div>
        </div>
        <hr>
            <p class="copy">Copyright 2020 -simple</p>
    </div>
    </div>
    
<!--js for toggle menu  -------->
<script>
function showForm() {
    var x=document.getElementById('show_form');
  if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById('add_product').innerHTML="Cancel To Add";
  } else {
    x.style.display = "none";
    document.getElementById('add_product').innerHTML="Add Product";
  }
}

function menutoggle() {
  var MenuItems= document.getElementById("MenuItems");
  
  if (MenuItems.style.display === "none") {
    MenuItems.style.display = "block";
  } else {
    MenuItems.style.display = "none";
  }
}

     </script>

</body>
</html>