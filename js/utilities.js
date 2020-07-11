function getcookie()
{
	var cd = document.getElementById("lm-cookie-box");
	cd.innerHTML = "<div id=\"lm-cookie-content\"> ";
	cd.innerHTML +=" <span style=\"font-weight:bold;\">Weboldalunk Cookie-kat használ a jobb működés érdekében! ";
	cd.innerHTML +=" A böngészés folytatásával elfogadja a Cookie-k (sütik) használatát. </span><br /> ";
	cd.innerHTML +="További információk: <a target=\"_blank\" href=\"../data/pdf/3_adatkezeles.pdf\"";
	cd.innerHTML +="title=\"Adatkezelési tájékoztató\"><span class=\"text\">Adatkezelési tájékoztató</span></a>";
	cd.innerHTML +="<a target=\"_blank\" href=\"../data/pdf/8_cookie.pdf\" title=\"Cookie Információk\"><span class=\"text\">Cookie";
	cd.innerHTML +="Információk</span></a>";
	cd.innerHTML +="<br /><br />";
	cd.innerHTML +="<a href=\"javascript:setLMCOK(1)\" title=\"Elfogadom\" id=\"lm-cookie-btn\">Elfogadom</a>";
	cd.innerHTML +="<br /><br />";
	cd.innerHTML +="</div>";
	cd.innerHTML +="<script> window.onload = function () { isLMCSet(); } < /script>";
}