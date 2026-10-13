# PROMPT THIẾT KẾ LANDING PAGE MOOD STUDIO BẰNG REACT

## 1. VAI TRÒ VÀ MỤC TIÊU

Bạn là Senior Frontend Developer, UI/UX Designer và chuyên gia thiết kế website cho studio nhiếp ảnh nghệ thuật, chụp ảnh concept cá nhân và chân dung nữ giới.

Hãy xây dựng một website landing page chuyên nghiệp cho **MOOD Studio**, một studio chụp ảnh tại Thành phố Hồ Chí Minh, với phong cách thiết kế Feminine, Elegant, Artistic, nhẹ nhàng và sang trọng.

Website cần tập trung vào hình ảnh, cảm xúc, phong cách nghệ thuật và khả năng chuyển đổi khách truy cập thành khách hàng đặt lịch chụp.

Mục tiêu chính:

- Giới thiệu thương hiệu MOOD Studio.
- Trưng bày portfolio ảnh thực tế một cách nghệ thuật và chuyên nghiệp.
- Giới thiệu các concept chụp ảnh đa dạng.
- Giúp khách hàng khám phá, lựa chọn và so sánh các concept.
- Trình bày bảng giá theo từng gói chụp.
- Cho phép khách hàng gửi yêu cầu đặt lịch chụp.
- Tăng lượt liên hệ qua điện thoại, Facebook Messenger và Zalo khi có thông tin liên hệ chính xác.
- Tối ưu trải nghiệm trên desktop, tablet và mobile.
- Xây dựng nền tảng giao diện có thể mở rộng trong tương lai để quản lý concept, bảng giá và yêu cầu đặt lịch.

**Yêu cầu quan trọng:** Giữ nguyên các thông tin do khách hàng cung cấp. Không tự ý thay đổi tên thương hiệu, dịch vụ, nhóm khách hàng mục tiêu hoặc định hướng thẩm mỹ. Không tự bịa giá, tên concept chính thức, ưu đãi, đánh giá khách hàng hoặc thông tin chưa được xác minh.

---

## 2. CÔNG NGHỆ SỬ DỤNG

Sử dụng các công nghệ sau:

- React để xây dựng giao diện.
- Vite để khởi tạo dự án nếu chưa có dự án hiện tại.
- JavaScript hoặc TypeScript.
- CSS Modules, CSS thuần hoặc Tailwind CSS.
- React Router nếu cần các đường dẫn riêng cho chi tiết concept.
- Lucide React để sử dụng icon.
- Framer Motion hoặc Motion để tạo hiệu ứng chuyển động.
- React Hook Form nếu cần quản lý biểu mẫu đặt lịch.

Ưu tiên sử dụng thư viện và cấu trúc hiện có nếu dự án đã được khởi tạo.

Giai đoạn hiện tại tập trung triển khai frontend React. Không tự tạo backend, database hoặc API giả và không mô phỏng rằng yêu cầu đặt lịch đã được gửi đến studio khi chưa tích hợp hệ thống xử lý thực tế.

Mọi tính năng phải được tổ chức theo component, dễ bảo trì và thuận tiện mở rộng.

---

## 3. THÔNG TIN THƯƠNG HIỆU

### 3.1. Thông tin cơ bản

- Tên thương hiệu: MOOD Studio.
- Lĩnh vực: Studio nhiếp ảnh.
- Khu vực hoạt động: Thành phố Hồ Chí Minh, Việt Nam.
- Phong cách thiết kế: Feminine, Elegant, Artistic.
- Tông màu: Hồng pastel, trắng kem và be.
- Định hướng hình ảnh: Nhẹ nhàng, nghệ thuật, giàu cảm xúc và sang trọng.

### 3.2. Thông tin liên hệ

Số điện thoại được cung cấp:

`866.138.799`

Facebook:

https://www.facebook.com/profile.php?id=61592669727656

Tên địa điểm Google Maps:

`MOOD STUDIO - Google Maps`

Lưu ý:

- Giữ nguyên số điện thoại trong dữ liệu gốc.
- Số điện thoại chưa được xác nhận là số đầy đủ theo định dạng Việt Nam. Không tự ý thêm số 0 hoặc mã quốc gia để tạo liên kết gọi điện.
- Chỉ bật nút gọi điện khi số điện thoại đã được xác minh.
- Có thể sử dụng URL Facebook đã cung cấp làm liên kết đến trang Facebook chính thức được chỉ định.
- Có thể sử dụng Facebook như kênh tham khảo portfolio khi nội dung công khai truy cập được.
- Chưa có URL Google Maps cụ thể, vì vậy không tự tạo link bản đồ hoặc tọa độ.
- Chưa có link Zalo hoặc Messenger trực tiếp. Chỉ tạo nút khi đã xác định đúng tài khoản hoặc đường dẫn cần sử dụng.

### 3.3. Dịch vụ chính thức

Giữ đầy đủ các dịch vụ sau:

1. Chụp ảnh concept cá nhân.
2. Chụp ảnh nghệ thuật.
3. Chụp ảnh cổ trang.
4. Chụp ảnh chân dung.
5. Chụp ảnh theo chủ đề và phong cách riêng.

