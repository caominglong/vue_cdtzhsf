
import { dateFormat } from "vux";

export function filter_dateFormat (date) {
  return dateFormat(date, 'YYYY-MM-DD HH:mm:ss')
}
