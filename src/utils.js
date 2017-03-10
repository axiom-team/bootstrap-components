/**
 * Created by timur on 3/9/17.
 */

const $ = window.$

export const hideNav = () => $('.collapse').collapse('hide')

export const pathToTitle = str => str.slice(1).split('-').join(' ')

export const titleToPath = str => str.split(' ').join('-')

export const space = () => '\{\' \'\}\n  '
