import{_ as i,c as a,a4 as p,o as t}from"./chunks/framework.CyeRpf1z.js";const l="/win11/lenovo.png",o="/win11/win11-01.png",e="/win11/win11-02.png",n="/win11/win11-03.png",c="/win11/win11-04.png",d="/win11/win11-05.png",r="/win11/win11-06.png",k="/win11/win11-07.png",h="/win11/win11-08.png",m="/win11/win11-09.png",g="/win11/win11-10.png",u="/win11/win11-11.png",y="/win11/win11-12.png",E="/win11/win11-13.png",b="/win11/win11-14.png",w="/win11/win11-15.png",_="/win11/win11-16.png",F="/win11/win11-17.png",v="/win11/win11-18.png",z="/win11/win11-19.png",A="/win11/win11-20.png",f="/win11/win11-21.png",q="/win11/win11-22.png",C="/win11/win11-23.png",D="/win11/win11-24.png",x="/win11/win11-25.png",M="/win11/win11-26.png",Y=JSON.parse('{"title":"电脑常见问题汇总","description":"","frontmatter":{},"headers":[],"relativePath":"yiov/computer/win11.md","filePath":"yiov/computer/win11.md","lastUpdated":1734431113000}'),B={name:"yiov/computer/win11.md"};function N(W,s,P,I,T,L){return t(),a("div",null,s[0]||(s[0]=[p('<h1 id="电脑常见问题汇总" tabindex="-1">电脑常见问题汇总 <a class="header-anchor" href="#电脑常见问题汇总" aria-label="Permalink to &quot;电脑常见问题汇总&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">(当前界面文档来自yiov.top)</p><ul><li><a href="https://yiov.top/" target="_blank" rel="noreferrer">yiov</a>「伊奥&#39;s 教程集」</li></ul></div><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>生活所需购置了一台笔记本，习惯了组装台式机，使用上遇到了一些问题，在此记录一下</p><ul><li><p>品牌：联想小新Pro16 2022款 R7集显</p></li><li><p>系统：Win11</p></li></ul><p><img src="'+l+'" alt="" loading="lazy"></p><h2 id="联想相关" tabindex="-1">联想相关 <a class="header-anchor" href="#联想相关" aria-label="Permalink to &quot;联想相关&quot;">​</a></h2><details class="details custom-block"><summary>Windows hello</summary><div class="tip custom-block"><p class="custom-block-title">说明</p><p>首次登录必须要设置这个PIN，不然无法跳过</p></div><p>关闭方法：设置 - 账户 - 先关闭 其他设置里的</p><blockquote><p>为了提高安全性，仅允许此设备上的Microsoft账户使用windows hello登录</p></blockquote><p>然后再到 登录方式中 将PIN删除</p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>步骤不能反，不然删不了！！！</p></div><p><img src="'+o+'" alt="" loading="lazy"></p></details><details class="details custom-block"><summary>bitlocker加密</summary><p>头一次见，硬盘上了bitlocker加密，是我孤陋寡闻了，这个我肯定是要解的</p><div class="tip custom-block"><p class="custom-block-title">原因</p><p>因为我要重新分区，只有C盘和D盘肯定是不行的，至少多分出2个，用pe盘里的DG或者分区助手都可以</p><p>另外一个就是，重装系统不解密无法重装</p></div><p>关闭方法：设置-隐私和安全-设备加密关闭即可</p><p><img src="'+e+'" alt="" loading="lazy"></p><p>如果想彻底删掉，<a href="https://www.microsoft.com/zh-cn/" target="_blank" rel="noreferrer">登录微软官网</a> - 头像 我的Microsoft账户 - 设备 <code>查看详细信息</code> - Btilocker数据保护 - 删除两个秘钥即可</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>不知道是哪一台电脑，在设置-系统里查看电脑名</p></div><p><img src="'+n+'" alt="" loading="lazy"></p></details><details class="details custom-block"><summary>Fn键不使用</summary><p>习惯了台式，真的不太适应组合键位</p><p>特别是 <code>F12</code> 开发者工具，非要两个手按 <code>Fn+F12</code></p><p>关闭方法：<code>Fn+Esc</code>键</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>其他电脑可以自己看看，哪个键位上有这个Fnlock</p></div><p><img src="'+c+'" alt="" loading="lazy"></p></details><details class="details custom-block"><summary>开盖开机</summary><p>这个就真无语，我只是打开放个键盘膜，就给我开机了，服气</p><p>关闭方法：开机不停按F2直到进入BIOS设置，将语言先改成 <code>简体中文</code></p><p><img src="'+d+'" alt="" loading="lazy"></p><p>然后系统设置-下拉到 <code>开盖开机</code> ，选择关闭即可</p><p><img src="'+r+'" alt="" loading="lazy"></p></details><details class="details custom-block"><summary>开机锁屏界面两侧技巧</summary><p>跟个牛皮癣一样，影响视觉，点击还是跳转联想自己的浏览器</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>后来发现是联想的东西，在应用里全部卸载就可以了，巨难用</p></div><p>关闭方法：桌面右键-个性化-锁屏界面，将个性化锁屏界面改成 <code>图片</code></p><blockquote><p>这里我也就发现了他们是啥，不要勾选 <code>在锁屏界面上获取花絮、提示、技巧等</code></p></blockquote><p><img src="'+k+'" alt="" loading="lazy"></p><p>另外屏幕超时锁屏也很快，可以自己改长一点</p><p>在下方 <code>屏幕超时</code>里面，我是直接改成了 <code>从不</code></p></details><h2 id="其他相关" tabindex="-1">其他相关 <a class="header-anchor" href="#其他相关" aria-label="Permalink to &quot;其他相关&quot;">​</a></h2><details class="details custom-block"><summary>Edge浏览器净化</summary><p>标签页简直是灾难级别，edge虽然好用但这广告也太杂了，又是牛皮癣</p><p>关闭方法：浏览器标签页 - 设置 - 自定义 - 内容关闭</p><p><img src="'+h+'" alt="" loading="lazy"></p></details><details class="details custom-block"><summary>浏览器无网络</summary><p>网络正常，但是各种网页都打不开，提示代理是否正确</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>前一天还好好的，突然不能用给我整蒙圈了</p></div><p>解决：开始-搜 <code>Internet选项</code> - 连接 - 局域网设置 - 代理服务器的 勾取消掉</p><p>可能原因：使用过Clash等代理工具，没有断开直接关机了</p><p><img src="'+m+'" alt="" loading="lazy"></p></details><details class="details custom-block"><summary>桌面任务栏简化</summary><p>这个看个人吧，我是喜欢清爽一点</p><p>关闭方法：设置-个性化-任务栏</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>我把任务视图和搜索都去除了，反正开始键里也可以搜</p></div><p><img src="'+g+`" alt="" loading="lazy"></p></details><details class="details custom-block"><summary>去除快捷方式箭头</summary><p>原理其实是修改了注册表，只不过是批处理</p><p>桌面右键新建一个文本文档，复制下面代码</p><p>粘贴，另存，名字 <code>去掉小箭头.bat</code>，后缀名一定要是<code>.bat</code>文件，然后右键以<code>管理员身份</code>运行</p><div class="language-bat vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bat</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">reg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> add </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Shell Icons&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /v </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">29</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /d </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">%systemroot%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\\system32\\imageres.dll,197&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /t reg_sz /f</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">taskkill</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /f /im explorer.exe</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">attrib</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> -s -r -h </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">%userprofile%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\\AppData\\Local\\iconcache.db&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">del</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">%userprofile%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\\AppData\\Local\\iconcache.db&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /f /q</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> explorer</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">pause</span></span></code></pre></div><p><img src="`+u+`" alt="" loading="lazy"></p><p>那又如何恢复呢</p><p>同样的方法，新建一个文本文档，复制代码粘贴，以<code>管理员身份</code>运行</p><div class="language-bat vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bat</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">reg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> delete </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Shell Icons&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /v </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">29</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /f</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">taskkill</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /f /im explorer.exe</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">attrib</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> -s -r -h </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">%userprofile%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\\AppData\\Local\\iconcache.db&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">del</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">%userprofile%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\\AppData\\Local\\iconcache.db&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /f /q</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> explorer</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">pause</span></span></code></pre></div><p><img src="`+y+'" alt="" loading="lazy"></p></details><details class="details custom-block"><summary>删除文件夹需要administrators的权限</summary><p>这个问题常出现在盗版系统，利用官方的升级工具升级成正版系统，导致权限出现问题</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>所以升级系统，要么是系统自动OTA升级，要么重装</p><p>跨版本系统就容易出问题</p></div><p><img src="'+E+'" alt="" loading="lazy"></p><p>鼠标右键 - 不能删除的文件夹 - 属性</p><p><img src="'+b+'" alt="" loading="lazy"></p><p>安全选项卡 - 高级</p><p><img src="'+w+'" alt="" loading="lazy"></p><p>所有者这里 点 <code>更改</code></p><p><img src="'+_+'" alt="" loading="lazy"></p><p>点击下方的 <code>高级</code></p><p><img src="'+F+'" alt="" loading="lazy"></p><p>立即查找，选择 <code>Administrators</code> ，确定</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>这里不要选择成了Administrator，正确的多一个<code>s</code></p><p>Administrators：是超级用户组，包含了Administrator</p><p>Administrator：是超级用户</p></div><p><img src="'+v+'" alt="" loading="lazy"></p><p>对象名称里就是你选择的用户组，然后确定</p><p><img src="'+z+'" alt="" loading="lazy"></p><p>勾选 <code>替换子容器和对象的所有者</code></p><p><img src="'+A+'" alt="" loading="lazy"></p><p>回到属性卡，点编辑，选中 <code>Administrators</code> 用户组，并勾选 <code>完全控制</code>权限，确定</p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>属性页卡的 <code>确定</code> 也要点，否则不生效</p></div><p><img src="'+f+'" alt="" loading="lazy"></p><p>最后尝试文件夹删除即可</p></details><details class="details custom-block"><summary>关闭windows自动更新</summary><p>win键+R键打开运行，输入 <code>services.msc</code> 回车进入Windows服务</p><p>然后在服务里找到 <code>Windows Update</code> 选项双击打开</p><p>常规 - 启动类型选择 <code>禁用</code> - 应用即可</p><p><img src="'+q+'" alt="" loading="lazy"></p></details><details class="details custom-block"><summary>桌面的最小化三个字，关不掉</summary><p>原因：在使用某个软件时，过于频繁使用了 <code>windows键+D</code> 最小化，造成的卡顿</p><p>解决：依次关闭桌面上打开的软件，直到关掉引起的软件后会自动消失</p><p><img src="'+C+'" alt="" loading="lazy"></p></details><details class="details custom-block"><summary>CAD弹窗 Nonvalid Software Detected 无法使用</summary><p><img src="'+D+'" alt="" loading="lazy"></p><p>解决：CAD图标右键 <code>打开文件所在的位置</code>，找到 <code>AcWebBrowser</code> 文件夹</p><p><img src="'+x+'" alt="" loading="lazy"></p><p>找到<code>AcWebBrowser.exe</code> - 重命名，将exe后缀名删掉，或者直接将这个文件删除</p><p><img src="'+M+'" alt="" loading="lazy"></p></details><details class="details custom-block"><summary>公众号主页链接提取</summary><p>点开任意文章，草稿的也行，在链接中有一个 biz值</p><div class="tip custom-block"><p class="custom-block-title">比如</p><p><a href="https://mp.weixin.qq.com/s?__biz=Mzk0MDU3MjA4Ng==&amp;tempkey=MTIzNF9MTzF2TWJYak93VzY0YmRQVi1lc1pack5PMn" target="_blank" rel="noreferrer">https://mp.weixin.qq.com/s?__biz=Mzk0MDU3MjA4Ng==&amp;tempkey=MTIzNF9MTzF2TWJYak93VzY0YmRQVi1lc1pack5PMn</a></p></div><p>文章的biz值就是：<code>Mzk0MDU3MjA4Ng==</code></p><p>根据自己的文章修改后面的biz即可，结尾添加一个<code>#wechat_redirect</code>，可用于外链跳转</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>https://mp.weixin.qq.com/mp/profile_ext?action=home&amp;__biz=你的biz值#wechat_redirect</span></span></code></pre></div></details>',22)]))}const O=i(B,[["render",N]]);export{Y as __pageData,O as default};
