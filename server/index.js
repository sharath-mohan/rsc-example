const express = require("express");
const app = express();
const port = 5000;
let notes = [
  {
    id: 1,
    title: "React Js",
    summary: `React is a popular JavaScript library for building user interfaces, developed and maintained by Facebook. It allows developers to create interactive and dynamic UI components efficiently. React follows a component-based architecture, where the user interface is composed of reusable and modular components. These components manage their state and can be combined to build complex UIs.

One of React's key features is the virtual DOM (Document Object Model), which optimizes rendering by updating only the parts of the actual DOM that have changed, leading to improved performance. React also supports a unidirectional data flow, making it easier to understand and manage the state of an application.

React is often used in conjunction with other tools and libraries, such as Redux for state management and React Router for navigation. It has gained widespread adoption in the web development community due to its declarative syntax, efficient rendering, and robust ecosystem.`,
  },
  {
    id: 2,
    title: "Tailwind css",
    summary: `Tailwind CSS is a utility-first CSS framework that provides a set of pre-built classes to streamline and simplify the process of styling web applications. Unlike traditional CSS frameworks, which often come with predefined components and styles, Tailwind focuses on providing low-level utility classes that can be applied directly to HTML elements.

Key features of Tailwind CSS include:

Utility-First Approach: Tailwind encourages a utility-first approach to styling, where developers apply small, single-purpose utility classes directly in their HTML. This approach offers flexibility and speeds up the development process.

Extensibility: Tailwind is highly customizable. Developers can configure and extend the framework to suit their project's specific needs. This allows for a fine-grained control over the generated styles.

Responsive Design: Tailwind provides responsive utility classes that allow developers to easily create responsive layouts. These classes can be used to apply styles based on screen size, making it simpler to create designs that work well on various devices.

PurgeCSS Integration: To keep the file size small, Tailwind supports integration with tools like PurgeCSS, which removes unused styles from the final production build. This helps in optimizing the performance of the website or application.

Flexibility: Tailwind doesn't impose a specific design or component structure, giving developers the freedom to create their own unique designs without being constrained by predefined styles.

To use Tailwind CSS in a project, developers typically install it using npm or yarn, configure the settings, and then use the provided utility classes directly in their HTML or within their JavaScript components. It has gained popularity for its simplicity, ease of use, and the ability to rapidly build and prototype user interfaces.`,
  },
  {
    id: 3,
    title: "Vite js",
    summary: `Vite.js is a build tool and development server created for modern web development. Developed by Evan You, the creator of Vue.js, Vite aims to enhance the development experience by providing a faster, more efficient, and highly scalable setup, especially for Vue.js projects. However, Vite is not limited to Vue.js and can be used with other front-end frameworks like React and preact.

Key features of Vite.js include:

Lightning-fast Development Server: Vite leverages native ES module imports, resulting in a significantly faster development server startup. It uses a server that supports hot module replacement (HMR) for quick and efficient development iterations.

Built-in Support for Vue.js and React: While Vite was initially designed with Vue.js in mind, it also supports React and other frameworks out of the box. It provides seamless integration and optimized development workflows for these frameworks.

ESM (ES Module) Support: Vite uses ES modules natively during development, allowing developers to use native JavaScript module syntax. This can lead to a more straightforward and modern code structure.

Optimized Production Build: Vite produces highly optimized production builds by leveraging Rollup, a module bundler. It generates minimal and efficient code bundles, resulting in faster load times for web applications.

Plugin System: Vite is extensible through its plugin system, allowing developers to customize and extend its functionality according to project requirements. The plugin ecosystem supports a variety of tasks, from adding features to integrating with various tools.

Development Environment Configuration: Vite simplifies the configuration process by adopting a zero-config philosophy for common scenarios. This reduces the need for extensive configuration files and allows developers to get started quickly.

To use Vite.js, developers can install it via npm or yarn and create a new project using a command-line interface. The resulting project structure is clean and minimal, making it easy to understand and customize. Vite.js has gained popularity in the web development community for its focus on speed, simplicity, and developer-friendly features.`,
  },
];
app.get("/notes", (req, res) => {
  console.log("hitting server");
  res.json({
    notes,
  });
});
app.get("/notes/:id", (req, res) => {
  const { id } = req.params;
  const note = notes.find((note) => note.id === Number(id));
  if (note) {
    res.json({
      ...note,
    });
  } else {
    res.json({ message: "not not found" }).status(404);
  }
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
