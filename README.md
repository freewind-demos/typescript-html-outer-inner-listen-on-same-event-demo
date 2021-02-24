TypeScript HTML Outer Inner Listen On Same Event Demo
=================================

如果在某个inner element上触发了某个事件，outer element也可以监听到。

由于历史原因，不同的浏览器对于outer还是inner先捕获，有不同的选择。 在w3c的标准中，为了照顾不同的浏览器，事件会从外到内（叫“捕获”阶段）、再从内到外（叫“冒泡”阶段）都走一遍。

在`addEventListener`中，可以在第3个参数中设置，是在什么时机捕获。默认情况下，是在“冒泡”阶段，所以会看到先inner后outer。 如果把第3个参数设为`true`，则是先parent，后inner

```
npm i
npm run demo
```
