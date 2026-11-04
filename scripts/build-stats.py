"""Régénère src/data/stats.json depuis les CSV de contenu de l'app.

Usage : python3 scripts/build-stats.py <dossier scripts/csv de shobukan-app>
Seules les lignes actives (is_active = true) sont comptées.
"""
import csv, collections, json, pathlib, sys

src = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else '../shobukan-app/scripts/csv')
out = {}

def active(name):
    return [r for r in csv.DictReader(open(src / name, encoding='utf-8')) if r.get('is_active') == 'true']

grid = collections.Counter(r['universe'] for r in active('grid_characters_v1.csv'))
for lang in ('fr', 'en'):
    for r in active(f'trivia_{lang}.csv'):
        u = out.setdefault(r['universe'], {'grid': grid.get(r['universe'], 0)})
        d = u.setdefault(lang, {'easy': 0, 'medium': 0, 'hard': 0, 'pairs': 0})
        d[r['difficulty']] += 1
    for r in active(f'word_pairs_{lang}.csv'):
        u = out.setdefault(r['universe'], {'grid': grid.get(r['universe'], 0)})
        u.setdefault(lang, {'easy': 0, 'medium': 0, 'hard': 0, 'pairs': 0})['pairs'] += 1
out.pop('mixed', None)
dest = pathlib.Path(__file__).resolve().parent.parent / 'src/data/stats.json'
dest.write_text(json.dumps(dict(sorted(out.items())), ensure_ascii=False, indent=1) + '\n')
print('écrit', dest)
