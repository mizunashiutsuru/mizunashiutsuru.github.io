import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'
import { addonVercount } from 'valaxy-addon-vercount'
import { addonComponents } from 'valaxy-addon-components'
import { addonLightGallery } from 'valaxy-addon-lightgallery'
import { addonWaline } from 'valaxy-addon-waline';


// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',

  addons: [
    addonVercount({
      api: 'cn'
    }),
    addonComponents(),
    addonLightGallery(),
    addonWaline({
      serverURL: "https://comment-r7iu.vercel.app/",
      locale: {
        placeholder: "填写qq邮箱或点击登录，可以展示个人头像",
      },
      comment: true,
      reaction: false,
      pageview: false
    }),
  ],

  components: {
  },

  themeConfig: {
    banner: {
      enable: true,
      title: '水无映の庭園',
    },
    bg_image: {
      enable: true,
      url: '/images/bg/odome.png',
      dark: '/images/bg/hoshi.jpg',
      opacity: 0.7
    },
    say: {
      enable: true,
      api: 'sentences.json',
      hitokoto: {
        enable: false,
        api: "https://v1.hitokoto.cn/?c=k&c=d&c=i",
      },
    },
    pages: [
      {
        name: '友链',
        url: '/links/',
        icon: 'i-ri-open-arm-line',
        color: 'dodgerblue',
      },
      {
        name: 'Lover',
        url: '/girls/',
        icon: 'i-ri-user-heart-line',
        color: 'hotpink',
      },
      {
        name: '相册',
        url: '/albums/',
        icon: 'i-ri-gallery-line',
        color: '#43abee',
      },     
    ],
    type: 'strato',
    footer: {
      since: 2025,
      icon: {
        enable: true,
        name: 'i-ri-snowflake-line',
        animated: true,
        color: '#d69b54',
        url: 'https://mizunashiutsuru.github.io/',
        title: '回到首页'
      },
      beian: {
        enable: false,
        icp: '',
      },
      
    },
  },
})

