import React, { useState, useEffect } from 'react';

import { Box, List, ListItem, Typography, ListItemText } from '@mui/material';

type TableOfContentsProps = {
  content: string;
};

type toc = {
  id: string;
  text: string | null;
  level: number;
};

const TableOfContents = ({ content }: TableOfContentsProps) => {
  const [toc, setToc] = useState<toc[]>([]);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    // Parse the content and generate ToC
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    const headings = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');

    const tocItems = Array.from(headings).map((heading, index) => ({
      id: `toc-${index}`,
      text: heading.textContent,
      level: parseInt(heading.tagName.charAt(1), 10),
    }));

    setToc(tocItems);

    // Add ids to the actual headings in the content
    headings.forEach((heading, index) => {
      heading.id = `toc-${index}`;
    });

    // Set up intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, [content]);

  return (
    <Box sx={{ position: 'sticky', top: 90, maxHeight: 'calc(100vh - 40px)', overflowY: 'auto' }}>
      <Typography variant="h6" gutterBottom>
        Table of Contents
      </Typography>
      <List dense>
        {toc &&
          toc.map((item) => (
            <ListItem
              key={item.id}
              button
              component="a"
              href={`#${item.id}`}
              sx={{
                pl: (item.level - 1) * 2,
                color: activeId === item.id ? 'primary.main' : 'text.primary',
                fontWeight: activeId === item.id ? 'bold' : 'normal',
              }}
            >
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
      </List>
    </Box>
  );
};

export default TableOfContents;
