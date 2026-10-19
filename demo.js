(function(){
 function trackOpen(id,title,location){
  if(window['ga-disable-G-1WX73630DH'] !== false)return;
  window.dataLayer=window.dataLayer||[];
  function send(){window.dataLayer.push(arguments);}
  send('event','video_open',{
   send_to:'G-1WX73630DH', video_provider:'youtube',video_title:title,
   video_url:'https://www.youtube.com/watch?v='+id,
   video_id:id, video_location:location, page_language:document.documentElement.lang
  });
 }
 document.addEventListener('click',function(e){
  var link=e.target.closest('a[href*="youtube.com/watch?v="]');
  if(!link)return;
  var id=new URL(link.href).searchParams.get('v');
  var card=link.closest('article');
  var title=card&&card.querySelector('h3');
  trackOpen(id,title?title.textContent.trim():id,'youtube');
 });
 document.addEventListener('click',function(e){
  var button=e.target.closest('.video-poster .play');if(!button)return;
  var box=button.closest('[data-video]');
  trackOpen(box.dataset.video,box.dataset.title,'website');
  var iframe=document.createElement('iframe');
  iframe.src='https://www.youtube-nocookie.com/embed/'+encodeURIComponent(box.dataset.video)+'?autoplay=1&rel=0&enablejsapi=1&origin='+encodeURIComponent(window.location.origin);
  iframe.title=box.dataset.title;iframe.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  iframe.referrerPolicy='strict-origin-when-cross-origin';iframe.allowFullscreen=true;
  box.replaceChildren(iframe);
 });
})();
