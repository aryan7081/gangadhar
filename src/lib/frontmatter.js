function stripQuotes(value) {
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1)
  }
  return value
}

function parseValue(raw) {
  const value = raw.trim()
  if (value === 'true') return true
  if (value === 'false') return false
  if (value.startsWith('[') && value.endsWith(']')) {
    return value
      .slice(1, -1)
      .split(',')
      .map((item) => stripQuotes(item.trim()))
      .filter(Boolean)
  }
  return stripQuotes(value)
}

export function parseFrontmatter(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/)
  if (!match) {
    return { data: {}, content: source }
  }

  const data = {}
  for (const line of match[1].split('\n')) {
    const index = line.indexOf(':')
    if (index === -1) continue
    const key = line.slice(0, index).trim()
    if (!key) continue
    data[key] = parseValue(line.slice(index + 1))
  }

  return { data, content: match[2].trim() }
}
