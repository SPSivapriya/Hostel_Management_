# Hostel Management System

A lightweight hostel management dashboard built with HTML, CSS, and vanilla JavaScript. It runs in a web browser and does not require a package install or backend server.

## Run the app

### Open the HTML file

Open `index.html` in your browser, or from PowerShell in this folder run:

```powershell
Start-Process .\index.html
```

### Use VS Code Live Server

If you have the Live Server extension installed, open this folder in VS Code, right-click `index.html`, and select **Open with Live Server**.

## Features

- Add students and view student details
- Assign rooms and see which rooms are available
- Check out students
- Submit the hostel fees form

Student and room data are stored in the browser's `localStorage` for that browser. They are not shared across browsers or devices. The fees form currently shows a confirmation message but does not save payment records.

## Project files

- `index.html` — dashboard layout and forms
- `styles.css` — responsive styling
- `script.js` — form behavior and browser storage