Không loại bỏ dịch vụ nào khi thiết kế giao diện.

### 3.4. Khách hàng mục tiêu

- Nữ giới từ 18–35 tuổi.
- Sinh viên.
- Người yêu thích chụp ảnh nghệ thuật.
- Khách hàng muốn lưu giữ kỷ niệm.
- Khách hàng muốn chụp ảnh sinh nhật.
- Khách hàng muốn thực hiện concept cá nhân.

Nội dung và hình ảnh phải hướng đến nhóm khách hàng này, đặc biệt là những người quan tâm đến phong cách cá nhân, vẻ đẹp nữ tính, thời trang, trang phục nghệ thuật và trải nghiệm chụp ảnh.

### 3.5. Định vị thương hiệu

MOOD Studio có những đặc điểm được cung cấp:

- Hình ảnh nghệ thuật có phong cách riêng.
- Đa dạng concept nữ tính và cổ trang.
- Chú trọng bối cảnh.
- Chú trọng trang phục.
- Chú trọng màu sắc.
- Chú trọng cảm xúc trong ảnh.
- Có portfolio thực tế trên Facebook.

Hãy thể hiện những đặc điểm này thông qua bố cục, màu sắc, gallery và cách trình bày concept.

Không tự tuyên bố studio có đội ngũ chuyên gia, trang thiết bị cao cấp, dịch vụ trang điểm, cho thuê trang phục hoặc quy trình hậu kỳ cụ thể khi chưa được cung cấp thông tin.

### 3.6. Nguồn hình ảnh

Thư mục hình ảnh khách hàng cung cấp:

https://drive.google.com/drive/u/0/folders/1XM9ldM-pAQJyT-PNzjs5yQRz2pB7mNsB

Đây là nguồn ảnh ưu tiên hàng đầu để xây dựng website.

Hãy kiểm tra và phân loại ảnh theo các nhóm:

- Ảnh concept nữ tính.
- Ảnh concept cổ trang.
- Ảnh chân dung.
- Ảnh nghệ thuật.
- Ảnh concept sinh nhật nếu có.
- Ảnh concept cá nhân.
- Ảnh hậu trường hoặc không gian studio nếu có.
- Ảnh trang phục, bối cảnh và chi tiết tạo hình.

Nếu không thể truy cập Google Drive trực tiếp, hãy ghi rõ rằng cần tải ảnh về dự án. Không được giả định đã xem hoặc tải thành công các ảnh trong thư mục.

Cấu trúc tài nguyên đề xuất:

`public/images/hero/`

`public/images/concepts/`

`public/images/portraits/`

`public/images/ancient/`

`public/images/artistic/`

`public/images/gallery/`

`public/images/studio/`

Sử dụng ảnh thực tế của MOOD Studio làm nội dung chính. Không thay thế portfolio thật bằng hình ảnh stock hoặc hình AI không liên quan rồi trình bày như ảnh khách hàng thực tế.

---

## 4. ĐỊNH HƯỚNG THIẾT KẾ UI/UX

### 4.1. Phong cách chủ đạo

Thiết kế theo hướng:

**Feminine — Elegant — Artistic — Editorial — Romantic.**

Website cần tạo cảm giác như một tạp chí thời trang và nghệ thuật nhiếp ảnh cao cấp.

Các đặc điểm cần có:

- Nhiều khoảng trắng.
- Bố cục hình ảnh có chủ đích.
- Tiêu đề lớn, thanh lịch.
- Đường nét mảnh.
- Các khối nội dung tối giản.
- Hình ảnh chiếm vai trò trung tâm.
- Hiệu ứng chuyển động mềm mại.
- Hệ thống card không quá cứng nhắc.
- Cách trình bày có tính biên tập, tránh cảm giác website bán hàng đại trà.

Không sử dụng giao diện quá nhiều màu sắc, icon hoạt hình, hiệu ứng neon hoặc gradient rực rỡ.

### 4.2. Bảng màu

Sử dụng các màu sau làm định hướng:

- Hồng pastel: `#E8BFC9`
- Hồng phấn nhạt: `#F6E5E8`
- Trắng kem: `#FFFDF9`
- Be nhạt: `#EDE1D5`
- Nâu xám: `#75645F`
- Đen mềm: `#292524`
- Trắng: `#FFFFFF`

Nguyên tắc phân bổ:

- Trắng kem chiếm phần lớn diện tích.
- Hồng pastel được sử dụng cho điểm nhấn, nền một số section và CTA phụ.
- Be tạo chiều sâu cho các khu vực giới thiệu hoặc bảng giá.
- Văn bản dùng nâu xám hoặc đen mềm.
- Nút CTA chính phải nổi bật nhưng vẫn giữ vẻ tinh tế.

Không sử dụng hồng đậm quá mức. Tránh để toàn bộ trang có cùng một màu nền gây đơn điệu.

### 4.3. Typography

Ưu tiên kết hợp hai phong cách font:

- Font serif thanh lịch cho tiêu đề nghệ thuật.
- Font sans-serif hiện đại cho nội dung và thành phần giao diện.

Có thể tham khảo Playfair Display, Cormorant Garamond, Be Vietnam Pro hoặc Inter, tùy điều kiện tải font.

