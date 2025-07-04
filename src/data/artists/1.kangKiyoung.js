const kangKiyoung = {
    id: 'kang-kiyoung',
    url: 'Kangkiyoung.jpg',
    name: 'kang ki young',
    nameEng: `kang<br>ki young`,
    nameKr:'강기영',
    date: '1983.10.14',

    awards:[
        '2023 대한민국 남자배우(드라마) 퍼스트브랜드 대상',
        '2019 제 8회 대한민국 베스트 스타상 베스트 조연상',
        '2019 제 12회 코리아드라마어워즈 남자 우수연기상',
        '2018 MBC 연기대상 수목미니시리즈부문 조연상',
    ],

    slideImages: ['slide1.jpg', 'slide2.jpg'],


    /* ==============
    이미지
    ============== */
    gallery:[
        {
            key: 'drama',
            image: [
                'kang-kiyoung/drama/drama1.jpg',
                'kang-kiyoung/drama/drama2.jpg',
                'kang-kiyoung/drama/drama3.jpg',
            ],
        },
        {
            key: 'movie',
            image: [
                'kang-kiyoung/movie/movie1.jpg',
                'kang-kiyoung/movie/movie2.jpg'
            ]
        },
        {
            key: 'magazine',
            image: [
                'kang-kiyoung/magazine/magazine9.jpg',
                'kang-kiyoung/magazine/magazine8.jpg',
                'kang-kiyoung/magazine/magazine7.jpg',
                'kang-kiyoung/magazine/magazine6.jpg',
                'kang-kiyoung/magazine/magazine5.jpg',
                'kang-kiyoung/magazine/magazine4.jpg',
                'kang-kiyoung/magazine/magazine3.jpg',
                'kang-kiyoung/magazine/magazine2.jpg',
                'kang-kiyoung/magazine/magazine1.jpg',
            ]
        },
        {
            key: 'others',
            image: [
                'kang-kiyoung/others/others1.jpg',
                'kang-kiyoung/others/others2.jpg',
                'kang-kiyoung/others/others3.jpg'
            ]
        },
    ],


    /* ==============
    활동 내역
    ============== */
    archive: [
    {
      key: 'drama',
      label: '드라마',
      list: [
        { year: '2024', content: ['끝내주는 해결사'] },
        { year: '2023', content: ['경이로운 소문2: 카운터 펀치'] },
        { year: '2022', content: ['이상한 변호사 우영우'] },
        { year: '2019', content: ['열여덟의 순간'] },
        { year: '2018', content: ['내 뒤에 테리우스', '김비서가 왜 그럴까'] },
        { year: '2017', content: ['로봇이 아니야', '7일의 왕비', '터널', '세가지색 판타지-생동성 연애', '역도요정 김복주'] },
        { year: '2016', content: ['W(더블유)', '싸우자 귀신아', '돌아와요 아저씨', '퍽!'] },
        { year: '2015', content: ['빛나거나 미치거나', '오 나의 귀신님'] },
        { year: '2014', content: ['고교처세왕', '리셋'] },
      ],
    },
    {
      key: 'movie',
      label: '영화',
      list: [
        { year: '2025', content: ['부활남'] },
        { year: '2023', content: ['3일의 휴가', '교섭'] },
        { year: '2021', content: ['자산어보'] },
        { year: '2019', content: ['가장 보통의 연애', '엑시트'] },
        { year: '2018', content: ['상류사회', '너의 결혼식', '퍼즐'] },
        { year: '2017', content: ['특별시민', '아빠는 딸'] },
      ],
    },
    {
      key: 'entertainment',
      label: '예능/교양',
      list: [
        { year: '2024', content: ['아시아콘텐츠어워즈 & 글로벌OTT어워즈 MC', '(ENA) 지구마불 우승여행', '(ENA) 지구마불 세계여행2'] },
        { year: '2021', content: ['(JTBC) 개취존중 여행배틀 - 펫키지'] },
        { year: '2020', content: ['(tvN) RUN'] },
        { year: '2019', content: ['(SBS) 정글의 법칙 in 태즈먼', '(SBS) 미추리 8-1000 시즌2'] },
        { year: '2018', content: ['(SBS) 미추리 8-1000 시즌1'] },
      ],
    },
    {
    key: 'stagy',
    label: '연극',
    list:[
        { year: '2013', content: ['퍼즐', '드레싱'] },
        { year: '2010', content: ['그남자 그여자'] },
        { year: '2009', content: ['나쁜자석'] },
    ]
    },
    {
      key: 'performance',
      label: '공연',
      list: [
        { year: '2024', content: ['강기영 Fan Meeting in TOKYO'] },
        { year: '2023', content: ['강기영 2nd Fan meeting in Japan'] },
        { year: '2022', content: ['강기영 Japan 1st Fan meeting'] },
      ],
    },
    {
      key: 'advertisement',
      label: '광고',
      list: [
        { content: [
            `마이녹실 / 쿠퍼스 / 티머이onda / 버거스올마이티 / 부광약품 시린메드 / 
            CJ 제일제당 플랜테이블 / SC제일은행 / CJ 제일제당 CJ명가김 / 
            롯데 칠성사이다 / 리니지2: 펫 업데이트편 / 삼성생명 8NUMBERS 八字편 / 
            비비고 김치 / 현대자동차 어드밴티지 프로그램 / 국민은행 친구 편 / 
            신한은행 유산 편 / OK!SK / 박카스 / SHOW 티머니`,
            '외 다수']
        }
      ],
    },
  ],
}

export default kangKiyoung