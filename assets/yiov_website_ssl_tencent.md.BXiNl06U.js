import{_ as e,c as a,a4 as n,o as l}from"./chunks/framework.CyeRpf1z.js";const s="/ssl/tencent/tencent-01.png",c="/ssl/tencent/tencent-02.png",r="/ssl/tencent/tencent-03.png",i="/ssl/tencent/tencent-04.png",o="/ssl/tencent/tencent-05.png",p="/ssl/tencent/tencent-06.png",d="/ssl/tencent/tencent-07.png",m="/ssl/tencent/tencent-08.png",g="/ssl/tencent/tencent-09.png",h="/ssl/tencent/tencent-10.png",b="/ssl/tencent/tencent-11.png",u="/ssl/tencent/tencent-12.png",v=JSON.parse('{"title":"腾讯云申请SSL证书","description":"","frontmatter":{},"headers":[],"relativePath":"yiov/website/ssl/tencent.md","filePath":"yiov/website/ssl/tencent.md","lastUpdated":1734431113000}'),y={name:"yiov/website/ssl/tencent.md"};function _(x,t,f,k,S,q){return l(),a("div",null,t[0]||(t[0]=[n('<h1 id="腾讯云申请ssl证书" tabindex="-1">腾讯云申请SSL证书 <a class="header-anchor" href="#腾讯云申请ssl证书" aria-label="Permalink to &quot;腾讯云申请SSL证书&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">(当前界面文档全部来自yiov.top)</p><ul><li><a href="https://yiov.top/" target="_blank" rel="noreferrer">yiov</a>「伊奥&#39;s 教程集」</li></ul></div><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><p>腾讯提供50张免费的 <a href="https://www.trustasia.com/" target="_blank" rel="noreferrer">TrustAsia 亚洲诚信</a> SSL证书</p><p>官网：<a href="https://console.cloud.tencent.com/ssl" target="_blank" rel="noreferrer">https://console.cloud.tencent.com/ssl</a></p><p><img src="'+s+'" alt="" loading="lazy"></p><h2 id="免费方案" tabindex="-1">免费方案 <a class="header-anchor" href="#免费方案" aria-label="Permalink to &quot;免费方案&quot;">​</a></h2><ul><li><p>证书数量：50张</p></li><li><p>有效期：90天</p></li><li><p>通配符/泛解析：不支持</p></li><li><p>验证方式：DNS验证</p></li><li><p>自动续签：不支持</p></li></ul><details class="details custom-block"><summary>什么是 通配符 和 泛解析</summary><ul><li><p>通配符 <code>*</code>：是泛解析的一个必用字符，用来表示当前级</p></li><li><p>通配符证书：可以多个二级域名或三级域名共用一个证书，只需要申请一张即可</p></li></ul><table tabindex="0"><thead><tr><th style="text-align:center;">域名/示例</th><th style="text-align:center;">泛解析</th><th style="text-align:center;">包含</th><th style="text-align:center;">不包含</th></tr></thead><tbody><tr><td style="text-align:center;">一级域名</td><td style="text-align:center;">❌</td><td style="text-align:center;">baidu.com</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">二级域名</td><td style="text-align:center;">*.baidu.com</td><td style="text-align:center;">baike.baidu.com<br>www.baidu.com<br>...</td><td style="text-align:center;">baidu.com</td></tr><tr><td style="text-align:center;">三级域名</td><td style="text-align:center;">*.bce.baidu.com</td><td style="text-align:center;">login.bce.baidu.com<br>h5.bce.baidu.com<br>...</td><td style="text-align:center;">*.baidu.com<br>bce.baidu.com</td></tr><tr><td style="text-align:center;">依次类推</td><td style="text-align:center;">...</td><td style="text-align:center;">...</td><td style="text-align:center;">...</td></tr></tbody></table></details><h2 id="申请" tabindex="-1">申请 <a class="header-anchor" href="#申请" aria-label="Permalink to &quot;申请&quot;">​</a></h2><p>登录账号进入 <a href="https://console.cloud.tencent.com/ssl" target="_blank" rel="noreferrer">控制台 - SSL证书</a> ，我的证书 - <code>申请免费证书（0/50）</code></p><p><img src="'+c+'" alt="" loading="lazy"></p><p>再次点击 <code>申请免费证书</code></p><p><img src="'+r+'" alt="" loading="lazy"></p><p>输入我们的域名，选择 自动DNS验证，填入邮箱，提交申请</p><p><img src="'+i+'" alt="" loading="lazy"></p><p>会自动添加解析记录，点完成</p><p><img src="'+o+'" alt="" loading="lazy"></p><h2 id="部署" tabindex="-1">部署 <a class="header-anchor" href="#部署" aria-label="Permalink to &quot;部署&quot;">​</a></h2><p>申请完成后，点击 <code>下载</code> - 选择其他（pem格式的就行）</p><p><img src="'+p+'" alt="" loading="lazy"></p><p>分别用记事本打开 <code>*.pem</code> 文件 和 <code>*.key</code> 文件，复制</p><p><img src="'+d+'" alt="" loading="lazy"></p><p>分别粘贴到框里，保存，并开启强制HTTPS</p><p><img src="'+m+'" alt="" loading="lazy"></p><p>打开网站已经有小锁了，顺便查看证书</p><p><img src="'+g+'" alt="" loading="lazy"></p><h2 id="吊销" tabindex="-1">吊销 <a class="header-anchor" href="#吊销" aria-label="Permalink to &quot;吊销&quot;">​</a></h2><p>在证书页面，选择要吊销的证书，更多 - 吊销</p><p><img src="'+h+'" alt="" loading="lazy"></p><p>根据提示下一步</p><p><img src="'+b+'" alt="" loading="lazy"></p><p>删除证书即可</p><p><img src="'+u+'" alt="" loading="lazy"></p><h2 id="续签" tabindex="-1">续签 <a class="header-anchor" href="#续签" aria-label="Permalink to &quot;续签&quot;">​</a></h2><p>需要手动重新申请一张新的证书，然后重新 <a href="#部署">部署</a></p>',36)]))}const P=e(y,[["render",_]]);export{v as __pageData,P as default};