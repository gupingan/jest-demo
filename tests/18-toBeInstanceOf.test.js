class A {

}

class B extends A {

}

test('test toBeInstanceOf', () => {
  expect(new B()).toBeInstanceOf(A)
  expect(new B()).toBeInstanceOf(B)
  expect(new B()).toBeInstanceOf(Object)
  expect(new B()).not.toBeInstanceOf(Function)
})