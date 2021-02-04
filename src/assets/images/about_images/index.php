<?php

session_name("fancyform");
session_start();


$_SESSION['n1'] = rand(1,20);
$_SESSION['n2'] = rand(1,20);
$_SESSION['expect'] = $_SESSION['n1']+$_SESSION['n2'];


$str='';
if($_SESSION['errStr'])
{
	$str='<div class="error">'.$_SESSION['errStr'].'</div>';
	unset($_SESSION['errStr']);
}

$success='';
if($_SESSION['sent'])
{
	$success='<h1>Thank you!</h1>';
	
	$css='<style type="text/css">#contact-form{display:none;}</style>';
	
	unset($_SESSION['sent']);
}
?>


<!DOCTYPE html >
<html lang="ja" xmlns:og="http://ogp.me/ns#" xmlns:fb="http://www.facebook.com/2008/fbml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Contact Natakara Pilates Studio Tokyo</title>
<meta http-equiv="Content-Script-type" content="text/javascript">
<meta http-equiv="Content-Style-type" content="text/css">
<meta name="keywords" content="Pilates,Pilates in Tokyo, Pilates Tokyo,Contact,NATAKARA PILATES" />
<meta name="description" content="Contact to NATAKARA PILATES" />
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7"/>
<!-- OGP  -->
<meta property="og:title" content="Contact to NATAKARA PILATES">
<meta property="og:description" content="Contact to NATAKARA PILATES">
<meta property="og:type" content="website">
<link rel="stylesheet" type="text/css" href="jqtransformplugin/jqtransform.css" />
<link rel="stylesheet" type="text/css" href="formValidator/validationEngine.jquery.css" />
<link rel="stylesheet" type="text/css" href="demo.css" />
<link rel="stylesheet" href="../common/css/style.css" media="screen, projection, tv, print">
<?=$css?>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.11.1/jquery.validate.min.js"></script>

<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js"></script>
<script type="text/javascript" src="jqtransformplugin/jquery.jqtransform.js"></script>
<script type="text/javascript" src="formValidator/jquery.validationEngine.js"></script>

<script type="text/javascript" src="script.js"></script>
<script type="text/javascript">
$(function(){
    var topBtn = $('#pageTop');	
	topBtn.hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 150) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
	});
	//スクロールしてトップ
    topBtn.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
    });
	$('a[href^=#]').click(function(){
        var speed = 800;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
     });
});
</script>
<!-- AddThis Smart Layers BEGIN -->
<!-- Go to http://www.addthis.com/get/smart-layers to customize -->
<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-528db8f5461eb7aa"></script>
<script type="text/javascript">
  addthis.layers({
    'theme' : 'transparent',
    'share' : {
      'position' : 'left',
      'numPreferredServices' : 6
    }, 
    'follow' : {
      'services' : [
        {'service': 'facebook', 'id': 'natakara.pilates'}
      ]
    }   
  });
</script>
<!-- AddThis Smart Layers END -->
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-53892-34', 'natakara.net');
  ga('send', 'pageview');

</script>
</head>

<body>

