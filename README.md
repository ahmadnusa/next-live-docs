# LiveDocs - A Collaborative Document Editing Platform

## [Demo](https://next-live-docs-beta.vercel.app/)

## Introduction

LiveDocs is a clone of Google Docs, built with Next.js for the user interface, Liveblocks for real-time features, and styled with TailwindCSS. The primary goal of this project is to demonstrate the developer's skills in a real-time environment that creates a lasting impact.

## Tech Stack

- **Next.js**
- **TypeScript**
- **Liveblocks**
- **Lexical Editor**
- **ShadCN**
- **Tailwind CSS**

## Features

### Authentication
- User authentication using GitHub through NextAuth, ensuring secure sign-in/out and session management.

### Collaborative Text Editor
- Multiple users can edit the same document simultaneously with real-time updates.

### Documents Management
- **Create Documents**: Users can create new documents, which are automatically saved and listed.
- **Delete Documents**: Users can delete documents they own.
- **Share Documents**: Users can share documents via email or link with view/edit permissions.
- **List Documents**: Displays all documents owned or shared with the user, with search and sorting functionalities.

### Comments
- Users can add inline and general comments, with threading for discussions.

### Active Collaborators on Text Editor
- Shows active collaborators with real-time presence indicators.

### Notifications
- Notifies users of document shares, new comments, and collaborator activities.

### Responsive
- The application is responsive across all devices.

## Quick Start

Follow these steps to set up the project locally on your machine.

### Prerequisites

Ensure you have the following installed:

- **Git**
- **Node.js**
- **npm** (Node Package Manager)

## Cloning the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/ahmadnusa/next-live-docs.git
cd collaborative-editor
```

## Installation
Install the project dependencies using npm:

```bash
npm install
```

## Running the Project
Start the development server:

```bash
npm start
```

Open http://localhost:3000 in your browser to view the project.
