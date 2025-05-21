import{_ as s,c as i,o as a,a4 as t}from"./chunks/framework.CGkmJMTS.js";const c=JSON.parse('{"title":"章节测试","description":"","frontmatter":{},"headers":[],"relativePath":"typeScript/chapterTset_1.md","filePath":"typeScript/chapterTset_1.md"}'),n={name:"typeScript/chapterTset_1.md"},e=t(`<h1 id="章节测试" tabindex="-1">章节测试 <a class="header-anchor" href="#章节测试" aria-label="Permalink to &quot;章节测试&quot;">​</a></h1><p>至此，我们已经学习了 TS 中比较基础的一部分，是时候检测一下学习成果了，需求如下：</p><ul><li>定义一个函数，用于获取后端返回的数据</li><li>将后端返回的数据存入定义的变量中</li><li>不允许使用 any 类型</li><li>接口返回数据如下</li></ul><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;pageNum&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;pageSize&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;total&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;root&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;orgNo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;000000000001&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;orgName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;某某有限公司&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;8a8879f5447ae3b301449ade6eef0011&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;creator&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;tangs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;state&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>如果你完成了，可以前往 <a href="http://xiets.gitee.io/json-to-any-web/" target="_blank" rel="noreferrer">http://xiets.gitee.io/json-to-any-web/</a> 验证定义的接口是否正确</p><p>下面是我写的，选中就可以看到代码了</p><pre style="color:white;">interface IResult {
  pageNum: number
  pageSize: number
  total: number
  root: IData[]
}
interface IData {
  orgNo: string
  orgName: string
  id: string
  creator: string
  state: number
}

function getData(): void {
  let resData: IResult
  fetch(&quot;http://127.0.0.1:3000/getData&quot;)
    .then(res =&gt; res.json())
    .then(res =&gt; {
      resData = res
    })
}

getData()

</pre><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>上面也只是完成了一个基础的接口类型定义，熟悉 JS 的都知道，我们在进行异步操作的时候，通常会使用 Promise 或者 async await 等等来封装函数，以便让程序运行更加可靠，您也可以思考一下如何将异步融入 TS</p>`,9),p=[e];function h(l,k,r,o,E,d){return a(),i("div",null,p)}const u=s(n,[["render",h]]);export{c as __pageData,u as default};
