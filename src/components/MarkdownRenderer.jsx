import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

function TableWrapper({ children }) {
  return <div className="table-wrapper">{children}</div>;
}

function generateId(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');
}

const components = {
  h1: ({ children }) => (
    <h1 id={generateId(String(children))}>{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 id={generateId(String(children))}>{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 id={generateId(String(children))}>{children}</h3>
  ),
  h4: ({ children }) => (
    <h4 id={generateId(String(children))}>{children}</h4>
  ),
  table: ({ children }) => (
    <TableWrapper>
      <table>{children}</table>
    </TableWrapper>
  ),
  blockquote: ({ children }) => {
    // Check first text content for callout patterns
    const text = extractText(children);
    let calloutClass = '';
    if (text.includes('Warning:') || text.includes('⚠️')) {
      calloutClass = 'callout-warning';
    } else if (text.includes('Danger:') || text.includes('❌')) {
      calloutClass = 'callout-danger';
    } else if (text.includes('Design Rule:') || text.includes('✅')) {
      calloutClass = 'callout-success';
    }
    return <blockquote className={calloutClass}>{children}</blockquote>;
  },
  a: ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ),
};

function extractText(children) {
  if (!children) return '';
  if (typeof children === 'string') return children;
  if (Array.isArray(children)) {
    return children.map(extractText).join('');
  }
  if (children?.props?.children) {
    return extractText(children.props.children);
  }
  return '';
}

export default function MarkdownRenderer({ content }) {
  if (!content) return null;

  return (
    <div className="prose-wiki">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
