const modalBackdrop = document.getElementById("modalBackdrop");
const closeBtn = document.getElementById("closeModalBtn");
const openLetter = document.getElementById("openLetter");
const readBtn = document.getElementById("readBtn");
const letterText = document.getElementById("letterText");

// ✅ ข้อความจดหมาย
const MESSAGE = `
🎉สุขสันต์วันเกิดน้องอั๋น🎇
ไม่ยอมให้สั่งเค้กใช่ไหม
แค่นี้ไม่เป็นอุปสรรคหรอกบอกเลย
เพราะพี่หญิงอ่ะดื้อมาก น้องอั๋นไหวหรือเปล่า🤣
🥳ขออนุญาตอวยพรวันเกิดนะคะ🎂
ขอให้น้องอั๋นมีความสุขมากๆ สุขภาพแข็งแรง
เป็นที่รักของทุกๆคน คิดสิ่งใดสมปรารถนา
เจอแต่สิ่งดีๆและคนดีๆ ร่ำรวยเงินทอง เพี้ยง
สุดท้ายขอให้เรารู้จักกันนานๆนะคะ🥰
`;

// 🔓 เปิด modal
function openModal(){
  letterText.textContent = MESSAGE.trim();
  modalBackdrop.style.display = "flex";
}

// ❌ ปิด modal
function closeModal(){
  modalBackdrop.style.display = "none";
}

// ===== EVENTS =====
if(openLetter){
  openLetter.addEventListener("click", openModal);
}

if(readBtn){
  readBtn.addEventListener("click", openModal);
}

if(closeBtn){
  closeBtn.addEventListener("click", closeModal);
}

// กดพื้นหลังเพื่อปิด
modalBackdrop.addEventListener("click", (e)=>{
  if(e.target === modalBackdrop){
    closeModal();
  }
});
