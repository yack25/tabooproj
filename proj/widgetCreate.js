/**
 * Created by Yitzchak on 7/18/17.
 */
var j = 8;
function widgetCallback(JSONobject) {
    var mainImg = JSONobject.mainImage;
    var imgs = JSONobject.images;
    var wHTML = "";

    wHTML += ('<div>');
        wHTML += ('<div id="cnt">');
            wHTML += ('<div id="container">');
                wHTML += ('<div id="left"> Video &raquo;</div>');
                wHTML += ('<div id="right"> Powered by Taboola</div>');
            wHTML += ('</div>');
            wHTML += ('<div class="image-container">');
                wHTML += ('<img class="real_img" src="' + mainImg.srcUrl + '" onmouseenter="hoverMainImg()" onmouseleave="leaveMainImg()">');
                wHTML += ('<div class="icon-cnt" id="icon-cnt" onmouseenter="hoverMainImg()" onmouseleave="leaveMainImg()"> <img id="icon" class="icon" src="images/video-play-icon-overlay.png"></div>');
            wHTML += ('</div>');
            wHTML += ('<div id="par">');
            wHTML += ('<p>');
            wHTML += (mainImg.txt);
            wHTML += ('</p>');
            wHTML += ('</div>');
        wHTML += ('</div>');
        wHTML += ('<div class="tbl-cnt">');
            wHTML += ('<table class="tbl" id="table" >');
                wHTML += ('<tr style="height: 12px"/>');


                    for (i = 0; i < 4; i++) {
                        var img = imgs[i];
                        if(i == 0 || i == 2)
                        {
                            wHTML += ('<tr>');
                        }

                                wHTML += ('<td>');
                                    wHTML += ('<div class="image-container-td" id="image-container-td' + i +'">');
                                        wHTML += ('<div class="icon-cnt-cnt" onmouseenter="hoverTd('  + getParameters(i) + ')" onmouseleave="leaveTd(' + getParameters(i) + ')">');
                                            wHTML += ('<div class="icon-cnt-td"  class="icon-td-hidden" id="icon-cnt' + i + '" onmouseenter="hoverTd(' + getParameters(i) + ')" onmouseleave="leaveTd(' + getParameters(i) + ')">');
                                                wHTML += ('<img id="icon' + i + '"  class="icon-td-hidden" class="icon-td"  src="images/video-play-icon-overlay.png" onmouseenter="hoverTd(' + getParameters(i) + ')" onmouseleave="leaveTd(' + getParameters(i) + ')">');
                                            wHTML += ('</div>');
                                        wHTML += ('</div>');
                                        wHTML += ('<img class="img-abs" id="img' + i + '" src="' + img.srcUrl + '" onmouseenter="hoverTd(' + getParameters(i) + ')" onmouseleave="leaveTd(' + getParameters(i) + ')">');
                                        var h = "51";
                                        wHTML += ('<div style="min-height: ' + h + 'px">');
                                            wHTML += ('<p>');
                                                wHTML += ('<span class="cut-span" id="text-span' + i + '">' + img.txt + '</span>');
                                                wHTML += ('<span id="duration' + i + '">' + img.duration + '</span>');
                                            wHTML += ('</p>');
                                        wHTML += ('</div>');
                                    wHTML += ('</div>');
                                wHTML += ('</td>');

                        if(i == 1 || i == 3)
                        {
                            wHTML += ('</tr>');
                        }

                        if(i == 1)
                        {
                            wHTML += ('<tr id="seperator-tr" class="seperator-tr">');
                        }

                    }

            wHTML += ('</table>');
        wHTML += ('</div>');
    wHTML += ('</div>');

    hoverTd = hoverTdSection1;
    leaveTd = leaveTdSection1;
    document.getElementById('taboolaWidget').innerHTML = wHTML;

    section2handleQueryString();
    section3changeThirdItem(imgs[2].duration);
}

