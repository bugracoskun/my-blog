import React from 'react';
import MarkdownView from 'react-showdown';
import markdown from './documents/aboutme.md';
import matter from 'gray-matter';

export default function About_me() {
    
  /*const markdown = `
# A custom component: fdfsdfds  fsd ## Naber
 naber **sdfds**  ## dfsd
`;*/
const matterResult = matter(markdown);
const data = matterResult.data;

  return (
    <div>
        <MarkdownView
            markdown={matterResult.content}
            options={{ tables: true, emoji: true }}
        />
    </div>
    
  );
};