Yêu cầu:

- Tiêu đề có cá tính, tạo cảm giác editorial.
- Nội dung dễ đọc.
- Font hỗ trợ tiếng Việt đầy đủ.
- Không sử dụng quá nhiều font khác nhau.
- Phân cấp H1, H2, H3 rõ ràng.
- Tiêu đề tự điều chỉnh theo màn hình bằng `clamp()`.
- Không để chữ đè lên gương mặt hoặc chi tiết quan trọng của ảnh.

### 4.4. Bố cục hình ảnh

Portfolio là thành phần quan trọng nhất của website.

Yêu cầu:

- Ảnh có tỷ lệ thống nhất trong cùng một nhóm.
- Có thể kết hợp ảnh dọc 4:5, ảnh vuông 1:1 và ảnh ngang 3:2.
- Ưu tiên ảnh dọc cho concept chân dung.
- Sử dụng masonry grid hoặc editorial grid có nhịp điệu.
- Không hiển thị quá nhiều ảnh nhỏ khiến website giống thư viện ảnh thông thường.
- Không crop mất gương mặt, tóc, trang phục hoặc các chi tiết quan trọng.
- Sử dụng `object-fit: cover` và điều chỉnh `object-position`.
- Thêm hover zoom nhẹ, không phóng đại quá mức.
- Ảnh có thể mở trong lightbox.
- Tối ưu kích thước và dung lượng ảnh.

Không thêm văn bản giả, watermark hoặc logo không được cung cấp lên ảnh.

---

## 5. CẤU TRÚC LANDING PAGE CHI TIẾT

### SECTION 1 — HEADER

Thiết kế header tối giản, thanh lịch.

Bên trái:

`MOOD STUDIO`

Có thể trình bày bằng wordmark chữ serif hoặc sans-serif có phong cách riêng. Nếu chưa có logo chính thức, không tự tạo biểu tượng và khẳng định đó là logo gốc.

Bên phải:

- Trang chủ.
- Giới thiệu.
- Concept.
- Bộ sưu tập.
- Bảng giá.
- Liên hệ.

CTA chính:

`Đặt lịch chụp`

Yêu cầu:

- Header nền trắng kem.
- Có thể sticky khi cuộn.
- Chiều cao vừa phải.
- Khoảng cách giữa các mục thoáng.
- Hiệu ứng hover tinh tế.
- Khi cuộn, có bóng đổ nhẹ.
- Menu mobile sử dụng hamburger.
- Khi chọn menu trên mobile, đóng menu và cuộn đến đúng section.
- Không để header che tiêu đề section.
- Không sử dụng các nút quá to làm mất cảm giác sang trọng.

### SECTION 2 — HERO BANNER

Đây là section quan trọng nhất, cần tạo ấn tượng thị giác ngay khi khách truy cập.

Phong cách:

- Hình ảnh concept nữ giới chất lượng cao.
- Bố cục editorial.
- Nền trắng kem hoặc be.
- Có thể dùng một ảnh dọc lớn kết hợp ảnh phụ.
- Chữ và ảnh cân bằng, không lấn át nhau.

Nội dung đề xuất:

Eyebrow:

`A SPACE FOR YOUR MOOD`

Tiêu đề H1:

`MOOD Studio`

Tiêu đề phụ:

`Your mood, your art, your story.`

Mô tả tiếng Việt:

`Mỗi concept là một cách kể câu chuyện riêng qua ánh sáng, trang phục, màu sắc và cảm xúc.`

CTA chính:

`Khám phá concept`

CTA phụ:

`Đặt lịch chụp`

Có thể thêm dòng định vị:

`Artistic Portraits · Personal Concepts · Creative Photography`

Lưu ý: Các dòng tiếng Anh là nội dung sáng tạo đề xuất, không thay thế tên thương hiệu hoặc dịch vụ chính thức.

Hiệu ứng:

- Ảnh hero xuất hiện bằng fade-in.
- Tiêu đề xuất hiện bằng fade-up.
- CTA xuất hiện sau tiêu đề.
- Có thể sử dụng chuyển động parallax nhẹ trên desktop.
- Không sử dụng hiệu ứng gây giật, nhấp nháy hoặc ảnh hưởng hiệu suất.

Hero phải hiển thị tốt ở cả desktop và mobile. Trên mobile, ưu tiên ảnh và tiêu đề, không để nội dung quan trọng bị đẩy quá xa xuống dưới.

### SECTION 3 — GIỚI THIỆU MOOD STUDIO

Tiêu đề:

`Không chỉ là một bức ảnh`

Mô tả đề xuất:

`MOOD Studio hướng đến những hình ảnh nghệ thuật mang phong cách riêng, nơi bối cảnh, trang phục, màu sắc và cảm xúc cùng tạo nên một câu chuyện bằng hình ảnh.`

Đoạn nội dung tiếp theo:

`Từ những concept nữ tính, nhẹ nhàng đến phong cách cổ trang giàu tính tạo hình, mỗi bộ ảnh mở ra một cách thể hiện cá tính và lưu giữ những khoảnh khắc đáng nhớ.`

Trình bày bằng bố cục hai cột:

