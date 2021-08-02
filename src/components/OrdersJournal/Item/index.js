import React from 'react'
import { getIcon } from '../../../Helpers/getIcon';
import { getColor} from '../../../Helpers/getColor';
import formatDistance from 'date-fns/formatDistance';

export const Item = ({
    styles,item
}) => {
    const icon=getIcon(item.statu);
    const color=getColor(item.statu);
    return (
        <li className={styles.listOrderShowItem}  data-aos="fade-right">
        <div className={styles.listOrderShowItemIcon + " bg-"+color}>
          <i className={icon}></i>
        </div>

        <div>
          <h3 className="mb-2 mt-0">{item.statu}</h3>
          <p>{formatDistance(new Date(item.created_at),new Date(),{addSuffix:true})}</p>
        </div>
        <div className={styles.listDetailsItemMessage}>
          <p className={"text-"+color}>{item.message}</p>
        </div>
      </li>
    
 
    )
}
