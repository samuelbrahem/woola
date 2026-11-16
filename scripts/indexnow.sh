#!/bin/sh
# Submit every URL from the woola.ca sitemap and the four division sitemaps to
# IndexNow (Bing, Yandex, DuckDuckGo, Seznam). Google does not use IndexNow.
# Usage: scripts/indexnow.sh   (reads the key from public/<key>.txt)
set -e
KEY=$(ls public/*.txt | grep -E '/[0-9a-f]{32}\.txt$' | head -1 | xargs basename | sed 's/\.txt$//')
for host in woola.ca woolamech.ca woolapower.ca woolaelectrical.ca woolabuild.ca; do
  urls=$(curl -s "https://$host/sitemap.xml" | grep -oE "<loc>[^<]+" | sed 's/<loc>//' | python3 -c 'import sys,json;print(json.dumps([l.strip() for l in sys.stdin if l.strip()]))')
  n=$(echo "$urls" | python3 -c 'import sys,json;print(len(json.load(sys.stdin)))')
  code=$(curl -s -o /dev/null -w "%{http_code}" -X POST "https://api.indexnow.org/indexnow" -H "Content-Type: application/json; charset=utf-8" \
    -d "{\"host\":\"$host\",\"key\":\"$KEY\",\"keyLocation\":\"https://$host/$KEY.txt\",\"urlList\":$urls}")
  echo "$host: $n urls -> HTTP $code"
done
