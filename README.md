# React Design System

A modern component library built with React, Tailwind CSS, and Storybook.

## Project info

**URL**: https://lovable.dev/projects/25dccf1d-8802-4571-8af9-e43f4d3573a5

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/25dccf1d-8802-4571-8af9-e43f4d3573a5) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Storybook

## Storybook

This project includes Storybook for component development and documentation.

### Running Storybook

First, add these scripts to your `package.json`:

```json
"scripts": {
  "storybook": "storybook dev -p 6006",
  "build-storybook": "storybook build"
}
```

Then run:

```bash
npm run storybook
```

Storybook will open at `http://localhost:6006` where you can browse and interact with all components.

### Available Components

- Button (multiple variants and sizes)
- Card (with header, content, footer)
- Input (text, email, password, etc.)
- Badge (status indicators)
- Checkbox
- Switch
- And more...

Each component has interactive stories showing different variations and use cases.

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/25dccf1d-8802-4571-8af9-e43f4d3573a5) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
