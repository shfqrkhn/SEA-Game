"""QA comparison sheets only; source rasters/vectors are not modified."""
from pathlib import Path
from PIL import Image,ImageDraw
import json
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'docs/evidence/convergence/art-border-repair-20261008'
queue=json.loads((OUT/'queue.json').read_text())
rows=[q for q in queue if (OUT/'encodings'/f'{q["identity"].replace("/","-")}.json').exists()]
boards=[]
for start in range(0,len(rows),6):
    group=rows[start:start+6]
    sheet=Image.new('RGB',(1800,40+len(group)*230),'#deddd9');draw=ImageDraw.Draw(sheet)
    for col,label in enumerate(['BEFORE','REPAIRED RASTER','REPAIRED NATIVE VECTOR']):draw.text((col*600+10,10),label,fill='black')
    for i,row in enumerate(group):
        y=40+i*230;draw.text((8,y),row['identity'],fill='black')
        paths=[OUT/'originals'/f'{row["identity"]}.webp',ROOT/'assets/v1'/f'{row["identity"]}.webp',OUT/'vector-previews'/f'{row["identity"]}.png']
        for col,p in enumerate(paths):
            if not p.exists():continue
            with Image.open(p) as image:
                image=image.convert('RGB');image.thumbnail((592,198),Image.Resampling.LANCZOS)
                sheet.paste(image,(col*600+4+(592-image.width)//2,y+23+(198-image.height)//2))
    name=f'comparison-{start//6+1:02}.png';sheet.save(OUT/name);boards.append({'file':name,'assets':[r['identity'] for r in group]})
(OUT/'comparison-inputs.json').write_text(json.dumps({'method':'Reduced QA comparison sheets; original input pixels preserved in originals; generated rasters and traced canonical SVG previews shown side by side','boards':boards},indent=2))
print(json.dumps(boards))
