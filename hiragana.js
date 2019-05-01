var jp_id = ["aa", "ii", "uu", "ee", "oo", "ka", "ki", "ku", "ke", "ko", "sa", "si", "su", "se", "so", "ta", "ti", "tu", "te", "to", "na", "ni", "nu", "ne", "no", "ha", "hi", "hu", "he", "ho", "ma", "mi", "mu", "me", "mo", "ya", "blank", "yu", "blank", "yo", "ra", "ri", "ru", "re", "ro", "wa", "blank", "blank", "blank", "wo", "blank", "blank", "nn", "blank", "blank"];

var jp_al = ["あ", "い", "う", "え", "お", "か", "き", "く", "け", "こ", "さ", "し", "す", "せ", "そ", "た", "ち", "つ", "て", "と", "な", "に", "ぬ", "ね", "の", "は", "ひ", "ふ", "へ", "ほ", "ま", "み", "む", "め", "も", "や", "0", "ゆ", "0", "よ", "ら", "り", "る", "れ", "ろ", "わ", "0", "0", "0", "を", "0", "0", "ん", "0", "0"];

function show() {
  var jp_char=" ";
  var i, j=0, k=0;
  while(k<=11){
    while(j<51){
      jp_char += '<ul class="flex-container">';
      for(i=j; i<j+5; i++){
        jp_char += '<li class="flex-item"><label class="btn btn-lg btn-info" id="'
        +jp_id[i]
        +'" onclick="return play()">'
        +jp_al[i]
        +'</label></li>';
      }
      jp_char+='</ul>';
      j+=5;
    }
    k++;
  }
  document.getElementById("jp-show").innerHTML = jp_char;
}

function play() {
  var x = event.currentTarget.id;
  if (x !== "blank") {
    var y = "https://www.nhk.or.jp/lesson/mp3/syllabary/"+x+".mp3";
    document.getElementById("switch").innerHTML = '<audio id="jp_audio" preload="metadata" src="'+y.toString()+'"></audio>';
    document.getElementById("jp_audio").play();
  }
}
