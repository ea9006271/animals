var webURL = window.location.href;
webURL = webURL.substring(0, webURL.lastIndexOf('/'));
const imageWidth = 1920,
    imageHeight = 1080;
var player;
var dialogBox;
var playerStop = false;

var canvasWidth = 0,
    canvasHeight = 0;
var gameScale = 0;
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
var isPad = /iPad/i.test(navigator.userAgent);
var speed = 175;
if (!isMobile || isPad) {
    speed *= 2;
}

addEventListener('load', function() { setTimeout(hideURLbar, 0); }, false);

function hideURLbar() {
    window.scrollTo(0, 1);
}

function setCanvas() {
    let w = document.documentElement.clientWidth;
    let h = document.documentElement.clientHeight;
    //let w = window.innerWidth * window.devicePixelRatio;
    //let h = window.innerHeight * window.devicePixelRatio;
    let h2 = w * 0.5625;
    if (h2 > h) {
        canvasHeight = Math.round(h);
        canvasWidth = Math.round(h * 1.78);
    } else {
        canvasWidth = Math.round(w);
        canvasHeight = Math.round(h2);
    }
    console.log("canvasWidth: " + canvasWidth);
    console.log("canvasHeight: " + canvasHeight);
    gameScale = canvasHeight / imageHeight;
    console.log('gameScale : ' + gameScale);
    //console.log(window.innerWidth * window.devicePixelRatio);
    //console.log(canvasWidth);
    //console.log(canvasHeight);
}

function parseCookie() {
    var cookieObj = {};
    var cookieAry = document.cookie.split(';');
    var cookie;

    for (var i = 0, l = cookieAry.length; i < l; ++i) {
        cookie = jQuery.trim(cookieAry[i]);
        cookie = cookie.split('=');
        cookieObj[cookie[0]] = cookie[1];
    }

    return cookieObj;
}

function getCookie(name) {
    var value = parseCookie()[name];
    if (value) {
        value = decodeURIComponent(value);
    }
    return value;
}

function setCookie(cname, cvalue) {
    const exdays = 7;
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + encodeURIComponent(cvalue) + ";" + expires + ";SameSite=Strict;path=/";
}

function delCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function generatorUUID() {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function playAudio(src) {
    const audio = document.createElement("audio");
    audio.src = src;
    audio.play();
}