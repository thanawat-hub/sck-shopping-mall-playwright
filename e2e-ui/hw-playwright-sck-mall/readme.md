แปลงจาก robot framework เป็น playwright

และจะต้อง รันใน path ที่เป็น project นั้น ในที่นี้คือ 
```
D:\2026\_Project\we_love_bug_\_learn\2week_7_21_02\wllb-workshop-bun\e2e-ui\hw-playwright-sck-mall
```
ซึ่งต้องมีไฟล์ playwright.config.ts นี้ 
```
bun x playwright test tests/checkout-flow.spec.ts --ui
```

โดยมีโครงสร้างคือ

playwright-sck-mall/
│
├── pages/                  # เก็บ Page Object Model (POM) แบ่งตามหน้าจอ
│   ├── HomePage.ts         # จัดการหน้าแรกและการค้นหา
│   ├── ProductPage.ts      # จัดการหน้ารายละเอียดสินค้า
│   ├── CartPage.ts         # จัดการหน้าตะกร้าสินค้า
│   └── CheckoutPage.ts     # จัดการหน้าชำระเงินและ OTP
│
├── tests/                  # เก็บไฟล์ Test Scenarios (เทียบเท่า *** Test Cases ***)
│   └── checkout-flow.spec.ts 
│
├── utils/                  # เก็บฟังก์ชันช่วยเหลือต่างๆ (ถ้ามี)
│   └── helpers.ts          
│
├── data/                   # เก็บ Test Data แยกออกมาจากโค้ด (เช่น ข้อมูลบัตร, ชื่อผู้ซื้อ)
│   └── user-data.json      
│
├── playwright.config.ts    # ไฟล์ตั้งค่าหลัก (เทียบเท่า *** Settings *** และ Variables บางส่วน)
├── package.json
└── tsconfig.json
