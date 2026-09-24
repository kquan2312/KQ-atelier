# NOIR Atelier — Landing Page Test

Landing page concept cho studio kiến trúc & nội thất cao cấp.

## 1. Yêu cầu
- Node.js 18+ (khuyến nghị Node 20+)
- npm

## 2. Cài đặt

```powershell
cd "F:\noir-atelier"
npm install
npm run dev
```

Mở URL Vite hiển thị trong terminal, thường là `http://localhost:5173`.

## 3. Build production

```powershell
npm run build
npm run preview
```

## 4. Cấu trúc

```text
noir-atelier/
├─ index.html
├─ package.json
└─ src/
   ├─ main.jsx
   └─ styles.css
```

## 5. Ý tưởng visual

- Editorial architecture thay vì template SaaS.
- Palette: warm stone / charcoal / off-white.
- Typography: Manrope + Playfair Display + DM Mono.
- Grid bất đối xứng, nhiều whitespace, micro-interaction nhẹ.
- Không dùng gradient màu sặc sỡ, glassmorphism, card bo góc hàng loạt hoặc badge AI.
- Hình ảnh đang dùng Unsplash remote images để test UI; khi nộp bài nên thay bằng ảnh project được cấp phép và tải local vào `public/images`.

## 6. Khi nộp bài test

Nên đổi:
- Tên studio / địa chỉ / email / số điện thoại.
- Hình ảnh dự án.
- Logo nếu đề có brand guideline.
- Nội dung dự án thành dữ liệu thật.
- Favicon và OG image.
- Có thể deploy Vercel/Netlify hoặc GitHub Pages.

## 7. Lưu ý

Các social link `#` và email/địa chỉ hiện tại là dữ liệu demo.
