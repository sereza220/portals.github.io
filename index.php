<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>ВикиВоины: Порталы</title>
	<link rel="stylesheet" href="css/bootstrap-grid.min.css">
	<link rel="stylesheet" href="css/animate.css">
	<link rel="stylesheet" type="text/css" href="slick/slick.css"/>
 <link rel="stylesheet" type="text/css" href="slick/slick-theme.css"/>
	<link rel="stylesheet" href="css/style.css?3.3.0">
	<link rel="shortcut icon" href="http://wikiwarriors.org/images/favicon.ico"/>
	<link href="https://fonts.googleapis.com/css?family=Play:400,700&display=swap&subset=cyrillic" rel="stylesheet">
</head>
<body>
		<header class="header">
		<?php include "header.php" ?>
	<!-- Всплывающее окно -->
	<div class="over-menu">	
<ul>
	<li><a href="#main">Главная</a></li>
	<li><a href="#screen-list">Список порталов</a></li>
	<li><a href="#random">Случайный портал</a></li>
</ul>
</div>
	<!-- Конец всплывающего окна -->
	</header>
	
	<section class="main">
		<?php include "slider.php" ?>
		<div id="main" class="wrap">
		<div class="container">
			<div class="screen screen-main wow fadeInDown">
				<h1>ВикиВоины: Порталы</h1>
				<img src="http://wikiwarriors.org/images/d/d9/Main-portals.png" alt="">
				<div class="screen-main__descr">
				<p class="main-screen__descr"><a href="https://wikiwarriors.org">ВикиВоины</a> — это он-лайн энциклопедия о военной истории, которая содержит статьи на самые разные и порой неожиданные темы. Здесь же мы собираем теамтические подборки-коллекции разных статей, объединенных по какому-либо общему признаку — географическому, временному, цветовому и т. д. — это и есть так называемые <a href="index.php">Порталы</a>.</p><br><p class="main-screen__descr">Мы уверенны, что создаем здесь абсолютно уникальный контент, ведь где еще вы могли узнать о <a href="other/rainbow.php">радуге в военной истории</a> или посетить <a href="museums/mfu.php">музей вымышленной униформы</a>?</p>
			</div>
			</div>
		</div>
	</div>
	</section>

