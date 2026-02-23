import { test, expect } from '@playwright/test';

// ไปค้นหาสินค้า
//  - เข้าไปหน้าแรกของเว็บ sck-mall
//  - พิมพ์คำค้นหาสินค้า "43 piece dinner set"
//  - กดปุ่ม Enter เพื่อค้นหาสินค้า
//  - ตรวจสอบพบ "43 piece dinner set" ในผลการค้นหา
//  - คลิกเลือก "43 piece dinner set"


test("เลือกสั่งซื้อสินค้า และใส่ข้อมูลจัดส่ง สำเร็จ", async ({ page }) => {
  
  // Step 1: เข้าไปหน้าแรกของเว็บ sck-mall
  await test.step("เปิด Browser แล้วไปยังหน้าที่จะทดสอบ", async () => {
    await page.goto('http://sck-dojo.ddns.net:8000/product/list');
  });

  // Step 2: พิมพ์คำค้นหาสินค้า "43 piece dinner set"
  await test.step("พิมพ์คำค้นหาสินค้า '43 piece dinner set'", async () => {
    await page.locator("#search-product-input").fill("43 piece dinner set");
  });

  // Step 3: กดปุ่ม Enter เพื่อค้นหาสินค้า
    await test.step("กดปุ่ม Enter เพื่อค้นหาสินค้า", async () => {
    await page.locator("#search-product-input").press('Enter');
  }



});
