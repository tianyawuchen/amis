define('docs/sdk.md', function(require, exports, module) {

  module.exports = {
    "title": "如何使用",
    "html": "<h2><a class=\"anchor\" name=\"%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8\" href=\"#%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>如何使用</h2><pre><code class=\"lang-bash\">npm <span class=\"hljs-selector-tag\">i</span> amis\n</code></pre>\n<p>安装完后可以在 React Component 这么使用。</p>\n<pre><code class=\"lang-tsx\"><span class=\"hljs-keyword\">import</span> * as <span class=\"hljs-type\">React</span> from <span class=\"hljs-symbol\">'reac</span>t';\n<span class=\"hljs-keyword\">import</span> {\n    render as renderAmis\n} from <span class=\"hljs-symbol\">'ami</span>s';\n\n<span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">MyComponent</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">React</span>.<span class=\"hljs-title\">Component&lt;any</span>, <span class=\"hljs-title\">any&gt;</span> </span>{\n    render() {\n        <span class=\"hljs-keyword\">return</span> (\n            &lt;div&gt;\n                &lt;p&gt;通过 <span class=\"hljs-type\">AMis</span> 渲染页面&lt;/p&gt;\n                {renderAmis({\n                    <span class=\"hljs-comment\">// schema</span>\n                    <span class=\"hljs-comment\">// 这里是 AMis 的 Json 配置。</span>\n                    <span class=\"hljs-class\"><span class=\"hljs-keyword\">type</span></span>: <span class=\"hljs-symbol\">'pag</span>e',\n                    title: '简单页面',\n                    body: '内容'\n                }, {\n                    <span class=\"hljs-comment\">// props</span>\n                }, {\n                    <span class=\"hljs-comment\">// env</span>\n                    <span class=\"hljs-comment\">// 这些是 AMis 需要的一些接口实现</span>\n                    <span class=\"hljs-comment\">// 可以参考本项目里面的 Demo 部分代码。</span>\n\n                    updateLocation: (location:string<span class=\"hljs-comment\">/*目标地址*/</span>, replace:boolean<span class=\"hljs-comment\">/*是replace，还是push？*/</span>) =&gt; {\n                        <span class=\"hljs-comment\">// 用来更新地址栏</span>\n                    },\n\n                    jumpTo: (location:string<span class=\"hljs-comment\">/*目标地址*/</span>) =&gt; {\n                        <span class=\"hljs-comment\">// 页面跳转， actionType:  link、url 都会进来。</span>\n                    },\n\n                    fetcher: ({\n                        url,\n                        method,\n                        data,\n                        config\n                    }:{\n                        url:string<span class=\"hljs-comment\">/*目标地址*/</span>,\n                        method:<span class=\"hljs-symbol\">'ge</span>t' | <span class=\"hljs-symbol\">'pos</span>t' | <span class=\"hljs-symbol\">'pu</span>t' | <span class=\"hljs-symbol\">'delet</span>e'<span class=\"hljs-comment\">/*发送方式*/</span>,\n                        data: <span class=\"hljs-class\"><span class=\"hljs-keyword\">object</span> <span class=\"hljs-title\">|</span> <span class=\"hljs-title\">void/*数据*/</span>,</span>\n                        config: <span class=\"hljs-class\"><span class=\"hljs-keyword\">object</span><span class=\"hljs-title\">/*其他配置*/</span></span>\n                    }) =&gt; {\n                        <span class=\"hljs-comment\">// 用来发送 Ajax 请求，建议使用 axios</span>\n                    },\n                    notify: (<span class=\"hljs-class\"><span class=\"hljs-keyword\">type</span></span>:<span class=\"hljs-symbol\">'erro</span>r'|<span class=\"hljs-symbol\">'succes</span>s'<span class=\"hljs-comment\">/**/</span>, msg:string<span class=\"hljs-comment\">/*提示内容*/</span>) =&gt; {\n                        <span class=\"hljs-comment\">// 用来提示用户</span>\n                    },\n                    alert: (content:string<span class=\"hljs-comment\">/*提示信息*/</span>) =&gt; {\n                        <span class=\"hljs-comment\">// 另外一种提示，可以直接用系统框</span>\n                    },\n                    confirm: (content:string<span class=\"hljs-comment\">/*提示信息*/</span>) =&gt; {\n                        <span class=\"hljs-comment\">// 确认框。</span>\n                    }\n                });}\n            &lt;/div&gt;\n        );\n    }\n}\n</code></pre>\n<h2><a class=\"anchor\" name=\"%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86\" href=\"#%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>工作原理</h2><p>AMis 的渲染过程就是将 <code>json</code> 转成对应的 React 组件。先通过 <code>json</code> 的 type 找到对应的 <code>Component</code> 然后，然后把其他属性作为 <code>props</code> 传递过去完成渲染。</p>\n<p>拿一个表单页面来说，如果用React组件调用大概是这样。</p>\n<pre><code class=\"lang-jsx\">&lt;<span class=\"hljs-meta\">Page</span>\n    <span class=\"hljs-meta\">title</span>=<span class=\"hljs-string\">\"页面标题\"</span>\n    subTitle=<span class=\"hljs-string\">\"副标题\"</span>\n&gt;\n    &lt;Form\n        <span class=\"hljs-meta\">title</span>=<span class=\"hljs-string\">\"用户登录\"</span>\n        controls={[\n            {\n                type: <span class=\"hljs-string\">'text'</span>,\n                name: <span class=\"hljs-string\">'username'</span>,\n                <span class=\"hljs-meta\">label</span>: <span class=\"hljs-string\">'用户名'</span>\n            }\n        ]}\n    /&gt;\n&lt;/<span class=\"hljs-meta\">Page</span>&gt;\n</code></pre>\n<p>把以上配置方式换成 AMis JSON, 则是：</p>\n<pre><code class=\"lang-json\">{\n  <span class=\"hljs-attr\">\"type\"</span>: <span class=\"hljs-string\">\"page\"</span>,\n  <span class=\"hljs-attr\">\"title\"</span>: <span class=\"hljs-string\">\"页面标题\"</span>,\n  <span class=\"hljs-attr\">\"subTitle\"</span>: <span class=\"hljs-string\">\"副标题\"</span>,\n  <span class=\"hljs-attr\">\"body\"</span>: {\n    <span class=\"hljs-attr\">\"type\"</span>: <span class=\"hljs-string\">\"form\"</span>,\n    <span class=\"hljs-attr\">\"title\"</span>: <span class=\"hljs-string\">\"用户登录\"</span>,\n    <span class=\"hljs-attr\">\"controls\"</span>: [\n      {\n        <span class=\"hljs-attr\">\"type\"</span>: <span class=\"hljs-string\">\"text\"</span>,\n        <span class=\"hljs-attr\">\"name\"</span>: <span class=\"hljs-string\">\"username\"</span>,\n        <span class=\"hljs-attr\">\"label\"</span>: <span class=\"hljs-string\">\"用户名\"</span>\n      }\n    ]\n  }\n}\n</code></pre>\n<p>那么，AMis 是如何将 JSON 转成组件的呢？直接根据节点的 type 去跟组件一一对应？似乎很可能会重名比如在表格里面展示的类型 <code>text</code> 跟表单里面的 <code>text</code>是完全不一样的，一个负责展示，一个却负责输入。所以说一个节点要被什么组件渲染，还需要携带上下文(context)信息。</p>\n<p>如何去携带上下文（context）信息？AMis 中直接是用节点的路径（path）来作为上下文信息。从上面的例子来看，一共有三个节点，path 信息分别是。</p>\n<ul>\n<li><code>page</code> 页面节点</li>\n<li><code>page/body/form</code> 表单节点</li>\n<li><code>page/body/form/controls/0/text</code> 文本框节点。</li>\n</ul>\n<p>根据 path 的信息就能很容易注册组件跟节点对应了。</p>\n<p>Page 组件的示例代码</p>\n<pre><code class=\"lang-jsx\"><span class=\"hljs-meta\">@Renderer</span>({\n    test: /^page$/,\n    <span class=\"hljs-comment\">// ... 其他信息隐藏了</span>\n})\nexport <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">PageRenderer</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">React</span>.<span class=\"hljs-title\">Component</span> </span>{\n    <span class=\"hljs-comment\">// ... 其他信息隐藏了</span>\n    render() {\n        const {\n            title,\n            body,\n            render <span class=\"hljs-comment\">// 用来渲染孩子节点，如果当前是叶子节点则可以忽略。</span>\n        } = <span class=\"hljs-keyword\">this</span>.props;\n        <span class=\"hljs-keyword\">return</span> (\n            &lt;div className=<span class=\"hljs-string\">\"page\"</span>&gt;\n                &lt;h1&gt;{title}&lt;/h1&gt;\n                &lt;div className=<span class=\"hljs-string\">\"body-container\"</span>&gt;\n                    {render(<span class=\"hljs-symbol\">'bod</span>y', body)<span class=\"hljs-comment\">/*渲染孩子节点*/</span>}\n                &lt;/div&gt;\n            &lt;/div&gt;\n        );\n    }\n}\n</code></pre>\n<p>Form 组件的示例代码</p>\n<pre><code class=\"lang-jsx\"><span class=\"hljs-meta\">@Renderer</span>({\n    test: /(^|\\/)form$/,\n    <span class=\"hljs-comment\">// ... 其他信息隐藏了</span>\n})\nexport <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">FormRenderer</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">React</span>.<span class=\"hljs-title\">Component</span> </span>{\n    <span class=\"hljs-comment\">// ... 其他信息隐藏了</span>\n    render() {\n        const {\n            title,\n            controls,\n            render <span class=\"hljs-comment\">// 用来渲染孩子节点，如果当前是叶子节点则可以忽略。</span>\n        } = <span class=\"hljs-keyword\">this</span>.props;\n        <span class=\"hljs-keyword\">return</span> (\n            &lt;form className=<span class=\"hljs-string\">\"form\"</span>&gt;\n                {controls.map((control, index) =&gt; (\n                    &lt;div className=<span class=\"hljs-string\">\"form-item\"</span> key={index}&gt;\n                        {render(`${index}/control`, control)}\n                    &lt;/div&gt;\n                ))}\n            &lt;/form&gt;\n        );\n    }\n}\n</code></pre>\n<p>Text 组件的示例代码</p>\n<pre><code class=\"lang-jsx\"><span class=\"hljs-meta\">@Renderer</span>({\n    test: /(^|\\/)form(?:\\/\\d+)?\\/control(?\\/\\d+)?\\/text$/\n    <span class=\"hljs-comment\">// ... 其他信息隐藏了</span>\n})\nexport <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">FormItemTextRenderer</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">React</span>.<span class=\"hljs-title\">Component</span> </span>{\n    <span class=\"hljs-comment\">// ... 其他信息隐藏了</span>\n    render() {\n        const {\n            label,\n            name,\n            onChange\n        } = <span class=\"hljs-keyword\">this</span>.props;\n        <span class=\"hljs-keyword\">return</span> (\n            &lt;div className=<span class=\"hljs-string\">\"form-group\"</span>&gt;\n                &lt;label&gt;{label}&lt;label&gt;\n                &lt;input <span class=\"hljs-class\"><span class=\"hljs-keyword\">type</span></span>=<span class=\"hljs-string\">\"text\"</span> onChange={(e) =&gt; onChange(e.currentTarget.value)} /&gt;\n            &lt;/div&gt;\n        );\n    }\n}\n</code></pre>\n<p>那么渲染过程就是根据节点 path 信息，跟组件池中的组件 <code>test</code> (检测) 信息做匹配，如果命中，则把当前节点转给对应组件渲染，节点中其他属性将作为目标组件的 props。需要注意的是，如果是容器组件，比如以上例子中的 <code>page</code> 组件，从 props 中拿到的 <code>body</code> 是一个子节点，由于节点类型是不固定，由使用者决定，所以不能直接完成渲染，所以交给属性中下发的 <code>render</code> 方法去完成渲染，<code>{render(&#39;body&#39;, body)}</code>，他的工作就是拿子节点的 path 信息去组件池里面找到对应的渲染器，然后交给对应组件去完成渲染。</p>\n<h2><a class=\"anchor\" name=\"%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6\" href=\"#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>自定义组件</h2><p>如果 AMis 中组件不能满足你的需求，同时你又会 React 组件开发，那么就自己定制一个吧。</p>\n<p>先来看个简单的例子</p>\n<pre><code class=\"lang-jsx\"><span class=\"hljs-keyword\">import</span> * as <span class=\"hljs-type\">React</span> from <span class=\"hljs-symbol\">'reac</span>t';\n<span class=\"hljs-keyword\">import</span> {\n    <span class=\"hljs-type\">Renderer</span>\n} from <span class=\"hljs-symbol\">'ami</span>s';\n\n<span class=\"hljs-meta\">@Renderer</span>({\n    test: /(^|\\/)my\\-renderer$/,\n})\n<span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">CustomRenderer</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">React</span>.<span class=\"hljs-title\">Component</span> </span>{\n    render() {\n        const  {tip} = <span class=\"hljs-keyword\">this</span>.props;\n        <span class=\"hljs-keyword\">return</span> (\n            &lt;div&gt;这是自定义组件：{tip}&lt;/div&gt;\n        );\n    }\n}\n</code></pre>\n<p>有了以上这段代码后，就可以这样使用了。</p>\n<pre><code class=\"lang-json\">{\n    <span class=\"hljs-attr\">\"type\"</span>: <span class=\"hljs-string\">\"page\"</span>,\n    <span class=\"hljs-attr\">\"title\"</span>: <span class=\"hljs-string\">\"自定义组件示例\"</span>,\n    <span class=\"hljs-attr\">\"body\"</span>: {\n        <span class=\"hljs-attr\">\"type\"</span>: <span class=\"hljs-string\">\"my-renderer\"</span>,\n        <span class=\"hljs-attr\">\"tip\"</span>: <span class=\"hljs-string\">\"简单示例\"</span>\n    }\n}\n</code></pre>\n<p>如果你看了<a href=\"#%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86\">AMis工作原理</a>应该不难理解，这里注册一个 React 组件，当节点的 path 信息是 <code>my-renderer</code> 结尾时，交给当前组件来完成渲染。\n如果你只写叶子节点的渲染器，已经可以不用看了，如果你的渲染器中有容器需要可以放置其他节点，那么接着看以下这段代码。</p>\n<pre><code class=\"lang-jsx\"><span class=\"hljs-keyword\">import</span> * as <span class=\"hljs-type\">React</span> from <span class=\"hljs-symbol\">'reac</span>t';\n<span class=\"hljs-keyword\">import</span> {\n    <span class=\"hljs-type\">Renderer</span>\n} from <span class=\"hljs-symbol\">'ami</span>s';\n\n<span class=\"hljs-meta\">@Renderer</span>({\n    test: /(^|\\/)my\\-renderer2$/,\n})\n<span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">CustomRenderer</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">React</span>.<span class=\"hljs-title\">Component</span> </span>{\n    render() {\n        const  {\n            tip,\n            body,\n            render\n        } = <span class=\"hljs-keyword\">this</span>.props;\n        <span class=\"hljs-keyword\">return</span> (\n            &lt;div&gt;\n                &lt;p&gt;这是自定义组件：{tip}&lt;/p&gt;\n                {body ? (\n                    &lt;div className=<span class=\"hljs-string\">\"container\"</span>&gt;\n                        {render(<span class=\"hljs-symbol\">'bod</span>y', body, {\n                            <span class=\"hljs-comment\">// 这里的信息会作为 props 传递给子组件，一般情况下都不需要这个</span>\n                        })}\n                    &lt;/div&gt;\n                ) : <span class=\"hljs-literal\">null</span>}\n            &lt;/div&gt;\n        );\n    }\n}\n</code></pre>\n<p>有了以上这段代码后，就可以这样使用了。</p>\n<pre><code class=\"lang-json\">{\n    <span class=\"hljs-attr\">\"type\"</span>: <span class=\"hljs-string\">\"page\"</span>,\n    <span class=\"hljs-attr\">\"title\"</span>: <span class=\"hljs-string\">\"自定义组件示例\"</span>,\n    <span class=\"hljs-attr\">\"body\"</span>: {\n        <span class=\"hljs-attr\">\"type\"</span>: <span class=\"hljs-string\">\"my-renderer2\"</span>,\n        <span class=\"hljs-attr\">\"tip\"</span>: <span class=\"hljs-string\">\"简单示例\"</span>,\n        <span class=\"hljs-attr\">\"body\"</span>: {\n            <span class=\"hljs-attr\">\"type\"</span>: <span class=\"hljs-string\">\"form\"</span>,\n            <span class=\"hljs-attr\">\"controls\"</span>: [\n                {\n                    <span class=\"hljs-attr\">\"type\"</span>: <span class=\"hljs-string\">\"text\"</span>,\n                    <span class=\"hljs-attr\">\"label\"</span>: <span class=\"hljs-string\">\"用户名\"</span>,\n                    <span class=\"hljs-attr\">\"name\"</span>: <span class=\"hljs-string\">\"usename\"</span>\n                }\n            ]\n        }\n    }\n}\n</code></pre>\n<p>跟第一个列子不同的地方是，这里多了个 <code>render</code> 方法，这个方法就是专门用来渲染子节点的。来看下参数说明：</p>\n<ul>\n<li><code>region</code> 区域名称，你有可能有多个区域可以作为容器，请不要重复。</li>\n<li><code>node</code> 子节点。</li>\n<li><code>props</code> 可选，可以通过此对象跟子节点通信等。</li>\n</ul>\n<p>以上是普通渲染器的注册方式，如果是表单项，为了更简单的扩充，请使用 <code>FormItem</code> 注解，而不是 <code>Renderer</code>。 原因是如果用 <code>FormItem</code> 是不用关心：label怎么摆，表单验证器怎么实现，如何适配表单的3中展现方式（水平、上下和内联模式），而只用关心：有了值后如何回显，响应用户交互设置新值。</p>\n<pre><code class=\"lang-jsx\"><span class=\"hljs-keyword\">import</span> * <span class=\"hljs-keyword\">as</span> React <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'react'</span>;\n<span class=\"hljs-keyword\">import</span> {\n    FormItem\n} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'amis'</span>;\n\n@FormItem({\n    <span class=\"hljs-attr\">type</span>: <span class=\"hljs-string\">'custom'</span>\n})\n<span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">MyFormItem</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">React</span>.<span class=\"hljs-title\">Component</span> </span>{\n    render() {\n        <span class=\"hljs-keyword\">const</span> {\n            value,\n            onChange\n        } = <span class=\"hljs-keyword\">this</span>.props;\n\n        <span class=\"hljs-keyword\">return</span> (\n            <span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span>&gt;</span>这个是个自定义组件<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span>&gt;</span>当前值：{value}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span> <span class=\"hljs-attr\">className</span>=<span class=\"hljs-string\">\"btn btn-default\"</span> <span class=\"hljs-attr\">onClick</span>=<span class=\"hljs-string\">{()</span> =&gt;</span> onChange(Math.round(Math.random() * 10000))}&gt;随机修改<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span>\n        );\n    }\n}\n</code></pre>\n<p>有了以上这段代码后，就可以这样使用了。</p>\n<pre><code class=\"lang-json\">{\n    <span class=\"hljs-attr\">\"type\"</span>: <span class=\"hljs-string\">\"page\"</span>,\n    <span class=\"hljs-attr\">\"title\"</span>: <span class=\"hljs-string\">\"自定义组件示例\"</span>,\n    <span class=\"hljs-attr\">\"body\"</span>: {\n            <span class=\"hljs-attr\">\"type\"</span>: <span class=\"hljs-string\">\"form\"</span>,\n            <span class=\"hljs-attr\">\"controls\"</span>: [\n                {\n                    <span class=\"hljs-attr\">\"type\"</span>: <span class=\"hljs-string\">\"text\"</span>,\n                    <span class=\"hljs-attr\">\"label\"</span>: <span class=\"hljs-string\">\"用户名\"</span>,\n                    <span class=\"hljs-attr\">\"name\"</span>: <span class=\"hljs-string\">\"usename\"</span>\n                },\n\n                {\n                    <span class=\"hljs-attr\">\"type\"</span>: <span class=\"hljs-string\">\"custom\"</span>,\n                    <span class=\"hljs-attr\">\"label\"</span>: <span class=\"hljs-string\">\"随机值\"</span>,\n                    <span class=\"hljs-attr\">\"name\"</span>: <span class=\"hljs-string\">\"randon\"</span>\n                }\n            ]\n        }\n}\n</code></pre>\n<blockquote>\n<p>注意: 使用 FormItem 默认是严格模式，即只有必要的属性变化才会重新渲染，有可能满足不了你的需求，如果忽略性能问题，可以传入 <code>strictMode</code>: <code>false</code> 来关闭。</p>\n</blockquote>\n<p>以上的例子都是需要先注册组件，然后再使用的，如果你在自己项目中使用，还有更简单的用法，以下示例直接无需注册。</p>\n<pre><code class=\"lang-jsx\">{\n    <span class=\"hljs-string\">\"type\"</span>: <span class=\"hljs-string\">\"page\"</span>,\n    <span class=\"hljs-string\">\"title\"</span>: <span class=\"hljs-string\">\"自定义组件示例\"</span>,\n    <span class=\"hljs-string\">\"body\"</span>: {\n            <span class=\"hljs-string\">\"type\"</span>: <span class=\"hljs-string\">\"form\"</span>,\n            <span class=\"hljs-string\">\"controls\"</span>: [\n                {\n                    <span class=\"hljs-string\">\"type\"</span>: <span class=\"hljs-string\">\"text\"</span>,\n                    <span class=\"hljs-string\">\"label\"</span>: <span class=\"hljs-string\">\"用户名\"</span>,\n                    <span class=\"hljs-string\">\"name\"</span>: <span class=\"hljs-string\">\"usename\"</span>\n                },\n\n                {\n                    <span class=\"hljs-string\">\"name\"</span>: <span class=\"hljs-string\">\"a\"</span>,\n                    <span class=\"hljs-string\">\"children\"</span>: ({\n                        value,\n                        onChange\n                    }) =&gt; (\n                        &lt;div&gt;\n                            &lt;p&gt;这个是个自定义组件&lt;/p&gt;\n                            &lt;p&gt;当前值：{value}&lt;/p&gt;\n                            &lt;a className=<span class=\"hljs-string\">\"btn btn-default\"</span> onClick={() =&gt; onChange(<span class=\"hljs-name\">Math.round</span>(<span class=\"hljs-name\">Math.random</span>() * <span class=\"hljs-number\">10000</span>))}&gt;随机修改&lt;/a&gt;\n                        &lt;/div&gt;\n                    )\n                }\n            ]\n        }\n}\n</code></pre>\n<p>即：通过 <code>children</code> 传递一个React组件，这个示例是一个React Stateless Functional Component，也可以是传统的 React 组件。\n任何节点如果包含 <code>children</code> 这个属性，则都会把当前节点交给 <code>children</code> 来处理，跳过了从 AMis 渲染器池子中选择渲染器的过程。</p>\n",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "如何使用",
          "fragment": "%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8",
          "fullPath": "#%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8",
          "level": 2
        },
        {
          "label": "工作原理",
          "fragment": "%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86",
          "fullPath": "#%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86",
          "level": 2
        },
        {
          "label": "自定义组件",
          "fragment": "%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6",
          "fullPath": "#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});
