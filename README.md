# ZenML Challenge

This project uses Next.js 14 and aims to develop an application to solve the ZenML challenge.
![zenml-challenge vercel app_](https://github.com/user-attachments/assets/63386f2a-adf6-4d8d-a702-8ecfb3074494)
![zenml-challenge vercel app_ (1)](https://github.com/user-attachments/assets/fe4f1d6d-7a6e-4a95-a9b8-5f09dcd85484)
![zenml-challenge vercel app_stacks_f500a2e5-7501-4988-b579-177576bac6e5_component_id=f500a2e5-7501-4988-b579-177576bac6e5](https://github.com/user-attachments/assets/f8488f2c-73fd-4709-9edf-302a4244bf7a)
![zenml-challenge vercel app_stacks_f500a2e5-7501-4988-b579-177576bac6e5_component_id=f500a2e5-7501-4988-b579-177576bac6e5 (1)](https://github.com/user-attachments/assets/eb9eb232-6f42-40a7-a2eb-8884ed48a381)
![zenml-challenge vercel app_ (2)](https://github.com/user-attachments/assets/7eedbec3-8637-46f5-bb2a-d92fc994ccd3)
![zenml-challenge vercel app_ (3)](https://github.com/user-attachments/assets/353ee535-3910-449e-888a-fdecf7e8c5d8)
![zenml-challenge vercel app_ (4)](https://github.com/user-attachments/assets/718f5738-a417-4bbe-9221-eaac42f9fa77)



## Installation

Follow these steps to install the necessary dependencies and launch the application:

### Prerequisites

- Node.js (v18 or higher)
- yarn or pnpm

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

```bash
# Using pnpm
$ pnpm install
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

```bash
# Build the project
$ pnpm run build

# Start the server in production
$ pnpm start
```

## Environment Configuration

You can define environment variables by creating a `.env.local` file in the root directory of the project. Make sure to set the `API_URL` variable for the application to work correctly.

## Thought process

In designing the user interface for displaying stacks and stack components, I considered the fact that stacks are not directly connected to the components, but rather, components are part of a stack. The best way I found to represent this was by using cards that contain information about the stack, with references to the components inside them. Similarly, components have their own data and possible configurations represented within their respective cards.

Initially, I tried using tables to display this information, but I was not satisfied with the interaction style and found it not user-friendly. To facilitate the relationships between stacks and components, the user can click on the components within a stack to see the component's details, or view a simple list of components in detail through the stack's menu. Likewise, from the component list, users can navigate to see which stacks are using that particular component.

Filters were also added to facilitate quick searches, although this is something that could be improved by providing more useful filters than the current ones. Additionally, implementing pagination would enhance the user experience and improve performance.

## Bonus Points

1. **How would you add the remaining CRUD operations (create, update, and delete) for a stack and stack component to your application?**

   This would be done through the buttons added in the menu of each card, which would open a modal where the user can complete the necessary data. If the form is too complex, a new page could be used instead.

2. **How would you handle a token or a cookie, in case the API would need authentication?**

   I would use a cookie that can be stored server-side since the requests in this project are done with SSR using Next.js. This way, we isolate the backend requests from the front end and add a layer of security.

3. **Given that some features are open-source and some are not, how would you approach separating and integrating open and closed-source features?**

   I would separate the project so that the open-source functionalities can be packaged into an npm library and used as a dependency in the closed-source project. This way, both projects can be maintained separately while leveraging the functionalities of both.

## Scripts

- `build`: Builds the application for production.
- `start`: Starts the server with the production build.
