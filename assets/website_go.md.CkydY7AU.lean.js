import{_ as n,c as t,j as a,a as e,G as p,a4 as l,o as h,C as o}from"./chunks/framework.DBf_wRcB.js";const k="/go/go-01.png",r="/go/go-02.png",g="/go/go-03.png",d="/go/go-04.png",c="/go/go-05.png",y="/go/go-06.png",E="/go/go-07.png",F="/go/go-08.png",D=JSON.parse('{"title":"Go环境的安装","description":"","frontmatter":{},"headers":[],"relativePath":"website/go.md","filePath":"website/go.md","lastUpdated":null}'),m={name:"website/go.md"};function u(b,s,v,C,A,x){const i=o("ArticleMetadata");return h(),t("div",null,[s[0]||(s[0]=a("h1",{id:"go环境的安装",tabindex:"-1"},[e("Go环境的安装 "),a("a",{class:"header-anchor",href:"#go环境的安装","aria-label":'Permalink to "Go环境的安装"'},"​")],-1)),p(i),s[1]||(s[1]=l('<h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><p>常说的go就是golang的简称</p><p>GO官网：<a href="https://go.dev/" target="_blank" rel="noreferrer">https://go.dev/</a></p><p>备用官网：<a href="https://golang.google.cn/" target="_blank" rel="noreferrer">https://golang.google.cn/</a></p><p><img src="'+k+'" alt="" loading="lazy"></p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>点击 <a href="https://go.dev/dl/" target="_blank" rel="noreferrer">Download</a> 进入下载页面，我用 Linux 演示</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>https://dl.google.com/go/go1.20.1.linux-amd64.tar.gz</span></span></code></pre></div><p><img src="'+r+`" alt="" loading="lazy"></p><p>打开 <a href="./shell/">shell工具</a> 并登录 <a href="./Server/">服务器</a>，然后下载go</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#下载</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /www/server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://golang.google.cn/dl/go1.20.1.linux-amd64.tar.gz</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#解压</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -xzvf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> go1.20.1.linux-amd64.tar.gz</span></span></code></pre></div><p><img src="`+g+`" alt="" loading="lazy"></p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#添加环境变量</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/profile</span></span></code></pre></div><p><img src="`+d+`" alt="" loading="lazy"></p><p>输入 <code>i</code> 进入编辑模式，方向键拉倒最底部，回车一下粘贴下面变量</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GOROOT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/www/server/go</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GOBIN</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$GOROOT/bin</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GOPKG</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$GOROOT/pkg/tool/linux_amd64</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GOARCH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">amd64</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GOOS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">linux</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GOPATH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/www/wwwroot/Golang</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PATH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$PATH:$GOBIN:$GOPKG:$GOPATH/bin</span></span></code></pre></div><p><img src="`+c+'" alt="" loading="lazy"></p><p>按<code>ESC</code>退出编辑模式，输入<code>:wq</code> 回车保存并退出</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>若不保存退出，输入 <code>:q!</code></p></div><p><img src="'+y+'" alt="" loading="lazy"></p><p>环境变量生效命令</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">source</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/profile</span></span></code></pre></div><p><img src="'+E+'" alt="" loading="lazy"></p><p>检查版本</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span></span></code></pre></div><p><img src="'+F+`" alt="" loading="lazy"></p><h2 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h2><p>1.如何卸载go</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#查看goroot目录地址</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> env</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#根据目录路径删除即可</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -rf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /www/server/go</span></span></code></pre></div>`,29))])}const f=n(m,[["render",u]]);export{D as __pageData,f as default};