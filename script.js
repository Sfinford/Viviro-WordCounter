const input = document.getElementById('input');
const wordCount = document.getElementById('word-count');
const charCount = document.getElementById('char-count');
const charCountNoSpaces = document.getElementById('char-count-no-spaces');

input.addEventListener('input', () => {
  const text = input.value;
  const words = text.trim().split(/\s+/);
  const chars = text.length;
  const charsNoSpaces = text.replace(/\s+/g, '').length;

  wordCount.textContent = words.length;
  charCount.textContent = chars;
  charCountNoSpaces.textContent = charsNoSpaces;
});
