import{Z as u,_ as b,aa as m,b as i,c as C,da as k,e as w,fa as N,h as v,i as L,ia as A,ja as y,r as g}from"./chunk-2UQ4BWIB.js";import"./chunk-QAWHJ5B3.js";import"./chunk-FDDJE64P.js";var E=r=>{i(r+" .md img")&&(y("fancybox"),y("justifiedGallery"),A("fancybox",()=>{let t=jQuery.noConflict();i.each(r+" p.gallery",e=>{let a=document.createElement("div");a.className="gallery",a.setAttribute("data-height",String(e.getAttribute("data-height")||220)),a.innerHTML=e.innerHTML.replace(/<br>/g,""),e.parentNode.insertBefore(a,e),e.remove()}),i.each(r+" .md img:not(.emoji):not(.vemoji)",e=>{let a=t(e),o=a.attr("data-src")||a.attr("src"),c=a.wrap('<a class="fancybox" href="'+o+'" itemscope itemtype="https://schema.org/ImageObject" itemprop="url"></a>').parent("a"),n,l="image-info";if(a.is("a img")||(a.data("safe-src",o),a.is(".gallery img")?l="jg-caption":c.attr("data-fancybox","default").attr("rel","default")),n=e.getAttribute("title")){c.attr("data-caption",n);let p=document.createElement("span"),s=document.createTextNode(n);p.appendChild(s),p.addClass(l),C(e,p)}}),i.each(r+" div.gallery",(e,a)=>{t(e).justifiedGallery({rowHeight:t(e).data("height")||120,rel:"gallery-"+a}).on("jg.complete",function(){t(this).find("a").each((o,c)=>{c.setAttribute("data-fancybox","gallery-"+a)})})}),t.fancybox.defaults.hash=!1,t(r+" .fancybox").fancybox({loop:!0,helpers:{overlay:{locked:!1}}})},window.jQuery))};var F=()=>{if(!i(".md"))return;E(".post.block"),i(".post.block").oncopy=t=>{if(m(LOCAL.copyright),LOCAL.nocopy){t.preventDefault();return}let e=i("#copyright");if(window.getSelection().toString().length>30&&e){t.preventDefault();let a="# "+e.child(".author").innerText,o="# "+e.child(".link").innerText,c="# "+e.child(".license").innerText,n=a+"<br>"+o+"<br>"+c+"<br><br>"+window.getSelection().toString().replace(/\r\n/g,"<br>"),l=a+`
`+o+`
`+c+`

`+window.getSelection().toString().replace(/\r\n/g,`
`);if(t.clipboardData)t.clipboardData.setData("text/html",n),t.clipboardData.setData("text/plain",l);else if(window.clipboardData)return window.clipboardData.setData("text",l)}},i.each("li ruby",t=>{let e=t.parentNode;t.parentNode.tagName!=="LI"&&(e=t.parentNode.parentNode),e.addClass("ruby")}),i.each("ol[start]",t=>{t.style.counterReset="counter "+parseInt(t.getAttribute("start")-1)}),i.each(".md table",t=>{w(t,{className:"table-container"})}),i.each(".highlight > .table-container",t=>{t.className="code-container"}),i.each("figure.highlight",t=>{let e=t.child(".code-container"),a=t.child("figcaption");t.insertAdjacentHTML("beforeend",'<div class="operation"><span class="breakline-btn"><i class="ic i-align-left"></i></span><span class="copy-btn"><i class="ic i-clipboard"></i></span><span class="fullscreen-btn"><i class="ic i-expand"></i></span></div>');let o=t.child(".copy-btn");LOCAL.nocopy?o.remove():(o.addEventListener("click",s=>{let d=s.currentTarget,h="",x="";e.find("pre").forEach(f=>{x+=h+f.innerText,h=`
`}),k(x,f=>{d.child(".ic").className=f?"ic i-check":"ic i-times",d.blur(),m(LOCAL.copyright)})},{passive:!0}),o.addEventListener("mouseleave",s=>{setTimeout(()=>{s.target.child(".ic").className="ic i-clipboard"},1e3)})),t.child(".breakline-btn").addEventListener("click",s=>{let d=s.currentTarget;t.hasClass("breakline")?(t.removeClass("breakline"),d.child(".ic").className="ic i-align-left"):(t.addClass("breakline"),d.child(".ic").className="ic i-align-justify")});let n=t.child(".fullscreen-btn"),l=()=>{t.removeClass("fullscreen"),t.scrollTop=0,g.removeClass("fullscreen"),n.child(".ic").className="ic i-expand"},p=()=>{if(t.hasClass("fullscreen")){if(l(),e&&e.find("tr").length>15){let s=e.child(".show-btn");e.style.maxHeight="300px",s.removeClass("open")}b(t)}else if(t.addClass("fullscreen"),g.addClass("fullscreen"),n.child(".ic").className="ic i-compress",e&&e.find("tr").length>15){let s=e.child(".show-btn");e.style.maxHeight="",s.addClass("open")}};if(n.addEventListener("click",p),a&&a.addEventListener("click",p),e&&e.find("tr").length>15){e.style.maxHeight="300px",e.insertAdjacentHTML("beforeend",'<div class="show-btn"><i class="ic i-angle-down"></i></div>');let s=e.child(".show-btn"),d=()=>{e.style.maxHeight="300px",s.removeClass("open")},h=()=>{e.style.maxHeight="",s.addClass("open")};s.addEventListener("click",()=>{s.hasClass("open")?(l(),d(),b(e)):h()})}}),i.each("pre.mermaid > svg",t=>{let e=t;e.style.maxWidth=""}),i.each(".reward button",t=>{t.addEventListener("click",e=>{e.preventDefault();let a=i("#qr");v(a)==="inline-flex"?u(a,0):u(a,1,()=>{L(a,"inline-flex")})})}),i.each(".quiz > ul.options li",t=>{t.addEventListener("click",()=>{t.hasClass("correct")?(t.toggleClass("right"),t.parentNode.parentNode.addClass("show")):t.toggleClass("wrong")})}),i.each(".quiz > p",t=>{t.addEventListener("click",()=>{t.parentNode.toggleClass("show")})}),i.each(".quiz > p:first-child",t=>{let e=t.parentNode,a="choice";(e.hasClass("true")||e.hasClass("false"))&&(a="true_false"),e.hasClass("multi")&&(a="multiple"),e.hasClass("fill")&&(a="gap_fill"),e.hasClass("essay")&&(a="essay"),t.setAttribute("data-type",LOCAL.quiz[a])}),i.each(".quiz .mistake",t=>{t.setAttribute("data-type",LOCAL.quiz.mistake)}),i.each("div.tags a",t=>{t.className=["primary","success","info","warning","danger"][Math.floor(Math.random()*5)]}),i.each(".md div.player",t=>{N(t,{type:t.getAttribute("data-type"),mode:"order",btns:[]}).player.load(JSON.parse(t.getAttribute("data-src"))).fetch()});let r=document.querySelectorAll(".show-btn .i-angle-down");if(r.length){let t=new IntersectionObserver(e=>{e.forEach(a=>{a.isIntersecting?r.forEach(o=>{o.classList.remove("stop-animation")}):r.forEach(o=>{o.classList.add("stop-animation")})})},{root:null,threshold:.5});r.forEach(e=>{t.observe(e)})}};export{F as postBeauty};
/*! For license information please see post-NHQFDY3F.js.LEGAL.txt */
