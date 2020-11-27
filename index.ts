import isPlainObject from './utils/isPlainObject.ts'

export default function classNames() {
  const classSet = new Set()
  for (let className of arguments) {
    if (!className && className !== 0) continue

    if (typeof className === 'string') {
      classSet.add(className.trim())
    } else if (typeof className === 'number' && isFinite(className)) {
      classSet.add(className.toString())
    } else if (Array.isArray(className)) {
      className.forEach(className => {
        if (typeof className === 'string') {
          classSet.add(className.trim())
          return
        }
        if (typeof className === 'number' && isFinite(className)) {
          classSet.add(className.toString())
          return
        }
      })
    } else if (isPlainObject(className)) {
      Object.keys(className).forEach(key => {
        if (className[key]) classSet.add(key.toString().trim())
      })
    }
  }

  return Array.from(classSet).join(' ')
}
