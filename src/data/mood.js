// Thông tin chính thức do MOOD Studio cung cấp. Chỉ cập nhật tại đây.
export const contact = {
  brand: 'MOOD Studio',
  city: 'Thành phố Hồ Chí Minh',
  phoneDisplay: '866.138.799', // Chưa xác minh định dạng đầy đủ -> không tạo link gọi điện
  facebook: 'https://www.facebook.com/profile.php?id=61592669727656',
  mapsUrl: null, // Chưa có URL Google Maps
  zaloUrl: null, // Chưa có link Zalo
};

const img = (n) => `/images/mood/mood-${String(n).padStart(2, '0')}.jpg`;

// Năm nhóm dịch vụ chính thức
export const concepts = [
  {
    id: 'personal-concept',
    name: 'Chụp ảnh concept cá nhân',
    badge: 'Concept 01',
    image: img(3),
    imagePosition: 'center 25%',
    description: 'Thể hiện phong cách và cá tính riêng qua hình ảnh.',
    fullDescription:
      'Dành cho khách hàng muốn thể hiện phong cách và cá tính riêng thông qua hình ảnh. Mỗi bộ ảnh là một cách kể câu chuyện của riêng bạn.',
    highlights: ['Thể hiện phong cách và cá tính riêng', 'Chú trọng bối cảnh, trang phục và màu sắc', 'Giữ lại cảm xúc trong từng khung hình'],
    gallery: [img(3), img(5), img(2), img(4), img(1), img(6)],
  },
  {
    id: 'artistic-photography',
    name: 'Chụp ảnh nghệ thuật',
    badge: 'Concept 02',
    image: img(4),
    imagePosition: 'center 30%',
    description: 'Bố cục, ánh sáng, màu sắc và cảm xúc trong từng khung hình.',
    fullDescription:
      'Tập trung vào bố cục, ánh sáng, màu sắc và cảm xúc để tạo nên bộ ảnh có tính nghệ thuật.',
    highlights: ['Bố cục và ánh sáng có chủ đích', 'Tông màu hồng pastel nhẹ nhàng', 'Cảm xúc là trung tâm của bộ ảnh'],
    gallery: [img(4), img(2), img(5), img(3), img(6)],
  },
  {
    id: 'historical-costume',
    name: 'Chụp ảnh cổ trang',
    badge: 'Concept 03',
    image: img(9),
    imagePosition: 'center 35%',
    description: 'Trang phục, bối cảnh và tạo hình mang tinh thần cổ trang.',
    fullDescription:
      'Nhấn mạnh trang phục, bối cảnh và tạo hình mang tinh thần cổ trang.',
    highlights: ['Trang phục và phụ kiện giàu tính tạo hình', 'Bối cảnh mang không khí hoài cổ', 'Tông màu trắng kem, xanh nhạt dịu mắt'],
    gallery: [img(9), img(8), img(7), img(11), img(12), img(13), img(14)],
  },
  {
    id: 'portrait',
    name: 'Chụp ảnh chân dung',
    badge: 'Concept 04',
    image: img(6),
    imagePosition: 'center 25%',
    description: 'Tập trung vào gương mặt, biểu cảm và thần thái.',
    fullDescription: 'Tập trung vào gương mặt, biểu cảm và thần thái.',
    highlights: ['Đặc tả gương mặt và biểu cảm', 'Ánh sáng mềm, màu da tự nhiên', 'Thần thái là điểm nhấn của bộ ảnh'],
    gallery: [img(6), img(1), img(13), img(9), img(11), img(5)],
  },
  {
    id: 'custom-theme',
    name: 'Chụp ảnh theo chủ đề và phong cách riêng',
    badge: 'Concept 05',
    image: img(15),
    imagePosition: 'center 30%',
    description: 'Biến ý tưởng chủ đề của bạn thành bộ ảnh riêng.',
    fullDescription:
      'Dành cho những ý tưởng chụp ảnh theo chủ đề mà khách hàng mong muốn thực hiện. Hãy chia sẻ ý tưởng, MOOD Studio sẽ trao đổi thêm cùng bạn.',
    highlights: ['Lên ý tưởng theo chủ đề riêng của bạn', 'Trao đổi trực tiếp với studio trước buổi chụp'],
    gallery: [img(15), img(16), img(10), img(14), img(7), img(12)],
  },
];

// Portfolio: chỉ phân loại những nhóm đã kiểm tra được qua ảnh thật
export const galleryFilters = [
  { id: 'all', label: 'Tất cả' },
  { id: 'artistic', label: 'Nghệ thuật' },
  { id: 'historical', label: 'Cổ trang' },
  { id: 'portrait', label: 'Chân dung' },
];

export const gallery = [
  { n: 2, cats: ['artistic'], alt: 'Chân dung nữ với voan hồng và hoa, tông pastel' },
  { n: 9, cats: ['historical', 'portrait'], alt: 'Chân dung áo dài trắng cùng nón lá cài hoa xanh' },
  { n: 3, cats: ['artistic'], alt: 'Dáng nghiêng nhìn lại cùng váy tơ hồng phấn' },
  { n: 13, cats: ['historical', 'portrait'], alt: 'Cận cảnh gương mặt dưới vành nón lá' },
  { n: 7, cats: ['historical'], alt: 'Áo dài trắng thêu hoa, bối cảnh cửa gỗ cổ' },
  { n: 6, cats: ['artistic', 'portrait'], alt: 'Chân dung nữ cài hoa hồng, tông hồng pastel' },
  { n: 11, cats: ['historical', 'portrait'], alt: 'Chân dung với tấm voan mỏng, hoa xanh cài tóc' },
  { n: 4, cats: ['artistic'], alt: 'Dáng ngồi với bó hoa hồng phấn và voan' },
  { n: 10, cats: ['historical'], alt: 'Tà voan bay cùng nón lá trước cổng gỗ' },
  { n: 1, cats: ['artistic', 'portrait'], alt: 'Chân dung mỉm cười cùng bó hoa pastel' },
  { n: 8, cats: ['historical'], alt: 'Áo dài trắng bên lan can xanh, hồ sen' },
  { n: 5, cats: ['artistic'], alt: 'Nghiêng nhìn xuống, hoa hồng cài tóc' },
  { n: 15, cats: ['historical'], alt: 'Tấm voan trắng bay trước cửa gỗ' },
  { n: 12, cats: ['historical', 'portrait'], alt: 'Nón lá đính hoa, bối cảnh vườn xanh' },
  { n: 14, cats: ['historical'], alt: 'Khoảnh khắc ngồi trong sân đình, nón lá bên cạnh' },
  { n: 16, cats: ['historical'], alt: 'Toàn thân áo dài trắng cùng voan trắng' },
].map((g) => ({ ...g, src: img(g.n) }));

// Bảng giá: CHƯA có dữ liệu chính thức. Khi có, thêm vào mảng này:
// { id, name, price, concept, features: [] }
export const pricingPackages = [];
