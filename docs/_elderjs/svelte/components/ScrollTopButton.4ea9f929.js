import{S as t,i as o,s,h as c,q as n,j as e,k as a,v as l,f as i,l as r,b as u,y as d,F as m,B as p,E as f}from"../index-8a97f62a.js";function y(t){let o,s,f,y;return{c(){o=c("button"),s=n("↑ 맨 위로"),this.h()},l(t){o=e(t,"BUTTON",{id:!0,class:!0});var c=a(o);s=l(c,"↑ 맨 위로"),c.forEach(i),this.h()},h(){r(o,"id","scroll-top-button"),r(o,"class","svelte-1wifdss")},m(c,n){u(c,o,n),d(o,s),f||(y=m(o,"click",t[0]),f=!0)},p:p,i:p,o:p,d(t){t&&i(o),f=!1,y()}}}function h(t){f((()=>{const t=document.getElementById("scroll-top-button");window.onscroll=function(){!function(){const o=256;0==t.style.opacity&&document.body.scrollTop>o||document.documentElement.scrollTop>o?t.style.opacity=1:1==t.style.opacity&&(t.style.opacity=0)}()}}));return[function(){document.documentElement.scrollTo({top:0,behavior:"smooth"})}]}export default class extends t{constructor(t){super(),o(this,t,h,y,s,{})}}