// https://leagueoflegends.fandom.com/wiki/Champion_classes
export const CLASSES = {
  Controller: {
    vi: 'Hỗ trợ',
    image: '',
    link: 'https://leagueoflegends.fandom.com/wiki/Champion_classes/Controller',
    description: '',
    subs: {
      Enchanter: {
        vi: 'Hỗ trợ - Hôi phục',
      },
      Catcher: {
        vi: 'Hỗ trợ - Khống chế',
      },
    },
  },
  Fighter: {
    vi: 'Đấu sĩ',
    image: '',
    link: 'https://leagueoflegends.fandom.com/wiki/Champion_classes/Fighter',
    description:
      'Đấu sĩ là một nhóm tướng đa dạng, mạnh cả trong việc gây sát thương và nhận sát thương. Chúng thường mang trên mình khả năng gây sát thương theo thời gian cao cũng như những nội tại phòng thủ mạnh mẽ, nên Đấu sĩ thường tìm kiếm mục tiêu cho riêng mình. Nhưng do tầm đánh ngắn, chúng thường gặp nguy hiểm nếu không áp sát được bởi khả năng khống chế của đối phương.',
    subs: {
      Juggernaut: {
        vi: 'Đấu sĩ - Khổng lồ tàn phá',
      },
      Diver: {
        vi: 'Đấu sĩ - Áp sát nhanh',
      },
    },
  },
  Mage: {
    vi: 'Pháp Sư',
    image: 'link/to/image',
    link: 'https://leagueoflegends.fandom.com/wiki/Champion_classes/Mage',
    description:
      'Pháp sư hầu hết là những tướng tầm xa chủ yếu sử dụng những chiêu thức mạnh mẽ nhiều hơn các đòn đánh thường. Những pháp sư thường có bộ kĩ năng kết hợp tầm xa, diện rộng hoặc cơ động. Một pháp sư giỏi sẽ có sức ảnh hưởng cực lớn với bất cứ đội hình nào nhờ vào bộ kĩ năng đa dạng và lối chơi linh hoạt của mình.',
    subs: {
      Burst: {
        vi: 'Pháp sư - Dồn sát thương',
      },
      Battlemage: {
        vi: 'Pháp sư - Tầm trung',
      },
      Artillery: {
        vi: 'Pháp sư - Tầm xa',
      },
    },
  },
  Marksman: {
    vi: 'Xạ thủ',
    image: 'link/to/image',
    link: 'https://leagueoflegends.fandom.com/wiki/Champion_classes/Marksman',
    description:
      'Xạ thủ là các tướng đánh xa hi sinh khả năng phòng ngự và độ đa dụng để tập trung vào việc gây ra nguồn sát thương lớn và liên tiếp vào các mục tiêu đơn lẻ, đặc biệt dựa chủ yếu vào các đòn đánh thường để gây sát thương cho đối thủ hơn là việc sử dụng các kỷ năng. Các xạ thủ có khả năng gây ra lượng lớn sát thương và là nguồn sát thương chủ yếu của mỗi đội hình về giai đoạn cuối trận đấu',
  },
  Slayer: {
    vi: 'Sát thủ',
    image: 'link/to/image',
    link: 'https://leagueoflegends.fandom.com/wiki/Slayer',
    description:
      'Sát thủ là những vị tướng khá cơ động, có nhiệm vụ dồn sát thương vào một mục tiêu cực mạnh. Chúng thường thiếu khả năng phòng thủ, nhưng ngược lại có khả năng áp sát từ xa, nhanh chóng hạ gục mục tiêu quan trọng và cũng rút về một cách nhanh chóng. Đây là lối chơi rủi ro cao, phần thưởng cao. Sát thủ là những kẻ cơ hội, tấn công khi kẻ địch yếu và đơn độc.',
    subs: {
      Assassin: {
        vi: 'Sát thủ - Kết liễu',
      },
      Skirmisher: {
        vi: 'Sát thủ - Mở giao tranh',
      },
    },
  },
  Tank: {
    vi: 'Đỡ đòn',
    image: 'link/to/image',
    description: 'Chưa có dữ liệu',
    subs: {
      Vanguard: {
        vi: 'Đỡ đòn - Mở giao tranh',
      },
      Warden: {
        vi: 'Đỡ đòn - Hỗ trợ',
      },
    },
  },

  Specialist: {
    // or Unclassified
    vi: 'Đặc biệt',
    image: 'link/to/image',
    link: 'https://leagueoflegends.fandom.com/wiki/Champion_classes/Specialist',
    description: 'Chưa có dữ liệu',
  },
};

export default CLASSES;
