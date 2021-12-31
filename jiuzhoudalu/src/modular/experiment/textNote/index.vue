<template>
  <div class="biji" v-cloak>
    <div class="h_css">
      <h1 @click="type=true">笔记</h1>
      <div style=" width: 2vw;"></div>
      <h1 @click="type=false">自由笔记_新</h1>
    </div>
    <div v-show="!type">

      <div v-for="(item,index) in new_arr" :key="index" >
          <div v-if="item.type=='div'">
              <h2>{{item.name}}</h2>

              <div v-if="item.text.length" >
                    <p v-for="(text,ind) in item.text" :key="ind">{{text}}</p>
              </div>

              <div style="height: 3vh;"></div>
              
              <div v-if="item.children.length" class="children_css">
                
                    <div v-for="(c_item,c_ind) in item.children" :key="c_ind">

                      <h4 :class="{'cssRed':c_item.name.indexOf('*')>=0}">{{c_item.name}}</h4>

                      <div v-if="c_item.text.length" >
                            <p v-for="(c_text,ct_ind_) in c_item.text" :key="ct_ind_" v-html="c_text"></p>
                      </div>

                      <div v-if="c_item.type!=='a'|| c_item.type!=='img'">

                        <div v-for="(cc_item,cc_ind) in c_item.children" :key="cc_ind" v-html="cc_item" class="c_children_css">
                          
                        </div>

                      </div>
                      <div v-if="c_item.type=='a'">
                        <a :href="c_item.url_a"></a>
                      </div>
                      <div v-if="c_item.type=='img'">
                      <img :src="c_item.url_img" alt="">
                      </div>
                    </div>
              
              </div>
          
          </div>

        <div v-if="item.type=='a'">
          <a :href="item.url_a"></a>
        </div>
        <div v-if="item.type=='img'">
          <img :src="item.url_img" alt="">
        </div>


        <div style="height: 2vh;"></div>
        <hr style="border:1 dashed #987cb9" width="100%" color=#987cb9 SIZE=2>
        <div style="height: 1vh;"></div>
        
      </div>



    </div>

    <div v-for="(item,index) in  arr" :key="index" v-show="type">
      <h3 :style="{'cssRed':item.name.indexOf('*')>=0}">{{item.name}}</h3>
      <div v-html="item.text" style="font-size: 22px;">
      </div>
    </div>

    <div>
      <h1>实验数据</h1>
      {{si}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'textNote',

  data() {
    this.si="aaaaaaaa"
    // Object.freeze
    return {
      br:" <br /> ",
      type:false,

      new_arr:[
        {
          name:" ",
          type:" ",
          text:[ ],
          children:[
            {
              name:" ",
              type:" ",
              text:[ ],
              children:[]
            }
          ]
        },
        {
          name:"浏览器的本地存储",
          type:"div",
          text:[ 
            '本地存储主要分为Cookie、WebStorage和IndexedDB, 其中WebStorage又可以分为localStorage和sessionStorage。'
          ],
          children:[
            {
              name:"Cookie",
              type:"div",
              text:[ 
                'Cookie 最开始被设计出来其实并不是来做本地存储的，而是为了弥补HTTP在状态管理上的不足',
                'Cookie 的作用很好理解，就是用来做状态存储的',
                '容量缺陷。Cookie 的体积上限只有4KB，只能用来存储少量的信息',
                '性能缺陷。Cookie 紧跟域名，不管域名下面的某一个地址需不需要这个 Cookie ',
                '安全缺陷。由于 Cookie 以纯文本的形式在浏览器和服务器中传递，很容易被非法用户截获，',
              ],
              children:[]
            },
            {
              name:"localStorage",
              type:"div",
              text:[ 
                'localStorage有一点跟Cookie一样，就是针对一个域名，即在同一个域名下，会存储相同的一段',
                '容量。localStorage 的容量上限为5M，相比于Cookie的 4K 大大增加。当然这个 5M 是针对一个域名的，因此对于一个域名是持久存储的',
                '只存在客户端，默认不参与与服务端的通信。这样就很好地避免了 Cookie 带来的性能问题和安全问题',
                '接口封装。通过localStorage暴露在全局，并通过它的 setItem 和 getItem等方法进行操作，非常方便',
                '应用场景：利用localStorage的较大容量和持久特性，可以利用localStorage存储一些内容稳定的资源，比如官网的logo，存储Base64格式的图片资源，因此利用localStorage',
              ],
              children:[]
            },
            {
              name:"sessionStorage",
              type:"div",
              text:[ 
                `
                容量。容量上限也为 5M。`,
                `只存在客户端，默认不参与与服务端的通信。`,
                `接口封装。除了sessionStorage名字有所变化，存储方式、操作方式均和localStorage一样。`,
                `但sessionStorage和localStorage有一个本质的区别，那就是前者只是会话级别的存储，并不是持久化存储。会话结束，也就是页面关闭，这部分sessionStorage就不复存在了`,
                ``,
                ``,
                ``,
              ],
              children:[]
            },
            {
              name:"IndexedDB",
              type:"div",
              text:[ 
                `IndexedDB是运行在浏览器中的非关系型数据库, 本质上是数据库，绝不是和刚才WebStorage的 5M 一个量级，理论上这个容量是没有上限的`,
                `键值对存储。内部采用对象仓库存放数据，在这个对象仓库中数据采用键值对的方式来存储。`,
                `
                异步操作。数据库的读写属于 I/O 操作, 浏览器中对异步 I/O 提供了支持。
                `,
                `
                受同源策略限制，即无法访问跨域的数据库。
                `,
                ``,

              ],
              children:[]
            },
            {
              name:"总结",
              type:"div",
              text:[ 
                `cookie并不适合存储，而且存在非常多的缺陷`,
                `Web Storage包括localStorage和sessionStorage, 默认不会参与和服务器的通信`,
                `IndexedDB为运行在浏览器上的非关系型数据库，为大型数据的存储提供了接口`,
              ],
              children:[]
            },
          ]
        },
        {
          name:"URL到页面呈现发生了什么",
          type:"div",
          text:[ 
            '构建请求=>检查缓存 => 有缓存直接用缓存 => 没有解析DNS => 建立 TCP 连接三次握手四次挥手 => 发送请求'
          ],
          children:[
            {
              name:" ",
              type:" ",
              text:[ ],
              children:[]
            }
          ]
        },
        {
          name:"URL到页面呈现发生了什么 ",
          type:"div",
          text:[ 
            `  构建 DOM树 样式计算  生成布局树(Layout Tree)`,
          ],
          children:[
            {
              name:"",
              type:"div",
              text:[ ],
              children:[]
            },
            {
              name:"构建 DOM 树",
              type:"div",
              text:[ ],
              children:[]
            },
            {
              name:"",
              type:"div",
              text:[ ],
              children:[]
            },
            {
              name:"",
              type:"div",
              text:[ ],
              children:[]
            }
          ]
        },



      ],


      arr:[
        {
          name:"Vue 的优缺点",
          text:`
            优点
              创建单页面应用的轻量级Web应用框架
              简单易用
              双向数据绑定
              组件化的思想
              虚拟DOM
              数据驱动视图
            缺点
              不支持IE8（现阶段只能勉强凑出这么半点😂
          
          `
        },
        {
          name:"组件之间的传值方式",
          text:`
            父组件传值给子组件，子组件使用props进行接收。<br />
            子组件传值给父组件，子组件使用$emit+事件对父组件进行传值<br />
            组件中可以使用$parent和$children获取到父组件实例和子组件实例，进而获取数据<br />
            使用$attrs和$listeners，在对一些组件进行二次封装时可以方便传值，例如A->B->C <br />
            使用$refs获取组件实例，进而获取数据 <br />
            使用Vuex进行状态管理 <br />
            使用eventBus进行跨组件触发事件，进而传递数据 <br />
            使用provide和inject，官方建议我们不要用这个，我在看ElementUI源码时发现大量使用 <br />
            使用浏览器本地缓存，例如localStorage <br />
          `
        },
        {
          name:"v-on 修饰符",
          text:`
              .stop ==> 阻止冒泡。本质是调用 event.stopPropagation() <br />
              .prevent ==> 阻止默认事件行为 本质是调用 event.preventDefault() <br />
              .{keyCode | keyAlias } ==> 当事件是从特定键触发时才触发回调 <br />
              .once ==> 事件只触发一次 <br />
          `
        },
        {
          name:"路由模式 有何不同",
          text:`
            hash模式：通过#号后面的内容的更改，触发hashchange事件，实现路由切换 <br />
            history模式：通过pushState和replaceState切换url，触发popstate事件，实现路由切换，需要后端配合 <br />
          `
        },
        {
          name:"动态class，动态style",
          text:`动态class对象：<div :class="{ 'is-active': true, 'red': isRed }"></div> <br />
              动态class数组：<div :class="['is-active', isRed ? 'red' : '' ]"></div> <br />
              动态style对象：<div :style="{ color: textColor, fontSize: '18px' }"></div> <br />
              动态style数组：<div :style="[{ color: textColor, fontSize: '18px' }, { fontWeight: '300' }]"></div> <br />
          `
        },
        {
          name:"vuex的有哪些属性？用处是什么",
          text:`
            State：定义了应用状态的数据结构，可以在这里设置默认的初始状态。<br />
            Getter：允许组件从 Store 中获取数据，mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性。<br />
            Mutation：是唯一更改 store 中状态的方法，且必须是同步函数。<br />
            Action：用于提交 mutation，而不是直接变更状态，可以包含任意异步操作。<br />
            Module：允许将单一的 Store 拆分为多个 store 且同时保存在单一的状态树中。<br />
          `
        },
        {
          name:"watch有哪些属性，分别有什么用",
          text:`
            handler () { // 执行回调 <br />
                // do something <br />
            }, <br />
            deep: true, // 是否进行深度监听 <br />
            immediate: true // 是否初始执行handler函数 <br />
          `
        },
        {
          name:"父子组件生命周期顺序",
          text:`
            父beforeCreate -> 父created -> 父beforeMount -> 子beforeCreate -> 子created -> 子beforeMount -> 子mounted -> 父mounted
          `
        },
        {
          name:"对象新属性无法更新视图，删除属性无法更新视图",
          text:`
            原因：Object.defineProperty没有对对象的新属性进行属性劫持 <br />
            对象新属性无法更新视图：使用Vue.$set(obj, key, value)，组件中this.$set(obj, key, value) <br />
            删除属性无法更新视图：使用Vue.$delete(obj, key)，组件中this.$delete(obj, key) <br />

            直接arr[index] = xxx无法更新视图<br />
            Vue没有对数组进行Object.defineProperty的属性劫持，<br />
            使用数组的splice方法，arr.splice(index, 1, item) 或 使用Vue.$set(arr, index, value) <br />
          `
        },
        {
          name:"自定义指令",
          text:`
            <a href="https://www.cnblogs.com/lzq035/p/14183553.html">8个非常实用的Vue自定义指令</a>
          `
        },
        {
          name:"插槽的使用以及原理",
          text:`
            <a href="https://juejin.cn/post/6949848530781470733">「Vue源码学习」你真的知道插槽Slot是怎么“插”的吗</a>
          `
        },
        {
          name:"取data中某一个数据的初始状态",
          text:`this.$options.data().xxxx`
        },
        {
          name:"为什么不推荐用 index 做 key",
          text:`
            key 的作用:Vue 中使用虚拟 dom 且根据 diff 算法进行新旧 DOM 对比，从而更新真实 dom ，key 是虚拟 DOM 对象的唯一标识, 在 diff 算法中 key 起着极其重要的作用. <br />
            key 在 diff 算法中的角色: 就是判断是不是相同节点  <br />
            用index:性能消耗 使用 index 做 key，破坏顺序操作的时候， 因为每一个节点都找不到对应的 key，导致部分节点不能复用,所有的新 vnode 都需要重新创建 <br />
            用 index 作为 key 时，在对数据进行，逆序添加，逆序删除等破坏顺序的操作时，会产生没必要的真实 DOM更新，从而导致效率低<br />
            用 index 作为 key 时，如果结构中包含输入类的 DOM，会产生错误的 DOM 更新<br />
            在开发中最好每条数据使用唯一标识固定的数据作为 key，比如后台返回的 ID，手机号，身份证号等唯一值<br />
            如果不存在对数据逆序添加，逆序删除等破坏顺序的操作时，仅用于渲染展示用时，使用 index 作为 key 也是可以的（但是还是不建议使用，养成良好开发习惯）<br />
          `
        },
        {
          name:"*有时间了解下css预处理器",
          text:`
            <a href="https://www.cnblogs.com/sexintercourse/p/12564024.html">CSS的几款流行预处理器 </a>
          `
        },
        {
          name:"PostCss",
          text:`
            官方话术：是一个用JavaScript工具和插件转换CSS代码的工具。<br />
            px自动化转rem需要什么插件？ 答案是postcss-pxtorem。<br />
            npm i postcss-pxtorem --save

            <a href="https://www.postcss.com.cn/">PostCss </a>
            module.exports = {
                plugins: {
                    'postcss-pxtorem': {
                      //根元素字体大小
                      rootValue: 16,
                      //匹配CSS中的属性，* 代表启用所有属性
                      propList: ['*'],
                      //转换成rem后保留的小数点位数
                      unitPrecision: 5，
                      //小于12px的样式不被替换成rem
                      minPixelValue: 12,
                      //忽略一些文件，不进行转换，比如我想忽略 依赖的UI框架
                      exclude: ['node_modules']
                    }
                }
            }


          `
        },
        {
          name:"浏览器*",
          text:`
            <div>
              <h5>浏览器缓存 :</h5>
              <p>分为:强缓存/协商缓存/缓存位置</p>
              <p>
                <h6>强缓存</h6>
                缓存分为两种 一种需要http请求一种不需要http请求。首先是检查强缓存，这个阶段并不需要http请求，而且http/1.0和1.1检查字段不一样<br />
                1.0:Expires ==> 过期时间，由服务端返回。但是本地时间和服务端时间可以不一致，所以后续抛弃。<br />
                1.1:Cache-Control ==> 也是过期时间，代表的是请求结束后的多少秒，而不是固定的截至日期。和expires同时存在时，优先考虑此规则<br />
                &nbsp;&nbsp;Cache-Control:max-age=3600<br />
                private： 这种情况就是只有浏览器能缓存了，中间的代理服务器不能缓存。<br />
                no-cache: 跳过当前的强缓存，发送HTTP请求，即直接进入协商缓存阶段。<br />
                no-store：非常粗暴，不进行任何形式的缓存。<br />
                s-maxage：这和max-age长得比较像，但是区别在于s-maxage是针对代理服务器的缓存时间。<br />
              </p>
              <p>
                <h6>协商缓存</h6>
                如果强缓存失效了，就会进入到协商缓存，浏览器在请求中带着相应的缓存tag，由服务器决定是不是使用缓存<br />
                缓存tag分为两种: Last-Modified 和 ETag 不存在谁对谁有绝对优势。<br />
                Last-Modified：==> 最后修改时间由服务器进行对比 If-Modified-Since  性能高  <br />
                ETag： ==>　唯一标识。如果内容有改动这个表示就会变  If-None-Match  优先级高  精准高<br />
              </p>
              <p>
                <h6>缓存位置</h6>
                  优先级从高到低  <br />
                  Service Worker <br />
                  离线缓存
                  Service Worker 借鉴了 Web Worker的 思路，即让 JS 运行在主线程之外，由于它脱离了浏览器的窗体，因此无法直接访问DOM。虽然如此，但它仍然能帮助我们完成很多有用的功能，比如离线缓存、消息推送和网络代理等功能。其中的离线缓存就是 Service Worker Cache
                  <br />
                  Memory Cache   <br />
                  Disk Cache     <br />
                  Memory Cache指的是内存缓存  效率快 时间短
                  Disk Cache就是存储在磁盘中的缓存 容量大 时间长
                  比较大的JS、CSS文件会直接被丢进磁盘，反之丢进内存
                  内存使用率比较高的时候，文件优先进入磁盘
                  <br />
                  Push Cache     <br />
                  即推送缓存
              </p>
                <h6>总结：</h6>
                首先通过 Cache-Control 验证强缓存是否可用<br />
                如果强缓存可用，直接使用<br />
                否则进入协商缓存，即发送 HTTP 请求，服务器通过请求头中的If-Modified-Since或者If-None-Match字段检查资源是否更新<br />
                若资源更新，返回资源和200状态码<br />
                否则，返回304，告诉浏览器直接从缓存获取资源<br />
            </div>
            <div>
              <h5>浏览器的本地存储 各自优劣如何 :</h5>
              主要分为Cookie、WebStorage和IndexedDB, 其中WebStorage又可以分为localStorage和sessionStorage
            </div>
            <div>
              <h5> :</h5>
            </div>
            <div>
              <h5> :</h5>
            </div>
            <div>
              <h5> :</h5>
            </div>
            <div>
              <h5> :</h5>
            </div>
            <div>
              <h5> :</h5>
            </div>
            <div>
              <h5> :</h5>
            </div>
            <div>
              <h5> :</h5>
            </div>
            <div>
              <h5> :</h5>
            </div>
            <div>
              <h5> :</h5>
            </div>
            <div>
              <h5> :</h5>
            </div>
            <div>
              <h5> :</h5>
            </div>
            <div>
              <h5> :</h5>
            </div>
            <div>
              <h5> :</h5>
            </div>
            <div>
              <h5> :</h5>
            </div>
            

          
          `
        },
        {
          name:"",
          text:``
        },
        {
          name:"",
          text:``
        },
        {
          name:"",
          text:``
        },




        {
          name:"",
          text:``
        },
      ]
    };
  },

  mounted() {
    
  },

  methods: {
    time(){
      /*
        80s
        80%60 = 1
      
      */ 
    }
    
  },
};
</script>

<style lang="less" scoped>
*,body,html{
  margin: 0;
  padding: 0;
}
.biji{
  height: 100%;
  overflow: auto;
  padding: 6vw 3vh;
}
[v-cloak]{
  display: none;
}
.cssRed{
  color: red;
}
.h_css{
  display: flex;
  align-items: center;
  justify-content: center;
}

.children_css{
  
  width: 100%;
  max-height: 30vh;
  overflow: auto;

  padding-left: 3vw ;
  .c_children_css{
    padding-left: 3vw ;
  }
}
</style>