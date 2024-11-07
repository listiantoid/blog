/*! Tabbed TOC for Blogger V2 <https://dte-project.github.io/blogger/tabbed-toc.html> */
!function(e,t){
    window.q2o = function(e,t){
        function r(e){return decodeURIComponent(e)}
        function n(e){return void 0!==e}
        function a(e){return"string"==typeof e}
        function i(e){
            if(a(e)){
                if("true"===e)return!0;
                if("false"===e)return!1;
                if("null"===e)return null;
                if("'"===e.slice(0,1)&&"'"===e.slice(-1))return e.slice(1,-1);
                if(/^-?(\d*\.)?\d+$/.test(e))return+e;
                if(function(e){return!(!a(e)||""===e.trim())&&('""'===e||"[]"===e||"{}"===e||'"'===e[0]&&'"'===e.slice(-1)||"["===e[0]&&"]"===e.slice(-1)||"{"===e[0]&&"}"===e.slice(-1))}(e))try{return JSON.parse(e)}catch(e){}
            }
            return e
        }
        var s={},l=e.replace(/^.*?\?/,"");
        return""===l?s:(l.split(/&(?:amp;)?/).forEach(function(e){
            var a=e.split("="),l=r(a[0]),o=!n(a[1])||r(a[1]);
            o=!n(t)||t?i(o):o,"]"===l.slice(-1)?function(e,t,r){
                for(var n,a=t.split("["),i=0,s=a.length;s-1>i;++i)e=e[n=a[i].replace(/\]$/,"")]||(e[n]={});e[a[i].replace(/\]$/,"")]=r
            }(s,l,o):s[l]=o
        }),s)}(),function(e,t){
            function r(e){return encodeURIComponent(e)}
            function n(e){return void 0!==e}
            function a(e){return"string"==typeof e}
            function i(e){return"number"==typeof e||/^-?(\d*\.)?\d+$/.test(e)}
            function s(e){return null!==e&&"object"==typeof e}
            function l(e,t){
                for(var r in t=t||{},e)n(t[r])?s(e[r])&&s(t[r])&&(t[r]=l(e[r],t[r])):t[r]=e[r];
                return t
            }
            function o(e,t,r){e.addEventListener(t,r,!1)}
            function c(e,r,a){if(e=t.createElement(e),n(r)&&""!==r&&(e.innerHTML=r),s(a))for(var i in a)!1!==a[i]&&e.setAttribute(i,a[i]);return e}
            function d(e,t){var r;for(t=t.split(/\s+/);r=t.shift();)e.classList.add(r)}
            function u(e,t){var r;for(t=t.split(/\s+/);r=t.shift();)e.classList.remove(r)}
            function f(e,t,r){t&&e.insertBefore(t,r)}
            var p=e.q2o,h=t.currentScript,m=e.location,g=e.localStorage,y={},v=[],b={},x=Date.now(),$={i:x,direction:"ltr",url:m.protocol+"//"+m.host,name:"tabbed-toc",css:1,sort:1,ad:!0,active:0,container:0,date:"%M~% %D%, %Y% %h%:%m% %N%",excerpt:0,image:0,target:0,load:0,recent:7,hide:[],text:{title:"Table of Content",loading:"Loading&hellip;",noon:["AM","PM"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],recent:" <sup>New!</sup>"},query:{alt:"json",orderby:"published","max-results":9999,"start-index":1}},w=t.head,N=l($,p(h.src));
            function M(e,t){var n,a=[];for(n in e)a.push(r(n)+"="+r(e[n]));return"?"+a.join(t||"&")}
            function k(e,t){return e=(e+"").split(/[?&#]/)[0].replace(/\/+$/,""),n(t)&&(e=e.replace(/\.[\w-]+$/,t?"."+t:"")),e}
            function S(e){return i(e)?("file:"===m.protocol?"https:":"")+"//www.blogger.com/feeds/"+e+"/posts/summary":k(e)+"/feeds/posts/summary"}
            function C(e,t,r){var n=/\.css$/i.test(k(e)),a=c(n?"link":"script","",l(n?{href:e,rel:"stylesheet"}:{src:e},r));return a.readyState?a.onreadystatechange=function(){"loaded"!==a.readyState&&"complete"!==a.readyState||(a.onreadystatechange=null,t&&t(a))}:t&&o(a,"load",t),f(w,a,w.firstChild),a}
            var T,j,q=D.id||k(N.url),L=N.name,_=N.ad,I=N.text,E=N.e,A=c("div",'<h3 class="'+L+'-title">'+I.title+"</h3>",{class:L+" "+N.direction,id:L+":"+q}),J=c("p",I.loading,{class:L+"-loading"});
            function O(e,t,r){(r=r||[]).unshift(t),"function"==typeof E&&E.apply(e,r)}E=E&&e[E],!0===_&&(_=3);
            var R=p(m.search);
            function B(){
                h.id||(h.id=L+"-js"),d(h,L+"-js");
                var e=N.container,r=N.css;
                r&&!t.getElementById(L+"-css")&&C(a(r)?r:k(h.src,"css"),function(){O(this,"load.asset",[this.href])},{class:L+"-css",id:L+"-css"});
                C(S(D)+M(l(N.query,{callback:"_"+x,"max-results":0})),function(){e?((e=t.querySelector(e))&&(e.innerHTML=""),f(e,A)):f(h.parentNode,A,h),u(A.parentNode,L+"-loading"),O(this,"load.asset",[this.src]);
                    var r=N.active;i(r)&&(r=v[r]),y[r]&&y[r].click()
                })
            }
            n(R[q])&&(delete R[q].url,N=l(N,R[q])),e["_"+x]=function(n){
                n=n.feed||{};
                var s,p=N.sort,h=n.entry||[],m=n.category||[],g=(h.length,m.length);
                function $(e){
                    var t=this.id.split(":")[1],n=this.title,a=A.parentNode,i=y[n],o=b[n];
                    for(s in y)s!==n&&u(y[s],"active");
                    for(s in b)s!==n&&(u(b[s],"active"),b[s].style.display="none",b[s].previousSibling.style.display="none");
                    o.$||(d(i,"loading"),d(o,"loading"),f(A.children[2],J),d(a,L+"-loading"),C(S(D)+"/-/"+r(n)+M(l(N.query,{callback:"_"+(x+1)})),function(){
                        var e;u(a,L+"-loading"),u(i,"loading"),u(o,"loading"),(e=J).parentNode&&e.parentNode.removeChild(e)
                    },{
                        class:L+"-js",id:L+"-js:"+t
                    }))
                    d(i,"active"),d(o,"active"),o.style.display="",o.previousSibling.style.display="",O(this,"click",[{},y,b]),O(A,"change",[{},i,o]),e.preventDefault()
                }
                i(p)?(p=+p,m=m.sort(function(e,t){
                    // Modified sorting logic: Case-insensitive alphabetical sorting
                    var compare = e.term.localeCompare(t.term, undefined, { sensitivity: 'base' });
                    return p === 1 ? compare : -compare; // Toggle between ascending and descending
                }),-1===p&&(m=m.reverse())):a(p)&&(p=e[p],m=m.sort(p));
                
                var w,T=c("nav","",{class:L+"-tabs p"});
                f(A,T),f(A,c("section","",{class:L+"-panels p"}));
                var j=Object.values(N.hide);
                for(s=0;s<g;++s){
                    var _=m[s].term;
                    j.indexOf(_) > -1 || (w=c("a",_,{class:L+"-tab "+L+"-tab:"+s,href:k(N.url)+"/search/label/"+r(_),id:L+"-tab:"+q+"."+s,title:_}),v.push(_),y[_]=w,o(w,"click",$),f(T,w),s<g-1&&f(T,t.createTextNode(" ")),f(A.children[2],c("h4",_,{class:L+"-title"})),f(A.children[2],b[_]=c("ol","",{class:L+"-panel "+L+"-panel:"+s,id:L+"-panel:"+q+"."+s})))}
                O(A,"load",[n,y,b])
            },e["_"+(x+1)]=function(t){
                t=t.feed||{};var n,s,p,h=N.sort,m=(p=(t.link.find(function(e){return"alternate"===e.rel})||{}).href||"",decodeURIComponent(p)).split("/").pop(),v=t.entry||[],g=v.length;
                for(T=b[m],g&&!function(e,t){return e.classList.contains(t)}(T,"active")&&y[m].click(),n=0;n<g;++n){var w=n<N.recent?I.recent:"";v[n].$=!!w,v[n].title.$t+=w}
                i(h)?(h=+h,v=v.sort(function(e,t){return e.title.$t.localeCompare(t.title.$t)}),-1===h&&(v=v.reverse())):a(h)&&(h=e[h],v=v.sort(h));
                var k=N.target,q=N.image,D=N.excerpt,E="has-title has-url";
                for(N.date&&(E+=" has-time"),q&&(E+=" has-image"),D&&(E+=" has-excerpt"),d(A,E),j=function(e){if(e){
                    var t=e.published.$t,r=(e.link.find(function(e){return"alternate"===e.rel})||{}).href,n="";
                    if(r){
                        if(q){var a,s,l,o="media$thumbnail"in e;!0===q&&(q=80),i(q)?(a=s=q+"px",q="s"+q+"-c"):(l=/^s(\d+)(\-[cp])?$/.exec(q))?(a=l[1]+"px",s=l[2]?l[1]+"px":"auto"):(l=/^w(\d+)\-h(\d+)(\-[cp])?$/.exec(q))&&(a=l[1]+"px",s=l[2]+"px"),n+='<p class="'+L+"-image "+(o?"loading":"no-image")+'">',n+=o?'<img alt="" src="'+e.media$thumbnail.url.replace(/\/s\d+(\-c)?\//g,"/"+q+"/")+'" style="display:block;width:'+a+";height:"+s+';">':'<span class="img" style="display:block;width:'+a+";height:"+s+';">',n+="</p>"}
                    if(n+='<h5 class="'+L+'-title"><a href="'+r+'"'+(k?' target="'+k+'"':"")+">"+e.title.$t+"</a></h5>",N.date&&(n+='<p class="'+L+'-time"><time datetime="'+t+'">'+function(e,t){
                        var r,n=e.split("T"),a=n[0].split("-"),i=n[1].split("+")[0].split(":"),s=+i[0],l=s%12||12,o={"M~":I.months[+a[1]-1],"D~":I.days[new Date(e).getDay()],"h~":s+"",Y:a[0],M:a[1],D:a[2],h:l+"",m:i[1],s:Math.floor(+i[2])+"",N:I.noon[l<12||24===l?0:1]};for(r in o)t=t.replace(/\\%/g,"&#37;").replace(new RegExp("%"+r+"%","g"),o[r]);
                        return t}(t,N.date)+"</time></p>"),D){
                        var d=e.summary.$t.replace(/<.*?>/g,"").replace(/[<>]/g,"").trim(),u=d.length;!0===D&&(D=200),n+='<p class="'+L+"-excerpt"+(u?"":" no-excerpt")+'">'+d.slice(0,D)+(u>D?"&hellip;":"")+"</p>"}
                    return c("li",n,{class:!!e.$&&"recent"})}},n=0;n<g;++n)f(T,j(v[n]));
                if(q){
                    var J=T.getElementsByTagName("img"),
                    R=function(){d(this.parentNode,"error"),O(this,"error.asset",[this.src])},
                    B=function(){u(this.parentNode,"loading"),O(this,"load.asset",[this.src])};
                    for(n=0,s=J.length;n<s;++n)o(J[n],"error",R),o(J[n],"load",B)
                }
                (function(){
                    if(!1!==_){var e=+(g.getItem(L)||-1);
                    if(e>_)return g.setItem(L,0),!0;g.setItem(L,++e)}
                    return!1
                })()&&C(S("298900102869691923")+M(l(N.query,{callback:"_"+x+"_","max-results":21,orderby:"updated"}))+"&q="+r(m.toLowerCase())),
                b[m].$=!0,O(b[m],"load",[{},y,b])},
                e["_"+x+"_"]=function(e){var t=(e=e.feed||{}).entry||[];t=t[Math.floor(Math.random()*t.length)],(t=j(t))&&(d(t,"ad"),f(T,t,T.firstChild)),O(t,"load.ad",[e,y,b])},
                i(N.load)?e.setTimeout(B,+N.load):!0===N.load?o(e,"load",B):B(),O(A,"ready",[N,y,b])
            }
            (window,document);
