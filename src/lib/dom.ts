import memoized from 'nano-memoize';

export const TRANSPARENT_RGBA = 'rgba(0, 0, 0, 0)';

/**
 * Memoizes and returns the nearest parent element with a non-transparent background color.
 * This function recursively traverses the DOM tree upwards from the given element until it finds
 * an element with a background color that is not transparent or fully transparent black (rgba(0, 0, 0, 0)).
 * It uses memoization to improve performance by caching the results for repeated calls with the same element.
 *
 * @param {Element | null} element - The starting DOM element for the search. If null, the search is not performed.
 * @returns {HTMLElement | null} The nearest parent HTML element with a non-transparent background color.
 *                               Returns null if no such element is found or if the input is null.
 */
export const findBackgroundElement = memoized((element: Element | null): HTMLElement | null => {
  while (element) {
    const bgColor = window.getComputedStyle(element, null).getPropertyValue('background-color');
    const rgba = bgColor.match(/\d+/g);
    if (rgba && rgba.length >= 3 && bgColor !== TRANSPARENT_RGBA && bgColor !== 'transparent') {
      return element as HTMLElement;
    }
    element = element.parentElement;
  }
  return null;
});

/**
 * Calculates the perceived brightness of a given color, optionally considering its alpha value.
 * The function takes a color string (in RGB, RGBA format), parses it, and calculates the brightness
 * based on the standard luminosity formula. If the color includes an alpha channel, the brightness
 * is adjusted by blending the color with a white background.
 * The function uses memoization to cache results for repeated calls with the same color string.
 *
 * @param {string} color - The color string in RGB or RGBA format (e.g., "rgb(255, 255, 255)" or "rgba(255, 255, 255, 0.5)").
 * @returns {number} The calculated brightness value. Returns 50 as a default value if color parsing fails.
 */
export const calculateBrightness = memoized((color: string) => {
  let rgba = color.match(/\d+/g);
  if (!rgba) return 50; // Default brightness if color parsing fails.

  // Convert RGB to brightness, considering alpha if present.
  let [r, g, b, a = 1] = rgba.map(Number); // Default alpha to 1 if not present.
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  const adjustedBrightness = brightness * a + (1 - a) * 255; // Blend with white background.

  return adjustedBrightness;
});

/**
 * Calculates the perceived brightness of the background color of the first 'section' element within the 'main' element of a document.
 * The function first locates the 'main' element and then finds the first 'section' within it. It then retrieves the background color
 * of this 'section' and calculates its brightness using the `calculateBrightness` function.
 * If the 'main' or the first 'section' element is not found, or if the background color is not determined, a default brightness value is returned.
 *
 * @returns {number} The calculated brightness value of the first section's background color.
 *                   Returns 50 as a default value if the 'main' or 'section' elements are not found, or if color parsing fails.
 */
export const getInitialSectionColor = () => {
  const mainElement = document.querySelector('main');
  const firstSection = mainElement?.querySelector('section');

  if (!firstSection) {
    return TRANSPARENT_RGBA;
  }

  return window.getComputedStyle(firstSection, null).getPropertyValue('background-color');
};
