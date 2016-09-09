import React from 'react'
import fb from './icons/fb.png'
import twitter from './icons/twitter.png'
import vk from './icons/vk.png'
import s from './Social.scss'
const Social = () => (
  <div className={s.container}>
    {/* eslint-disable-next-line */}
    <a href="https://vk.com/share.php?url=http://mysite.com&title=Искусственный интеллект подбирает подарки!&description=Студенты из России создали первый в мире искусственный интеллект, который подскажет, что подарить, даже если идей совсем нет! Он еще маленький, но очень быстро учится!&image=https://pp.vk.me/c626716/v626716511/2998b/j_zo3wenKXU.jpg" target="_blank">
      <img src={vk} className={s.pic} alt='Рассказать Вконтакте' />
    </a>
    <a href='https://twitter.com/intent/tweet?text=Студенты%20из%20России%20создали%20первый%20в%20мире%20иск.%20интеллект,%20который%20подскажет,%20что%20подарить!%20Он%20маленький,%20но%20быстро%20учится!&url=www.example.com&hashtags=cleverGift'>
      <img src={twitter} className={s.pic} alt='Расшарить в Твиттере' />
    </a>
    <img src={fb} className={s.pic} alt='Поделиться в Фейсбуке' />
  </div>
)

export default Social
