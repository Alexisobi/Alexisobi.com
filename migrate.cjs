const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const oldHtmlDir = path.join(__dirname, 'old_html');

// We also need the original index.html content which isn't in old_html. Let's get it from git if possible, or just skip it if it's not there.
// Actually, I can just use a simple regex to replace class with className, etc.
function htmlToJsx(html) {
  let jsx = html
    .replace(/class=/g, 'className=')
    .replace(/for=/g, 'htmlFor=')
    .replace(/<img([^>]*[^/])>/g, '<img$1 />')
    .replace(/<input([^>]*[^/])>/g, '<input$1 />')
    .replace(/<br>/g, '<br />')
    .replace(/<hr>/g, '<hr />')
    .replace(/<!--[\s\S]*?-->/g, '') // remove comments to avoid JSX errors
    .replace(/style="([^"]*)"/g, (match, styleStr) => {
        // Very basic inline style converter (not perfect but handles simple cases)
        const styles = styleStr.split(';').filter(s => s.trim());
        const styleObj = {};
        styles.forEach(s => {
            let [key, value] = s.split(':');
            if (key && value) {
                key = key.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
                styleObj[key] = value.trim();
            }
        });
        return `style={${JSON.stringify(styleObj)}}`;
    });
  return jsx;
}

const files = fs.readdirSync(oldHtmlDir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  const content = fs.readFileSync(path.join(oldHtmlDir, file), 'utf8');
  const mainMatch = content.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  
  if (mainMatch) {
    const mainContent = mainMatch[0]; // Includes <main> tags
    const jsxContent = htmlToJsx(mainContent);
    
    // Capitalize first letter for component name
    let componentName = file.replace('.html', '');
    if (componentName === '404') componentName = 'NotFound';
    else componentName = componentName.charAt(0).toUpperCase() + componentName.slice(1);
    
    // Ensure we import Link if there are a tags
    const hasLinks = jsxContent.includes('<a ');
    const jsxReplacedLinks = jsxContent.replace(/<a href="([^"]+)"([^>]*)>/g, (match, href, rest) => {
        if (href.startsWith('http') || href.startsWith('#')) return match;
        // Transform hrefs like "blog.html" to "/blog"
        let newHref = href.replace('.html', '');
        if (newHref === 'index') newHref = '';
        return `<Link to="/${newHref}"${rest}>`;
    }).replace(/<\/a>/g, (match, offset, str) => {
        // Need a better regex to only replace </a> matching <Link>, but for this simple site it might be fine, or we just keep <a> tags for now.
        return match; 
    });

    // Actually, converting <a> to <Link> with regex is tricky. Let's just keep <a> tags for now or use a basic replacement.
    // For simplicity, let's keep <a> tags, React Router will do full page reloads, which is okay until manual fixing.
    
    const fileOutput = `import React from 'react';\nimport { Link } from 'react-router-dom';\n\nexport default function ${componentName}() {\n  return (\n    ${jsxContent}\n  );\n}\n`;
    
    fs.writeFileSync(path.join(pagesDir, `${componentName}.jsx`), fileOutput);
    console.log(`Migrated ${file}`);
  }
});
