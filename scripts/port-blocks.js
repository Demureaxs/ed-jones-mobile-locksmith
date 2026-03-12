const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '../src/components/blocks.tsx');
let content = fs.readFileSync(file, 'utf8');

// Replace imports
content = content.replace(
  `import { TemplateProps } from '../types';`,
  `import { ServicePage, BlogPost } from '@/types';\nimport config from '@/data/config.json';`
);

// Replace TemplateProps with simpler props
content = content.replace(
  `export function DemoHome({ lead, industry, slug }: TemplateProps) {`,
  `export function DemoHome() {`
);
content = content.replace(
  `export function ServicesIndex({ lead, services, industry, slug }: TemplateProps) {`,
  `export function ServicesIndex({ services }: { services?: ServicePage[] }) {`
);
content = content.replace(
  `export function ServiceDetail({ service, lead, industry, slug }: TemplateProps) {`,
  `export function ServiceDetail({ service }: { service?: ServicePage }) {`
);
content = content.replace(
  `export function BlogIndex({ posts, industry, slug }: TemplateProps) {`,
  `export function BlogIndex({ posts }: { posts?: BlogPost[] }) {`
);
content = content.replace(
  `export function BlogPost({ post, industry, slug }: TemplateProps) {`,
  `export function BlogPost({ post }: { post?: BlogPost }) {`
);

// General replacements
content = content.replace(/lead\?\.phone/g, 'config.phone');
content = content.replace(/lead\?\.businessName/g, 'config.businessName');
content = content.replace(/href=\{`\/\$\{industry\}\/\$\{slug\}\//g, 'href={`/');
content = content.replace(/href=\{`\/\$\{industry\}\/\$\{slug\}`\}/g, "href='/'");
content = content.replace(/industry && slug \? `\/\$\{industry\}\/\$\{slug\}` : '\/'/g, "'/'");
content = content.replace(/`\/\$\{industry\}\/\$\{slug\}`/g, "'/'");
content = content.replace(/`\/\$\{industry\}\/\$\{slug\}\/services\/\$\{s\.serviceSlug\}`/g, '`/services/${s.id}`');
content = content.replace(/`\/\$\{industry\}\/\$\{slug\}\/services\/\$\{srv\.id\}`/g, '`/services/${srv.id}`');
content = content.replace(/`\/\$\{industry\}\/\$\{slug\}\/blog\/\$\{p\.postSlug\}`/g, '`/blog/${p.id}`');

fs.writeFileSync(file, content);
console.log('Done porting blocks');
