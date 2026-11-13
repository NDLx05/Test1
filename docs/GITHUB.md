# Đưa bản riêng lên GitHub

## Chuẩn bị

Giải nén ZIP. Tạo repository mới để giữ Hầm Mỏ Thức Giấc tách khỏi game cũ. Đưa **nội dung** thư mục waking-mine vào gốc repository: index.html, package.json, src, assets, .github… Không chỉ tải file ZIP lên và không lồng thêm thư mục waking-mine ở ngoài index.html.

Có thể dùng GitHub Desktop để thêm toàn bộ thư mục, commit rồi publish repository. Nếu tải bằng web, tab Code → Add file → Upload files; với repository trống, dùng liên kết uploading an existing file. Kiểm tra thư mục .github đã được tải lên đầy đủ.

## Bật Pages

1. Vào **Settings của repository** (không phải Settings tài khoản).
2. Mở **Pages** → **Build and deployment** → **Source: GitHub Actions**.
3. Mở tab Actions. Workflow trong gói có tên **Test and deploy game**.
4. Workflow chạy khi đẩy code vào nhánh main. Hoặc chọn Run workflow sau khi bật Pages.
5. Khi job thành công, lấy liên kết tại Pages hoặc kết quả deploy; mở bằng Safari trên iPhone. Có thể dùng menu chia sẻ của Safari để thêm ra màn hình chính.

Nếu không thấy workflow: kiểm tra đường dẫn chính xác `.github/workflows/pages.yml`, nhánh mặc định main, đã commit file YAML và quyền Actions của repository. Nếu không thấy Pages/Build and deployment: kiểm tra bạn đang ở đúng repository và có quyền quản trị; khả năng Pages cho repository riêng tư phụ thuộc gói tài khoản.

Workflow đã có sẵn; không cần tìm mẫu có tên Test and deploy trong danh sách mẫu của GitHub. Chưa có tác vụ nào được chạy trên tài khoản GitHub của bạn từ gói này.

## Cập nhật

Sửa mã nguồn, chạy npm test, npm run check, npm run build. Khi đổi file runtime, tăng tên CACHE trong sw.js để trình duyệt nhận bản mới. Đẩy lên main rồi kiểm tra Actions. Sao lưu tiến trình trước khi thay định dạng save; nếu thay định dạng cần thêm migration.

Tài liệu chính thức đã đối chiếu ngày 13/11/2026:
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
