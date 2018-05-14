# image-extend

微信小程序image标签的扩展，支持占位图和失败图

##### 扩展属性

|属性名|类型|默认值|说明|
|---|---|---|---|
|placeholder-image|String|无|占位图，支持url、base64、本地目录|
|broken-image|String|无|图片加载失败时显示图片，支持url、base64、本地目录|

###### 注: 最好不要使用 `url`

##### 核心代码
``` html
<block wx:if="{{placeholderImage != null}}">
    <!-- 实际图片 -->
    <image class="image-extend {{loadSuccess !=1 ?'img_none':''}}" src="{{src}}" mode="{{mode}}" lazy-load="{{lazyLoad}}" bindload="_loadSuccess" binderror="_loadError"></image>
    <!-- 占位图片 -->
    <image class="image-extend {{loadSuccess==1?'img_none':''}}" src="{{placeholderImage}}" mode="{{mode}}" lazy-load="{{lazyLoad}}"></image>
</block>
<block wx:else>
    <!-- 默认图片 -->
    <image class="image-extend" src="{{src}}" mode="{{mode}}" lazy-load="{{lazyLoad}}"></image>
</block>
```

##### 实现原理
``` css
bindload : 图片加载完成时回调
binderror : 图片加载失败时回调
```

##### 代码实例
``` html
<image-ext src="https://avatars3.githubusercontent.com/u/18711027" placeholder-image="/icon/default.png" brokenImage="/icon/break.png" class="logo"></image-ext>
<!-- 网络图片 -->
<image-ext src="https://avatars3.githubusercontent.com/u/18711027" placeholder-image="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525693369091&di=7acd1d6ec54df9e8b75348e611469585&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01786557e4a6fa0000018c1bf080ca.png" brokenImage="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525693334599&di=ae7d67d686448c3a9421db5d128f621a&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fb58f8c5494eef01f3ddfaeedebfe9925bd317dca.jpg" class="logo"></image-ext>
<!-- 损坏图片 -->
<image-ext src="https://avatars3.githubusercontent.com/u/" placeholder-image="/icon/default.png" brokenImage="/icon/break.png" class="logo"></image-ext>
```

