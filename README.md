 This is a Next.js project that allows users to search for docter and view them. It's built using TypeScript, Zustand for state management, Material-UI and Tailwind for styling,  and Font Awesome for icons. The project is also fully responsive.

## Getting Started
To use this project, follow these steps:

Clone the repository to your local machine:

git clone https://github.com/yourusername/you-project.git

Navigate to the project directory:
cd your-project

Install the required npm packages:
npm install

Start the development server:
npm run dev

Open your web browser and visit http://localhost:3000 to access the project.


## Features
Search Functionality: You can search for doctors using the search bar in the navbar. The results will update as you type, showing doctor related to your search query.

Responsive Design: The project is designed to work seamlessly on various screen sizes and devices.

## Technologies Used
Next.js: The project is built with Next.js, a popular React framework that offers server-side rendering and routing.

TypeScript: TypeScript is used to add static typing to the JavaScript codebase, making it more robust and maintainable.

Zustand: Zustand is used for state management, simplifying the handling of application state.

Material-UI (MUI): MUI provides the styling and components for the project, ensuring a modern and consistent design.

Font Awesome: Font Awesome icons are used for enhancing the visual appeal of the project.

## How the Search Functionality Works

In the search input, users can enter a search query, and our application retrieves doctor matching that query using a service. Here's a breakdown of the process:

1. **User Input**: Users type their search query into the search input field.

2. **Service Request**: When a user enters a query, the application sends a request to a Doctor service .

3. **Fetching doctor**: The application fetches doctors from the service based on the user's query.

4. **Displaying Results**: If there are doctors that match the query, they are displayed on the page. If no results are found, a "No Match Found" message is displayed to inform the user.

This search functionality allows users to quickly find doctor of interest by entering keywords or phrases.

## doctor Detail Pages

We also provide individual doctor detail pages where users can access more information about a specific doctor. These pages are simple and focus on presenting essential details about each movie, including:

- **doctor name**: The name of the doctor.
- **Network**: The Network of origin for the Doctor.



