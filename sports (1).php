<?php

if (isset($_POST["search"])) {
    // Sanitize the search input to prevent XSS attacks and trim extra spaces
    $searchTerm = htmlspecialchars(strtolower(trim($_POST["search"])));

    // Check the search term and include the corresponding HTML file
    switch ($searchTerm) {
        case "basketball":
            include 'basketball.html'; 
            break;

        case "bjj":
            include 'BJJ.html'; 
            break;

        case "brazilian jiu jitsu":
            include 'BJJ.html'; 
            break;

        case "c":
            include 'third_file.html';  
            break;
 
        default:
            echo "<script>
                    alert('Search term not found. Please try again.');
                        window.location = '" . $_SERVER['PHP_SELF'] . "'; // Redirect to the same page
                  </script>";
            break;
    }
} else {
    include 'search.html';  // Include the search page if no search term is provided
}
?>
