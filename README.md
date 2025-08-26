# Floating Label Input Fields

This project demonstrates how to create **floating label input fields** using **HTML** and **CSS**, inspired by the Material UI style.
 The label floats above the input when the field is focused or contains text, and returns to its original position when empty.

---

## 📂 Project Structure

---

## 🚀 Features
- Smooth **floating labels** for inputs
- Labels automatically **float up on focus** or when the input has a value
- Labels **return down** when the input is empty & unfocused
- Modern styling with **transition effects** and **focus glow**
- Works for both **text** and **password** input fields

---

## 🛠️ Technologies Used
- **HTML5** for structure  
- **CSS3** for styling and animations  

---

## 📋 Usage
1. Clone or download the project.
2. Open `index.html` in a web browser.
3. Click on the input field — the label will **float smoothly** above the input.
4. Type text — the label **remains above** even after focus is lost.

---

## 🖼️ Example
```html
<div class="input-group">
  <input type="text" placeholder=" " required>
  <label>surname</label>
</div>

<div class="input-group">
  <input type="password" placeholder=" " required>
  <label>password</label> 
</div>