function getParameters(i){
    var img = 'img', imageContainerTd = 'image-container-td', iconCnt = 'icon-cnt', icon = 'icon', textSpan= 'text-span', duration = 'duration', isFromFirstRow = true;

    if( i > 1)
        isFromFirstRow = false;

    var params =  '\'' + img + i + '\', \'' + imageContainerTd + i + '\', \'' + iconCnt + i + '\', \'' + icon + i + '\', \'' + textSpan + i + '\' , \'' + duration + i + '\', ' + isFromFirstRow.toString();
    return params;
}

function hoverMainImg() {
    document.getElementById("icon-cnt").className = "icon-cnt-h";
    document.getElementById("icon").className = "icon-h";
}

function leaveMainImg() {
    document.getElementById("icon-cnt").className = "icon-cnt";
    document.getElementById("icon").className = "icon";
}

function hoverTdSection1(id1, id2, id3, id4, id5, id6, isFromFirstRow) {

    //document.getElementById(id1).classList.add("real_img-td-h");
    //document.getElementById(id2).classList.add("image-container-td-h");
    //document.getElementById(id3).classList.remove("icon-td-hidden");
    //document.getElementById(id4).classList.remove("icon-td-hidden");
    document.getElementById(id1).className = 'img-abs real_img-td-h';
    document.getElementById(id2).className = 'image-container-td image-container-td-h';
    document.getElementById(id3).className = 'icon-cnt-td';
    document.getElementById(id4).className = 'icon-td';
	
	//document.getElementById(id5).className = 'cut-span';//style.color = '#33b52f';//classList.add("text-td-h");
    
	
	//document.getElementById(id5).classList.add("text-td-h");
    document.getElementById(id5).className = 'cut-span text-td-h';
	
	//

    document.getElementById(id6).style.color = '#33b52f';//.classList.add("text-td-h");

    if(isFromFirstRow)
        document.getElementById('seperator-tr').className = "seperator-tr-h";


}

function leaveTdSection1(id1, id2, id3, id4, id5, id6, isFromFirstRow) {

    document.getElementById(id1).className = "img-abs";
    document.getElementById(id2).className = "image-container-td";
    document.getElementById(id3).className = "icon-cnt-td icon-td-hidden";
    document.getElementById(id4).className = "icon-td icon-td-hidden";
    //document.getElementById(id5).className = 'cut-span';//.style.color = '#000000';//.classList.remove("text-td-h");
    document.getElementById(id5).className = "cut-span";

    document.getElementById(id6).style.color = '#000000';//.classList.remove("text-td-h");

    if(isFromFirstRow)
        document.getElementById('seperator-tr').className = "seperator-tr";

}

function section2handleQueryString() {
    var el = document.getElementById("container");
    var value = getQueryStringValue ('header_color');
    console.log(value);

    if(value == "")
        el.style.backgroundColor = "black";
    else if(/(^[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(value))
        el.style.backgroundColor = "#" + value;
    else
        el.style.backgroundColor = "red";


}

function getQueryStringValue (key) {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}


function section3changeThirdItem(duration) {
    var imgEl = document.getElementById("img2");
    imgEl.src = "http://cambodiaflag.facts.co/FlagofCambodia1975-1976.jpg";

    var oldDurationEl = document.getElementById('duration2');
    oldDurationEl.className = "icon-td-hidden";

    var newDuration = ('<span id="duration20">' + duration + '</span>');

    var div = document.createElement('div');
    div.className = "d20div";
    div.innerHTML = newDuration;
    var td = document.getElementById('table').getElementsByTagName('td')[2];

    td.insertBefore(div, td.firstChild);

    hoverTd = hoverTdSection3;
    leaveTd = leaveTdSection3;
}

function hoverTdSection3(id1, id2, id3, id4, id5, id6, isFromFirstRow) {
    hoverTdSection1(id1, id2, id3, id4, id5, id6, isFromFirstRow);
    if(id1 == 'img2')
        document.getElementById('duration20').className = 'd20div text-td-h';

}

function leaveTdSection3(id1, id2, id3, id4, id5, id6, isFromFirstRow) {
    leaveTdSection1(id1, id2, id3, id4, id5, id6, isFromFirstRow);
    if(id1 == 'img2')
        document.getElementById('duration20').className = 'd20div';
}