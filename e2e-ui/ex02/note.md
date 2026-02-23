  use: {
ใน default path สามารถ set ให้เปิดตรงนี้ได้ ที่ไฟล์ playwright.config.ts
----
ประเภท,Default Time,คำอธิบาย
Test Timeout,"30,000 ms",เวลารวมสูงสุดของ 1 Test Case
Expect Timeout,"5,000 ms",เวลาในการรอ expect ให้เป็นจริง
Action Timeout,0 (Unlimited),"เวลาในการรอ click, fill (แต่จะโดน Test Timeout คุมอีกที)"
Navigation,0 (Unlimited),เวลาในการรอ page.goto (แต่จะโดน Test Timeout คุมอีกที)


ref: https://playwright.dev/docs/test-timeouts


import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 30 * 1000, // <-- นี่คือ Test Timeout (30 วิ)
  expect: {
    timeout: 5000     // <-- นี่คือ Expect Timeout (5 วิ)
  },
  use: {
    actionTimeout: 0, // <-- Action Timeout (0 คือไม่กำหนด)
  },
});

.
ได้อะไรบ้าง 3 ข้อ จาก 6 ชม ที่มานั่งตรงนี้ (ME)
2200
1. ได้ทบทวน playwright และได้แนวคิด ทั้งการเขียนจาก design -> automate , และอย่าเป็น yes man ให้คิดก่อน
2. ได้เจอน้องๆ 
3. ได้เห็นภาพการมอง expected result ในอีกมุมมอง คือมองจาก flow

ทักษะนี้มาเคลมเพิ่มเงินไหม?
ป็อป, P'Milk, P'Bank, จารย์อุ้ม, บัวตอง, P'บุ้ม, P'ต้มมิ้นท์, P'แตงโม (2.5k จบจิตทยามาด๊วะ) พี่โอ๊ต3k, ต่อ 2.2k
2k
เมฆ, P'Not, น้ำ, , N'Name, ปอนด์, 
1k
พี่น้ำหวาน ไปสอน หัก 50% หัวละ 5k => อยากเป็น TA ด้วยค้าบ