- Một bên là ảnh concept nổi bật.
- Một bên là tiêu đề và nội dung.
- Có thể thêm một ảnh phụ nhỏ tạo bố cục editorial.

Làm nổi bật các từ khóa:

- Phong cách riêng.
- Cảm xúc.
- Bối cảnh.
- Trang phục.
- Màu sắc.

Không tự thêm các cam kết về chất lượng dịch vụ hoặc quy trình vận hành chưa được xác nhận.

### SECTION 4 — KHÁM PHÁ DANH SÁCH CONCEPT

Tiêu đề:

`Find Your Mood`

Mô tả:

`Khám phá những phong cách chụp ảnh phù hợp với cá tính, cảm xúc và câu chuyện bạn muốn lưu giữ.`

Tạo danh sách concept theo các nhóm dịch vụ chính thức:

**Concept 01 — Chụp ảnh concept cá nhân**

Dành cho khách hàng muốn thể hiện phong cách và cá tính riêng thông qua hình ảnh.

**Concept 02 — Chụp ảnh nghệ thuật**

Tập trung vào bố cục, ánh sáng, màu sắc và cảm xúc để tạo nên bộ ảnh có tính nghệ thuật.

**Concept 03 — Chụp ảnh cổ trang**

Nhấn mạnh trang phục, bối cảnh và tạo hình mang tinh thần cổ trang.

**Concept 04 — Chụp ảnh chân dung**

Tập trung vào gương mặt, biểu cảm và thần thái.

**Concept 05 — Chụp ảnh theo chủ đề và phong cách riêng**

Dành cho những ý tưởng chụp ảnh theo chủ đề mà khách hàng mong muốn thực hiện.

Đây là năm nhóm dịch vụ được cung cấp, không nhất thiết là năm gói dịch vụ thương mại chính thức.

Bố cục:

- Desktop: 3 cột hoặc editorial grid.
- Tablet: 2 cột.
- Mobile: 1 cột hoặc 2 cột tùy kích thước ảnh.
- Mỗi card có ảnh nổi bật, tên concept, mô tả ngắn và nút `Khám phá`.
- Hover làm ảnh phóng to nhẹ.
- Các card xuất hiện lần lượt khi cuộn.

Không tự đặt tên những concept như nàng thơ, công chúa, vintage, Trung Hoa hoặc Hàn Quốc thành dịch vụ chính thức nếu chưa có ảnh và thông tin xác nhận.

Nếu những phong cách này xuất hiện trong portfolio thực tế, có thể sử dụng chúng làm nhãn phân loại sau khi kiểm tra ảnh.

### SECTION 5 — CHI TIẾT CONCEPT

Khi khách hàng chọn một concept, mở trang chi tiết hoặc modal tương ứng.

Mỗi trang chi tiết nên có:

- Tên concept.
- Ảnh bìa.
- Gallery ảnh.
- Mô tả phong cách.
- Tông màu chủ đạo.
- Định hướng tạo hình.
- Thông tin gói chụp liên quan nếu đã được xác nhận.
- Nút `Chọn concept này`.
- Nút `Đặt lịch chụp`.

Tính năng:

- Chuyển ảnh trước/sau.
- Mở ảnh toàn màn hình.
- Đóng modal bằng nút đóng hoặc Escape.
- Hỗ trợ bàn phím.
- Không để modal vượt khỏi màn hình điện thoại.
- Khi chọn concept, lưu lựa chọn vào trạng thái giao diện để tự điền vào form đặt lịch.

Nếu chưa có thông tin về thời lượng chụp, trang phục, makeup hoặc số lượng ảnh bàn giao, không tự tạo dữ liệu đó.

### SECTION 6 — PORTFOLIO / BỘ SƯU TẬP ẢNH

Tiêu đề:

`The Art of Mood`

Mô tả:

`Mỗi khung hình là một sắc thái, mỗi concept là một câu chuyện riêng.`

Đây là section trọng tâm của website.

Thiết kế portfolio theo dạng editorial gallery:

- Một ảnh lớn làm điểm nhấn.
- Các ảnh dọc được sắp xếp xen kẽ.
- Khoảng trắng tạo nhịp điệu.
- Hình ảnh rõ nét, không bị méo.
- Bố cục có chiều sâu nhưng không rối mắt.

Có thể tạo các bộ lọc:

- Tất cả.
- Concept cá nhân.
- Nghệ thuật.
- Cổ trang.
- Chân dung.
- Concept theo chủ đề.

Chỉ hiển thị bộ lọc tương ứng với ảnh đã được phân loại.

Tương tác:

- Click ảnh để mở lightbox.
- Nút chuyển ảnh trước/sau.
- Hỗ trợ vuốt trên mobile.
- Đóng bằng Escape.
- Có thể hiển thị số thứ tự ảnh.
- Không tải toàn bộ ảnh độ phân giải lớn ngay khi mở trang.

Ưu tiên ảnh thật từ Google Drive và Facebook.

Không tự nhận hình ảnh minh họa từ nguồn khác là portfolio của MOOD Studio.

### SECTION 7 — BẢNG GIÁ THEO GÓI

Tiêu đề:

`Choose Your Experience`

Mô tả:

`Lựa chọn gói chụp phù hợp với concept và nhu cầu của bạn.`

