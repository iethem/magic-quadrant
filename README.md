# Magic Quadrant | <a href="https://magic-quadrant-80769.web.app/">Live Demo</a>

[Magic Quadrant](https://en.wikipedia.org/wiki/Magic_Quadrant) is a scatter chart develop by Gartner to visualize major players in a specific market. You can find the sample magic quadrant for Cloud Providers in this [link](https://aws.amazon.com/blogs/aws/aws-named-as-a-cloud-leader-for-the-10th-consecutive-year-in-gartners-infrastructure-platform-services-magic-quadrant/).
Magic Quadrant has two axes:
 1. X-axis (Completeness of Vision): represents relative innovation level.
 2. Y-axis (Ability to Execute): represents relative financial maturity.

We would like you to develop a Magic Quadrant designer, in which users can develop their Magic Quadrants. Please watch the video in this [link](https://youtu.be/RF5xhFNzhYI).

**Your Task**
1. Develop a React app using Typescript.
2. Use `npx create-react-app my-app --template typescript` to create project.
3. Do not use any other library except your favorite CSS-in-js library.
4. Do not use CSS or SCSS!.
5. Upload your source code to Github or Bitbucket publicly. (It should be clonable and can be runnable by `yarn start` or `npm run start` commands.)
6. Build your code and upload it somewhere publicly accessible to test.

**Requirements**

 1. Every item should have
	 1. `label: string`: Name of the item
	 2. `x:number`: X-axis value (from 0 to 100, 2 decimals)
	 3. `y:number`: Y-axis value (from 0 to 100, 2 decimals)
 2. Table should show item properties and a delete button.
 3. Chart should show item label.
 4. Users should be able to add as many items as they want.
 5. Users should be able to delete existing items.
 6. Users should be able to edit items using the table.
 7. Users should be able to change the x and the y value of an item by dragging the item.
 8. Chart and Table should be in sync.
 9. Items should be preserved when the page is refreshed. (Store locally in the browser)
 10. Table should be updated while dragging the dot.

**Colors Codes**
|Name | Code|
| -- | -- |
| DARK_GREY | #696969 |
|LIGHT_GREY | #E3E4E7 |
|LIGHT_BLUE | #ADB9C3 |
| DARK_BLUE | #3878A2 |
| WHITE | #FFFFFF |

**Colors and Dimensions**

 1. All paddings, margins and border radius values should be similar to the video.
 2. Chart Area : 400px;
	 - width: 400px
	 - height: 400px
	 - border: 2px DARK_GREY
 3. Point on Chart
	 - width: 15px
	 - height: 15px
	 - DARK_BLUE
 4. Label of Points
	 - 13px
	 - sans-serif
	 - DARK_BLUE
 5. Inner axis on Chart
	 - 2px wide
	 - LIGHT_GREY
 6. Label of Areas on Chart
	 - WHITE text
	 - LIGHT_BLUE background
 7. Table Header
	 - LIGHT_BLUE background
	 - WHITE text
	 - sans-serif
8. Buttons
	- LIGHT_GREY background
	- DARK_GREY background on hover 

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
