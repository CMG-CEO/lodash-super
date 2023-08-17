# lodash-super
这是一个 `lodash` 加强版的工具库,

`lodash` 只提供了最基础的一些工具方法，当我们在业务上使用时，往往需要对其进行再次封装，比较*麻烦*。

所以，提供了一个在 业务场景中 **更加** 通用的工具库。

希望对你有所帮助！

## 安装
`npm install lodash-super`
或 `yarn add lodash-super` 

## 函数说明

### `_S.array2obj(array, key = "key", value = "value")`
将 对象数组（由对象组成的数组） 转换成 对象
#### 适用于标签列表，前端是标签数组，而后端需要标签对象 
#### 例子
```js
const obj = _S.array2obj([{key:'label1',value:1},{key:'label2',value:2}])
// => {label1:1,label2:2} 
const obj1 = _S.array2obj([{name:'label1',id:1},{name:'label2',id:2}],'name','id')
// => {label1:1,label2:2} 
```

### `_S.obj2array(obj, key = "key", value = "value")`
将 对象  转换成 对象数组（由对象组成的数组） 
#### 与 _S.array2obj() 相反 
(Array): 返回生成的新数组。
#### 例子
```js
const obj = _S.obj2array({label1:1,label2:2})
// =>  [{key:'label1',value:1},{key:'label2',value:2}]
const obj1 = _S.obj2array({label1:1,label2:2} ,'name','id')
// =>  [{name:'label1',id:1},{name:'label2',id:2}]
```

### `_S.filterBy(array, key='id', value, name='name')`
取出 对象数组 中满足的条件的那一项项 的指定的值
#### 简化 filter 的取值
#### 例子
```js
const obj = _S.filterBy([{id:1,name:'1'},{id:2,name:'2'}], 'id', 1, 'name')
// =>  '1'
```

### `_S.formatUnit(fileSize,type = "B",toFixedNumber = 2,numberSize = 1024)`
对数值 进行进位 转换
#### 1024B 进制转化成 1KB 1048576KB 进制转换成 1GB ，最大支持到 P
#### 例子
```js
const field = _S.formatUnit(1048576)
// =>  {size:1.00,unit'M'}
const field2 = _S.formatUnit(1048576,'KB')
// =>  {size:1.00,unit'G'}
const field3 = _S.formatUnit(1000000,'KB',2,1000)
// =>  按1000进位 {size:1.00,unit'G'}
```

### `_S.formatUnit(fileSize, type = "B", toFixedNumber = 2 ,numberSize = 1024)`
对数值进行显示简化
#### 1024B 简化成 1K 1048576KB 简化成 1G ，最大支持到 P
#### 例子
```js
const field = _S.formatUnit(1048576)
// =>  {size:1,unit:'M'}
const field2 = _S.formatUnit(1048576,'KB')
// =>  {size:1,unit:'G'}
const field3 = _S.formatUnit(1000000,'KB',2,1000)
// =>  按1000进位 {size:1,unit'G'}
```

### `_S.formatUnitChange(fileSize, type1 = "B",  type2 = "K", toFixedNumber = 3, numberSize = 1024)`
对数值 进行进位 转换
#### 1024B 进制转换成 1K 1G 进制转换成 1048576K ，最大支持到 P
#### 例子
```js
const field = _S.formatUnitChange(2000)
// =>  1.953
const field2 = _S.formatUnitChange(2,'KB','B')
// =>  2048
```

### `_S.formatUnitT(fileSize, type = "ms", toFixedNumber = 3 )`
对时间进行显示简化
#### 1000 简化成 1s  ，最大支持到 年
#### 例子
```js
const field = _S.formatUnitT(1000)
// =>  {size:1,unit:'s'}
const field2 = _S.formatUnitT(60,'s')
// =>  {size:1,unit:'m'} 
```

### `_S.formatUnitChangeT(fileSize, type1 = "ms",  type2 = "s", toFixedNumber = 3)`
对时间 进行进位 转换
#### 1000ms 转换成 1s 1m 转换成 60s ，最大支持到 年
#### 例子
```js
const field = _S.formatUnitChangeT(2000)
// =>  2
const field2 = _S.formatUnitChangeT(2,'m','s')
// =>  120
```

### `_S.randomStr(n = 5, low = 97, low = 122)`
随机生成指定位数和范围的字符串
> 遵循 https://asecuritysite.com/coding/asc2
#### 例子
```js
const field = _S.randomStr()
// =>  efcww
```


### `_S.repeatKey(array, key = "name")`
判断 对象数组内是否有相同key 的value 值
#### 例子
```js
const flag = repeatKey([{ name: 1,} { name: 1 }])
// =>  true
const flag = repeatKey([{ name1: { name: 1 } }, { name1: { name: 1 } }, { name1: '1' }], ['name1', 'name'])
// =>  true
```

### `_S.filterField(array, comparator)`
过滤出 对象数组内，满足 `comparator` 条件并为 `true` 的对象，同时也对对象内的 `children` 有效。

> 如果 `children`满足条件，则对应的父级也会被保留
> `comparator` 也接收一个字符串，对象拥有这个属性会被保留
#### 例子
```js
const field1 = filterField([{ name: 1,children:[{name:1}]} { name: 2 }],(obj) => obj.name ===1)
// =>  [{name:1,children:[{name:1}}]
const field2 = filterField([{ name: 2 }, { name:3,children:[{ name: 1 }]  }, (obj) => obj.name ===1])
// =>  [{name:3,children:[{name:1}}]
const field1 = filterField([{ name: 1} { name1: 2 }],'name')
// =>  [{name:1}]
```


### `_S.divmod(a, b)`

以两个整数为参数，在作整数除法时，返回商和余数。实现参照Python语言同名函数

> 目前仅支持`a`, `b`都是整数 (严格的`int`类型) 的情况
> `b` 不能为0

#### 例子
```js
const res1 = divmod(10, 4);
// =>  [2, 2]

const res2 = divmod(10, 5);
// =>  [2, 0]

const res3 = divmod(10, 100000);
// =>  [0, 10]
```