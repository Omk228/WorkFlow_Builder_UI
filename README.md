Workflow Builder UI (Frontend Assignment)

A frontend-only visual workflow builder built using React + Vite.
The application allows users to create workflows using connected nodes such as Actions, Conditions (Branches), and End nodes, all managed entirely on the client side.

This project focuses on state management, recursive data handling, and clean UI, without relying on external UI or workflow libraries.

🚀 Live Demo

👉 https://work-flow-builder-ui.vercel.app/

📂 GitHub Repository

👉 https://github.com/Omk228/WorkFlow_Builder_UI.git

🎯 Assignment Objective

The goal of this assignment is to demonstrate:

Frontend architecture using React functional components

Managing a tree-structured workflow state

Implementing add / delete logic with flow continuity

Clean, minimal, and professional UI

Ability to build without external UI or diagram libraries

🛠 Tech Stack

React (Functional Components + Hooks)

Vite

JavaScript (ES Modules)

Plain CSS (No Tailwind / UI libraries)

🚫 Constraints Followed

❌ No backend

❌ No database

❌ No authentication (login/signup)

❌ No UI libraries (Material UI, Chakra, etc.)

❌ No workflow/diagram libraries (React Flow, GoJS, etc.)

❌ No drag-and-drop or complex auto-layout

🧱 Workflow Node Types
1️⃣ Start Node

Initial root node

Cannot be deleted

2️⃣ Action Node

Represents a single step

Allows only one outgoing connection

3️⃣ Branch (Condition) Node

Represents a decision point

Supports multiple outgoing paths (e.g. YES / NO)

4️⃣ End Node

Terminal node

Has no outgoing connections

✨ Features

Add Action, Branch, or End nodes

Add nodes to specific branch paths (YES / NO)

Delete any node except the Start node

Automatic reconnection of workflow when a node is deleted

Edit node labels

Visual representation of workflow as a tree

Save workflow (logs complete workflow JSON to console)

🧠 State Management Approach

The workflow is stored as a tree-like JavaScript object

Each node has a unique ID

Tree updates are handled using recursive helper functions

Ensures:

No duplicate nodes

No broken connections

Predictable rendering

🎨 UI Design Philosophy

Clean and minimal (B2B SaaS style)

Soft colors and subtle shadows

Focus on clarity and usability

No visual clutter or unnecessary animations

📦 Installation & Local Setup
git clone <your-repo-url>
cd my--workflow--app
npm install
npm run dev


To test production build locally:

npm run build
npm run preview

📝 Notes

This is a frontend-only application

All data is stored in memory (React state)

Reloading the page resets the workflow

🙌 Author

Om Kumar Jha
BCA Student | Frontend Developer