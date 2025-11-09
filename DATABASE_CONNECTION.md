# Kết nối Database PostgreSQL trên Render

## Thông tin kết nối

- **Host**: `dpg-d47psc3uibrs73d470j0-a.singapore-postgres.render.com`
- **Port**: `5432`
- **Database**: `user_registration_render`
- **Username**: `user_registration_render_user`
- **Password**: `1xspazCOATRLhqyeE47CiHnfzcZFU6cj`
- **Connection URL**: `postgresql://user_registration_render_user:1xspazCOATRLhqyeE47CiHnfzcZFU6cj@dpg-d47psc3uibrs73d470j0-a.singapore-postgres.render.com/user_registration_render`

## Cách 1: Sử dụng Render Dashboard

1. Vào https://dashboard.render.com/
2. Chọn database `user_registration_render`
3. Click tab **"Shell"**
4. Chạy SQL queries:

```sql
-- Xem tất cả users
SELECT * FROM "user";

-- Xem user mới nhất
SELECT id, email, "fullName", "createdAt" 
FROM "user" 
ORDER BY "createdAt" DESC 
LIMIT 10;

-- Đếm số users
SELECT COUNT(*) as total_users FROM "user";
```

## Cách 2: Sử dụng psql trong Terminal (Windows)

Nếu đã cài PostgreSQL client:

```bash
psql "postgresql://user_registration_render_user:1xspazCOATRLhqyeE47CiHnfzcZFU6cj@dpg-d47psc3uibrs73d470j0-a.singapore-postgres.render.com/user_registration_render"
```

Sau đó chạy:
```sql
SELECT * FROM "user";
```

## Cách 3: Sử dụng pgAdmin 4

1. Download pgAdmin: https://www.pgadmin.org/download/
2. Mở pgAdmin và tạo server mới:
   - **Name**: Render User Registration
   - **Host**: dpg-d47psc3uibrs73d470j0-a.singapore-postgres.render.com
   - **Port**: 5432
   - **Database**: user_registration_render
   - **Username**: user_registration_render_user
   - **Password**: 1xspazCOATRLhqyeE47CiHnfzcZFU6cj
   - **SSL Mode**: Require (trong tab SSL)

## Cách 4: Sử dụng DBeaver (Free & Cross-platform)

1. Download DBeaver: https://dbeaver.io/download/
2. New Connection → PostgreSQL
3. Nhập thông tin như trên
4. Test Connection → Connect

## Cách 5: Thêm API endpoint để xem users

Tôi có thể thêm endpoint trong backend để xem danh sách users qua API:
- GET `/user` - Xem tất cả users
- GET `/user/:id` - Xem chi tiết 1 user

## SQL Queries hữu ích

```sql
-- Xem tất cả users với thông tin đầy đủ
SELECT 
  id, 
  email, 
  "fullName", 
  "createdAt", 
  "updatedAt" 
FROM "user" 
ORDER BY "createdAt" DESC;

-- Tìm user theo email
SELECT * FROM "user" WHERE email = 'example@email.com';

-- Đếm users đăng ký theo ngày
SELECT 
  DATE("createdAt") as date, 
  COUNT(*) as registrations 
FROM "user" 
GROUP BY DATE("createdAt") 
ORDER BY date DESC;

-- Xóa tất cả users (CAREFUL!)
DELETE FROM "user";

-- Xóa user theo email
DELETE FROM "user" WHERE email = 'test@example.com';
```

## Note
- Render free tier database có thể "ngủ" sau một thời gian không hoạt động
- Lần connect đầu tiên có thể mất 10-15 giây để "đánh thức" database
