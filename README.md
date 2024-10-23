# ZenML Challenge

This project uses Next.js 14 and aims to develop an application to solve the ZenML challenge.

## Installation

Follow these steps to install the necessary dependencies and launch the application:

### Prerequisites

- Node.js (v18 or higher)
- yarn

### Unzip the ZIP File

Download and unzip the `.zip` file containing the project.

```bash
# Navigate to the project directory
$ cd zenml-challenge
```

### Install Dependencies

Use yarn to install the required dependencies:

```bash
# Using yarn
$ yarn install
```

## Running the Project

You can run the project as a production build:

### Production Mode

To build and run the application in production mode:

```bash
# Build the project
$ yarn run build

# Start the server in production
$ yarn start
```

## Environment Configuration

You can define environment variables by creating a `.env.local` file in the root directory of the project. Make sure to set the `API_URL` variable for the application to work correctly.

## Scripts

- `build`: Builds the application for production.
- `start`: Starts the server with the production build.
