import isPlainObject from './utils/isPlainObject.ts'

/**
 * @param {any[]} classNames Classes to be concat.
 * @returns {string} Class string.
 */
export default function classNames(...classNames:any[]):string {
  const classSet = new Set()
  for (let className of classNames) {
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
