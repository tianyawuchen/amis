/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.17.0(63d87164d0bc8c6206d9339c195289c93665028e)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/
define("vs/editor/editor.main.nls.zh-cn",{"vs/base/browser/ui/actionbar/actionbar":["{0} ({1})"],"vs/base/browser/ui/aria/aria":["{0} (再次发生)","{0} (发生了 {1} 次)"],"vs/base/browser/ui/findinput/findInput":["输入"],"vs/base/browser/ui/findinput/findInputCheckboxes":["区分大小写","全字匹配","使用正则表达式"],"vs/base/browser/ui/inputbox/inputBox":["错误: {0}","警告: {0}","信息: {0}"],"vs/base/browser/ui/keybindingLabel/keybindingLabel":["未绑定"],"vs/base/browser/ui/list/listWidget":["{0}. 使用导航键进行导航。"],"vs/base/browser/ui/menu/menu":["{0} ({1})"],"vs/base/browser/ui/tree/abstractTree":["清除","在类型上禁用筛选","在类型上启用筛选","未找到元素","已匹配 {0} 个元素(共 {1} 个)"],"vs/base/common/keybindingLabels":["Ctrl","Shift","Alt","Windows","Ctrl","Shift","Alt","Super","控件","Shift","Alt","命令","控件","Shift","Alt","Windows","控件","Shift","Alt","Super"],"vs/base/common/severity":["错误","警告","信息"],"vs/base/parts/quickopen/browser/quickOpenModel":["{0}，选取器","选取器"],"vs/base/parts/quickopen/browser/quickOpenWidget":["快速选取器。键入以缩小结果范围。","快速选取器","{0} 个结果"],
"vs/editor/browser/controller/coreCommands":["全选(&&S)","撤消(&&U)","恢复(&&R)"],"vs/editor/browser/widget/codeEditorWidget":["光标数量被限制为 {0}。"],"vs/editor/browser/widget/diffEditorWidget":["文件过大，无法比较。"],"vs/editor/browser/widget/diffReview":["关闭","no lines","1 line","{0} lines","差异 {0}，总共 {1}: 原始，{2}，{3}；改后，{4}，{5}","空白","未修改 {0}，已修改 {1}: {2}","+ 已修改 {0}: {1}","- 未修改 {0}: {1} ","转至下一个差异","转至上一个差异"],
"vs/editor/common/config/commonEditorConfig":["编辑器","控制字体系列。","控制字体粗细。","以像素为单位控制字体大小。","控制行高。为 0 时则通过字体大小自动计算。","控制以像素为单位的字母间距。","不显示行号。","将行号显示为绝对行数。","将行号显示为与光标相隔的行数。","每 10 行显示一次行号。","控制行号的显示。","当文件以换行符结束时, 呈现最后一行的行号。","在一定数量的等宽字符后显示垂直标尺。输入多个值，显示多个标尺。若数组为空，则不绘制标尺。","执行单词相关的导航或操作时作为单词分隔符的字符。","一个制表符等于的空格数。在 `#editor.detectIndentation#` 启用时，根据文件内容，该设置可能会被覆盖。","按 `Tab` 键时插入空格。该设置在 `#editor.detectIndentation#` 启用时根据文件内容可能会被覆盖。","控制是否在打开文件时，基于文件内容自动检测 `#editor.tabSize#` 和 `#editor.insertSpaces#`。","控制选区是否有圆角。","控制编辑器是否可以滚动到最后一行之后。","控制编辑器水平滚动时可以超过范围的字符数。","控制编辑器是否在滚动时使用动画。","控制是否显示缩略图。","控制在哪一侧显示缩略图。","控制是否自动隐藏缩略图滑块。","渲染每行的实际字符，而不是色块。","限制缩略图的宽度，控制其最多显示的列数。","控制是否显示悬停提示。","控制显示悬停提示前的等待时间 (毫秒)。","控制当鼠标移动到悬停提示上时，其是否保持可见。","控制是否将编辑器选中内容作为搜索词填入到查找小组件中。","在执行查找操作时，在编辑器中的选中文本中还是整个文件中进行查找。","控制“查找”小组件是否读取或修改 macOS 的共享查找剪贴板。",'控制 "查找小部件" 是否应在编辑器顶部添加额外的行。如果为 true, 则可以在 "查找小工具" 可见时滚动到第一行之外。',"永不换行。","将在视区宽度处换行。","在 `#editor.wordWrapColumn#` 处折行。","在视区宽度和 `#editor.wordWrapColumn#` 中的较小值处折行。","控制折行的方式。","在 `#editor.wordWrap#` 为 `wordWrapColumn`  或 `bounded` 时，控制编辑器的折行列。","没有缩进。折行从第 1 列开始。","折行的缩进量与其父级相同。","折行的缩进量比其父级多 1。","折行的缩进量比其父级多 2。","控制折行的缩进。","对鼠标滚轮滚动事件的 `deltaX` 和 `deltaY` 乘上的系数。",'按下 "Alt" 时滚动速度加倍。',"映射为 `Ctrl` (Windows 和 Linux) 或 `Command` (macOS)。","映射为 `Alt` (Windows 和 Linux) 或 `Option` (macOS)。","在通过鼠标添加多个光标时使用的修改键。“转到定义”和“打开链接”功能所需的鼠标动作将会相应调整，不与多光标修改键冲突。[阅读详细信息](https://code.visualstudio.com/docs/editor/codebasics#_multicursor-modifier)。","当多个光标重叠时进行合并。","在字符串内启用快速建议。","在注释内启用快速建议。","在字符串和注释外启用快速建议。","控制是否在键入时自动显示建议。","控制显示快速建议前的等待时间 (毫秒)。","在输入时显示含有参数文档和类型信息的小面板。","控制参数提示菜单在到达列表末尾时进行循环还是关闭。","使用语言配置确定何时自动闭合括号。","仅当光标位于空白字符左侧时，才自动闭合括号。","控制编辑器是否在左括号后自动插入右括号。","使用语言配置确定何时自动闭合引号。","仅当光标位于空白字符左侧时，才自动闭合引号。","控制编辑器是否在左引号后自动插入右引号。","使用语言配置确定何时自动包住所选内容。","使用括号而非引号来包住所选内容。","使用引号而非括号来包住所选内容。","控制编辑器是否应自动包住所选内容。","控制编辑器在键入一行后是否自动格式化该行。","控制编辑器是否自动格式化粘贴的内容。格式化程序必须可用，并且能针对文档中的某一范围进行格式化。","控制编辑器是否在用户键入、粘贴或移动行时自动调整缩进。必须安装包含此语言缩进规则的扩展。","控制在键入触发字符后是否自动显示建议。","仅当建议包含文本改动时才可使用 `Enter` 键进行接受。","控制除了 `Tab` 键以外， `Enter` 键是否同样可以接受建议。这能减少“插入新行”和“接受建议”命令之间的歧义。","控制是否应在遇到提交字符时接受建议。例如，在 JavaScript 中，半角分号 (`;`) 可以为提交字符，能够在接受建议的同时键入该字符。","在其他建议上方显示代码片段建议。","在其他建议下方显示代码片段建议。","在其他建议中穿插显示代码片段建议。","不显示代码片段建议。","控制代码片段是否与其他建议一起显示及其排列的位置。","控制在没有选择内容时进行复制是否复制当前行。","控制在复制时是否同时复制语法高亮。","控制是否根据文档中的文字计算自动完成列表。","始终选择第一个建议。","选择最近的建议，除非进一步键入选择其他项。例如 `console. -> console.log`，因为最近补全过 `log`。","根据之前补全过的建议的前缀来进行选择。例如，`co -> console`、`con -> const`。","控制在建议列表中如何预先选择建议。","建议小部件的字号。如果设置为 `0`，则使用 `#editor.fontSize#` 的值。","建议小部件的行高。如果设置为 `0`，则使用 `#editor.lineHeight#` 的值。","在按下 Tab 键时进行 Tab 补全，将插入最佳匹配建议。","禁用 Tab 补全。",'在前缀匹配时进行 Tab 补全。在 "quickSuggestions" 未启用时体验最好。',"启用 Tab 补全。","控制对建议的筛选和排序是否考虑小的拼写错误。","控制排序时是否提高靠近光标的词语的优先级。","控制是否在多个工作区和窗口间共享记忆的建议选项(需要 `#editor.suggestSelection#`)。","控制在活动代码片段内是否禁用快速建议。","控制是否在建议中显示或隐藏图标。","控制在显示滚动条之前智能感知将显示的建议数 (最多 15个)。","控制是否应从智能感知中筛选某些建议类型。建议类型的列表可以在这里找到: https://code.visualstudio.com/docs/editor/intellisense#_types-of-completions。","当设置为 `false` 时，IntelliSense 将不会显示 `method`(方法)的建议。","当设置为 `false` 时，IntelliSense 将不会显示 `function`(函数)的建议。","当设置为 `false` 时，IntelliSense 将不会显示 `constructor`(构造函数)的建议。","当设置为 `false` 时，IntelliSense 将不会显示 `field`(字段)的建议。","当设置为 `false` 时，IntelliSense 将不会显示 `variable`(变量)的建议。","当设置为 `false` 时，IntelliSense 将不会显示 `class`(类)的建议。","当设置为 `false` 时，IntelliSense 将不会显示 `struct`(结构)的建议。","当设置为 `false` 时，IntelliSense 将不会显示 `interface`(接口)的建议。","当设置为 `false` 时，IntelliSense 将不会显示 `module`(模块)的建议。","当设置为 `false` 时，IntelliSense 将不会显示 `property`(属性)的建议。","当设置为 `false` 时，IntelliSense 将不会显示 `event`(事件)的建议。",'当设置为 "false" 时，智能感知将不会显示 "operator" 的建议。',"当设置为 `false` 时，IntelliSense 将不会显示 `unit`(单位)的建议。","当设置为 `false` 时，IntelliSense 将不会显示 `value`(值)的建议。","当设置为 `false` 时，IntelliSense 将不会显示 `constant`(常量)的建议。","当设置为 `false` 时，IntelliSense 将不会显示 `enum`(枚举)的建议。","当设置为 `false` 时，IntelliSense 将不会显示 `enumMember`(枚举成员)的建议。","当设置为 `false` 时，IntelliSense 将不会显示 `keyword`(关键字)的建议。","当设置为 `false` 时，IntelliSense 将不会显示 `text`(文本)的建议。","当设置为 `false` 时，IntelliSense 将不会显示 `color`(颜色)的建议。","当设置为 `false` 时，IntelliSense 将不会显示 `file`(文件)的建议。",'当设置为 "false" 时，智能感知将不会显示 "reference" 的建议。',"当设置为 `false` 时，IntelliSense 将不会显示 `customcolor`(自定义颜色)的建议。","当设置为 `false` 时，IntelliSense 将不会显示 `folder`(文件夹)的建议。",'当设置为 "false" 时，智能感知将不会显示 "typeParameter" 的建议。',"当设置为 `false` 时，IntelliSense 将不会显示 `snippet`(代码片段)的建议。",'当存在多个目标位置时, 控制 "Go To" 命令 (如 "Go To Definition") 的行为。',"显示结果的预览视图 (默认值)","转到主结果并显示预览视图","转到主要结果并忽略其他结果","控制编辑器是否应突出显示与所选内容类似的匹配项。","控制编辑器是否突出显示语义符号的匹配项。","控制概览标尺中同一位置可显示的提示数量。","控制是否在概览标尺周围绘制边框。","控制光标的动画样式。","按住 `Ctrl` 键并滚动鼠标滚轮时对编辑器字体大小进行缩放。","控制是否启用平滑插入动画。","控制光标样式。","当 `#editor.cursorStyle#` 设置为 `line` 时，控制光标的宽度。","启用或禁用字体连字。","控制是否在概览标尺中隐藏光标。","除了单个空格，在空白字符上显示符号。","控制编辑器在空白字符上显示符号的方式。","控制编辑器是否显示控制字符。","控制编辑器是否显示缩进参考线。","控制是否突出显示编辑器中活动的缩进参考线。","同时突出显示导航线和当前行。","控制编辑器的当前行进行高亮显示的方式。","控制是否在编辑器中显示 CodeLens。","控制编辑器是否启用了代码折叠。","控制计算折叠范围的策略。`auto` 将使用语言特定的折叠策略 (若可用)。`indentation` 将使用基于缩进的折叠策略。","控制是否自动隐藏导航线上的折叠控件。","当选择其中一项时，将突出显示匹配的括号。","控制编辑器是否应呈现垂直字形边距。字形边距最常用于调试。","根据制表位插入和删除空格。","删除自动插入的尾随空白符号。","在速览编辑器中，即使双击其中的内容或者按 `Esc` 键，也保持其打开状态。","控制在编辑器中是否允许通过拖放来移动选中内容。","编辑器将使用平台 API 以检测是否附加了屏幕阅读器。","编辑器将对屏幕阅读器的使用进行永久优化。","编辑器将不再对屏幕阅读器的使用进行优化。","控制编辑器是否应运行在对屏幕阅读器进行优化的模式。","控制是否淡化未使用的代码。","控制是否在编辑器中检测链接并使其可被点击。","控制编辑器是否显示内联颜色修饰器和颜色选取器。","在编辑器中启用代码操作小灯泡提示。","由于性能原因，超过这个长度的行将不会被标记","控制是否在文件保存时整理 import 语句。","控制是否应在文件保存时运行自动修复操作。","在保存时运行的代码操作类型。","控制在保存文件时进行的代码操作的超时时间 (毫秒)。","控制是否支持 Linux 主剪贴板。","控制差异编辑器的显示方式是并排还是内联。","控制在差异编辑器中是否把前导空格或尾随空格的改动显示为差异。","对大型文件进行特殊处理，禁用某些内存密集型功能。","控制差异编辑器是否为添加/删除的更改显示 +/- 指示符号。"],
"vs/editor/common/config/editorOptions":["现在无法访问编辑器。按 Alt+F1  显示选项。","编辑器内容"],"vs/editor/common/modes/modesRegistry":["纯文本"],
"vs/editor/common/standaloneStrings":["无选择","行 {0}, 列 {1} (选中 {2})","行 {0}, 列 {1}","{0} 选择(已选择 {1} 个字符)","{0} 选择",'现在将 "辅助功能支持" 设置更改为 "打开"。',"现在正在打开“编辑器辅助功能”文档页。","在差异编辑器的只读窗格中。","在一个差异编辑器的窗格中。","在只读代码编辑器中","在代码编辑器中","若要配置编辑器，将其进行优化以最好地配合屏幕阅读器的使用，请立即按 Command+E。","若要配置编辑器，将其进行优化以最高效地配合屏幕阅读器的使用，按下 Control+E。","The editor is configured to be optimized for usage with a Screen Reader.","The editor is configured to never be optimized for usage with a Screen Reader, which is not the case at this time.","在当前编辑器中按 Tab 会将焦点移动到下一个可聚焦的元素。通过按 {0} 切换此行为。","在当前编辑器中按 Tab 会将焦点移动到下一个可聚焦的元素。当前无法通过按键绑定触发命令 {0}。","在当前编辑器中按 Tab 将插入制表符。通过按 {0} 切换此行为。","在当前编辑器中按 Tab 会插入制表符。当前无法通过键绑定触发命令 {0}。","现在按 Command+H 打开一个浏览器窗口, 其中包含有关编辑器辅助功能的详细信息。",'现在按 "控制" + H 打开一个浏览器窗口, 其中包含有关编辑器辅助功能的更多信息。',"你可以按 Esc 或 Shift+Esc 消除此工具提示并返回到编辑器。","显示辅助功能帮助","开发人员: 检查令牌","转到第 {0} 行，第 {1} 列","转至行 {0}","键入要导航到的介于 1 和 {0} 之间的行号","键入 1 和 {0} 之间的字符以导航到","当前行: {0}. 转到行 {1}。","键入行号, 后跟可选冒号和要导航到的字符数","转到行...","{0}、{1} ，命令","{0}，命令","键入要执行的操作的名称","命令面板","{0}，符号","键入要导航到的标识符的名称","转到符号...","符号({0})","模块({0})","类({0})","接口({0})","方法({0})","函数({0})","属性 ({0})","变量({0})","变量({0})","构造函数 ({0})","调用 ({0})","编辑器内容","按 Ctrl+F1 可打开辅助功能选项。","按 Alt+F1 可打开辅助功能选项。","切换高对比度主题","在 {1} 个文件中进行了 {0} 次编辑"],
"vs/editor/common/view/editorColorRegistry":["光标所在行高亮内容的背景颜色。","光标所在行四周边框的背景颜色。","背景颜色的高亮范围，喜欢通过快速打开和查找功能。颜色不能不透明，以免隐藏底层装饰。","高亮区域边框的背景颜色。","编辑器光标颜色。","编辑器光标的背景色。可以自定义块型光标覆盖字符的颜色。","编辑器中空白字符的颜色。","编辑器缩进参考线的颜色。","编辑器活动缩进参考线的颜色。","编辑器行号的颜色。","编辑器活动行号的颜色",'"Id" 已被弃用，请改用 "editorLineNumber.activeForeground"。',"编辑器活动行号的颜色","编辑器标尺的颜色。","编辑器 CodeLens 的前景色","匹配括号的背景色","匹配括号外框的颜色","概览标尺边框的颜色。","编辑器导航线的背景色。导航线包括边缘符号和行号。","编辑器中错误波浪线的前景色。","编辑器中错误波浪线的边框颜色。","编辑器中警告波浪线的前景色。","编辑器中警告波浪线的边框颜色。","编辑器中信息波浪线的前景色。","编辑器中信息波浪线的边框颜色。","编辑器中提示波浪线的前景色。","编辑器中提示波浪线的边框颜色。","编辑器中不必要(未使用)的源代码的边框颜色。",'非必须（未使用）代码的在编辑器中显示的不透明度。例如，"#000000c0" 将以 75% 的不透明度显示代码。对于高对比度主题，请使用 ”editorUnnecessaryCode.border“ 主题来为非必须代码添加下划线，以避免颜色淡化。',"概览标尺中错误标记的颜色。","概览标尺中警告标记的颜色。","概览标尺中信息标记的颜色。"],"vs/editor/contrib/bracketMatching/bracketMatching":["概览标尺上表示匹配括号的标记颜色。","转到括号","选择括号所有内容","转到括号(&&B)"],"vs/editor/contrib/caretOperations/caretOperations":["将插入点左移","将插入点右移"],"vs/editor/contrib/caretOperations/transpose":["转置字母"],
"vs/editor/contrib/clipboard/clipboard":["剪切","剪切(&&T)","复制","复制(&&C)","粘贴","粘贴(&&P)","复制并突出显示语法"],"vs/editor/contrib/codeAction/codeActionCommands":["显示修补程序({0})","显示修补程序","快速修复...","没有可用的代码操作","没有可用的代码操作","重构...","没有可用的重构操作","源代码操作...","没有可用的源代码操作","整理 import 语句","没有可用的整理 import 语句操作","全部修复","没有可用的“全部修复”操作","自动修复...","没有可用的自动修复程序"],"vs/editor/contrib/comment/comment":["切换行注释","切换行注释(&&T)","添加行注释","删除行注释","切换块注释","切换块注释(&&B)"],"vs/editor/contrib/contextmenu/contextmenu":["显示编辑器上下文菜单"],"vs/editor/contrib/cursorUndo/cursorUndo":["软撤消"],"vs/editor/contrib/find/findController":["查找","查找(&&F)","查找选定内容","查找下一个","查找上一个","查找下一个选择","查找上一个选择","替换","替换(&&R)"],"vs/editor/contrib/find/findWidget":["查找","查找","上一个匹配项","下一个匹配项","在选定内容中查找","关闭","替换","替换","替换","全部替换","切换替换模式","仅高亮了前 {0} 个结果，但所有查找操作均针对全文。","{1} 中的 {0}","无结果"],"vs/editor/contrib/folding/folding":["展开","以递归方式展开","折叠","以递归方式折叠","折叠所有块注释","折叠所有区域","展开所有区域","全部折叠","全部展开","折叠级别 {0}"],"vs/editor/contrib/fontZoom/fontZoom":["放大编辑器字体","缩小编辑器字体","重置编辑器字体大小"],
"vs/editor/contrib/format/format":["在第 {0} 行进行了 1 次格式编辑","在第 {1} 行进行了 {0} 次格式编辑","第 {0} 行到第 {1} 行间进行了 1 次格式编辑","第 {1} 行到第 {2} 行间进行了 {0} 次格式编辑"],"vs/editor/contrib/format/formatActions":["格式化文档","格式化选定内容"],"vs/editor/contrib/goToDefinition/goToDefinitionCommands":["未找到“{0}”的任何定义","找不到定义"," – {0} 定义","转到定义","打开侧边的定义","查看定义","未找到“{0}”的声明","未找到声明","– {0} 声明","转到声明","未找到“{0}”的声明","未找到声明","– {0} 声明","查看声明","未找到“{0}”的实现","未找到实现","– {0} 个实现","转到实现","速览实现","未找到“{0}”的类型定义","未找到类型定义"," – {0} 个类型定义","转到类型定义","快速查看类型定义","转到定义(&&D)...","转到类型定义(&&T)","转到实现(&&I)"],"vs/editor/contrib/goToDefinition/goToDefinitionMouse":["单击显示 {0} 个定义。"],"vs/editor/contrib/gotoError/gotoError":["转到下一个问题 (错误、警告、信息)","转到上一个问题 (错误、警告、信息)","转到文件中的下一个问题 (错误、警告、信息)","转到文件中的上一个问题 (错误、警告、信息)","下一个问题(&&P)","上一个问题(&&P)"],"vs/editor/contrib/gotoError/gotoErrorWidget":["{0} 个问题(共 {1} 个)","{0} 个问题(共 {1} 个})","编辑器标记导航小组件错误颜色。","编辑器标记导航小组件警告颜色。","编辑器标记导航小组件信息颜色。","编辑器标记导航小组件背景色。"],"vs/editor/contrib/hover/hover":["显示悬停"],
"vs/editor/contrib/hover/modesContentHover":["正在加载...","快速修复...","速览问题","没有可用的代码操作"],"vs/editor/contrib/inPlaceReplace/inPlaceReplace":["替换为上一个值","替换为下一个值"],"vs/editor/contrib/linesOperations/linesOperations":["向上复制行","向上复制行(&&C)","向下复制行","向下复制一行(&&P)","向上移动行","向上移动一行(&&V)","向下移动行","向下移动一行(&&L)","按升序排列行","按降序排列行","裁剪尾随空格","删除行","行缩进","行减少缩进","在上面插入行","在下面插入行","删除左侧所有内容","删除右侧所有内容","合并行","转置光标处的字符","转换为大写","转换为小写","Transform to Title Case"],"vs/editor/contrib/links/links":["按住 Cmd 并单击可访问链接","按住 Ctrl 并单击可访问链接","按住 Cmd 并单击可执行命令","按住 Ctrl 并单击可执行命令","按住 Option 并单击可访问链接","按住 Alt 并单击可访问链接","按住 Option 并单击可执行命令","按住 Alt 并单击可执行命令","此链接格式不正确，无法打开: {0}","此链接目标已丢失，无法打开。","打开链接"],"vs/editor/contrib/message/messageController":["无法在只读编辑器中编辑"],"vs/editor/contrib/multicursor/multicursor":["在上面添加光标","在上面添加光标(&&A)","在下面添加光标","在下面添加光标(&&D)","在行尾添加光标","在行尾添加光标(&&U)","在底部添加光标","在顶部添加光标","将下一个查找匹配项添加到选择","添加下一个匹配项(&&N)","将选择内容添加到上一查找匹配项","添加上一个匹配项(&&R)","将上次选择移动到下一个查找匹配项","将上个选择内容移动到上一查找匹配项","选择所有找到的查找匹配项","选择所有匹配项(&&O)","更改所有匹配项"],
"vs/editor/contrib/parameterHints/parameterHints":["触发参数提示"],"vs/editor/contrib/parameterHints/parameterHintsWidget":["{0}，提示"],"vs/editor/contrib/referenceSearch/peekViewWidget":["关闭"],"vs/editor/contrib/referenceSearch/referenceSearch":[" – {0} 个引用","查看引用"],"vs/editor/contrib/referenceSearch/referencesController":["正在加载..."],"vs/editor/contrib/referenceSearch/referencesModel":["在文件 {0} 的 {1} 行 {2} 列的符号","{0} 中有 1 个符号，完整路径: {1}","{1} 中有 {0} 个符号，完整路径: {2}","未找到结果","在 {0} 中找到 1 个符号","在 {1} 中找到 {0} 个符号","在 {1} 个文件中找到 {0} 个符号"],"vs/editor/contrib/referenceSearch/referencesTree":["解析文件失败。","{0} 个引用","{0} 个引用"],"vs/editor/contrib/referenceSearch/referencesWidget":["无可用预览","引用","无结果","引用","速览视图标题区域背景颜色。","速览视图标题颜色。","速览视图标题信息颜色。","速览视图边框和箭头颜色。","速览视图结果列表背景色。","速览视图结果列表中行节点的前景色。","速览视图结果列表中文件节点的前景色。","速览视图结果列表中所选条目的背景色。","速览视图结果列表中所选条目的前景色。","速览视图编辑器背景色。","速览视图编辑器中装订线的背景色。","在速览视图结果列表中匹配突出显示颜色。","在速览视图编辑器中匹配突出显示颜色。","在速览视图编辑器中匹配项的突出显示边框。"],
"vs/editor/contrib/rename/rename":["无结果。","解析重命名位置时发生未知错误","成功将“{0}”重命名为“{1}”。摘要: {2}","无法进行重命名。","重命名符号"],"vs/editor/contrib/rename/renameInputField":['重命名输入。键入新名称并按 "Enter" 提交。'],"vs/editor/contrib/smartSelect/smartSelect":["展开选择","展开选定内容(&&E)","收起选择","缩小选定范围(&&S)"],"vs/editor/contrib/snippet/snippetVariables":["星期天","星期一","星期二","星期三","星期四","星期五","星期六","周日","周一","周二","周三","周四","周五","周六","一月","二月","三月","四月","5月","六月","七月","八月","九月","十月","十一月","十二月","1月","2月","三月","4月","5月","6月","七月","八月","九月","10月","11 月","12月"],"vs/editor/contrib/suggest/suggestController":["选择“{0}”后进行了其他 {1} 次编辑","触发建议"],"vs/editor/contrib/suggest/suggestWidget":["建议小组件的背景色。","建议小组件的边框颜色。","建议小组件的前景色。","建议小组件中所选条目的背景色。","建议小组件中匹配内容的高亮颜色。","阅读更多...{0}","阅读简略信息...{0}","正在加载...","无建议。","项目 {0}，文档: {1}"],"vs/editor/contrib/toggleTabFocusMode/toggleTabFocusMode":["切换 Tab 键移动焦点","Tab 键将移动到下一可聚焦的元素","Tab 键将插入制表符"],"vs/editor/contrib/tokenization/tokenization":["开发者: 强制重新进行标记"],
"vs/editor/contrib/wordHighlighter/wordHighlighter":["读取访问期间符号的背景色，例如读取变量时。颜色必须透明，以免隐藏下面的修饰效果。","写入访问过程中符号的背景色，例如写入变量时。颜色必须透明，以免隐藏下面的修饰效果。","符号在进行读取访问操作时的边框颜色，例如读取变量。","符号在进行写入访问操作时的边框颜色，例如写入变量。","用于突出显示符号的概述标尺标记颜色。颜色必须透明，以免隐藏下面的修饰效果。","用于突出显示写权限符号的概述标尺标记颜色。颜色必须透明，以免隐藏下面的修饰效果。","转到下一个突出显示的符号","转到上一个突出显示的符号","触发符号高亮"],"vs/platform/configuration/common/configurationRegistry":["默认配置替代","针对某种语言，配置替代编辑器设置。",'无法注册“{0}”。其符合描述特定语言编辑器设置的表达式 "\\\\[.*\\\\]$"。请使用 "configurationDefaults"。',"无法注册“{0}”。此属性已注册。"],"vs/platform/keybinding/common/abstractKeybindingService":["已按下({0})。正在等待同时按下第二个键...","组合键({0}, {1})不是命令。"],
"vs/platform/list/browser/listService":["工作台","映射为 `Ctrl` (Windows 和 Linux) 或 `Command` (macOS)。","映射为 `Alt` (Windows 和 Linux) 或 `Option` (macOS)。","在通过鼠标多选树和列表条目时使用的修改键 (例如“资源管理器”、“打开的编辑器”和“源代码管理”视图)。“在侧边打开”功能所需的鼠标动作 (若可用) 将会相应调整，不与多选修改键冲突。","控制在树和列表中怎样使用鼠标来展开子项（若支持）。对于树中的父节点，此设置将控制是使用单击还是双击来展开。注意，某些不适用于此设置的树或列表可能会忽略此项。","控制列表和树是否支持在工作台中进行水平滚动。","控制工作台中的树控件是否支持水平滚动。",'此设置已弃用, 请改用 "{0}"。',"控制树缩进(以像素为单位)。","简单键盘导航聚焦与键盘输入相匹配的元素。仅对前缀进行匹配。","高亮键盘导航会突出显示与键盘输入相匹配的元素。进一步向上和向下导航将仅遍历突出显示的元素。","筛选器键盘导航将筛选出并隐藏与键盘输入不匹配的所有元素。","控制工作台中的列表和树的键盘导航样式。它可为“简单”、“突出显示”或“筛选”。","控制列表和树中的键盘导航是否仅通过键入自动触发。如果设置为“false”，键盘导航只在执行“list.toggleKeyboardNavigation ”命令时触发，您可以为该命令指定键盘快捷方式。"],"vs/platform/markers/common/markers":["错误","警告","信息"],
"vs/platform/theme/common/colorRegistry":["整体前景色。此颜色仅在不被组件覆盖时适用。","错误信息的整体前景色。此颜色仅在不被组件覆盖时适用。","焦点元素的整体边框颜色。此颜色仅在不被其他组件覆盖时适用。","在元素周围额外的一层边框，用来提高对比度从而区别其他元素。","在活动元素周围额外的一层边框，用来提高对比度从而区别其他元素。","文本中链接的前景色。","文本中代码块的背景颜色。","编辑器内小组件（如查找/替换）的阴影颜色。","输入框背景色。","输入框前景色。","输入框边框。","输入字段中已激活选项的边框颜色。","输入验证结果为信息级别时的背景色。","输入验证结果为信息级别时的前景色。","严重性为信息时输入验证的边框颜色。","严重性为警告时输入验证的背景色。","输入验证结果为警告级别时的前景色。","严重性为警告时输入验证的边框颜色。","输入验证结果为错误级别时的背景色。","输入验证结果为错误级别时的前景色。","严重性为错误时输入验证的边框颜色。","下拉列表背景色。","下拉列表前景色。","焦点项在列表或树活动时的背景颜色。活动的列表或树具有键盘焦点，非活动的没有。","焦点项在列表或树活动时的背景颜色。活动的列表或树具有键盘焦点，非活动的没有。","已选项在列表或树活动时的背景颜色。活动的列表或树具有键盘焦点，非活动的没有。","已选项在列表或树活动时的前景颜色。活动的列表或树具有键盘焦点，非活动的没有。","已选项在列表或树非活动时的背景颜色。活动的列表或树具有键盘焦点，非活动的没有。","已选项在列表或树非活动时的前景颜色。活动的列表或树具有键盘焦点，非活动的没有。","非活动的列表或树控件中焦点项的背景颜色。活动的列表或树具有键盘焦点，非活动的没有。","使用鼠标移动项目时，列表或树的背景颜色。","鼠标在项目上悬停时，列表或树的前景颜色。","使用鼠标移动项目时，列表或树进行拖放的背景颜色。","在列表或树中搜索时，其中匹配内容的高亮颜色。","列表和树中类型筛选器小组件的背景色。","列表和树中类型筛选器小组件的轮廓颜色。","当没有匹配项时，列表和树中类型筛选器小组件的轮廓颜色。","快速选取器分组标签的颜色。","快速选取器分组边框的颜色。","Badge 背景色。Badge 是小型的信息标签，如表示搜索结果数量的标签。","Badge 前景色。Badge 是小型的信息标签，如表示搜索结果数量的标签。","表示视图被滚动的滚动条阴影。","滚动条滑块背景色","滚动条滑块在悬停时的背景色","滚动条滑块在被点击时的背景色。","表示长时间操作的进度条的背景色。","菜单的边框颜色。","菜单项的前景颜色。","菜单项的背景颜色。","菜单中选定菜单项的前景色。","菜单中所选菜单项的背景色。","菜单中所选菜单项的边框颜色。","菜单中分隔线的颜色。","编辑器背景色。","编辑器默认前景色。","编辑器组件(如查找/替换)背景颜色。","编辑器小部件的边框颜色。此颜色仅在小部件有边框且不被小部件重写时适用。","编辑器小部件大小调整条的边框颜色。此颜色仅在小部件有调整边框且不被小部件颜色覆盖时使用。","编辑器所选内容的颜色。","用以彰显高对比度的所选文本的颜色。","非活动编辑器中所选内容的颜色，颜色必须透明，以免隐藏下面的装饰效果。","具有与所选项相关内容的区域的颜色。颜色必须透明，以免隐藏下面的修饰效果。","与所选项内容相同的区域的边框颜色。","当前搜索匹配项的颜色。","其他搜索匹配项的颜色。颜色必须透明，以免隐藏下面的修饰效果。","限制搜索范围的颜色。颜色不能不透明，以免隐藏底层装饰。","当前搜索匹配项的边框颜色。","其他搜索匹配项的边框颜色。","限制搜索的范围的边框颜色。颜色必须透明，以免隐藏下面的修饰效果。","在下面突出显示悬停的字词。颜色必须透明，以免隐藏下面的修饰效果。","编辑器悬停提示的背景颜色。","光标悬停时编辑器的边框颜色。","编辑器悬停状态栏的背景色。","活动链接颜色。","已插入的文本的背景色。颜色必须透明，以免隐藏下面的修饰效果。","已删除的文本的背景色。颜色必须透明，以免隐藏下面的修饰效果。","插入的文本的轮廓颜色。","被删除文本的轮廓颜色。","两个文本编辑器之间的边框颜色。","代码片段 Tab 位的高亮背景色。","代码片段 Tab 位的高亮边框颜色。","代码片段中最后的 Tab 位的高亮背景色。","代码片段中最后的 Tab 位的高亮边框颜色。","用于查找匹配项的概述标尺标记颜色。颜色必须透明，以免隐藏下面的修饰效果。","用于突出显示所选内容的概述标尺标记颜色。颜色必须透明，以免隐藏下面的修饰效果。"]
});
//# sourceMappingURL=https://bce.bdstatic.com/fex/amis-gh-pagesnull.map