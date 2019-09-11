!function(){
    if (/Android|webOS|iPhone|BlackBerry/i.test(navigator.userAgent)) {
    } else {
        //浏览器中打开
        console.log("~~~~~~~: "+queryStr('device'))
        if(queryStr('device') != "pc"){
            var href = location.href;
            if(href.indexOf('?') != -1){
                href += "&device=pc"
            }else{
                href += "?device=pc"
            }
            var scale = 1/window.devicePixelRatio;
            if(document.documentElement.clientWidth > 2000){
                scale =  scale* 1.1
            }
            console.log(document.documentElement.clientWidth)

            document.documentElement.style.backgroundColor="#f1f1f1";
            document.write("<iframe class='phone-iframe-warp' style='transform: scale("+scale+");-webkit-transform: scale("+scale+");' src='"+href+"' frameborder='0' >")
        }
    }
}()

function queryStr(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}
