'use strict';
document.getElementById('year').textContent=new Date().getFullYear();
const photos=Array.from(document.querySelectorAll('[data-photo]'));
const box=document.getElementById('lightbox');let current=0,opener;
function showPhoto(index){current=(index+photos.length)%photos.length;const item=photos[current];const image=document.getElementById('full-photo');image.src='assets/'+item.dataset.photo+'.webp';image.alt=item.querySelector('img').alt;document.getElementById('photo-caption').textContent=item.dataset.caption;document.getElementById('photo-count').textContent=(current+1)+' / '+photos.length;}
photos.forEach((button,index)=>button.addEventListener('click',()=>{opener=button;showPhoto(index);box.showModal();document.getElementById('close-photo').focus({preventScroll:true});}));
document.getElementById('close-photo').addEventListener('click',()=>box.close());
document.getElementById('previous-photo').addEventListener('click',()=>showPhoto(current-1));document.getElementById('next-photo').addEventListener('click',()=>showPhoto(current+1));
box.addEventListener('keydown',event=>{if(event.key==='ArrowRight'){event.preventDefault();showPhoto(current+1);}if(event.key==='ArrowLeft'){event.preventDefault();showPhoto(current-1);}});box.addEventListener('close',()=>opener?.focus({preventScroll:true}));
document.getElementById('play-film').addEventListener('click',function(){const frame=document.createElement('iframe');frame.src='https://player.vimeo.com/video/1080961013?badge=0&byline=0&h=d29e47ab3e&portrait=0&title=0&autoplay=1';frame.title='Redwood Skye on Staycation — The Destination Channel';frame.allow='autoplay; fullscreen; picture-in-picture';frame.allowFullscreen=true;this.replaceWith(frame);});
