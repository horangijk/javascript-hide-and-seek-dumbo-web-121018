function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n){
  const li = document.getElementById('app').querySelectorAll('ul.ranked-list li');

  for (let i = 0; i< li.length; i++){
  li[i].innerHTML=parseInt(li[i].innerHTML)+n;
  }
}

function deepestChild(){
  var lis = document.getElementById('grand-node').querySelector('div');
  var test;

  for (let i = 0; i <lis.length-1; i++){
  test= lis[i].querySelector("div");
  }
  return test;

}

function deepestChild() {
  var lis=document.getElementById("grand-node").querySelectorAll("div");
  var test;
  for(let i=0;i<lis.length-1;i++) {
    test=lis[i].querySelector("div");
  }
return test;
}
