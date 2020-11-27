import classNames from './index.ts'
import { assertEquals } from 'https://deno.land/std@0.79.0/testing/asserts.ts'

Deno.test({
  name: 'string and numbers',
  fn() {
    assertEquals(classNames('a'), 'a')
    assertEquals(classNames('a', 'b', 'c'), 'a b c')
    assertEquals(classNames('a', 123, 'ccc'), 'a 123 ccc')
    assertEquals(classNames('1233', 'd', 123, 5, '33'), '1233 d 123 5 33')
  }
})

Deno.test({
  name: 'arraies',
  fn() {
    assertEquals(classNames(['a']), 'a')
    assertEquals(classNames('a', ['b', 'c']), 'a b c')
    assertEquals(classNames(['a', 123, 'ccc']), 'a 123 ccc')
    assertEquals(classNames(['1233', undefined, 123, NaN, null]), '1233 123')
  }
})

Deno.test({
  name: 'objects',
  fn() {
    assertEquals(classNames({ a: 1 }), 'a')
    assertEquals(classNames({ a: 123, b: false, c: NaN }), 'a')
    assertEquals(classNames({ asdf: 1, th: 'dfd', c: Infinity }), 'asdf th c')
    assertEquals(classNames({ 0: 1, bsdf: 3, dfdf: 3 }), '0 bsdf dfdf')
  }
})

Deno.test({
  name: 'mixn',
  fn() {
    assertEquals(classNames(0, 'asdf', { a: 1 }, ['adsf']), '0 asdf a adsf')
    assertEquals(classNames(undefined, null, NaN, Infinity, 'asdf'), 'asdf')
    assertEquals(classNames('nav', 'nav1', { nav2: true, nav3: 1 - 1 }), 'nav nav1 nav2')
    assertEquals(classNames(['estae', 'asdf', 'greg'], { a: 1, estae: false }), 'estae asdf greg a')
  }
})
