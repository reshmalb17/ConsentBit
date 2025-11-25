/**
 * Converts hex color to RGB values
 */
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  // Remove # if present
  const cleanHex = hex.replace('#', '');
  
  // Handle 3-digit hex
  if (cleanHex.length === 3) {
    const r = parseInt(cleanHex[0] + cleanHex[0], 16);
    const g = parseInt(cleanHex[1] + cleanHex[1], 16);
    const b = parseInt(cleanHex[2] + cleanHex[2], 16);
    return { r, g, b };
  }
  
  // Handle 6-digit hex
  if (cleanHex.length === 6) {
    const r = parseInt(cleanHex.substring(0, 2), 16);
    const g = parseInt(cleanHex.substring(2, 4), 16);
    const b = parseInt(cleanHex.substring(4, 6), 16);
    return { r, g, b };
  }
  
  return null;
}

/**
 * Calculates the relative luminance of a color
 * Uses the formula from WCAG 2.0: https://www.w3.org/WAI/GL/wiki/Relative_luminance
 */
function getLuminance(r: number, g: number, b: number): number {
  // Normalize RGB values to 0-1
  const [rs, gs, bs] = [r, g, b].map(val => {
    val = val / 255;
    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  });
  
  // Calculate relative luminance
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

/**
 * Determines if a color is dark (returns true) or light (returns false)
 * @param color - Hex color string (e.g., "#000000" or "#fff")
 * @returns true if color is dark, false if light
 */
export function isDarkColor(color: string): boolean {
  if (!color) return false;
  
  const rgb = hexToRgb(color);
  if (!rgb) return false;
  
  const luminance = getLuminance(rgb.r, rgb.g, rgb.b);
  
  // Threshold of 0.5 - colors with luminance < 0.5 are considered dark
  return luminance < 0.5;
}

/**
 * Gets the appropriate close icon color based on background color
 * @param backgroundColor - Hex color string of the background
 * @returns "#D3D3D3" (light grey) for dark backgrounds, "#000000" (black) for light backgrounds
 */
export function getCloseIconColor(backgroundColor: string): string {
  if (!backgroundColor) return "#000000";
  
  // Normalize the color string
  let normalizedColor = backgroundColor.trim();
  if (!normalizedColor.startsWith('#')) {
    normalizedColor = '#' + normalizedColor;
  }
  
  // Check if background is dark
  const isDark = isDarkColor(normalizedColor);
  
  // Return light grey for dark backgrounds, black for light backgrounds
  return isDark ? "#D3D3D3" : "#000000";
}

/**
 * Gets the appropriate brand image color based on background color
 * @param backgroundColor - Hex color string of the background
 * @returns Light grey (#D3D3D3) for dark backgrounds, original/dark color for light backgrounds
 */
export function getBrandImageColor(backgroundColor: string): string {
  if (!backgroundColor) return "#000000";
  
  // Normalize the color string
  let normalizedColor = backgroundColor.trim();
  if (!normalizedColor.startsWith('#')) {
    normalizedColor = '#' + normalizedColor;
  }
  
  // Check if background is dark
  const isDark = isDarkColor(normalizedColor);
  
  // Return light grey for dark backgrounds, black for light backgrounds
  return isDark ? "#D3D3D3" : "#000000";
}

/**
 * Gets the X-Vector SVG icon with dynamic color based on background
 * @param backgroundColor - Hex color string of the background
 * @returns SVG string with appropriate fill color
 */
export async function getCloseIconSVG(backgroundColor: string): Promise<string> {
  try {
    // Import the SVG file
    const xVectorUrl = new URL("../assets/X-Vector.svg", import.meta.url).href;
    const response = await fetch(xVectorUrl);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch X-Vector.svg: ${response.status}`);
    }
    
    let svgContent = await response.text();
    
    // Get the appropriate color based on background
    const iconColor = getCloseIconColor(backgroundColor);
    
    // Replace the fill color in the SVG - simple and direct replacement
    // The SVG has fill="black", replace it with the dynamic color
    svgContent = svgContent.replace(/fill="black"/g, `fill="${iconColor}"`);
    svgContent = svgContent.replace(/fill='black'/g, `fill="${iconColor}"`);
    svgContent = svgContent.replace(/fill=black/g, `fill="${iconColor}"`);
    
    // Also handle case-insensitive matching
    svgContent = svgContent.replace(/fill\s*=\s*["']black["']/gi, `fill="${iconColor}"`);
    
    // If fill attribute still exists with any value, replace it
    svgContent = svgContent.replace(/fill\s*=\s*["'][^"']*["']/gi, `fill="${iconColor}"`);
    
    // Resize the SVG to 16x16 for the close button
    svgContent = svgContent.replace(/width="385"/g, 'width="16"');
    svgContent = svgContent.replace(/height="385"/g, 'height="16"');
    // Keep viewBox for proper scaling
    svgContent = svgContent.replace(/viewBox="0 0 385 385"/g, 'viewBox="0 0 385 385"');
    
    // Verify the fill color was set correctly
    if (!svgContent.includes(`fill="${iconColor}"`)) {
      // Force add the fill attribute if it's missing
      svgContent = svgContent.replace(/<path([^>]*?)>/gi, (match, attrs) => {
        if (!attrs.includes('fill=')) {
          return `<path${attrs} fill="${iconColor}">`;
        }
        return match;
      });
    }
    
    return svgContent;
  } catch (error) {
    // Fallback to inline SVG
    const iconColor = getCloseIconColor(backgroundColor);
    return `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4L12 12M12 4L4 12" stroke="${iconColor}" stroke-width="2" stroke-linecap="round"/></svg>`;
  }
}

/**
 * Gets the BrandImage SVG with dynamic color based on background
 * @param backgroundColor - Hex color string of the background
 * @returns SVG string with appropriate fill/stroke color
 */
export async function getBrandImageSVG(backgroundColor: string): Promise<string> {
  try {
    // Import the SVG file
    const brandImageUrl = new URL("../assets/BrandImage.svg", import.meta.url).href;
    const response = await fetch(brandImageUrl);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch BrandImage.svg: ${response.status}`);
    }
    
    let svgContent = await response.text();
    
    // Get the appropriate color based on background
    const brandColor = getBrandImageColor(backgroundColor);
    
    // Replace fill colors in the SVG
    svgContent = svgContent.replace(/fill="[^"]*"/g, `fill="${brandColor}"`);
    svgContent = svgContent.replace(/fill='[^']*'/g, `fill="${brandColor}"`);
    svgContent = svgContent.replace(/fill\s*=\s*["'][^"']*["']/gi, `fill="${brandColor}"`);
    
    // Replace stroke colors if present
    svgContent = svgContent.replace(/stroke="[^"]*"/g, `stroke="${brandColor}"`);
    svgContent = svgContent.replace(/stroke='[^']*'/g, `stroke="${brandColor}"`);
    svgContent = svgContent.replace(/stroke\s*=\s*["'][^"']*["']/gi, `stroke="${brandColor}"`);
    
    // Ensure fill color is set on path elements if missing
    if (!svgContent.includes(`fill="${brandColor}"`) && !svgContent.includes(`stroke="${brandColor}"`)) {
      svgContent = svgContent.replace(/<path([^>]*?)>/gi, (match, attrs) => {
        if (!attrs.includes('fill=') && !attrs.includes('stroke=')) {
          return `<path${attrs} fill="${brandColor}">`;
        }
        return match;
      });
    }
    
    return svgContent;
  } catch (error) {
    // Fallback: return original SVG or a simple fallback
    const brandColor = getBrandImageColor(backgroundColor);
    return `<svg width="100" height="30" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="0" y="20" fill="${brandColor}" font-family="Arial" font-size="14">ConsentBit</text></svg>`;
  }
}

