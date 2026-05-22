#!/bin/bash
for dir in /home/dml-guntas/dml/dm_learning_refactor/src/app/v2/\(tailwind\)/*/; do
  slug=$(basename "$dir")
  echo "Checking $slug..."
  # find component used in page.tsx
  component=$(grep -o "import .* from '@/components/.*'" "$dir/page.tsx" | grep -o "@/components/[^\"']*" | sed 's|@/components/||')
  if [ -n "$component" ]; then
    # find css imports in legacy component index.tsx
    css_imports=$(grep -h "import .*public/css/.*\.css" "/home/dml-guntas/dml/dm_learning/src/components/$component/index.tsx" 2>/dev/null)
    if [ -n "$css_imports" ]; then
      echo "Found CSS for $slug: $css_imports"
      # inject into v2 page.tsx if not already there
      if ! grep -q "public/css/" "$dir/page.tsx"; then
        # insert after the last import statement
        awk -v css="$css_imports" '/^import/ {last=NR} {lines[NR]=$0} END {for(i=1;i<=NR;i++) {print lines[i]; if(i==last) print css}}' "$dir/page.tsx" > "$dir/page.tmp"
        mv "$dir/page.tmp" "$dir/page.tsx"
        echo "Injected CSS into $slug"
      fi
    fi
  fi
done