<div id="container">
  <header>
    <p id="logo"><a href="http://natakara.net/about/"><img src="../common/images/logo.gif" width="184" height="85" alt="ナタカラ ピラティス"/></a></p>
    <ul id="langIcon">
    <li><a href="http://blog.natakara.net/"><img src="http://natakara.net/common/images/icon_blog.gif" width="30" height="20" alt="English to page"/></a></li>
    <li lang="en"><a href="http://natakara.net/about/index.html"><img src="http://natakara.net/common/images/icon_en.gif" width="30" height="20" alt="English to page"/></a></li>
    <li lang="ja"><a href="http://natakara.net/ja/about/index.html"><img src="http://natakara.net/common/images/icon_ja.gif" width="30" height="20" alt="日本語ページへ"/></a></li>
    <li lang="ru"><img src="http://natakara.net/common/images/icon_ru.gif" width="30" height="20" alt="Для российского странице"/></li>
    </ul>
    <!-- #BeginLibraryItem "/Library/nav_en.lbi" -->
    <nav id="enNav">
      <ul>
        <li><a href="../about/index.html"><img src="../common/images/gnav01_en.gif" width="80" height="51" alt="About Us"/></a></li>
        <li><a href="../lesson/index.html"><img src="../common/images/gnav05_en.gif" width="134" height="51" alt="Sessions Details"/></a></li>
        <li><a href="../plan/index.html"><img src="../common/images/gnav02_en.gif" width="155" height="51" alt="Schedule and Fees"/></a></li>
        <li><a href="../studio/index.html"><img src="../common/images/gnav04_en.gif" width="71" height="51" alt="Location"/></a></li>
        <li><a href="../faq/index.html"><img src="../common/images/gnav03_en.gif" width="51" height="51" alt="Policy"/></a></li>
        <li><a href="../contact/index.php"><img src="../common/images/gnav06_en.gif" width="92" height="51" alt="Contact Us"/></a></li>
      </ul>
    </nav>
  <!-- #EndLibraryItem --> </header>
  <div id="mainArea">
    <div id="mainContent">
            <section class="contents">
	<div id="form-container">
    <h1>Contact Us</h1>
        
    <form id="contact-form" name="contact-form" method="post" action="submit.php">
      <table width="100%" border="0" cellspacing="0" cellpadding="5">
        <tr>
          <td width="15%"><label for="name">Name</label></td>
          <td width="70%"><input type="text" class="validate[required,custom[onlyLetter]]" name="name" id="name" value="<?=$_SESSION['post']['name']?>" /></td>
          <td width="15%" id="errOffset">&nbsp;</td>
        </tr>
        <tr>
          <td><label for="email">Email</label></td>
          <td><input type="text" class="validate[required,custom[email]]" name="email" id="email" value="<?=$_SESSION['post']['email']?>" /></td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><label for="subject">Subject</label></td>
          <td><select name="subject" id="subject">
            <option value="" selected="selected"> - Choose -</option>
            <option value="Appointment">Appointment</option>
            <option value="Question">Question</option>
            <option value="Business proposal">Business proposal</option>
            <option value="Advertisement">Advertising</option>
            <option value="Complaint">Complaint</option>
          </select>          </td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td valign="top"><label for="message">Message</label></td>
          <td><textarea name="message" id="message" class="validate[required]" cols="35" rows="5"><?=$_SESSION['post']['message']?></textarea></td>
          <td valign="top">&nbsp;</td>
        </tr>
        
        <tr>
          <td valign="top">&nbsp;</td>
          <td colspan="2"><input type="submit" name="button" id="button" value="Submit" />
          <input type="reset" name="button2" id="button2" value="Reset" />
          
          <?=$str?>          <img id="loading" src="img/ajax-load.gif" width="16" height="16" alt="loading" /></td>
        </tr>
      </table>
      </form>
      <?=$success?>
    </div>
	<dl class="contactTel">
       <h2>Phone number</h2>
<dd><span class="tel"><a href="tel:08066256351">080-6625-6351</a></span><br>
  </dd>
        </dl>
<br>
<h2>Studio Access</h2>
<a href="../studio/index.html">Click here to check map</a>
</div>
<!-- #BeginLibraryItem "/Library/subContent_en.lbi" -->
    <div id="subContent">
      <div class="contents">
        <p><a href="http://blog.natakara.net/"><img src="../common/images/banner_whatsnew.jpg" width="240" height="250" alt=" What's New"/></a></p>
        <p><a href="index.php"><img src="../common/images/top.jpg" width="240" height="107" alt="Reservation of PILATES"/></a></p>
        <p><a href="../studio/index.html"><img src="../common/images/banner_studio.jpg" width="241" height="100" alt="Studio Access"/></a></p>
      </div>
      <div class="contents" id="facebook">
        <iframe src="//www.facebook.com/plugins/likebox.php?href=https%3A%2F%2Fwww.facebook.com%2Fnatakara.pilates&amp;width=240&amp;height=500&amp;colorscheme=light&amp;show_faces=true&amp;header=true&amp;stream=false&amp;show_border=true&amp;appId=272395409456858" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:240px; height:500px;" allowtransparency="true"></iframe>
      </div>
    </div>
  <!-- #EndLibraryItem --> </div>
<p id="pageTop"><a href="#container">↑Go to top</a></p>
</div>
<footer>
  <div id="fooerBody">
    <div class="vcard">
      <p class="fn"><a href="/"><img src="http://natakara.net/common/images/logo_footer.gif" width="184" height="74" alt="ナタカラ ピラティス - Natakara Pilates"/></a></p>
      <p class="adr"><span class="postal-code">〒154-0004</span><br>
        <span class="region">東京都</span><span class="locality">世田谷区</span><span class="street-address">太子堂1丁目12-23</span>第一ゴールドビル 3F<br>
        No1 Gold BL 3F,Taishido1-12-23,Setagaya-ku,Tokyo,Japan.<br>
        <span class="tel">TEL: 080-6625-6351</span>
      <p> 
    </div>
    <p id="copyright">&copy;2013-2019 Natakara Pilates. All Rights Reserved.</p>
  </div>
</footer>

</body>
</html>
