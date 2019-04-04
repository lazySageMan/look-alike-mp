import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './index.scss'

export default class Photo extends Component {
  constructor(props){
    super(props);
    this.img = Taro.getStorageSync('img')
    this.state = {
      photoData: [{
        img: this.img,
      },{
          img: this.img,
        }, {
          img: this.img,
        }, {
          img: this.img,
        }, {
          img: this.img,
        }]
    }
  }

  render(){

    let { photoData } = this.state;

    let photos = photoData.length > 0 ? (
      photoData.map((v, i) => {
        return (
          <View className='photo_wrap' key={i}>
            <Image src={v.img} mode='aspectFit' className='img'></Image>
            <View className='similar'>
              相似度90%
            </View>
          </View>
        )
      })
    ) : null;

    return (
      <View className='photo'>
        {/* <View className='photo_wrap'>
          <Image src={this.img} mode='aspectFit' className='img'></Image>
          <View className='similar'>
            相似度90%
          </View>
        </View> */}
        {photos}
      </View>
    )
  }
}