Thiết kế bảng giá tối giản, sang trọng:

- Nền trắng kem.
- Viền mảnh màu be.
- Tiêu đề serif.
- Điểm nhấn hồng pastel.
- CTA rõ ràng.
- Các gói được trình bày cân đối.

Mỗi gói có thể chứa:

- Tên gói.
- Giá.
- Concept áp dụng.
- Thời lượng chụp.
- Số lượng ảnh.
- Makeup và trang phục nếu có.
- Quyền lợi.
- Nút đặt lịch.

Tuy nhiên, hiện chưa có dữ liệu giá và quyền lợi chính thức.

Bắt buộc:

- Không tự tạo giá.
- Không tạo giá khuyến mãi.
- Không tạo giá gạch ngang.
- Không tự đặt tên gói thương mại.
- Không tự đặt số lượng ảnh bàn giao.
- Không tự thêm makeup, trang phục hoặc chỉnh sửa ảnh vào gói.
- Không sử dụng `0đ` làm giá thật.

Nếu chưa có dữ liệu, thay bảng giá cụ thể bằng các khối thông tin chờ cập nhật và CTA:

`Bạn đang tìm concept phù hợp?`

`Liên hệ MOOD Studio để tìm hiểu thông tin gói chụp và chi phí.`

Nút:

`Yêu cầu báo giá`

Thiết kế dữ liệu tách biệt khỏi giao diện để có thể cập nhật bảng giá sau này mà không phải viết lại component.

### SECTION 8 — QUY TRÌNH ĐẶT LỊCH CHỤP

Tiêu đề:

`Your Photoshoot Journey`

Trình bày ba bước đơn giản:

**01. Chọn concept**

Khám phá portfolio và chọn phong cách chụp mà bạn yêu thích.

**02. Gửi yêu cầu đặt lịch**

Điền thông tin liên hệ, concept và thời gian mong muốn.

**03. Xác nhận lịch với studio**

Studio trao đổi lại để xác nhận lịch chụp, thông tin gói và chi phí.

Thiết kế bằng ba khối nội dung có số thứ tự lớn, icon tối giản và đường nối nhẹ.

Không khẳng định lịch chụp đã được giữ chỗ hoặc xác nhận tự động nếu chưa có hệ thống xử lý thực tế.

### SECTION 9 — CHỌN CONCEPT

Tiêu đề:

`Concept nào dành cho bạn?`

Mô tả:

`Hãy bắt đầu bằng phong cách bạn yêu thích, MOOD sẽ giúp bạn gửi yêu cầu để trao đổi thêm về buổi chụp.`

Tạo khu vực chọn concept trực quan:

- Hiển thị ảnh thumbnail.
- Tên concept.
- Cho phép chọn một concept.
- Hiển thị trạng thái được chọn.
- Có nút tiếp tục đến form đặt lịch.

Khi khách chọn concept:

- Đánh dấu card đã chọn.
- Hiển thị viền hoặc nền hồng pastel nhẹ.
- Lưu concept trong React state.
- Chuyển lựa chọn vào trường concept trong form đặt lịch.
- Cho phép khách đổi lựa chọn.
- Không yêu cầu khách chọn concept nếu họ muốn tư vấn trước.

Không hiển thị các lựa chọn giả nếu chưa có dữ liệu. Có thể sử dụng năm nhóm dịch vụ chính thức ở Section 4 làm lựa chọn ban đầu.

### SECTION 10 — FORM ĐẶT LỊCH CHỤP

Tiêu đề:

`Let's Create Something Beautiful`

Mô tả:

`Chia sẻ với MOOD Studio ý tưởng và thời gian bạn mong muốn để bắt đầu lên kế hoạch cho bộ ảnh của mình.`

Các trường dữ liệu:

1. Họ và tên — bắt buộc.
2. Số điện thoại — bắt buộc.
3. Concept muốn chụp — tùy chọn.
4. Ngày chụp mong muốn — tùy chọn.
5. Khung giờ mong muốn — tùy chọn.
6. Số người tham gia — tùy chọn.
7. Nội dung cần tư vấn — tùy chọn.

CTA:

`Gửi yêu cầu đặt lịch`

Yêu cầu UI/UX:

- Label rõ ràng.
- Input có trạng thái focus.
- Validation dễ hiểu.
- Số điện thoại được kiểm tra hợp lý.
- Ngày chụp không được ở quá khứ.
- Hiển thị lỗi bên dưới trường tương ứng.
- Có trạng thái đang gửi.
- Chặn nhấn gửi liên tục.
- Responsive trên mobile.
- Trường concept có thể tự điền từ lựa chọn trước đó.

Vì hiện chỉ triển khai frontend:

- Không giả lập gửi thành công nếu chưa có API.
- Nếu chưa kết nối hệ thống, hiển thị thông báo rằng biểu mẫu chưa được kết nối.
- Cung cấp hướng liên hệ thay thế qua Facebook đã được cung cấp.
- Không lưu thông tin cá nhân vào localStorage nếu không thực sự cần thiết.
- Tổ chức form thành component riêng để sau này dễ kết nối backend hoặc dịch vụ quản lý lịch.

