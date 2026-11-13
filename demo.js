(function(){
 var bilibiliVideos={
  '5L-POTxF6m4':'BV1jNWh6CEoM',
  'kaCUYo-VlkU':'BV1nuWq6NEmk',
  'OBfKgLWtRRw':'BV1LNWh6CEDw',
  'Kn8r-1lGYx8':'BV144Wh6bEcp',
  '3otK829FVKs':'BV14iWq62Eku',
  '83l6_lhRV-0':'BV1tiWq62EwR',
  'C5VR8_G03R8':'BV1NrWq6VEJf',
  'Hoba3HinV1E':'BV11rWq6VEHv',
  'EELjBSD_XNo':'BV1NrWq6VELL'
 };
 var pageLanguage=document.documentElement.lang.toLowerCase();
 var timeZone='';
 try{timeZone=Intl.DateTimeFormat().resolvedOptions().timeZone||'';}catch(e){}
 var useBilibili=pageLanguage.indexOf('zh')===0||timeZone==='Asia/Shanghai'||timeZone==='Asia/Urumqi';
 function trackOpen(id,title,location,provider){
  if(window['ga-disable-G-1WX73630DH'] !== false)return;
  window.dataLayer=window.dataLayer||[];
  function send(){window.dataLayer.push(arguments);}
  send('event','video_open',{
   send_to:'G-1WX73630DH',video_provider:provider,video_title:title,
   video_url:provider==='bilibili'?'https://www.bilibili.com/video/'+bilibiliVideos[id]:'https://www.youtube.com/watch?v='+id,
   video_id:id, video_location:location, page_language:document.documentElement.lang
  });
 }
 function bilibiliFrame(id,title,autoplay){
  var iframe=document.createElement('iframe');
  iframe.src='https://player.bilibili.com/player.html?bvid='+encodeURIComponent(bilibiliVideos[id])+'&page=1&high_quality=1&autoplay='+(autoplay?'1':'0');
  iframe.title=title;iframe.allow='autoplay; fullscreen; picture-in-picture';
  iframe.referrerPolicy='strict-origin-when-cross-origin';iframe.allowFullscreen=true;
  return iframe;
 }
 if(useBilibili){
  document.querySelectorAll('[data-video]').forEach(function(box){
   var id=box.dataset.video,bvid=bilibiliVideos[id];if(!bvid)return;
   box.replaceChildren(bilibiliFrame(id,box.dataset.title,false));
   var card=box.closest('article');
   var link=card&&card.querySelector('a[href*="youtube.com/watch?v="]');
   if(link){link.href='https://www.bilibili.com/video/'+bvid;link.textContent=pageLanguage.indexOf('zh')===0?'在哔哩哔哩上观看 ↗':'Open on Bilibili ↗';}
  });
 }
 document.addEventListener('click',function(e){
  var link=e.target.closest('a[href*="youtube.com/watch?v="]');
  if(!link)return;
  var id=new URL(link.href).searchParams.get('v');
  var card=link.closest('article');
  var title=card&&card.querySelector('h3');
  trackOpen(id,title?title.textContent.trim():id,'youtube','youtube');
 });
 document.addEventListener('click',function(e){
  var button=e.target.closest('.video-poster .play');if(!button)return;
  var box=button.closest('[data-video]');
  var id=box.dataset.video;
  var provider=useBilibili&&bilibiliVideos[id]?'bilibili':'youtube';
  trackOpen(id,box.dataset.title,'website',provider);
  if(provider==='bilibili'){
   box.replaceChildren(bilibiliFrame(id,box.dataset.title,true));
   return;
  }
  var iframe=document.createElement('iframe');
  iframe.src='https://www.youtube-nocookie.com/embed/'+encodeURIComponent(id)+'?autoplay=1&rel=0&enablejsapi=1&origin='+encodeURIComponent(window.location.origin);
  iframe.title=box.dataset.title;iframe.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  iframe.referrerPolicy='strict-origin-when-cross-origin';iframe.allowFullscreen=true;
  box.replaceChildren(iframe);
 });
})();
