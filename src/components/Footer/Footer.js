import React from 'react'
import s from './Footer.scss'
import Brain from './brain.png'

const Footer = () => (
  <div className={s.footer}>
    <div className={s.wrapper}>
      <div className={s.replic}>
        <div className={s.left}>1024</div>
        <div className={s.right}>Подарка уже нашли<br /> своих людей</div>
      </div>
      <div className={s.replic}>
        <div className={s.left}>
          <img src={Brain} width='50' />
        </div>
        <div className={[s.right, s.hideWhenMobile]}>Интеллект учится и становится<br /> умнее с каждым днём</div>
      </div>
    </div>
  </div>
)

export default Footer
