# Kiểm thử và giới hạn — 13/11/2026

## Tự động

18 ca kiểm thử: trạng thái khởi đầu; nhát cuốc có thời gian/hủy; túi đầy bảo toàn đồ rơi; nghe tiếng động/chase không đổi mục tiêu theo đá; thời gian giảm thức tỉnh; chi phí lò rèn nguyên tử; thuần hóa có điều kiện; rơi đồ khi bị hạ; lưu/khôi phục; dữ liệu lưu lỗi; dash không lưu thời gian âm; quan hệ forge/pick; tên vật phẩm kế thừa bị từ chối; thức tỉnh không tiết lộ vị trí người chơi; xóa đầu vào khi mở menu; chuỗi tiến triển đến kết thúc; khả năng tìm đường; lưu trong 200 bước hành động.

Ca tiến triển kiểm tra tài nguyên và khóa mở đường bằng mô phỏng, tắt quái trong ca đó để cô lập kinh tế; không thay thế chơi thử cân bằng chiến đấu.

## Giao diện trình duyệt

Quan sát giao diện 844×390, trang đầu, menu và cảnh mỏ. Kiểm tra nút khai thác tạo mức ồn 3, thời gian mô phỏng tăng, thuần hóa hiện “Mầm đã tin bạn”, sửa thang máy tiêu hao vật liệu và hiện thức tỉnh 55. Bản đồ và menu đã mở được. Sau khi sửa thang máy, sinh vật tiếp cận gây sát thương và nút về làng từ chối khi còn bị truy đuổi, đúng luật thiết kế. Vòng render trong trình duyệt kiểm thử chạy chậm hơn thời gian thực; chưa đo hiệu năng đáng tin cậy.

Chưa xác nhận tải file save qua trình duyệt tự động do chờ sự kiện download bị timeout; logic serialize/restore đã qua kiểm thử. Chưa chạy Safari trên iPhone vật lý, kiểm tra cảm ứng đa điểm dài hạn, ngoại tuyến sau nhiều lần cập nhật, hoặc deploy trên tài khoản GitHub thật.

## Các sửa lỗi sau review

- Đóng/mở menu xóa đường đi, phím, cần điều khiển và chế độ ngắm cũ.
- Từ chối bản lưu lò rèn đã sửa nhưng cuốc chưa nâng cấp.
- Từ chối tên vật phẩm từ prototype thay vì nhận thành số lượng NaN.
- Kẹp thời gian dash về 0 trước khi lưu.
- Thức tỉnh cao khiến quái kiểm tra quanh tổ, không tự biết vị trí người chơi.
- Thả nút cuốc dừng lặp, vẫn hoàn thành nhát đang thực hiện; di chuyển/menu hủy nhát.

## Cần kiểm tra trước phát hành rộng

Một lượt chơi hoàn chỉnh trên Safari/iPhone; né + joystick cùng lúc; âm thanh sau khóa màn hình; xuất/nhập file trên iOS; lưu qua đổi phiên bản; cân bằng nhịp hồi nguyên liệu và độ khó; kích thước giao diện trên nhiều tỷ lệ màn hình. Bản hiện tại dành cho chơi thử và tiếp tục phát triển.
