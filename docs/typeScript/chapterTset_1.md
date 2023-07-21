# 章节测试

至此，我们已经学习了 TS 中比较基础的一部分，是时候检测一下学习成果了，需求如下：

- 定义一个函数，用于获取后端返回的数据
- 将后端返回的数据存入定义的变量中
- 不允许使用 any 类型
- 接口返回数据如下

```json
{
  "pageNum": 1,
  "pageSize": 10,
  "total": 1,
  "root": [
    {
      "orgNo": "000000000001",
      "orgName": "某某有限公司",
      "id": "8a8879f5447ae3b301449ade6eef0011",
      "creator": "tangs",
      "state": 0
    }
  ]
}
```

如果你完成了，可以前往 http://xiets.gitee.io/json-to-any-web/ 验证定义的接口是否正确

下面是我写的，选中就可以看到代码了

<pre style="color:white">
interface IResult {
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
  fetch("http://127.0.0.1:3000/getData")
    .then(res => res.json())
    .then(res => {
      resData = res
    })
}

getData()

</pre>

## 总结

上面也只是完成了一个基础的接口类型定义，熟悉 JS 的都知道，我们在进行异步操作的时候，通常会使用 Promise 或者 async await 等等来封装函数，以便让程序运行更加可靠，您也可以思考一下如何将异步融入 TS
