// https://blitz.gg/lol/champions/Ahri
const Champions = {
  Arhi: {
    info: {
      name: 'Ahri',
      nameVietNamese: 'Hồ ly chín đuôi',
      homeTown: 'Ionia',
      link: 'link/to/champion',
      price: 4800,
    },
    skins: [
      {
        name: 'Mặc định',
        background: 'path/to/background',
        avatar: 'path/to/avatar',
      },
    ],
    stat: {
      health: 618,
      _health: 92, // + mỗi cấp

      mana: 443,
      _mana: 25,

      attackDamage: 56.04,
      _attackDamage: 3,

      magicalDamage: 0,
      _magicalDamage: 0,

      attackSpeed: 1000, // mili giay
      _attackSpeed: 2, // + % mỗi cấp

      attackRange: 550,

      moveSpeed: 330,

      healthRegen: 7.1, // mỗi giây
      _healthRegen: 0.6,

      manaRegen: 8.8, // mỗi giây
      _manaRegen: 0.8,

      armor: 24.38,
      _armor: 3.5,

      magicalResist: 30.5,
      _magicalResist: 0.5,
    },
    abilities: {
      P: '', // passive - thụ động - nội tại
      Q: '',
      E: '',
      W: '',
      R: '',
    },
  },
};

const Abilities = {
  QuaCauMaThuat: {
    name: 'Quả Cầu Ma Thuật',
    description: `Ahri phóng ra rồi thu hồi quả cầu ma thuật của cô, gây sát thương phép trên đường bay ra và sát thương chuẩn trên đường thu về. Sau khi dùng phép trúng vài lần, quả cầu trúng địch kế tiếp sẽ hồi máu cho Ahri.

    Gây 40/65/90/115/140 (+) sát thương phép trên đường đi và 40/65/90/115/140 (+) sát thương chuẩn trên đường về.
    
    Các kỹ năng của Ahri tích cộng dồn Hút Hồn khi trúng kẻ địch (tối đa mỗi lần tung chiêu). Ở cộng dồn, Quả Cầu Ma Thuật kế tiếp của Ahri hồi cho cô (+) máu mỗi khi trúng 1 kẻ địch.`,
    // image: 'path/to/image',
    // cost: 70,
    // constType: 'mana', // 'health
    // coolDown: 10, // [9, 8, 7, 6, 5]
    classPath: 'path/to/QuaCauMaThuat.js',
  },
  LuaHoLy: {
    name: 'Lửa Hồ Li',
    description: `Ahri tung ra ba ngọn lửa hồ li, chúng sẽ tự khóa mục tiêu và tấn công những kẻ địch cạnh bên.

    Phóng thích ra ba ngọn lửa hồ li bay vào các kẻ địch gần đó gây 40/65/90/115/140 (+) sát thương phép.
    
    Kẻ địch trúng nhiều lửa hồ li sẽ chịu 30% sát thương từ ngọn lửa thứ hai trở đi, tối đa sát thương lên một mục tiêu.
    
    Lửa Hồ Li ưu tiên mục tiêu vừa trúng Hôn Gió, rồi đến mục tiêu vừa bị Ahri tấn công.
    Nếu không tìm được mục tiêu ưu tiên, Lửa Hồ Li ưu tiên tướng.`,
    image: 'path/to/image',
    classPath: 'path/to/LuaHoLy.js',
  },
};
