import React, { useState } from 'react'

import Item from './Item'

import styles from '../styles/List.module.css'

const List = ({ items }) => {
    return (
        <ul className={styles.list}>
            {
                items.map((item, index) =>
                    <Item key={item.index}
                          index={index + 1}
                          title={item.title}
                          body={item.body}
                          list={item.list}
                    />
                )
            }
        </ul>
    )
}

export default List