document.getElementById('input').addEventListener('change', function (e) {
  const value = e.target.value;
  const output = document.getElementById('output');
  output.textContent = convertToMarkdownTable(value);
});

function convertToMarkdownTable(value) {
  const arr = value
    .trim()
    .split(/\r?\n/)
    .map((v) => {
      return v.split(/\t/);
    });

  const firstRow = arr.shift();
  const header = arr2row(firstRow);
  const rows = arr.map((v) => arr2row(v)).join('\n');
  const separator = `|${':-:|'.repeat(firstRow.length)}`;

  return [header, separator, rows].join('\n');
}

function arr2row(row) {
  return `|${row.join('|')}|`;
}