<section>
	<div id="screen-list" class="container">
		<div class="screen screen-list wow fadeInDown">
			<h2>Список порталов</h2>
			<nav class="spoilers-menu"><a class="spoiler-link" href="#sp1">Европа</a><a class="spoiler-link" href="#sp2">Азия</a><a class="spoiler-link" href="#sp3">Африка</a><a class="spoiler-link" href="#sp4">Северная Америка</a><a class="spoiler-link" href="#sp5">Южная Америка</a><a class="spoiler-link" href="#sp6">Океания</a></nav>
			<nav class="spoilers-menu"><a class="spoiler-link" href="#sp7">Эпохи</a><a class="spoiler-link" href="#sp8">Века</a><a class="spoiler-link" href="#sp9">Цвета</a><a class="spoiler-link" href="#sp10">Животные</a><a class="spoiler-link" href="#sp11">Музеи</a><a class="spoiler-link" href="#sp12">Другое</a></nav>
   <div class="spoilers">
     <div class="spoiler" id="sp1">
       <a href="continents/europe.php"><img class="portals-list__card_img" src="http://wikiwarriors.org/images/7/78/Силуэт_Европы.png" alt=""></a><a href="continents/europe.php"><h1 class="spoiler__title">Европа</h1></a>
        <?php include "lists/europe_list.php" ?>
					  </div>
     <div class="spoiler" id="sp2">
       <a href="continents/asia.php"><img class="portals-list__card_img" src="http://wikiwarriors.org/images/8/8a/Контур_азии.png" alt=""></a><a href="continents/asia.php"><h1 class="spoiler__title">Азия</h1></a>
	       <?php include "lists/asia_list.php" ?>		
       </div>
     <div class="spoiler" id="sp3">
       <a href="continents/africa.php"><img class="portals-list__card_img" src="http://wikiwarriors.org/images/7/7a/Силуэт_Африки.png" alt=""></a><a href="continents/africa.php"><h1 class="spoiler__title">Африка</h1></a>
         <?php include "lists/africa_list.php" ?>
        </div>
      <div class="spoiler" id="sp4">
 	      <a href="continents/north_america.php"><img class="portals-list__card_img" src="http://wikiwarriors.org/images/8/8f/Силуэт_Северной_Америки.png" alt=""></a><a href="continents/north_america.php"><h1 class="spoiler__title">Северная Америка</h1></a>
          <?php include "lists/north_america_list.php" ?>
        </div>
      <div class="spoiler" id="sp5">
 	       <a href="continents/south_america.php"><img class="portals-list__card_img" src="http://wikiwarriors.org/images/7/78/Силуэт_Южной_Америки.png" alt=""></a><a href="continents/south_america.php"><h1 class="spoiler__title">Южная Америка</h1></a>
          <?php include "lists/south_america_list.php" ?>
		    </div>	
      <div class="spoiler" id="sp6">
 	       <a href="continents/oceania.php"><img class="portals-list__card_img" src="http://wikiwarriors.org/images/b/b1/Силуэт_Австралии.png" alt=""></a><a href="continents/oceania.php"><h1 class="spoiler__title">Океания</h1></a>
          <?php include "lists/oceania_list.php" ?>
			   </div>
		<!-- Эпохи -->
      <div class="spoiler" id="sp7">
       <a href="age.php"><h1 class="spoiler__title">Эпохи</h1></a>
        <?php include "lists/age_list.php" ?>
      </div>
      <!-- Закончились эпохи и начались века -->
      <div class="spoiler" id="sp8">
       <a href="centuries.php"><h1 class="spoiler__title">Века</h1></a>
       <?php include "lists/centuries_list.php" ?>
			   </div>
<!-- Закончились века и начались цвета -->
      <div class="spoiler" id="sp9">
       <a href="colors.php"><h1 class="spoiler__title">Цвета</h1></a>
        <?php include "lists/colors_list.php" ?>
				      </div>
				      <!-- Закончились цвета -->
      <div class="spoiler" id="sp10">
       <a href="animals.php"><h1 class="spoiler__title">Животные</h1></a>
       <?php include "lists/animals_list.php" ?>
			   </div>
			      	<!-- Закончились животные -->
			   	<div class="spoiler" id="sp11">
        <a href="museums.php"><h1 class="spoiler__title">Музеи</h1></a>
         <?php include "lists/museums_list.php" ?>
			    </div>
			      	<!-- Закончились музеи -->
			    <div class="spoiler" id="sp12">
        <a href="other.php"><h1 class="spoiler__title">Другое</h1></a>
         <?php include "lists/other_list.php" ?>
       </div>
				<!-- Закончилось другое-->
	   </div>
	  </div>
	 </div>
</section>

<section>
	<div id="random" class="container">
		<div class="screen screen-list wow fadeInDown">
			<h2>Случайный портал</h2>
			<div class="random-screen">
				<?php include "random.php" ?>
			</div>
	  </div>
	 </div>
</section>

<?php include "footer.php" ?>

<!-- Кнопка наверх -->
<a href="#" class="scrollup">Наверх</a>	

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
 <script src="slick/slick.min.js"></script>
 <script src="js/wow.min.js"></script>
 <script src="//cdn.jsdelivr.net/jquery.lazyloadxt/1.0.0/jquery.lazyloadxt.min.js"></script>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.8/hammer.min.js"></script>
 <script src="js/script.js?2.0"></script>
 <script>
 	 new WOW().init();
 </script>
 <script>
 	$( ".item" ).click(function() {
    $('html, body').animate({
      scrollTop:$('#main').offset().top - 1
    }, 'slow');
});
 </script>
</body>
</html>