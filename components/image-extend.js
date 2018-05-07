// components/image-extend.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    placeholderImage: {
      type: String,
      value: null,
    },
    brokenImage: {
      type: String,
      value: null,

    },
    src: {
      type: String,
    },
    mode: {
      type: String,
      value: 'scaleToFill',
    },
    lazyLoad: {
      type: Boolean,
      value: false,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    placeholderType: null,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _loadError: function (e) {
      if (this.properties.brokenImage) {
        this.setData({
          src: this.properties.brokenImage,
          loadSuccess: 2,
        })
      }
    },
    _loadSuccess: function (e) {
      this.setData({
        loadSuccess: 1,
      })
    }
  },

  // loadSuccess  0 默认  1 成功  2 失败


})