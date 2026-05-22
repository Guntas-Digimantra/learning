# Responsive design and state variants

This file explains how to use responsive prefixes and state variants in Tailwind CSS v4.

## Breakpoints

Common breakpoints:
- `sm:` – small screens.
- `md:` – medium screens.
- `lg:` – large screens.
- `xl:` – extra-large screens.
- `2xl:` – very large screens.

When generating code, use mobile-first patterns: start with base utilities, then layer on larger breakpoints.

## State variants

- `hover:`, `focus:`, `focus-visible:`, `active:`, `disabled:`, `visited:`, `checked:`, etc.
- Combine with responsive prefixes in the order `breakpoint:state:utility`, for example `md:hover:bg-blue-600`.

## Other variants

- `dark:` – dark mode variants.
- `group-hover:`, `group-focus:` – group-based variants.
- `data-[state=on]:` and similar – data attribute variants when supported.

Ensure variant order is stable and consistent so class strings remain readable.
