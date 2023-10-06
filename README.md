# Image Slider

This is a basic React image slider project that allows you to display and cycle through a list of images. Users can also upload images from their local machine to add them to the slider.

## Features

- Display a list of images in a simple slider.
- Navigate through images using "Previous" and "Next" buttons.
- Automatic image rotation every 5 seconds.
- Upload and add images from your local machine.

## Usage

- The image slider displays a set of initial images when the application loads.

- To navigate through images, click the "&#8249;" (Previous) or "&#8250;" (Next) buttons.

- Images automatically change every 5 seconds if no buttons are pressed.

- To add your own images:
  1. Click the "Choose File" button.
  2. Select an image file from your local machine.
  3. Click the "Add Image" button.

- The newly added image will be included in the slider rotation.

## Customize

You can customize this project by:

- Adding your own initial images to the `initialImages` array in `src/App.js`.

- Modifying the automatic slide transition interval (5 seconds) by changing the value in the `useEffect` hook in `src/components/molecules/slider/Slider.jsx`.

- Applying your own CSS styles to the components to change the appearance of the image slider.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please open an issue or create a pull request.
