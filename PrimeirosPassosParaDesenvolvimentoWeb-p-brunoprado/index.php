<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>teste php</title>
    <script
     src="https://code.jquery.com/jquery-3.6.0.min.js"
      integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
     crossorigin="anonymous"></script>
    <style type="text/css">
        body{
            background-color: blue;
            color: white;
            padding-left: 10px;
            font-weight: bold;
            line-height: 40px;
        }
    </style>
</head>
<body>
    <h1>seguimos aqui</h1>

    <?php
        for ($i = 0; $i < 10; $i++ ){
            print("Linha Número " . $i ."<br/>");

        }

    ?>
    <script type="text/javascript">
        $(document).ready(function(){
            alert("boooo!");
        });


    </script>

</body>
</html>