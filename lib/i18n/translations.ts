const translations = {
  en: {
    nav: {
      ourWines: 'Our Wines',
      ourStory: 'Our Story',
      order: 'Order',
      orderNow: 'Order Now',
    },
    hero: {
      location: 'CENTRAL VIETNAM',
      headline1: 'The French Wines',
      headline2: "You Can't Find Anywhere Else in Vietnam",
      body: 'Stop choosing between overpriced restaurant bottles and supermarket guesswork. We source directly from South of France estatescurated, cellar-quality wine, delivered to your door across Vietnam.',
      browseCollection: 'Browse the Collection',
      orderOnZalo: 'Order on Zalo',
      scroll: 'Scroll',
    },
    socialProof: {
      items: [
        '18 Curated French Wines',
        'Direct from 3 Estates',
        'Delivered Across Vietnam',
      ],
    },
    wines: {
      eyebrow: 'the wines',
      heading: 'The Wines',
      tabs: {
        all: 'All Wines',
        whites: 'Whites',
        reds: 'Reds',
        rose: 'Rosé',
        sparkling: 'Sparkling',
      },
      countSingular: (n: number) => `${n} wine shown`,
      countPlural: (n: number) => `${n} wines shown`,
    },
    wineCard: {
      order: 'Order',
    },
    terroir: {
      eyebrow: 'THE JOURNEY',
      heading: 'From South of France to Your Table',
      steps: [
        {
          number: '01',
          title: 'HAND-PICKED',
          description:
            "Each variety harvested at peak maturity by estate teams who've worked the same vines for generations. Several estates pick manuallyso every bunch arrives whole, not bruised.",
        },
        {
          number: '02',
          title: 'CAREFULLY SELECTED',
          description:
            "Only the finest fruit from France's most celebrated appellations makes the cut. Small-lot, estate-grown, no industrial blending. Every bottle is a single story: one vineyard, one vintage, one character.",
        },
        {
          number: '03',
          title: 'DELIVERED INTACT',
          description:
            'Temperature-controlled from vineyard to your door in Vietnam. Not shaken. Not heat-damaged. Exactly as the winemaker intendedthe kind of care most importers skip.',
        },
      ],
    },
    quote: {
      body: 'Every bottle we ship is one we would pour at our own table first. That is the only standard that matters.',
      attribution: ' French Connection Wines · Central Vietnam',
    },
    testimonials: {
      eyebrow: 'WHAT CUSTOMERS SAY',
      heading: 'Trusted by Wine Lovers Across Vietnam',
      placeholder: 'Replace with real testimonials from actual customers when available.',
      items: [
        {
          quote:
            "Finally, wines I actually recognize. I've been ordering from FCW for months and the quality is consistently excellentnothing like what you find in regular stores here.",
          author: 'Sarah T.',
          location: 'Central Vietnam',
        },
        {
          quote:
            'We added the Chateau Fontanche to our restaurant wine list. Our customers ask about it every week. The quality-to-price ratio is outstanding.',
          author: 'Restaurant Manager',
          location: 'Da Nang',
        },
        {
          quote:
            "Ordered the Cremant de Limoux for a dinner party and everyone wanted to know where it came from. Now I'm the friend who knows wine.",
          author: 'Marc D.',
          location: 'Ho Chi Minh City',
        },
      ],
    },
    panels: {
      story: {
        eyebrow: 'Our story',
        heading: 'Why We Started This',
        body1:
          "You shouldn't have to choose between overpriced restaurant wine and whatever's available at the supermarket. That gapbetween what wine lovers in France drink at home and what's accessible in Vietnamis exactly why French Connection Wines exists.",
        body2:
          'Based in Central Vietnam, we work directly with estates in the South of France to bring curated, cellar-worthy bottles to your table. No middlemen. No compromises. Just the kind of wine that makes a dinner memorable.',
        link: 'Our full story →',
      },
      order: {
        eyebrow: 'Get in touch',
        heading: 'Order Today, Enjoy This Week',
        steps: [
          'Pick your winesany mix of reds, whites, rosé, or sparkling',
          'Message us on Zalo with your order and delivery address',
          'We pack and delivermost orders arrive within 2–3 business days',
        ],
        cta: 'Start Your Order on Zalo',
        footnote: 'Delivering across Vietnam · No minimum order',
      },
    },
    faq: {
      eyebrow: 'QUESTIONS',
      heading: 'Everything You Need to Know',
      items: [
        {
          question: 'Do you deliver outside Central Vietnam?',
          answer: 'Yeswe deliver across Vietnam. Most orders reach you within 2–3 business days.',
        },
        {
          question: 'Is there a minimum order?',
          answer: 'No minimum. Order a single bottle or a full casewe handle both.',
        },
        {
          question: 'How are the wines stored and shipped?',
          answer:
            'All wines are kept under temperature-controlled conditions from France to your door. Quality preserved, every time.',
        },
        {
          question: 'Can you help me choose a wine?',
          answer:
            "Absolutely. Message us on Zalo and we'll recommend based on your occasion, taste, or budget. It takes 30 seconds.",
        },
      ],
    },
    footer: {
      tagline:
        'Our philosophy is to achieve balance across all components of the wineand to make no compromise in that pursuit.',
      producers: 'Our Producers',
      contact: 'Contact Us',
      rights: 'All Rights Reserved.',
      prices: 'All prices in VND, subject to 10% VAT.',
      madeBy: 'Site by Mathieu de Gouville',
      modal: {
        eyebrow: 'WEBSITE REALIZATION',
        title: 'Crafted with Intention',
        testimonial:
          '"I wanted this site to feel like the wines themselves — nothing superfluous, everything deliberate. The design draws from the terroir of the South of France: unhurried, confident, honest. Built to get out of the way and let the bottles speak."',
        author: 'Mathieu de Gouville',
        role: 'Developer & Designer',
        stackLabel: 'Built with',
        stack: 'Next.js 16 · React 19 · TailwindCSS 4 · TypeScript',
        aiLabel: 'AI-assisted development',
        ai: 'Claude Code by Anthropic — for rapid iteration without sacrificing craft.',
        close: 'Close',
      },
    },
  },

  vi: {
    nav: {
      ourWines: 'Rượu Vang',
      ourStory: 'Câu Chuyện',
      order: 'Đặt Hàng',
      orderNow: 'Đặt Hàng Ngay',
    },
    hero: {
      location: 'MIỀN TRUNG VIỆT NAM',
      headline1: 'Những Chai Rượu Vang Pháp',
      headline2: 'Chỉ Có Tại French Connection',
      body: 'Không còn phải chọn giữa rượu nhà hàng giá cao và rượu siêu thị may rủi. Chúng tôi nhập trực tiếp từ các trang trại miền Nam nước Pháprượu đạt chuẩn hầm rượu, giao tận cửa trên toàn Việt Nam.',
      browseCollection: 'Khám Phá Bộ Sưu Tập',
      orderOnZalo: 'Đặt Hàng Qua Zalo',
      scroll: 'Cuộn',
    },
    socialProof: {
      items: [
        '18 Loại Rượu Vang Tuyển Chọn',
        'Nhập Trực Tiếp Từ 3 Trang Trại',
        'Giao Hàng Toàn Quốc',
      ],
    },
    wines: {
      eyebrow: 'bộ sưu tập',
      heading: 'Bộ Sưu Tập Rượu',
      tabs: {
        all: 'Tất Cả',
        whites: 'Vang Trắng',
        reds: 'Vang Đỏ',
        rose: 'Vang Hồng',
        sparkling: 'Vang Sủi',
      },
      countSingular: (n: number) => `${n} loại rượu`,
      countPlural: (n: number) => `${n} loại rượu`,
    },
    wineCard: {
      order: 'Đặt Hàng',
    },
    terroir: {
      eyebrow: 'HÀNH TRÌNH',
      heading: 'Từ Miền Nam Nước Pháp Đến Bàn Của Bạn',
      steps: [
        {
          number: '01',
          title: 'HÁI THỦ CÔNG',
          description:
            'Mỗi giống nho được thu hoạch đúng độ chín bởi những người làm vườn đã gắn bó với các cây nho qua nhiều thế hệ. Nhiều trang trại thu hoạch hoàn toàn bằng tayđể từng chùm nho đến nơi còn nguyên vẹn, không bị dập.',
        },
        {
          number: '02',
          title: 'TUYỂN CHỌN KỸ LƯỠNG',
          description:
            'Chỉ những loại trái tốt nhất từ các vùng appellation danh tiếng nhất của Pháp mới được chọn. Sản xuất nhỏ lẻ, từ trang trại, không pha trộn công nghiệp. Mỗi chai là một câu chuyện riêng: một vườn nho, một mùa vụ, một cá tính.',
        },
        {
          number: '03',
          title: 'GIAO NGUYÊN VẸN',
          description:
            'Kiểm soát nhiệt độ từ vườn nho đến tận cửa nhà bạn tại Việt Nam. Không bị rung lắc. Không bị hư hại do nhiệt độ. Đúng như ý định của người làm rượusự chăm sóc mà hầu hết nhà nhập khẩu bỏ qua.',
        },
      ],
    },
    quote: {
      body: 'Mỗi chai rượu chúng tôi giao đi đều là chai chúng tôi sẵn sàng rót trên bàn ăn của chính mình. Đó là tiêu chuẩn duy nhất.',
      attribution: ' French Connection Wines · Miền Trung Việt Nam',
    },
    testimonials: {
      eyebrow: 'KHÁCH HÀNG NÓI GÌ',
      heading: 'Được Tin Yêu Bởi Những Người Yêu Rượu Khắp Việt Nam',
      placeholder: 'Thay thế bằng đánh giá thực tế từ khách hàng khi có.',
      items: [
        {
          quote:
            'Cuối cùng tôi cũng tìm được những chai rượu quen thuộc. Tôi đã đặt hàng FCW nhiều tháng nay và chất lượng luôn xuất sắckhông giống bất kỳ thứ gì ở các cửa hàng thông thường.',
          author: 'Sarah T.',
          location: 'Miền Trung Việt Nam',
        },
        {
          quote:
            'Chúng tôi đã thêm Chateau Fontanche vào danh sách rượu của nhà hàng. Khách hàng hỏi về nó mỗi tuần. Tỷ lệ chất lượng-giá cả thật sự ấn tượng.',
          author: 'Quản Lý Nhà Hàng',
          location: 'Đà Nẵng',
        },
        {
          quote:
            'Đặt Cremant de Limoux cho bữa tiệc và mọi người đều muốn biết mua ở đâu. Giờ tôi là người bạn am hiểu về rượu vang.',
          author: 'Marc D.',
          location: 'Thành Phố Hồ Chí Minh',
        },
      ],
    },
    panels: {
      story: {
        eyebrow: 'Câu chuyện',
        heading: 'Tại Sao Chúng Tôi Bắt Đầu',
        body1:
          'Bạn không nên phải chọn giữa rượu nhà hàng giá cao và những gì có sẵn tại siêu thị. Khoảng cách đógiữa rượu người yêu rượu ở Pháp uống tại nhà và những gì có thể tiếp cận ở Việt Namchính là lý do French Connection Wines ra đời.',
        body2:
          'Đặt tại Miền Trung Việt Nam, chúng tôi làm việc trực tiếp với các trang trại ở miền Nam nước Pháp để mang những chai rượu tuyển chọn, xứng tầm hầm rượu đến bàn ăn của bạn. Không qua trung gian. Không thỏa hiệp. Chỉ là loại rượu tạo nên một bữa tối đáng nhớ.',
        link: 'Câu chuyện đầy đủ →',
      },
      order: {
        eyebrow: 'Liên hệ',
        heading: 'Đặt Hôm Nay, Thưởng Thức Tuần Này',
        steps: [
          'Chọn rượubất kỳ sự kết hợp nào giữa vang đỏ, vang trắng, vang hồng hoặc vang sủi',
          'Nhắn tin cho chúng tôi qua Zalo với đơn hàng và địa chỉ giao hàng',
          'Chúng tôi đóng gói và giao hànghầu hết đơn hàng đến trong 2–3 ngày làm việc',
        ],
        cta: 'Bắt Đầu Đặt Hàng Qua Zalo',
        footnote: 'Giao hàng toàn quốc · Không giới hạn số lượng',
      },
    },
    faq: {
      eyebrow: 'CÂU HỎI',
      heading: 'Tất Cả Những Gì Bạn Cần Biết',
      items: [
        {
          question: 'Bạn có giao hàng ngoài Miền Trung Việt Nam không?',
          answer: 'Cóchúng tôi giao hàng toàn quốc. Hầu hết đơn hàng đến tay bạn trong 2–3 ngày làm việc.',
        },
        {
          question: 'Có đơn hàng tối thiểu không?',
          answer: 'Không có giới hạn. Đặt một chai lẻ hay cả thùngchúng tôi đều phục vụ.',
        },
        {
          question: 'Rượu được bảo quản và vận chuyển như thế nào?',
          answer:
            'Tất cả rượu được giữ trong điều kiện kiểm soát nhiệt độ từ Pháp đến tận cửa nhà bạn. Chất lượng được bảo toàn mọi lúc.',
        },
        {
          question: 'Bạn có thể giúp tôi chọn rượu không?',
          answer:
            'Hoàn toàn được. Nhắn tin cho chúng tôi qua Zalo và chúng tôi sẽ gợi ý theo dịp, khẩu vị hoặc ngân sách của bạn. Chỉ mất 30 giây.',
        },
      ],
    },
    footer: {
      tagline:
        'Triết lý của chúng tôi là đạt được sự cân bằng trong tất cả các thành phần của rượuvà không bao giờ thỏa hiệp trong hành trình đó.',
      producers: 'Nhà Sản Xuất',
      contact: 'Liên Hệ',
      rights: 'Bảo lưu mọi quyền.',
      prices: 'Giá tính bằng VND, chưa bao gồm 10% VAT.',
      madeBy: 'Website bởi Mathieu de Gouville',
      modal: {
        eyebrow: 'THỰC HIỆN WEBSITE',
        title: 'Được Tạo Ra Với Chủ Tâm',
        testimonial:
          '"Tôi muốn trang web này cảm giác như chính những chai rượu — không thừa thãi, mọi thứ đều có chủ đích. Thiết kế lấy cảm hứng từ terroir miền Nam nước Pháp: thong thả, tự tin, chân thực. Xây dựng để lùi lại và để những chai rượu tự lên tiếng."',
        author: 'Mathieu de Gouville',
        role: 'Lập Trình Viên & Nhà Thiết Kế',
        stackLabel: 'Xây dựng với',
        stack: 'Next.js 16 · React 19 · TailwindCSS 4 · TypeScript',
        aiLabel: 'Hỗ trợ bởi AI',
        ai: 'Claude Code của Anthropic — để lặp nhanh mà không đánh mất chất lượng.',
        close: 'Đóng',
      },
    },
  },
} as const

export default translations
export type Translations = typeof translations
export type Lang = keyof typeof translations
