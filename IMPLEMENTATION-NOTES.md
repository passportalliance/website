# Implementation Notes

## Architecture Summary

This is a static-first Next.js 14 application using the App Router. The site is designed to be deployed to Vercel as a static site with optimal performance.

### Key Decisions

1. **Static Export**: Configured with `output: 'export'` for static hosting compatibility
2. **Server Components**: Default to React Server Components for performance
3. **Client Components**: Only used where necessary (Header mobile menu, Contact form)
4. **CSS-First Animation**: No animation libraries; subtle effects via CSS only

### Design Choices

- **Color Palette**: Deep dark background (#0d1117) with blue (#4361ee) and teal (#2ec4b6) accents
- **Typography**: Inter font for clean, professional readability
- **Layout**: Container-based responsive layout with mobile-first approach
- **Accessibility**: Semantic HTML, visible focus states, keyboard navigation

### Brand Assets

Logo files are SVG-based and located in `/public/brand/`:
- `passport-alliance-logo.svg` - Full lockup
- `passport-alliance-mark.svg` - Icon only
- `passport-alliance-wordmark.svg` - Text only

### External Links

All external links use the centralized config in `lib/config.ts`:
- Docs URL is configurable via `NEXT_PUBLIC_DOCS_URL`
- GitHub URL is configurable via `NEXT_PUBLIC_GITHUB_URL`
- Contact endpoint is configurable via `NEXT_PUBLIC_CONTACT_ENDPOINT`

## Known Gaps & Follow-ups

1. **Legal Pages**: Privacy and Terms are minimal placeholders requiring legal review
2. **Contact Form**: Requires backend endpoint configuration for production use
3. **Analytics**: No analytics integration included (can be added via Vercel)
4. **OG Images**: Dynamic OpenGraph images not yet generated
5. **Content Updates**: Consider sourcing content from JSON/TS files for easier updates

## Future Enhancements

- Add subtle scroll-reveal animations (CSS only)
- Add configurable announcement bar
- Source content blocks from local data files
- Add blog/announcements section
- Add language support infrastructure
