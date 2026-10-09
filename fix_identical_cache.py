import json
import urllib.request
import urllib.parse
import time
import concurrent.futures

CACHE_FILE = '/Users/leonid/.gemini/antigravity/scratch/akfa-tajikistan/all_translations_cache.json'
with open(CACHE_FILE, 'r', encoding='utf-8') as f:
    cache = json.load(f)

ru_dict = cache.get('ru', {})

# Find entries where src == dst and len > 5
identical = [k for k, v in ru_dict.items() if k == v and len(k) > 5 and not k.isupper() and not k.startswith('+99')]
print(f"Total phrases that remained identical (failed translation): {len(identical)}")

def retranslate(text):
    # Try mymemory with de-en pair or alternative free mirror
    url = f"https://api.mymemory.translated.net/get?q={urllib.parse.quote(text)}&langpair=en|ru&de=leonid@loft.tj"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req, timeout=8) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            t = data.get('responseData', {}).get('translatedText', text)
            if t and t != text:
                return text, t.replace('&quot;', '"').replace('&#39;', "'").replace('&amp;', '&')
    except Exception:
        pass
    return text, text

batch_size = 20
fixed = 0
for i in range(0, len(identical), batch_size):
    batch = identical[i:i+batch_size]
    with concurrent.futures.ThreadPoolExecutor(max_workers=8) as ex:
        results = list(ex.map(retranslate, batch))
    for src, dst in results:
        if dst != src:
            ru_dict[src] = dst
            fixed += 1
    time.sleep(0.1)

print(f"Successfully re-translated {fixed} / {len(identical)} items!")
with open(CACHE_FILE, 'w', encoding='utf-8') as f:
    json.dump(cache, f, ensure_ascii=False, indent=2)
