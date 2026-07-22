export function slugify(text) {
    return text
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-");
  }
  
  export function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }