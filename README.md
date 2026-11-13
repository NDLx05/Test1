# Hầm Mỏ Thức Giấc — Chương I

Bản chơi thử độc lập v0.1.0, ưu tiên màn hình cảm ứng nằm ngang. Game web một người chơi, không tích hợp PixelWorld V2.

## Chạy ngay trên máy

Cài Node.js 22 và Python 3 nếu máy chưa có. Mở terminal tại thư mục chứa `package.json`:

```sh
npm test
npm run check
npm run build
python -m http.server 8080 --directory dist
```

Mở http://localhost:8080. Không mở index.html bằng cách nhấp đúp vì game sử dụng JavaScript modules. Không cần npm install: dự án không có thư viện phụ thuộc.

## Vòng chơi

1. Gom vật liệu tại đống gỗ phía tây làng; có thể gom lại sau 20 giây chơi.
2. Vào cửa mỏ phía đông. Đứng gần quặng, giữ nút cuốc hoặc E; chạm một lần thực hiện một nhát. Di chuyển hủy nhát chưa chạm.
3. Đào nhẹ ít ồn nhưng chậm. Đào mạnh nhanh, gây ồn hơn. Sinh vật điều tra vị trí tiếng động; vách đá làm giảm khoảng nghe. Đợi yên 4 giây để mức thức tỉnh giảm.
4. Dùng đi nhẹ, né hoặc ném đá tạo tiếng động ở nơi khác. Quái đang nhìn thấy bạn không bị đánh lạc hướng ngay.
5. Về làng với 15 gỗ, 20 đá, 10 đồng; tương tác lò rèn để nhận cuốc đồng.
6. Tìm khoáng mềm và cho slime phía nam tầng 1 ăn khi thức tỉnh dưới 50. Mầm đi theo và nhặt đồ; nút Đồng hành chuyển Theo/Chờ.
7. Cuốc đồng khai thác sắt ở tầng 2 và phá đá chắn lối xuống tầng 3.
8. Mang 10 đồng + 5 sắt đến thang máy tầng 3. Sửa máy gây 55 thức tỉnh; chuẩn bị đường thoát.
9. Tìm nhật ký ở đông bắc tầng 3. Kết nối thang máy và lấy nhật ký hoàn thành chương đầu.

## Điều khiển

| Hành động | Máy tính | Cảm ứng |
|---|---|---|
| Đi | WASD / mũi tên / chạm đất | Cần bên trái hoặc chạm đất |
| Tương tác, đào | E | Nút cuốc lớn |
| Đổi đào nhẹ/mạnh | M | Nút trên cuốc |
| Đi nhẹ | C | Nút Đi nhẹ |
| Né | Space | Nút Né |
| Đẩy lùi | F | Nút Đẩy lùi |
| Uống bình | Q | Nút dấu cộng |
| Ném đá | R rồi chạm đất | Nút đá rồi chọn điểm |
| Túi / bản đồ | B / Tab | Thanh menu / bản đồ nhỏ |
| Tạm dừng | Escape | Nút góc trên phải |

## Lưu tiến trình

Tự lưu trên trình duyệt, có bản dự phòng. Menu tạm dừng cho xuất/nhập JSON để chuyển thiết bị. Xóa dữ liệu trình duyệt có thể làm mất bản lưu; nên xuất trước. Túi có 12 ô, mỗi chồng tối đa 20 nguyên liệu; túi đầy thì đồ còn trên đất. Bị hạ gục làm rơi 30% mỗi loại nguyên liệu mang theo; có thể quay lại nhặt. Công cụ và kho làng được giữ.

## Phạm vi đã có

Làng, 3 tầng mỏ, quặng và túi đồ, tiếng động và dấu hiệu cảnh báo, sinh vật tuần tra/truy đuổi, chiến đấu đơn giản, slime nhặt đồ, lò rèn/cuốc đồng, đá chắn tầng, rương và thang máy, nhật ký, bản đồ khám phá, âm thanh tổng hợp, lưu/nhập/xuất, thao tác chạm.

Nhân vật, slime, bọ đá và hiệu ứng được vẽ bằng Canvas, có chuyển động theo trạng thái. Ảnh trang đầu là hình minh họa AI riêng. Đây chưa phải bộ sprite đầy đủ cho mọi loài trong thiết kế dài hạn.

## Chưa thuộc bản này

Tầng 4–10, hang nấm/ngập nước, boss, nhiều loại đồng hành, NPC có lịch trình và hội thoại, cầu/vùng phụ, cân bằng kinh tế dài hạn, multiplayer, tài khoản đồng bộ, gói IPA/App Store. Bản này là web game, chưa kiểm chứng trên iPhone thật. Khuyến nghị thử Safari và xuất bản lưu trước mỗi bản cập nhật.

## Mã nguồn

- src/core.js: dữ liệu và luật mô phỏng, giao dịch vật liệu, lưu tiến trình.
- src/world.js: bản đồ và vị trí tương tác; src/render.js: đồ họa Canvas.
- src/app.js: giao diện, điều khiển, âm thanh, lưu trình duyệt.
- tests/: kiểm thử logic; docs/: hướng dẫn triển khai và giới hạn kiểm thử.
- .github/workflows/pages.yml: workflow Test and deploy game.

Xem [hướng dẫn GitHub](docs/GITHUB.md) và [báo cáo kiểm thử](docs/QA.md).
