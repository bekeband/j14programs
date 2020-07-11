var LogMasCookieAccepted = 1;
function isLMCSet() {
    var LogMasCookieName = "LogMasUserConsent";
    var LogMasCookieKey = "CookieConsent";
    LogMasCookie = getCookieData(unescape(hGetCookie(LogMasCookieName)));
    var LogMasConsentKey = "CookieConsent";
    var LogMasConsentValue = 200;
    for (var currentCookie in LogMasCookie) {
        if (currentCookie == LogMasConsentKey) {
            if ((LogMasCookie[currentCookie] == 0) || (LogMasCookie[currentCookie] == 1)) {
                LogMasConsentValue = LogMasCookie[currentCookie];
            }
        }
    }
    if (LogMasConsentValue == 200) {
        document.getElementById("lm-cookie-box").style.display = "block";
    }
    if (LogMasConsentValue == 0) {
        LogMasCookieAccepted = 0
    };
}

function setLMCOK(consentValue) {
    var d = new Date();
    d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
    SetCookie("LogMasUserConsent", "CookieConsent", consentValue, d.toUTCString());
    document.getElementById("lm-cookie-box").style.display = "none";
}
function hSetCookie(name, value, expires) {
    var cookie_string = name + "=" + unescape(value);
    if (expires) {
        expires = new Date(expires);
        cookie_string += ";expires=" + expires.toGMTString();
    }
    document.cookie = cookie_string + ";path=/";
}
function SetCookie(cookieName, keyName, value, expires) {
    if (LogMasCookieAccepted == 1) {
        var thisCookie = unescape(hGetCookie(cookieName));
        if (thisCookie) {
            if (keyName) {
                var cookieData = getCookieData(thisCookie);
                cookieData[keyName] = value; value = ""; for (var cookie in cookieData) { value += cookie + "=" + cookieData[cookie] + "&"; } if (value.charAt(value.length - 1) == "&") { value = value.substring(0, value.length - 1) }
            }
        } hSetCookie(cookieName, value, expires);
    }
}

function hGetCookie(cookie_name) {
    var regexp = new RegExp(cookie_name + "=(.*?)(;|$)", "i");
    var results = regexp.exec(document.cookie);
    if (results) {
        return (unescape(results[1]));
    }
    else {
        return null;
    }
}
function getCookieData(cookie) {
    var ret = [];
    var subKeys = cookie.split("&");
    for (var i = 0; i < subKeys.length; i++) {
        var pos = subKeys[i].indexOf("=");
        if (pos != 0) { ret[subKeys[i].substring(0, pos)] = subKeys[i].substring(pos + 1); }
    } return ret;

}

