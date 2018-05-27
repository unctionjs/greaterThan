/* eslint-disable no-magic-numbers */
import {test} from "tap"

import greaterThan from "./index"

test(({same, end}) => {
  same(
    greaterThan(1)(0),
    true
  )

  end()
})

test(({same, end}) => {
  same(
    greaterThan(0)(1),
    false
  )

  end()
})
