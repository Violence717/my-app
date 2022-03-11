import React, { useState } from 'react'

import Item from './Item'

import styles from '../styles/List.module.css'

const List = ({ items }) => {
    return (
        <ul className={styles.list}>
            {
                items.map((item) =>
                    <Item key={item.index}
                          index={item.index + 1}
                          title={item.title}
                          body={item.body}
                          list={item.list}
                          checked={item.checked}
                    />
                )
            }
        </ul>
    )
}

export default List