// Bangun index.html + KUNCI-JAWABAN.md dari soal.json
// Pakai: node build.mjs
// Kunci jawaban TIDAK ditulis ke index.html — hanya hash SHA-256 (id|salt|huruf).
import { readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';

const d = JSON.parse(readFileSync(new URL('./soal.json', import.meta.url)));
const sha = s => createHash('sha256').update(s, 'utf8').digest('hex');

const ids = new Set();
for (const q of d.soal) {
  if (ids.has(q.id)) throw new Error('id soal dobel: ' + q.id);
  ids.add(q.id);
  if (!q.opsi[q.kunci]) throw new Error(`kunci ${q.kunci} tidak ada di opsi soal ${q.id}`);
}

const pub = {
  judul: d.judul, sekolah: d.sekolah, jurusan: d.jurusan, kelas: d.kelas, mapel: d.mapel,
  durasi_menit: d.durasi_menit, salt: d.salt,
  soal: d.soal.map(q => ({ id: q.id, level: q.level, tanya: q.tanya, opsi: q.opsi, h: sha(`${q.id}|${d.salt}|${q.kunci}`) }))
};

const tpl = readFileSync(new URL('./template.html', import.meta.url), 'utf8');
const json = JSON.stringify(pub).replace(/</g, '\\u003c');
const html = tpl.replace('__TITLE__', d.judul.replace(/[<&]/g, '')).replace('__EXAM__', () => json);
writeFileSync(new URL('./index.html', import.meta.url), html);

const md = [`# Kunci Jawaban — ${d.judul}`, '', `${d.jurusan} · Kelas ${d.kelas} · ${d.soal.length} soal pilihan ganda`, '',
  '> Huruf kunci mengikuti urutan **asli** di `soal.json`. Di website, urutan soal dan pilihan diacak per siswa, jadi huruf yang tampil ke siswa bisa berbeda — penilaian tetap otomatis dan benar.', '',
  '| No | Level | Kunci | Jawaban |', '|---|---|---|---|',
  ...d.soal.map((q, i) => `| ${i + 1} | ${q.level} | **${q.kunci}** | ${q.opsi[q.kunci].replace(/\|/g, '\\|').replace(/</g, '&lt;')} |`),
  '', '## Pembahasan', '',
  ...d.soal.flatMap((q, i) => [`**${i + 1}. ${q.tanya.split('\n')[0].replace(/</g, '&lt;')}**`, '', `Kunci: **${q.kunci}**. ${q.bahas.replace(/</g, '&lt;')}`, ''])
].join('\n');
writeFileSync(new URL('./KUNCI-JAWABAN.md', import.meta.url), md);
console.log(`OK: ${d.soal.length} soal, index.html ${html.length} byte, KUNCI-JAWABAN.md ditulis`);
