# How to Add Interview Experiences

This guide explains how to add new interview experiences to your portfolio.

## Quick Start

All interview experiences are stored in: `src/data/interviewExperiences.js`

## Adding a New Interview Experience

### Step 1: Open the Data File
Open `src/data/interviewExperiences.js`

### Step 2: Add Your Experience
Copy the template below and add it to the array:

```javascript
{
  id: 2, // Increment this number for each new experience
  company: "Amazon",
  role: "Software Development Engineer",
  date: "2024-02-20",
  image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  summary: "A brief 1-2 sentence summary of your interview experience at Amazon.",
  content: [
    {
      type: "heading",
      text: "Interview Overview",
      level: 1 // 1 = h1, 2 = h2, 3 = h3
    },
    {
      type: "paragraph",
      text: "Your detailed paragraph text goes here. Explain the interview process.",
      fontSize: "medium" // Options: "small", "medium", "large"
    },
    {
      type: "list",
      items: [
        "First bullet point",
        "Second bullet point",
        "Third bullet point"
      ]
    },
    {
      type: "image",
      url: "https://example.com/image.jpg",
      alt: "Description of image",
      caption: "Optional caption text" // This is optional
    }
  ],
  status: "published", // Use "draft" to hide, "published" to show
  tags: ["Amazon", "Backend", "System Design"]
}
```

## Content Types Explained

### 1. Heading
Creates section headings in your article.

```javascript
{
  type: "heading",
  text: "Your Heading Text",
  level: 1 // 1 for main headings, 2 for subheadings, 3 for smaller headings
}
```

**Example Output:**
- Level 1: Large blue heading
- Level 2: Medium light blue heading
- Level 3: Smaller light blue heading

### 2. Paragraph
Regular text content with customizable font size.

```javascript
{
  type: "paragraph",
  text: "Your paragraph text here. This can be as long as you need.",
  fontSize: "medium" // "small", "medium", or "large"
}
```

**Font Sizes:**
- `"small"`: 0.8rem - for fine print or notes
- `"medium"`: 0.95rem - default, for regular text
- `"large"`: 1.1rem - for emphasis or key takeaways

### 3. List
Creates bullet-pointed lists.

```javascript
{
  type: "list",
  items: [
    "First item",
    "Second item",
    "Third item"
  ]
}
```

### 4. Image
Adds images to your content.

```javascript
{
  type: "image",
  url: "https://example.com/your-image.jpg",
  alt: "Description for accessibility",
  caption: "Optional caption below the image" // Remove this line if you don't need a caption
}
```

## Complete Example

Here's a complete example with multiple content types:

```javascript
{
  id: 3,
  company: "Microsoft",
  role: "Backend Developer",
  date: "2024-03-10",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  summary: "My experience interviewing for Backend Developer role at Microsoft. Focus on Azure and distributed systems.",
  content: [
    {
      type: "heading",
      text: "Interview Process",
      level: 1
    },
    {
      type: "paragraph",
      text: "The Microsoft interview consisted of 4 rounds spread over 2 days. Each round tested different aspects of software engineering.",
      fontSize: "medium"
    },
    {
      type: "heading",
      text: "Round 1: Coding Challenge",
      level: 2
    },
    {
      type: "paragraph",
      text: "The first round was a 60-minute online coding assessment with two medium-level LeetCode problems.",
      fontSize: "medium"
    },
    {
      type: "list",
      items: [
        "Problem 1: Dynamic Programming - Coin Change Variations",
        "Problem 2: Graph - Shortest Path in Weighted Graph",
        "Both required optimal time and space complexity"
      ]
    },
    {
      type: "heading",
      text: "Key Learnings",
      level: 2
    },
    {
      type: "paragraph",
      text: "Practice behavioral questions using the STAR method. Microsoft values leadership principles heavily.",
      fontSize: "large"
    }
  ],
  status: "published",
  tags: ["Microsoft", "Azure", "Distributed Systems", "Backend"]
}
```

## Best Practices

### Images
- Use company logos from Wikimedia Commons or official sources
- Preferred format: SVG or PNG with transparent background
- Host images on reliable CDNs or use direct URLs

### Content Structure
1. Start with a main heading (level 1) for the overview
2. Use level 2 headings for each interview round
3. Mix paragraphs, lists, and images for better readability
4. End with "Key Takeaways" or "Learnings" section

### Writing Tips
- Be honest about your experience
- Include specific technical details (algorithms, system design concepts)
- Mention what you learned, even from rejections
- Keep paragraphs concise and scannable
- Use lists for multiple related points

### Tags
- Include company name
- Add role type (Backend, Frontend, Full-stack)
- Mention key topics (System Design, DSA, Behavioral)
- Keep to 3-5 tags maximum

## Publishing Process

1. **Draft Mode**: Set `status: "draft"` while writing
   - This hides the experience from the public site
   - You can preview by temporarily changing to "published"

2. **Published**: Set `status: "published"` when ready
   - The experience will appear on `/interview-experience`
   - It will be accessible via direct link

## Testing Your Changes

1. Save `interviewExperiences.js`
2. Run `npm run dev` to start the development server
3. Navigate to `http://localhost:5173/interview-experience`
4. Click on your experience card to view the full article
5. Check formatting, images, and links

## URL Structure

- List page: `yadavrohit.in/interview-experience`
- Detail page: `yadavrohit.in/interview-experience/{id}`

Example: If your experience has `id: 3`, it will be at:
`yadavrohit.in/interview-experience/3`

## Troubleshooting

### Experience not showing?
- Check `status` is set to `"published"`
- Verify the `id` is unique
- Make sure the file syntax is correct (no missing commas or brackets)

### Image not loading?
- Verify the URL is correct and publicly accessible
- Try opening the image URL directly in a browser
- Use https:// URLs (not http://)

### Formatting looks wrong?
- Check that content types match exactly: "heading", "paragraph", "list", "image"
- Verify fontSize values: "small", "medium", or "large"
- Ensure heading level is 1, 2, or 3

## Need Help?

If you encounter issues:
1. Check the browser console for error messages
2. Review the example experience (Google) in the data file
3. Ensure all JSON syntax is correct (commas, brackets, quotes)
4. Run `npm run lint` to check for code issues
