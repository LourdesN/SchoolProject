<?php

include_once './DB Connection.php';

if (isset($_POST['login'])) 
{
    //Getting submitted data from the form
    $email=$_POST['email'];
    $password=$_POST['password'];

    //Querying the database for user information
    $query="SELECT * FROM staff WHERE email='$email' AND password='$password'";
    $result=mysqli_query($conn,$query);
    $row=mysqli_fetch_array($result);

    //Checking if the information exists
    if($result)
    {
        if(mysqli_num_rows($result)>0)
        {
            if($row["email"]==$email)
            {
                if($row['password']==$password)
                {
                    // echo "Username and password match";
                    header( "Location: ./doctor.html");
                    exit();
                }
                else
                {
                    // echo "Wrong password entered!";
                    header( "URL=./staff.html" );
                    exit();
                }
            }
            else
            {
                // echo "Email does not exist!";
                header( "URL=./staff.html" );
                exit();
            }
        }
        else
        {
            // echo "User information does not exist!";
            header( "URL=./staff.html" );
            exit();
        }
    }

}


?>