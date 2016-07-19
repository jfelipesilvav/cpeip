<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>Ministerio de Educación de Chile</title>
	<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
	<meta content="es" name="Language" />
	<meta content="no-cache" http-equiv="Pragma"/>
	<meta content="0" http-equiv="Expires"/>
	<meta content="Mineduc - Departamento de Tecnologia" name="Author" />
	<link rel="stylesheet" href="app/css/mine_buttons.css">
	<link rel="stylesheet" href="app/css/mine_tables.css">
	<link rel="stylesheet" href="app/css/style.css">
	
	<link href="../img/favicon.ico" type="image/x-icon" rel="shortcut icon" />

	
</head>

<body ng-app="mineducapp"
	  ng-controller="mineducControllers">

<div class="wrapper">
	<div id="page">
		<!--<a name="top"></a>  -->
		<div id="top">
			<div class="wrapped">
				<h1 class="logo med">
					<a href="#">static.mineduc.cl</a>
				</h1>
				<!-- <span class="alignleft"></span> <span class="alignright"></span> -->
			</div>
		</div>
		<div class="header med">
			<div class="title med">
				<h1>
					<strong><a href="#">Prototype by Deloitte - SAP</a></strong>
				</h1>
			</div>
		</div>

		<div class="userinfo" ng-show="flagUserLogin">

			Bienvenido Sr(a). <strong>{{userLogin}}</strong> - &nbsp;<a href="#">Cerrar Sesión</a>


		</div>



	</div>
	<div class="static-content">
		<div id="wrap" ng-view="" class="mainview-animation animated">
		</div> <!--wrap -->
	</div>

<div id="footer">
	<div id="container">
		<!-- deprecated --><!-- <div id="ribbon"></div> -->
		<div id="bottommenu">



			<div class="block-right">
						<span class="footer_plain_text">
						<!-- span ancla para funcion staticInfo.js -->
						<span id="mineFooterText"></span>
 							Ministerio de Educación - Teléfono +56 2 4066000 - Dirección Av. Libertador Bernardo O'higgins 1371
							<br />
	      					<a class="btns" href="http://validator.w3.org/check?uri=referer">XHTML 1.0</a> |
	      					<a class="btns" href="http://jigsaw.w3.org/css-validator/validator?uri=http://static.mineduc.cl/css/style.css">CSS 3.0</a> |
	      					<a class="btns" >Versión 2.2</a>
	      				</span>
			</div>

		</div>
	</div>
</div>
</div>


<script src="app/scripts/angular.min.js"></script>
<script src="app/scripts/angular-resource.min.js"></script>
<script src="app/scripts/angular-cookies.min.js"></script>
<script src="app/scripts/angular-sanitize.min.js"></script>
<script src="app/scripts/angular-route.min.js"></script>
<script src="app/scripts/angular-animate.min.js"></script>

<script src="app/app.js"></script>
<script src="app/controllers/controllers.js"></script>

</body>
</html>