### SECTION 11 — KHU VỰC KẾT NỐI FACEBOOK

Tiêu đề:

`Explore More on Facebook`

Mô tả:

`Khám phá thêm những bộ ảnh và phong cách nghệ thuật của MOOD Studio.`

Liên kết chính thức:

https://www.facebook.com/profile.php?id=61592669727656

Nút:

`Xem portfolio trên Facebook`

Yêu cầu:

- Mở liên kết Facebook trong tab mới.
- Sử dụng `target="_blank"` kèm `rel="noopener noreferrer"`.
- Có thể sử dụng icon Facebook.
- Không tự tạo số lượt theo dõi, lượt thích hoặc đánh giá.
- Không nhúng iframe Facebook nếu không cần thiết.
- Nếu không thể truy cập dữ liệu Facebook, chỉ hiển thị nút điều hướng đến trang chính thức.

### SECTION 12 — LIÊN HỆ

Tiêu đề:

`Let's Talk About Your Mood`

Nội dung:

`Bạn đang có ý tưởng cho một bộ ảnh riêng? Hãy liên hệ với MOOD Studio để trao đổi về concept bạn yêu thích.`

Thông tin hiển thị:

- MOOD Studio.
- Studio nhiếp ảnh.
- Thành phố Hồ Chí Minh.
- Số điện thoại theo dữ liệu gốc: `866.138.799`.
- Facebook chính thức.
- Google Maps khi có URL chính xác.

Nút CTA:

- Gửi yêu cầu đặt lịch.
- Xem Facebook.
- Gọi điện khi số đã xác minh.
- Zalo khi đã có link hoặc tài khoản chính xác.
- Messenger khi đã có URL phù hợp.

Không để nút không hoạt động hoặc dẫn tới URL giả.

### SECTION 13 — FOOTER

Footer cần có:

- MOOD Studio.
- Mô tả ngắn về studio.
- Menu điều hướng.
- Danh sách dịch vụ.
- Liên kết Facebook.
- Thông tin liên hệ.
- Bản quyền website.

Có thể dùng nền be nhạt, chữ nâu xám và các đường phân cách mảnh.

Không tự tạo địa chỉ đường phố, mã số thuế hoặc thông tin doanh nghiệp chưa được cung cấp.

---

## 6. ANIMATION VÀ MICRO-INTERACTION

Tạo animation có tính nghệ thuật, nhẹ nhàng và đồng nhất.

### Hiệu ứng khi cuộn

- Tiêu đề fade-up.
- Mô tả xuất hiện dần.
- Ảnh slide-in nhẹ từ hai bên.
- Các card concept xuất hiện lần lượt.
- Gallery có stagger animation.
- Các đường trang trí xuất hiện từ từ.

### Hiệu ứng hover

- Ảnh zoom nhẹ.
- CTA chuyển màu tinh tế.
- Card dịch chuyển lên một khoảng nhỏ.
- Icon mũi tên di chuyển nhẹ.
- Link có underline animation.

### Chuyển động giữa các trạng thái

- Chuyển tab concept mượt.
- Chuyển ảnh lightbox.
- Mở modal chi tiết.
- Hiển thị trạng thái concept đã chọn.
- Mở menu mobile.
- Hiển thị lỗi hoặc thông báo form.

### Nguyên tắc hiệu suất

- Không dùng hiệu ứng nặng trên toàn bộ gallery.
- Không làm ảnh bị rung hoặc giật.
- Không dùng parallax mạnh.
- Hạn chế animation blur và filter lớn.
- Sử dụng `transform` và `opacity` khi phù hợp.
- Tôn trọng `prefers-reduced-motion`.
- Nội dung không phụ thuộc hoàn toàn vào JavaScript animation mới hiển thị.

---

## 7. RESPONSIVE DESIGN

Thiết kế theo phương pháp mobile-first.

### Desktop — từ 1200px

- Header một hàng.
- Hero có bố cục editorial.
- Gallery có nhiều kích thước ảnh.
- Concept card hiển thị 3 cột nếu phù hợp.
- Bảng giá trình bày cân đối.
- Form đặt lịch có thể chia hai cột.

### Tablet — 768px đến 1199px

- Gallery chuyển sang 2 cột.
- Tiêu đề giảm kích thước.
- Các khoảng trắng được tinh chỉnh.
- Menu được rút gọn.
- Form dễ thao tác.

### Mobile — dưới 768px

- Header hamburger.
- Nội dung chính một cột.
- Gallery hiển thị 1–2 cột tùy kích thước.
- Ảnh dọc ưu tiên cho chân dung.
- CTA đủ lớn để chạm.
- Không có horizontal scroll.
- Form đặt lịch không tràn màn hình.
- Không để text đè lên chủ thể.
- Có thể sử dụng thanh CTA cố định ở cuối màn hình nếu không che nội dung.

Kiểm tra ở các độ rộng 360px, 390px, 768px, 1024px, 1280px và 1440px.

---

## 8. SEO VÀ HIỆU SUẤT

### SEO

Tối ưu các từ khóa phù hợp:

