<template>
  <q-page class="row items-center justify-evenly">
    <div>
      <pre
        data-lang="javascript"
        class="lang-javascript"
      ><code class="lang-javascript">/** 对邮箱类型判定，并调用QQ头像的实现 */
      function isqq($email){
          if($email){
              if(strpos($email,&quot;@qq.com&quot;) !==false){
                  $email=str_replace(&#x27;@qq.com&#x27;,&#x27;&#x27;,$email);
                  echo &quot;//q1.qlogo.cn/g?b=qq&amp;nk=&quot;.$email.&quot;&amp;&quot;;
              }else{
                  $email= md5($email);
                  echo &quot;//cdn.v2ex.com/gravatar/&quot;.$email.&quot;?&quot;;
              }
          }else{
          echo &quot;//cdn.v2ex.com/gravatar/null?&quot;;
          }
      }
      </code></pre>
      <blockquote>css示例</blockquote>
      <pre data-lang="css" class="lang-css"><code class="lang-css">span.foo {
      	background-color: navy;
      	color: #BFD;
      }

      span.bar {
      	background: rgba(105, 0, 12, .38);
      	color: hsl(30, 100%, 50%);
              border-color: <span style="font-size:14px"><span style="background-color:#21242a"><span style="color:#eeeeee">transparent</span><span style="color:#cccccc">;</span></span></span>

      }</code></pre>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Todo, Meta } from 'components/models';
import ExampleComponent from 'components/ClassComponent.vue';
import { Vue, Component } from 'vue-property-decorator';
import prism from 'prismjs';
@Component({
  components: { ExampleComponent },
  mounted() {
    console.log('begin to render');
    document.querySelectorAll('pre').forEach(el => {
      if (!el.classList.contains('line-numbers')) {
        el.classList.add('line-numbers');
      }
    });
    prism.highlightAll();
  }
})
export default class PageIndex extends Vue {
  todos: Todo[] = [
    {
      id: 1,
      content: 'ct1'
    },
    {
      id: 2,
      content: 'ct2'
    },
    {
      id: 3,
      content: 'ct3'
    },
    {
      id: 4,
      content: 'ct4'
    },
    {
      id: 5,
      content: 'ct5'
    }
  ];
  meta: Meta = {
    totalCount: 1200
  };
}
</script>
