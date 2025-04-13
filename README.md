# 💸 Split the Bill – React App

This is a fully functional React application that helps you split bills with friends and track who owes whom.  
You can add friends, select one, and then log shared expenses. The app calculates balances and keeps everything organized.

---

## 📚 Based on a course (but written in my own way)

This project is inspired by the **"Ultimate React Course 2025"** by [Jonas Schmedtmann](https://www.udemy.com/course/the-ultimate-react-course/), but it is **not a copy-paste**.

I rewrote it completely **in my own style**, building the logic, components, and structure from scratch, using only the course challenge idea as a base.  
Everything from state management to styling is **my own implementation**.

---

## ✨ Features

- Add new friends with name and avatar URL
- View each friend's balance:
  - Green = they owe you money
  - Red = you owe them money
  - Gray = you're even
- Select a friend to split a bill
- Fill out who paid and how much
- Automatically updates each friend's balance
- "Add friend" toggle with clean UI
- Reset form on submission
- Responsive, mobile-friendly layout

---

## 🧠 What I Practiced

- `useState` and lifting state up
- Building fully controlled forms
- Conditional rendering and toggling components
- Reusable components (`Button`, `Form`, `FriendItem`)
- Prop drilling and local state
- Component organization and clean file structure
- Updating nested arrays of objects with `map`

---

## 🛠️ Tech Stack

- **React** (hooks & functional components)
- **JavaScript (ES6+)**
- **CSS** (custom styling, no libraries)
- No external dependencies

---

## 🚀 Live Demo

👉 [https://react-bill-split-ochre.vercel.app/](https://react-bill-split-ochre.vercel.app/)

---

## 📂 Project Structure

- `App.js` – root component and main logic
- `FriendsList.js`, `Friend.js` – displays the list and individual friends
- `FormAddFriend.js`, `FormSplitBill.js` – controlled forms for input
- `Button.js` – reusable button component
- `initialFriends.js` – seed data

---

## ✍️ Author

**Paweł Woźniak**  
React developer in training – building real projects to learn real skills.  
[GitHub – Pawel1022](https://github.com/Pawel1022)
