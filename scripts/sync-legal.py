"""Recopie les textes légaux de l'app (CGU, confidentialité, mentions) dans le site.

Source de vérité : i18n/fr.json et i18n/en.json de shobukan-app (section "legal"),
dates : LAST_UPDATE dans app/(settings)/terms.tsx et privacy.tsx.

Usage : python3 scripts/sync-legal.py ../shobukan-app
"""
import json, pathlib, re, sys

app = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else '../shobukan-app')
out = pathlib.Path(__file__).resolve().parent.parent / 'src/data/legal.json'

def last_update(name):
    src = (app / 'app/(settings)' / f'{name}.tsx').read_text(encoding='utf-8')
    return re.search(r"LAST_UPDATE = '([0-9-]+)'", src).group(1)

data = {'updated': {'terms': last_update('terms'), 'privacy': last_update('privacy')}}
for lang in ('fr', 'en'):
    legal = json.loads((app / f'i18n/{lang}.json').read_text(encoding='utf-8'))['legal']
    data[lang] = {
        'terms': {'title': legal['terms']['title'], 'sections': legal['terms']['sections']},
        'privacy': {'title': legal['privacy']['title'], 'sections': legal['privacy']['sections']},
        'notices': {'title': legal['notices']['title'], 'sections': legal['notices']['sections'],
                    'ip_title': legal['notices'].get('ip_title'), 'ip_body': legal['notices'].get('ip_body')},
    }
out.write_text(json.dumps(data, ensure_ascii=False, indent=1) + '\n', encoding='utf-8')
print('écrit', out)
