<div align="center">

![image](https://github.com/user-attachments/assets/67783e11-1742-410c-bedd-e15513f59371)

</div>


---
<div align="center">

# SE347.P12 - Công nghệ Web và ứng dụng

</div>

---

## Giới thiệu môn học

- **Tên môn học:** Công nghệ Web và ứng dụng  
- **Mã môn học:** SE347  
- **Mã lớp:** SE347.P12  
- **Năm học:** HK1 (2024-2025)  
- **Giảng viên:** Nguyễn Tấn Toàn  

---

## Giới thiệu nhóm
- Thông tin thành viên:
<div align="center">

| STT | Họ và Tên          | MSSV      | Email                       |
|-----|--------------------|-----------|-----------------------------|
| 1   | Nguyễn Viết Công   | 21520657  | 21520657@gm.uit.edu.vn      |
| 2   | Lê Khánh Duy       | 21521996  | 21521996@gm.uit.edu.vn      |
| 3   | Đinh Công Thiện    | 21522617  | 21522617@gm.uit.edu.vn      |
| 4   | Nguyễn Đình Duy    | 20521237  | 20521237@gm.uit.edu.vn      |

</div>

---
## Giới thiệu Dự án
- **Tên dự án:** Xây dựng Website Bán Sách

### Mục tiêu: 
Website được thiết kế đơn giản, trực quan, hỗ trợ người dùng tìm kiếm, xem chi tiết sản phẩm, thêm vào giỏ hàng, đặt mua sách và theo dõi trạng thái đơn hàng. Mỗi sản phẩm hiển thị đầy đủ hình ảnh, mô tả, giá cả để mang lại trải nghiệm mua sắm tiện lợi. Người dùng có thể quản lý thông tin cá nhân và gửi phản hồi về dịch vụ. Hệ thống còn hỗ trợ quản trị viên quản lý sản phẩm, danh mục, đơn hàng và theo dõi doanh số qua dashboard trực quan. Dự án hướng đến việc đáp ứng nhu cầu mua sắm sách trực tuyến ngày càng tăng, mang đến trải nghiệm nhanh chóng, tiện lợi và hiệu quả cho cả người dùng và nhà quản trị.
## Tính năng chính
### Đối với Người Dùng:
1. **Đăng ký, đăng nhập, đăng xuất:**
   - Người dùng có thể đăng ký tài khoản mới và đăng nhập để sử dụng các tính năng nâng cao.
   - Đăng xuất để đảm bảo bảo mật thông tin cá nhân.

2. **Tìm kiếm và phân loại sách:**
   - Tìm kiếm sách theo tên, thể loại hoặc tác giả.
   - Sử dụng bộ lọc để tìm sách theo giá hoặc các tiêu chí cụ thể.

3. **Xem chi tiết sản phẩm:**
   - Hiển thị thông tin chi tiết của sách, bao gồm hình ảnh, mô tả, giá cả và đánh giá từ người dùng.

4. **Quản lý giỏ hàng:**
   - Thêm, cập nhật số lượng hoặc xóa sản phẩm trong giỏ hàng.

5. **Đặt hàng và thanh toán:**
   - Cung cấp thông tin cá nhân, chọn phương thức thanh toán, và hoàn tất đặt hàng.
   - Theo dõi trạng thái đơn hàng và hủy đơn hàng nếu cần.

6. **Đánh giá và phản hồi:**
   - Gửi đánh giá sách và phản hồi dịch vụ để cải thiện trải nghiệm.

### Đối với Quản Trị Viên:
1. **Quản lý sản phẩm:**
   - Thêm, chỉnh sửa, hoặc xóa thông tin sách.

2. **Quản lý danh mục và tác giả:**
   - Tạo mới hoặc cập nhật danh mục sách và thông tin tác giả.

3. **Quản lý đơn hàng:**
   - Theo dõi danh sách đơn hàng, cập nhật trạng thái, và quản lý chi tiết đơn hàng.

4. **Dashboard theo dõi doanh thu:**
   - Hiển thị thông tin tổng quan về doanh thu, số lượng sản phẩm, người dùng và đơn hàng dưới dạng biểu đồ trực quan.

---

## Công Nghệ Sử Dụng
- **Frontend:** ReactJS, TailwindCSS, Axios, React-router.
- **Backend:** Spring Boot (Java), JPA Repository.
- **Cơ sở dữ liệu:** MySQL.
- **Công cụ hỗ trợ:** Postman, React-apexchart.

---

## Hướng dẫn Cài đặt và Chạy Dự án
## Bước 1: Cài đặt Môi trường
Cài đặt các ngôn ngữ và công cụ cần thiết để chạy dự án:
- **Ngôn ngữ và Framework:**
  - JDK (Java Development Kit)
  - Maven
  - Node.js
  - MySQL
- **IDE (Môi trường phát triển):**
  - Visual Studio Code
  - IntelliJ IDEA (khuyến khích dùng IntelliJ IDEA, nhưng có thể dùng Visual Studio Code nếu việc cài đặt quá phức tạp).

---

## Bước 2: Clone Project
Clone các repository của dự án về máy tính:
- **Giao diện khách hàng:**  
  `https://github.com/ThienDinh203/SE347-user-fe`
- **Giao diện quản trị viên:**  
  `https://github.com/ThienDinh203/SE347-admin-fe`
- **Backend:**  
  `https://github.com/nvcong1710/BE-SE347`

---

### Bước 3: Cài đặt Thư viện

#### Giao diện Khách hàng và Giao diện Quản trị viên
1. Di chuyển vào thư mục chứa mã nguồn của giao diện khách hàng và giao diện quản trị viên.
2. Trong mỗi thư mục, chạy lệnh sau:
```bash
npm install
```
3. Đợi khoảng 5-10 phút để tải đầy đủ các thư viện cần thiết.
#### Backend
1. Nếu sử dụng Visual Studio Code, di chuyển vào thư mục và chạy lệnh:
```bash
   mvn clean install
```
2.	Nếu dùng IntelliJ, chuột phải vào file pom.xml, chọn Maven => Reload project.
![image](https://github.com/user-attachments/assets/7ffdf0d2-ad57-4c78-ae8b-675166a1acab)
## Bước 4: Tạo Cơ sở Dữ liệu
1. Mở **MySQL Workbench** hoặc bất kỳ công cụ nào có thể thao tác với MySQL.
2. Chạy lệnh SQL sau để tạo cơ sở dữ liệu:
```bash  
CREATE DATABASE websitebansach
```
---

## Bước 5: Chỉnh sửa Cấu hình Kết nối Cơ sở Dữ liệu
- Trong mã nguồn của backend, mở file `application.properties` trong thư mục `src/main/resources`.
- Chỉnh sửa thông tin kết nối với cơ sở dữ liệu:
![image](https://github.com/user-attachments/assets/4ca91375-e9ed-4f7b-8b9f-da52a6f1139c)
![image](https://github.com/user-attachments/assets/18b38288-d689-4e5f-bbbf-cefd8e61f49d)
- Tuỳ vào cấu hình MySQL trên máy tính, chỉnh sửa username và password để kết nối với MySQL.
---

## Bước 6: Migration
   ![image](https://github.com/user-attachments/assets/9fa31394-cf4d-46ff-866e-f4bf3373facf)

1. Đổi giá trị này thành false, sau đó chạy chương trình.

2. Chạy hàm main tại `src/main/java/com/uit/website_ban_sach/WebsiteBanSachApplication.java` nếu sử dụng IntelliJ.
 Hoặc chạy lệnh
```bash 
 mvn spring-boot:run
```
nếu dùng Visual Studio Code. Hibernate sẽ tự động tạo các bảng cần thiết.

Sau khi project chạy thành công, tắt chương trình (bằng lệnh Ctrl+C nếu dùng Visual Studio Code) và đổi giá trị trên trở lại thành true và chạy lại project. Flyway sẽ thực thi file sql để migrate dữ liệu vào database.

---

## Bước 7: Chạy Frontend
- **Giao diện khách hàng:**
  1. Chạy lệnh :
  ```bash
  npm run start
  ```
  2. Truy cập địa chỉ:  [http://localhost:3000.](http://localhost:3000.)

- **Giao diện quản trị viên:**
  1. Chạy lệnh :
  ```bash
  npm run dev
  ```
  2. Truy cập địa chỉ: [(http://localhost:5173/.)](http://localhost:5173/.)
## Bước 8: Đăng Nhập
- Hệ thống đã tự khởi tạo một tài khoản admin thông qua quá trình migration:
- **Tên đăng nhập:** `cong171002@gmail.com`
- **Mật khẩu:** `123456`

-	Tài khoản này có thể truy cập giao diện khách hàng với vai trò là khách hàng.
-	Giao diện khách hàng cho phép người dùng tạo tài khoản và đăng nhập bình thường.






