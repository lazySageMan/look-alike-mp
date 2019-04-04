import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import './index.scss'

export default class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  selectImg = () => {
    Taro.chooseImage({
      count: 1
    }).then((res) => {
      console.log(res.tempFilePaths[0])
      Taro.setStorageSync('img', res.tempFilePaths[0])
      Taro.navigateTo({
        url: '/pages/photo/index'
      })
    })
  }

  render () {
    return (
      <View className='index'>
        <View className='index_wrap' onClick={this.selectImg}>
          <AtIcon size='100' value='camera' color='orange'></AtIcon>
          <Text className='content'>请选着图片</Text>
        </View>
      </View>
    )
  }
}

