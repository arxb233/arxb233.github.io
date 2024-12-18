import{_ as t,c as p,a4 as i,o as l}from"./chunks/framework.CyeRpf1z.js";const s="/pages/gitlab/gitlab-01.png",o="/pages/gitlab/gitlab-02.png",e="/pages/gitlab/gitlab-03.png",g="/pages/gitlab/gitlab-04.png",c="/pages/gitlab/gitlab-05.png",r="/pages/gitlab/gitlab-06.png",n="/pages/gitlab/gitlab-07.png",d="/pages/gitlab/gitlab-08.png",m="/pages/gitlab/gitlab-09.png",b="/pages/gitlab/gitlab-10.png",_="/pages/gitlab/gitlab-11.png",h="/pages/gitlab/gitlab-12.png",u="/pages/gitlab/gitlab-13.png",y="/pages/gitlab/gitlab-14.png",z="/pages/gitlab/gitlab-15.png",f="/pages/gitlab/gitlab-16.png",k="/pages/gitlab/gitlab-17.png",v="/pages/gitlab/gitlab-18.png",q="/pages/gitlab/gitlab-19.png",P="/pages/gitlab/gitlab-20.png",x="/pages/gitlab/gitlab-21.png",G="/pages/gitlab/gitlab-22.png",L="/pages/gitlab/gitlab-23.png",w="/pages/gitlab/gitlab-24.png",S="/pages/gitlab/gitlab-25.png",$="/pages/gitlab/gitlab-26.png",j="/pages/gitlab/gitlab-27.png",N="/pages/gitlab/gitlab-28.png",B="/pages/gitlab/gitlab-29.png",C="/pages/gitlab/gitlab-30.png",E="/pages/gitlab/gitlab-31.png",F="/pages/gitlab/gitlab-32.png",A="/pages/gitlab/gitlab-33.png",D="/pages/gitlab/gitlab-34.png",Q=JSON.parse('{"title":"GitLab的注册及使用","description":"","frontmatter":{},"headers":[],"relativePath":"yiov/website/pages/gitlab.md","filePath":"yiov/website/pages/gitlab.md","lastUpdated":1734431113000}'),H={name:"yiov/website/pages/gitlab.md"};function I(J,a,O,U,V,K){return l(),p("div",null,a[0]||(a[0]=[i('<h1 id="gitlab的注册及使用" tabindex="-1">GitLab的注册及使用 <a class="header-anchor" href="#gitlab的注册及使用" aria-label="Permalink to &quot;GitLab的注册及使用&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">(当前界面文档全部来自yiov.top)</p><ul><li><a href="https://yiov.top/" target="_blank" rel="noreferrer">yiov</a>「伊奥&#39;s 教程集」</li></ul></div><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><p>GitLab 是一款基于网络的、强大的代码托管平台，旨在简化团队协作、版本控制和持续集成流程</p><p>中文名：极狐</p><p>官网：<a href="https://gitlab.com/" target="_blank" rel="noreferrer">https://gitlab.com/</a></p><p><img src="'+s+'" alt="" loading="lazy"></p><h2 id="注册" tabindex="-1">注册 <a class="header-anchor" href="#注册" aria-label="Permalink to &quot;注册&quot;">​</a></h2><p>点击 <a href="https://gitlab.com/users/sign_in" target="_blank" rel="noreferrer">官网 Sign in</a> 注册，这里建议使用第三方</p><p>因为直接注册会被识别IP为国内，强制跳转 <a href="https://gitlab.cn/saasmigration/" target="_blank" rel="noreferrer">极狐SaaS</a></p><p><img src="'+o+'" alt="" loading="lazy"></p><p>我选择用 <a href="./github.html">GitHub</a> 关联注册，邮箱也是共用的，输入验证码</p><details class="details custom-block"><summary>页面没有加载出来</summary><p>刷新几次，实在不行，挂个梯子</p></details><p><img src="'+e+'" alt="" loading="lazy"></p><p>验证手机号，但是！没有 <code>+86</code> 的选项，真恶心！</p><p>我们曲线救国，按 <code>F12</code> 键进入开发者模式</p><p><img src="'+g+'" alt="" loading="lazy"></p><p>我使用的是 <a href="https://www.microsoft.com/zh-cn/edge/download" target="_blank" rel="noreferrer">Edge浏览器</a> ，点击 <code>网络</code></p><p><img src="'+c+'" alt="" loading="lazy"></p><p>刷新一下页面，找到 <code>countries</code>，<code>发起程序</code> 中找到 <code>countries</code> ，点击 <code>resolvers.js:46</code></p><details class="details custom-block"><summary>发起程序中没找到countries</summary><p>将开发者页面拉大一点，或者参数被收纳到一起了，点展开了再找</p></details><p><img src="'+r+'" alt="" loading="lazy"></p><p>在 <code>resolvers.js</code> 中找到 <code>date.map...</code> 这一行，一般在48行</p><p>在 <code>48</code> 前面显示小红点的位置，单击点一下，打个断点</p><p><img src="'+n+'" alt="" loading="lazy"></p><p>断点处就会显示这个js文件了</p><p><img src="'+d+'" alt="" loading="lazy"></p><p>再次刷新页面，作用域会自动加载 <code>date</code> 数据</p><p><img src="'+m+'" alt="" loading="lazy"></p><p>展开第一个0-99，Array的数值双击修改，<code>0</code> 改成 <code>&quot;CN&quot;</code> ，<code>3</code> 改成 <code>&quot;86&quot;</code></p><p><img src="'+b+'" alt="" loading="lazy"></p><p>修改好了，我们在验证码页面放行</p><p><img src="'+_+'" alt="" loading="lazy"></p><p>然后选择修改好的 <code>+86</code> ，输入手机号，却无法发验证码</p><p>点击下面 <code>改为信用卡验证</code></p><p><img src="'+h+'" alt="" loading="lazy"></p><p>直到跳出 <code>验证</code> 小窗，先别着急验证，返回 <code>改为电话号码验证</code></p><details class="details custom-block"><summary>还是没有出来</summary><p>反复切换，还没有就刷新一下，再次切换</p></details><p><img src="'+u+'" alt="" loading="lazy"></p><p>输入手机号，开始验证，开发者工具可以按 <code>F12</code> 关了</p><div class="tip custom-block"><p class="custom-block-title">怎么验证？看不懂</p><p>选出一个图片中，两个骰子的正上面，图案相同的那一个</p><p>比如：我这个是选第4个，两个飞机</p></div><p><img src="'+y+'" alt="" loading="lazy"></p><p>大概要验证5次</p><p><img src="'+z+'" alt="" loading="lazy"></p><p>成功完成验证</p><p><img src="'+f+'" alt="" loading="lazy"></p><p>这里要选角色和注册原因，自己看着选吧</p><p><img src="'+k+'" alt="" loading="lazy"></p><p>首次进入要创建项目或导入，先随便输吧，进去后再删</p><p><img src="'+v+'" alt="" loading="lazy"></p><p>进入后问你是否邀请人员，直接关掉即可</p><p><img src="'+q+'" alt="" loading="lazy"></p><h2 id="汉化" tabindex="-1">汉化 <a class="header-anchor" href="#汉化" aria-label="Permalink to &quot;汉化&quot;">​</a></h2><p>英文看不懂，没关系，我们先汉化</p><p>点头像 - Preferences 偏好设置</p><p><img src="'+P+'" alt="" loading="lazy"></p><p>Localization - Language - 选择 <code>简体中文</code> - Save Changes 保存</p><p><img src="'+x+'" alt="" loading="lazy"></p><p>保存后，刷新即可</p><p><img src="'+G+'" alt="" loading="lazy"></p><h2 id="主页" tabindex="-1">主页 <a class="header-anchor" href="#主页" aria-label="Permalink to &quot;主页&quot;">​</a></h2><p>直接进 <a href="https://gitlab.com/" target="_blank" rel="noreferrer">GitLab官网</a> ，就可以进入仪表盘页面了</p><p><img src="'+L+'" alt="" loading="lazy"></p><p>点击头像 - 可进入个人项目主页</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>自己设置一下密码，头像 - 编辑个人资料 - 左侧菜单栏 密码</p></div><p><img src="'+w+'" alt="" loading="lazy"></p><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><p>GitLab没有专用的客户端，基于git使用</p><p>请参考 <a href="./git.html">Git使用及上传代码到仓库</a></p><details class="details custom-block"><summary>删除项目</summary><p>注册时创建的项目，我们现在演示删除</p><p>点头像 - 用户名主页，左侧菜单栏 <code>个人项目</code></p><p><img src="'+S+'" alt="" loading="lazy"></p><p>进入项目 - 三个点 <code>…</code> - 项目设置</p><p><img src="'+$+'" alt="" loading="lazy"></p><p>下拉到底 高级 - <code>展开</code></p><p><img src="'+j+'" alt="" loading="lazy"></p><p>下拉到底，删除项目</p><p><img src="'+N+'" alt="" loading="lazy"></p><p>输入项目名，确定删除即可</p><p><img src="'+B+'" alt="" loading="lazy"></p></details><details class="details custom-block"><summary>删除群组</summary><p>点头像 - 用户名主页，左侧菜单栏 <code>群组</code>，点击要删的群组</p><p><img src="'+C+'" alt="" loading="lazy"></p><p>进入群组 - 三个点 <code>…</code> - 群组设置</p><p><img src="'+E+'" alt="" loading="lazy"></p><p>下拉到底 高级 - <code>展开</code></p><p><img src="'+F+'" alt="" loading="lazy"></p><p>下拉到底，删除群组</p><p><img src="'+A+'" alt="" loading="lazy"></p><p>输入群组名，确定删除即可</p><p><img src="'+D+'" alt="" loading="lazy"></p></details>',71)]))}const R=t(H,[["render",I]]);export{Q as __pageData,R as default};
