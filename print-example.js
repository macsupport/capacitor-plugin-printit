// Import Capacitor
import { Plugins } from '@capacitor/core';

// Destructure the custom plugin
const { PrintitPlugin } = Plugins;

// Function to invoke the print
const printDiv = async (divId, name, orientation) => {
  try {
    // Call the print method from the PrintitPlugin
    const printResult = await PrintitPlugin.print({
      divId: divId,
      name: name,
      orientation: orientation
    });
    console.log('Print successful', printResult);
  } catch (error) {
    console.error('Error printing', error);
  }
};

// Example usage:
printDiv('myDivId', 'MyDocument', 'portrait');
