(function(){
 document.addEventListener('click',function(e){
  var button=e.target.closest('.video-poster .play');if(!button)return;
  var box=button.closest('[data-video]');
  var iframe=document.createElement('iframe');
  iframe.src='https://www.youtube-nocookie.com/embed/'+encodeURIComponent(box.dataset.video)+'?autoplay=1&rel=0';
  iframe.title=box.dataset.title;iframe.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  iframe.referrerPolicy='strict-origin-when-cross-origin';iframe.allowFullscreen=true;
  box.replaceChildren(iframe);
 });
})();
