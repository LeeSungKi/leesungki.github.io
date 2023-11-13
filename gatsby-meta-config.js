module.exports = {
  title: `Re:teev 팀 블로그`,
  description: `leesunggi92@gmail.com`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://leesungki.github.io`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `LeeSungKi/leesungki.github.io`, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `Re:teev`,
    bio: {
      role: `개발팀`,
      description: ['사람에 가치를 두는', '능동적으로 일하는', '이로운 것을 만드는'],
      thumbnail: 'reteevLogo.png', //sample.png Path to the image in the 'asset' folder
    },
    social: {
      github: ``, //https://github.com/LeeSungKi
      linkedIn: ``,
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
        date: '2022.09.01',
        activity: '개발팀 리티브 창설',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      {
        date: '2023.06.01',
        activity: '팀원 영입',
        links: {
          post: '/reteevHistoryTeam',
          github: '',
          demo: '',
        },
      },
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
        title: 'LIG NEX1',
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
        title: 'KT DS',
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
        title: 'CJ대한통운',
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
      {
        title: '현대 오토에버',
        description:
            '지식 관리 서비스 개발',
        techStack: ['Springboot', 'AWS', 'PostgreSQL'],
        thumbnailUrl: 'hyundai.jpg',
        links: {
          post: '/gatsby-work-history-of-hyundai',
          github: '',
          demo: '',
        },
      },
    ],
  },
};
