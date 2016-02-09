<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>Sign In with Auth0</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    <style>
        html, body {
            padding: 0;
            margin: 0;
        }

        .table {
            display: table;
            position: absolute;
            height: 100%;
            width: 100%;
            background: linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0));
            background-color: #e8ebef;
        }

        .cell {
            display: table-cell;
            vertical-align: middle;
        }

        .content {
            padding: 25px 0px 25px 0px;
            margin-left: auto;
            margin-right: auto;
            width: 280px; /* login widget width */
        }
    </style>
</head>
<body>

<div class="table">
    <div class="cell">
        <div class="content">
            <!-- WIDGET -->
            <div id="widget-container"></div>
        </div>
    </div>
</div>

<!--[if IE 8]>
<script src="//cdnjs.cloudflare.com/ajax/libs/ie8/0.2.5/ie8.js"></script>
<![endif]-->

<!--[if lte IE 9]>
<script src="https://cdn.auth0.com/js/base64.js"></script>
<script src="https://cdn.auth0.com/js/es5-shim.min.js"></script>
<![endif]-->

<script src="https://cdn.auth0.com/js/lock-8.2.js"></script>
<script src="https://cdn.auth0.com/w2/auth0-6.js"></script>
<script src="https://code.jquery.com/jquery-2.2.0.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/q.js/1.4.1/q.min.js"></script>

<script>

      <%=login %>

</script>
</body>
</html>
