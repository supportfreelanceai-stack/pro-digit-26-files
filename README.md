# pro-digit-26-files

Repository fitehirizana ny **PDF** sy ny **sary cover** an'ny PRO-DIGIT-26, mizara `public` (sary) sy `privé ara-pikasana` (PDF — public ihany ny repo eto amin'ny GitHub free tier, fa TSY misy na aiza na aiza mampiseho ny lien mivantana any amin'ny mpividy raha tsy efa nandoa vola izy).

## Firafitry ny dossier

```
pdf/
  fianarana/
    prescolaire/
    primaire/
    college/
    lycee/
  asa/
  famorona-asa/
  hafa/

covers/
  fianarana/
  asa/
  famorona-asa/
  hafa/
```

- `pdf/...` → apetraho eto ny rakitra PDF **tena izy** (ilay omena ny mpividy rehefa avy nandoa).
- `covers/...` → apetraho eto ny sary cover (`.jpg` / `.png`) — ireto ihany no aseho amin'ny "product card" hita bahoakan'ny site.

## Ny lalàna anaovan-drakitra (fenitra)

Mba tsy ho mifangaro ny anaran-drakitra, ampiasao ity fenitra ity:

```
<sokajy>-<ambaratonga-raha-misy>-<anarana-fohy>.pdf
```

Ohatra:
```
fianarana-t5-kit-cepe.pdf
fianarana-3eme-annales-bepc.pdf
asa-cv-modele.pdf
```

Ny sary cover kosa: mitovy anarana amin'ny PDF mifandraika aminy, saingy `.jpg`/`.png`:
```
fianarana-t5-kit-cepe.jpg
```

## Dingana amin'ny fampidirana rakitra vaovao (pitsopitsony)

1. Midira ao amin'ny repository ao amin'ny github.com (amin'ny navigateur, tsy mila "terminal").
2. Midira ao amin'ny dossier tokony hametrahana azy (ohatra: `pdf/fianarana/primaire/`).
3. Tsindrio **Add file → Upload files** (eo amin'ny ankavanana ambony).
4. Alatsaho (drag & drop) na safidio ny rakitra PDF avy amin'ny solosainao.
5. Any ambany, soraty fanamarihana fohy ao amin'ny "Commit changes" (ohatra: "manampy kit CEPE"), dia tsindrio **Commit changes**.
6. Rehefa vita ny upload, tsindrio ilay rakitra vao niditra ao amin'ny lisitra, dia tsindrio ny bokotra **Raw** (eo amin'ny ankavanana ambony amin'ny previewn'ny rakitra).
7. Adikao (copy) ilay adiresy (URL) miseho ao amin'ny navigateur — **io no "lien mivantana"** hampidirinao ao amin'ny tsanganana `lien`.

Ohatra ny endriky ny lien mivantana:
```
https://raw.githubusercontent.com/<anaran'ny-compte>/pro-digit-26-files/main/pdf/fianarana/primaire/fianarana-t5-kit-cepe.pdf
```

Ny sary cover dia mitovy fomba ihany, fa ao amin'ny dossier `covers/...` — ary ny lien azo avy eo no apetaka ao amin'ny tsanganana `sary`.

## Fepetra tsara ho fantatra

- **Aza mihoatra ny 50 Mo** isaky ny rakitra iray (mahery lavitra izay matetika ny PDF torolalana/cours tsotra).
- Aza mametraka rakitra maro be **indray mandeha** amin'ny "drag & drop" (aleo 5-10 isaky ny fampidirana iray) mba tsy hisy hadisoana.
- Ny lien "Raw" dia **mivantana sy maharitra** raha tsy fafaana/ovaina ny anaran-drakitra na ny dossire — koa aza manova anaram-boninkazo intsony rehefa efa napetraka tao amin'ny Feuille 2 ny lien.
- Raha misy PDF tianao **hesorina** (ohatra: efa lany daty), dia esory ao amin'ny GitHub ihany koa (Delete file), fa aza avela hijanona any raha efa tsy ilaina.

## Ny script fanamorana (scripts/generate-links.js)

Raha maro be ny rakitra apetrakao indray mandeha ao amin'ny solosainao (tsy amin'ny navigateur, fa amin'ny `git push`), dia misy script kely ao amin'ny `scripts/generate-links.js` mamorona lisitry ny lien "Raw" rehetra ho CSV, hazava kokoa noho ny fanoratana tanana isaky ny rakitra.