- MOOD Studio.
- Studio chụp ảnh nghệ thuật Hồ Chí Minh.
- Chụp ảnh concept cá nhân.
- Chụp ảnh cổ trang.
- Chụp ảnh chân dung nghệ thuật.
- Chụp ảnh concept nữ.
- Chụp ảnh sinh nhật theo concept.

Không nhồi nhét từ khóa.

Thiết lập:

- Title.
- Meta description.
- Open Graph.
- Canonical khi có domain chính thức.
- Favicon khi có logo.
- Heading hierarchy.
- Alt text cho ảnh.
- URL thân thiện nếu có trang chi tiết concept.
- Structured data phù hợp khi đủ dữ liệu xác thực.

Title gợi ý:

`MOOD Studio | Chụp Ảnh Concept & Nghệ Thuật Tại TP.HCM`

Meta description gợi ý:

`Khám phá MOOD Studio với các phong cách chụp ảnh concept cá nhân, nghệ thuật, cổ trang, chân dung và theo chủ đề riêng tại TP.HCM.`

### Hiệu suất

- Chuyển ảnh sang WebP hoặc AVIF khi phù hợp.
- Lazy load ảnh bên dưới màn hình đầu tiên.
- Không lazy load ảnh hero quan trọng nếu gây chậm hiển thị.
- Sử dụng responsive images khi có nhiều kích thước ảnh.
- Khai báo kích thước ảnh hoặc aspect ratio.
- Tránh tải tất cả ảnh độ phân giải lớn ngay từ đầu.
- Tối ưu font.
- Hạn chế thư viện không cần thiết.
- Kiểm tra Core Web Vitals.
- Tránh layout shift.
- Mục tiêu đạt điểm Lighthouse cao trong điều kiện thực tế.

### Accessibility

- Semantic HTML.
- Alt text.
- Label cho input.
- Focus state rõ ràng.
- Tương phản màu tốt.
- Modal hỗ trợ Escape.
- Điều hướng bằng bàn phím.
- Tôn trọng reduced motion.

---

## 9. CẤU TRÚC COMPONENT ĐỀ XUẤT

```text
src/
├── components/
│   ├── Header.jsx
│   ├── MobileMenu.jsx
│   ├── HeroSection.jsx
│   ├── AboutSection.jsx
│   ├── ConceptSection.jsx
│   ├── ConceptCard.jsx
│   ├── ConceptDetail.jsx
│   ├── PortfolioSection.jsx
│   ├── GalleryGrid.jsx
│   ├── Lightbox.jsx
│   ├── PricingSection.jsx
│   ├── BookingSteps.jsx
│   ├── ConceptSelector.jsx
│   ├── BookingForm.jsx
│   ├── ContactSection.jsx
│   ├── ContactButtons.jsx
│   ├── BackToTop.jsx
│   └── Footer.jsx
├── data/
│   ├── concepts.js
│   ├── gallery.js
│   ├── pricing.js
│   └── contact.js
├── hooks/
│   └── useScrollPosition.js
├── styles/
│   ├── global.css
│   ├── variables.css
│   └── animations.css
├── App.jsx
└── main.jsx
```

Có thể điều chỉnh cấu trúc nếu dự án hiện tại đã có kiến trúc tốt hơn.

Nguyên tắc:

- Không viết toàn bộ website trong một component duy nhất.
- Không lặp lại markup giữa các card.
- Dùng component tái sử dụng.
- Dữ liệu concept tách khỏi giao diện.
- Giá được quản lý độc lập.
- Thông tin liên hệ tập trung trong một file.
- Gallery có thể cập nhật ảnh mà không phải sửa component.
- Không hardcode cùng một URL ở nhiều nơi.

---

## 10. CẤU TRÚC DỮ LIỆU CONCEPT

Tạo cấu trúc dữ liệu có thể mở rộng.

Ví dụ:

```js
export const concepts = [
  {
    id: "personal-concept",
    title: "Chụp ảnh concept cá nhân",
    description:
      "Thể hiện phong cách và cá tính riêng qua hình ảnh.",
    category: "personal",
    coverImage: "",
    gallery: [],
    pricingId: null,
  },
  {
    id: "artistic-photography",
    title: "Chụp ảnh nghệ thuật",
    description:
      "Tập trung vào bố cục, ánh sáng, màu sắc và cảm xúc.",
    category: "artistic",
    coverImage: "",
    gallery: [],
    pricingId: null,
  },
  {
    id: "historical-costume",
    title: "Chụp ảnh cổ trang",
    description:
      "Phong cách tạo hình cổ trang với sự chú trọng vào trang phục và bối cảnh.",
    category: "historical",
    coverImage: "",
    gallery: [],
    pricingId: null,
  },
  {
    id: "portrait",
    title: "Chụp ảnh chân dung",
    description:
      "Tập trung vào gương mặt, biểu cảm và thần thái.",
    category: "portrait",
    coverImage: "",
    gallery: [],
    pricingId: null,
  },
  {
    id: "custom-theme",
    title: "Chụp ảnh theo chủ đề và phong cách riêng",
    description:
      "Lựa chọn chủ đề phù hợp với ý tưởng cá nhân.",
    category: "custom",
    coverImage: "",
    gallery: [],
    pricingId: null,
  },
];
```

