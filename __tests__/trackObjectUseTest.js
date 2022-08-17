import { trackObjectUse } from '../src/index'

describe('trackObjectUse', () => {
  const obj = {
    a: [1, 2, 3, 4],
    b: {
      c: { d: [1, 2, 3, 4] }
    },
    e: [1, 2, 3, 4]
  }

  afterEach(() => {
    jest.restoreAllMocks();
  })

  it('returns an object with only the parts of the original object that have been accessed', () => {
    const toTrack = JSON.parse(JSON.stringify(obj))
    const { trackedObject, accessedProperties } = trackObjectUse(toTrack)

    const test1 = trackedObject.a[2]
    const test2 = trackedObject.b.c.d[0]
    const test3 = trackedObject.b.c
    const test4 = trackedObject.b.c.d[3]

    const expected = { a: [undefined, undefined, 3], b: { c: { d: [1, undefined, undefined, 4] } } }

    expect(accessedProperties).toEqual(expected)
  })

  it('does not contain unaccessed nested properties of accessed parent properties ', () => {
    const obj = {
      a: [1, 2, 3, 4],
      b: {
        e: [1, 2, 3, 4],
        c: { d: [1, 2, 3, 4] }
      }
    }
    const { trackedObject, accessedProperties } = trackObjectUse(obj)

    const access1 = trackedObject.a[0]
    const access2 = trackedObject.b.c.d[2]

    const expected = { a: [1], b: { c: { d: [undefined, undefined, 3] } } }

    expect(accessedProperties).toEqual(expected)
  })

  it('ignores sets, and only tracks gets', () => {
    const toTrack = JSON.parse(JSON.stringify(obj))
    const { trackedObject, accessedProperties } = trackObjectUse(toTrack)

    trackedObject.a = 'test'
    const test2 = trackedObject.b.c.d[0]
    const test3 = trackedObject.b.c
    const test4 = trackedObject.b.c.d[3]

    expect(accessedProperties).toEqual({ b: { c: { d: [1, undefined, undefined, 4] } } })
  })

  it.skip("shows a warning when property keys contain a '~' character", () => {
    const warn = jest.spyOn(console, "warn").mockImplementation(() => {});

    const obj = {
      foo: {
        bar: [1, 2, 3, 4]
      },
      "foo~bar": {
        "baz.qux": [1, 2, 3, 4]
      },
    }

    const { trackedObject, accessedProperties } = trackObjectUse(obj)
    expect(warn).toBeCalled()
  })

  it('does not fail when property keys contain a "." character', () => {
    const obj = {
      foo: {
        bar: [1, 2, 3, 4]
      },
      "foo.bar": {
        "baz.qux": [1, 2, 3, 4]
      },
    }
    const { trackedObject, accessedProperties } = trackObjectUse(obj)

    const test1 = trackedObject["foo.bar"]
    const test2 = test1["baz.qux"][2]
    const test3 = trackedObject.foo.bar[1]

    expect(accessedProperties).toEqual({
      foo: {
        bar: [undefined, 2, undefined, undefined]
      },
      "foo.bar": {
        "baz.qux": [undefined, undefined, 3, undefined]
      }
    })
  })
})
