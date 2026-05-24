import './globals.css';

import V2Chrome from './v2-chrome';

/**
 * v2 layout — marketing CSS must load from this Server Component so /v2
 * hard-refresh gets styles on first paint (not only after client navigation).
 */
export default function V2Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Offset fixed sticky nav before React hydrates body.v2-has-site-header */}
      <style
        dangerouslySetInnerHTML={{
          __html: `@media(max-width:990px){body:has(header .sticky-header){padding-top:74px}}@media(max-width:768px){body:has(header .sticky-header){padding-top:50px}}`,
        }}
      />
      <V2Chrome>{children}</V2Chrome>
    </>
  );
}
