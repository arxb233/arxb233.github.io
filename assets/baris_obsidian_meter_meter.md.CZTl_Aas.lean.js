import{_ as a,c as e,a4 as r,o as d}from"./chunks/framework.CyeRpf1z.js";const A="/meter/1.png",h="/meter/2.png",o="/meter/3.png",_=JSON.parse('{"title":"1.获取总正向用电量","description":"","frontmatter":{},"headers":[],"relativePath":"baris/obsidian/meter/meter.md","filePath":"baris/obsidian/meter/meter.md","lastUpdated":1734431113000}'),i={name:"baris/obsidian/meter/meter.md"};function n(l,t,s,c,p,b){return d(),e("div",null,t[0]||(t[0]=[r('<h1 id="_1-获取总正向用电量" tabindex="-1">1.获取总正向用电量 <a class="header-anchor" href="#_1-获取总正向用电量" aria-label="Permalink to &quot;1.获取总正向用电量&quot;">​</a></h1><p><img src="'+A+'" alt="" loading="lazy"></p><h4 id="请求帧" tabindex="-1">请求帧 <a class="header-anchor" href="#请求帧" aria-label="Permalink to &quot;请求帧&quot;">​</a></h4><table tabindex="0"><thead><tr><th>前导码</th><th>起始码</th><th>地址域(A0-A5)</th><th>起始符</th><th>控制码</th><th>数据域长度</th><th>数据域/数据标识(DI0-DI3)</th><th>校验码</th><th>结束符</th></tr></thead><tbody><tr><td>FE FE</td><td>68</td><td>AA AA AA AA AA AA</td><td>68</td><td>11</td><td>04</td><td>33 33 34 33</td><td>AE</td><td>16</td></tr></tbody></table><p>68 AA AA AA AA AA AA 68 11 04 33 33 34 33 AE 16</p><h4 id="应答帧" tabindex="-1">应答帧 <a class="header-anchor" href="#应答帧" aria-label="Permalink to &quot;应答帧&quot;">​</a></h4><table tabindex="0"><thead><tr><th>前导码</th><th>起始码</th><th>地址域(A0-A5)</th><th>起始符</th><th>控制码</th><th>数据域长度</th><th>数据域/数据标识</th><th>校验码</th><th>结束符</th></tr></thead><tbody><tr><td>FE FE FE FE</td><td>68</td><td>52 86 04 05 06 23</td><td>68</td><td>91</td><td>08</td><td>33 33 34 33 7A 5A 35 33</td><td>7C</td><td>16</td></tr></tbody></table><p>FE FE FE FE 68 52 86 04 05 06 23 68 91 08 33 33 34 33 7A 5A 35 33 7C 16</p><p><strong>DLT645-2007协议数据帧结构解析</strong><a href="https://blog.csdn.net/weixin_41218348/article/details/126520456" target="_blank" rel="noreferrer">DLT645协议解析(二)---07协议数据帧结构解析_dlt645能读取多个数值吗-CSDN博客</a></p><h1 id="_2-abc三相电压" tabindex="-1">2.ABC三相电压 <a class="header-anchor" href="#_2-abc三相电压" aria-label="Permalink to &quot;2.ABC三相电压&quot;">​</a></h1><p><img src="'+h+'" alt="" loading="lazy"> 68 AA AA AA AA AA AA 68 11 04 33 32 34 35 AF 16</p><h1 id="_3-三相电流" tabindex="-1">3.三相电流 <a class="header-anchor" href="#_3-三相电流" aria-label="Permalink to &quot;3.三相电流&quot;">​</a></h1><p>68 AA AA AA AA AA AA 68 11 04 33 32 35 35 B0 16</p><h1 id="_4-功率" tabindex="-1">4.功率 <a class="header-anchor" href="#_4-功率" aria-label="Permalink to &quot;4.功率&quot;">​</a></h1><p>68 AA AA AA AA AA AA 68 11 04 33 32 36 35 B1 16</p><h1 id="_5-功率因素" tabindex="-1">5.功率因素 <a class="header-anchor" href="#_5-功率因素" aria-label="Permalink to &quot;5.功率因素&quot;">​</a></h1><p><img src="'+o+'" alt="" loading="lazy"> 68 AA AA AA AA AA AA 68 11 04 33 32 39 35 B4 16</p>',17)]))}const u=a(i,[["render",n]]);export{_ as __pageData,u as default};