Đây là dữ liệu khởi tạo theo những dịch vụ đã cung cấp. Hình ảnh, giá và các trường chưa có dữ liệu cần được bổ sung sau.

Không dùng các chuỗi rỗng hoặc dữ liệu mẫu như thông tin đã xác thực. Ẩn những trường chưa có dữ liệu khỏi giao diện công khai.

---

## 11. NGUYÊN TẮC KHÔNG ĐƯỢC VI PHẠM

1. Không thay đổi tên MOOD Studio.
2. Không bỏ sót bất kỳ dịch vụ chính thức nào.
3. Không thay đổi nhóm khách hàng mục tiêu.
4. Không tự tạo giá.
5. Không tự tạo tên gói thương mại.
6. Không tự tạo ưu đãi.
7. Không tạo review hoặc testimonial giả.
8. Không tự tạo số lượng khách đã chụp.
9. Không tạo số sao đánh giá.
10. Không tự tạo địa chỉ studio cụ thể.
11. Không tự tạo URL Google Maps.
12. Không thêm số 0 hoặc mã quốc gia vào số điện thoại khi chưa xác minh.
13. Không tạo link Zalo hoặc Messenger giả.
14. Không sử dụng ảnh stock như portfolio thật.
15. Không gán sai phong cách hoặc concept cho ảnh.
16. Không tự tuyên bố có makeup, trang phục, phụ kiện hoặc dịch vụ bổ sung chưa được xác nhận.
17. Có thể biên tập câu văn để tự nhiên và chuyên nghiệp hơn nhưng phải giữ nguyên ý nghĩa.
18. Khi thiếu dữ liệu, để trạng thái chờ cập nhật thay vì bịa thông tin.
19. Không tự ý xóa nội dung khách hàng cung cấp.
20. Không tuyên bố form đã gửi hoặc lịch đã xác nhận nếu chưa có hệ thống thực tế.

---

## 12. KIỂM TRA TRƯỚC KHI HOÀN THÀNH

### Kiểm tra nội dung

- [ ] Đúng tên MOOD Studio.
- [ ] Đầy đủ năm nhóm dịch vụ.
- [ ] Đúng nhóm khách hàng mục tiêu.
- [ ] Đúng bảng màu thương hiệu.
- [ ] Có liên kết Facebook được cung cấp.
- [ ] Không có giá phòng hoặc giá gói tự tạo.
- [ ] Không có thông tin liên hệ giả.
- [ ] Không có ảnh minh họa bị nhận nhầm thành ảnh thực tế.

### Kiểm tra giao diện

- [ ] Hero nổi bật.
- [ ] Portfolio có tính nghệ thuật.
- [ ] Các concept dễ khám phá.
- [ ] Chi tiết concept hoạt động.
- [ ] Lightbox hoạt động.
- [ ] Bảng giá xử lý đúng trạng thái chưa có dữ liệu.
- [ ] Form có validation.
- [ ] Chọn concept có thể chuyển dữ liệu vào form.
- [ ] Responsive trên mobile.
- [ ] Không có horizontal scroll.
- [ ] Animation mượt và không gây giật.

### Kiểm tra kỹ thuật

- [ ] Không có lỗi console.
- [ ] Không có lỗi import.
- [ ] Không có React key warning.
- [ ] Không có ảnh lỗi.
- [ ] Không có nút không hoạt động.
- [ ] Không có URL giả.
- [ ] Không có thông báo gửi thành công giả.
- [ ] Website có thể chạy và build thành công.

---

## 13. YÊU CẦU ĐẦU RA

Hãy trực tiếp triển khai website trong dự án React, không chỉ đưa ra bản mô tả hoặc code minh họa.

Thực hiện theo thứ tự:

1. Kiểm tra cấu trúc dự án.
2. Kiểm tra thư viện và tài nguyên hiện có.
3. Tiếp nhận và phân loại ảnh thực tế từ Google Drive.
4. Xây dựng bảng màu và hệ thống typography.
5. Triển khai header và hero.
6. Triển khai các section dịch vụ, concept, portfolio và bảng giá.
7. Triển khai chức năng chọn concept.
8. Triển khai form đặt lịch.
9. Triển khai liên hệ và footer.
10. Thêm animation.
11. Kiểm tra responsive.
12. Kiểm tra lỗi và chạy thử dự án.
13. Báo cáo các chức năng đã hoàn thành và các thông tin cần bổ sung.

Nếu repository đã có sẵn, hãy tận dụng cấu trúc hiện tại và tránh xóa hoặc viết lại những phần không liên quan.

Kết quả cần đạt:

**Một landing page MOOD Studio có phong cách nữ tính, nghệ thuật và sang trọng; lấy portfolio làm trung tâm; giúp khách hàng khám phá concept, tham khảo gói chụp và gửi yêu cầu đặt lịch thuận tiện trên mọi thiết bị.**

Thứ tự ưu tiên:

1. Giữ nguyên thông tin chính thức.
2. Chất lượng hình ảnh và portfolio.
3. Thẩm mỹ tổng thể.
4. Trải nghiệm chọn concept.
5. Trải nghiệm đặt lịch.
6. Responsive.
7. SEO và hiệu suất.
8. Khả năng mở rộng và bảo trì.
