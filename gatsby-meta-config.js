module.exports = {
  title: `Re:제로부터 시작하는 개발일기`,
  description: `leesunggi92@gmail.com`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://leesungki.github.io/sungkilee.github.io/`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `LeeSungKi/leesungki.github.io`, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `이성기`,
    bio: {
      role: `개발자`,
      description: ['사람에 가치를 두는', '능동적으로 일하는', '이로운 것을 만드는'],
      thumbnail: 'profile.jpg', //sample.png Path to the image in the 'asset' folder
    },
    social: {
      github: ``, //https://github.com/LeeSungKi
      linkedIn: ``,//https://www.linkedin.com/in/jinhyeok-jeong-800871192
      email: `leesunggi92@gmail.com`,
      instaGram: `https://www.instagram.com/Kuro_pa`
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2018.11 ~',
        activity: '(주)월드와이즈 입사',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      {
        date: '2018.12 ~ 2020.01',
        activity: 'LIG NEX1 파견',
        links: {
          post: '/gatsby-work-history-of-wordwise',
          github: '',
          demo: '',
        },
      },
      {
        date: '2020.01 ~ 2020.08',
        activity: 'KT DS 파견',
        links: {
          post: '/gatsby-work-history-of-ktds',
          github: '',
          demo: '',
        },
      },
      {
        date: '2021.08 ~ 2021.12',
        activity: 'CJ대한통운 파견',
        links: {
          post: '/gatsby-work-history-of-cj',
          github: '',
          demo: '',
        },
      },
      {
        date: '2021.12 ~',
        activity: '개인 블로그 개설 및 운영',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      /* {
        date: '2021.02 ~',
        activity: '개인 블로그 개발 및 운영',
        links: {
          post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
          demo: 'https://www.zoomkoding.com',
        },
      }, */
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: 'LIG NEX1 파견',
        description:
          'MDM 시스템 운영 및 백오피스 개발, 홈페이지 유지보수, 리조트 예약 시스템 유지보수',
        techStack: ['Spring', 'Oracle', 'jQuery', 'MySql'],
        thumbnailUrl: 'lignex1.png',
        links: {
          post: '/gatsby-work-history-of-wordwise',
          github: '',
          demo: '',
        },
      },
      {
        title: 'KT DS 파견',
        description:
          '컨테이너 관리 시스템(FlyingCube) 화면 고도화',
        techStack: ['Vue.js', 'SpringBoot', 'Vuex', 'Axios', 'VueRouter' , 'Vuetify'],
        thumbnailUrl: 'ktds.jpg',
        links: {
          post: '/gatsby-work-history-of-ktds',
          github: '',
          demo: '',
        },
      },
      {
        title: 'CJ대한통운 파견',
        description:
          '글로벌 포워딩 시스템(Q-brige) 오류 개선 및 추가 개발',
        techStack: ['Struts', 'MsSql', 'Ibsheet'],
        thumbnailUrl: 'cjimg.jpg',
        links: {
          post: '/gatsby-work-history-of-cj',
          github: '',
          demo: '',
        },
      },
    ],
  },
};
