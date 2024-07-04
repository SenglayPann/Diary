# Diary Web application

# Goal

- Develop a modern Diary web application regarding modern UI with seamlessly multiple devices accessibility.

# Scope

- All The data are stored in the local storage.
- The platform is capable of CRUD performance including data filtering and search for a specific diary or related diaries.

# References

- [Figma Design](https://www.figma.com/design/xmVPjXXO6osi4aFEh4a49b/Diary-Web-Application?node-id=1-7&t=huAU5NdVCc9aXn3S-1)
- [IA](https://www.figma.com/board/tbruWfiyZ8AIQVxqiI7RMx/Diary-Web-Application?node-id=0-1&t=xC6mooVQyZGLCQSs-1)
- [Flow Guide](https://www.figma.com/board/pQnhViqTKNi5dE4SXmBAuG/Diary-Application-flow-guide?node-id=0-1&t=vWLZ8zEdeuFmWNEt-1)

# Technologies

- **CSS:** Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML.
- **HTML:** HyperText Markup Language is the standard markup language for documents designed to be displayed in a web browser.
- **JavaScript:** JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS.

# Development tools

- **Visual Studio Code (VSCode):** A powerful and versatile code editor that provides an excellent development environment with features like syntax highlighting, debugging support, and extensions for enhanced productivity.
- **GitLab:** A web-based Git repository manager that offers version control, issue tracking, and continuous integration/continuous deployment (CI/CD) pipelines, facilitating collaborative software development.
- **Figma:** An innovative design tool used for creating user interfaces, prototypes, and collaborative design projects.

# Figma Design Convention

- **Frame naming:** Frames must have proper names corresponding to their responsible pages that they represent.
- **Element naming:** Elements inside frames must have proper names corresponding to their purpose and usage.
- **Frame alignment:** Frames must have proper alignment and all have the exact same spacing and gap which is 50px gap between each frame.
- **Frame placement:** All frames must follow their placement, the frames containing the components for each resolution must be on the right, whereas, the frames that contain the UI clone of each page is on the left.

# Font Families

- **Heading:** Trueno, **Shameimaru Sans**
- **text:** Raleway, Roboto

# Colors + Gradients

- green-primary: #2EE4B1
- green-secondary: #A0F28A
- blue-primary: #3498DB
- blue-secondary: #00B5E4
- yellow: #F9F871
- black-primary: #050505
- black-secondary: #333333
- gray-primary: #F2F2F2
- gray-secondary: #C0C0C0

```
:root {
    --bg-color1: #f8f8f8;
    --green-primary: #2EE4B1;
    --green-secondary: #A0F28A;
    --blue-primary: #3498DB;
    --blue-secondary: #00B5E4;
    --red-primary: #E74C3C;
    --red-secondary: #C0392B;
    --red-third: #CC5C67;
    --purple: #8A2BE2;
    --yellow: #F9F871;
    --black-primary: #050505;
    --black-secondary: #333333;
    --gray-primary: #F2F2F2;
    --gray-secondary: #C0C0C0;
    --gradient-secondary: linear-gradient(36deg, #3498DB, var(--purple), #F9F871);
    --gradient-primary: linear-gradient(45deg, #2EE4B1, var(--purple), #F9F871);
    --gradient-third: linear-gradient(45deg, #2EE4B1, var(--blue-secondary) , var(--purple) , var(--yellow));
    --shadow-primary: 0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19);
    --shadow-secondary: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
    --text-sd1: 1px 1px 3px rgba(0, 0, 0, 0.3);
    --text-sd2: 2px 2px 4px rgba(0, 0, 0, 0.2);
}
```

## Dark mode theme:

```css

[data-theme="dark"] {
    --bg-color1: #121212;
    --green-primary: #2EE4B1;
    --green-secondary: #2C7A69;
    --blue-primary: #3498DB;
    --blue-secondary: #2980B9;
    --red-primary: #E74C3C;
    --red-secondary: #C0392B;
    --red-third: #A93226;
    --purple: #8A2BE2;
    --yellow: #F9F871;
    --black-primary: #F8F8F8;
    --black-secondary: #E0E0E0;
    --gray-primary: #333333;
    --gray-secondary: #4F4F4F;
    --gradient-secondary: linear-gradient(36deg, #2980B9, var(--purple), #F9F871);
    --gradient-primary: linear-gradient(45deg, #2C7A69, var(--purple), #F9F871);
    --gradient-third: linear-gradient(45deg, #2EE4B1, var(--blue-secondary), var(--purple), var(--yellow));
    --shadow-primary: 0 4px 8px rgba(255, 255, 255, 0.2), 0 6px 20px rgba(255, 255, 255, 0.19);
    --shadow-secondary: 0 4px 6px rgba(255, 255, 255, 0.1), 0 1px 3px rgba(255, 255, 255, 0.08);
    --text-sd1: 1px 1px 3px rgba(255, 255, 255, 0.3);
    --text-sd2: 2px 2px 4px rgba(255, 255, 255, 0.2);
}
```

# File naming:

**HTML:**

- The file must contain all lower-case letters.
- The file must have a **‘ - ’** in between each new word **e.g : tv-show.html**

**Javascript:**

- The file must be named according to camelCasing. **e.g : tvShows.js**

**CSS:**

- The file must contain all lower-case letters.
- The file must have a **‘ - ’** in between each new word. **e.g : tv-shows.css**

Classes, function and variable naming

**HTML:**

- **Class naming** : class names must use ‘ - ’ to separate each word, with the names corresponding to their sections. **e.g: navbar-container**

**Javascript:**

- **Function naming** : The function names must follow the camelCasing naming convention and the names must be relevant to their usage. **e.g: buttonToggle**

**Note**: Functions must contain the function keyword (no usage of arrow functions, unless it is an anonymous function).

- **Variable naming**: The variable’s names must follow the camelCasing naming convention and the names must have meaning according to their usage. **e.g: toggleButton**

**Note**: Variables must be declared with their ‘const’ or ‘let’

# Comment rules

**Common comments rule**: Regardless of the file type, the comments must contain a prefix followed by a **‘ : ’** and then an explanation/description.  **e.g : Card : Product card**

**HTML:**

- Each main section must be separated by a space and then a comment on a new space.
- Sub-sections do not follow the same rules as the main sections.

**Javascript:**

- Each function must have a comment with the function name followed by a description of its functionality. e.g: accordionToggle : toggles a items to create an accordion affect

# Version Control

Issue naming convention :

**Issue naming :** The issues must have the issue name followed by ‘:’ and then a description of the issue at hand

Merge Request :

- **Title:** The issue name must be put in the title part.
- **Description:** The issue name must be followed by a description of what the issue is and how it should be fixed. e.g: homepage: Create the homepage with responsiveness.

# Commit Message :

- **Common commit rules:** Commits must be detailed stating the changes made along with a short and meaningful description of the changes.
- **Commit prefixes:**
- **Init:** when you initialize the workspace on a new branch.
- **Add:** when adding a new functionality on a branch.
- **Finish:** when the entire branch is finished (the last commit before merging the branch).
- **Fix:** when fixing something on the bugfix/hotfix branch.