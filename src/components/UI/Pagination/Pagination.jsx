import { getPagesArray } from '../../../utils/pages'
import classes from './Pagination.module.css'
import classNames from 'classnames'

const Pagination = ({ totalPages, page, changePage }) => {
  let pagesArray = getPagesArray(totalPages)
  return (
    <div className={classes.pageWrapper}>
      {pagesArray.map((p) => (
        <span
          onClick={() => changePage(p)}
          key={p}
          className={classNames(classes.page, {
            [classes.pageCurrent]: page === p,
          })}
        >
          {p}
        </span>
      ))}
    </div>
  )
}

export default Pagination
